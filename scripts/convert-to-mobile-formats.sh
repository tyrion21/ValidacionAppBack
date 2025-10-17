#!/bin/bash

# Script adicional para convertir certificados a formatos móviles
# Incluye conversión a .p12 para instalación avanzada en Android/iOS

echo "📱 Conversor de Certificados para Dispositivos Móviles"
echo "===================================================="

CERT_DIR="./certificates"
OUTPUT_DIR="./ca-certificates"
TEMP_DIR="/tmp/cert-convert-$$"

mkdir -p "$OUTPUT_DIR"
mkdir -p "$TEMP_DIR"

# Función para convertir a formato P12 (PKCS#12)
convert_to_p12() {
    local cert_file="$1"
    local cert_name="$2"
    
    echo "🔄 Convirtiendo a formato P12/PFX..."
    
    # Para crear un P12, necesitamos certificado + clave privada
    # Como solo tenemos el CA, creamos un P12 solo con el certificado
    
    if openssl pkcs12 -export -nokeys -in "$cert_file" \
        -out "$OUTPUT_DIR/${cert_name}-mobile.p12" \
        -name "ValidacionApp CA" \
        -passout pass: 2>/dev/null; then
        
        echo "   ✅ Certificado P12 creado: ${cert_name}-mobile.p12"
        echo "   🔑 Sin contraseña (presiona Enter cuando se solicite)"
        
        # También crear con contraseña para mayor seguridad
        if openssl pkcs12 -export -nokeys -in "$cert_file" \
            -out "$OUTPUT_DIR/${cert_name}-mobile-secured.p12" \
            -name "ValidacionApp CA" \
            -passout pass:validacion123 2>/dev/null; then
            
            echo "   ✅ Certificado P12 con contraseña: ${cert_name}-mobile-secured.p12"
            echo "   🔑 Contraseña: validacion123"
        fi
        
    else
        echo "   ⚠️  No se pudo crear formato P12"
    fi
}

# Función para crear configuración de perfil de iOS
create_ios_profile() {
    local cert_file="$1"
    local cert_name="$2"
    
    echo "🍎 Creando perfil de configuración para iOS..."
    
    # Leer el contenido del certificado en base64
    local cert_data
    if cert_data=$(openssl x509 -in "$cert_file" -outform der 2>/dev/null | base64 | tr -d '\n'); then
        
        # Crear archivo .mobileconfig
        cat > "$OUTPUT_DIR/${cert_name}-ios.mobileconfig" << EOF
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>PayloadContent</key>
    <array>
        <dict>
            <key>PayloadCertificateFileName</key>
            <string>ValidacionApp-CA.crt</string>
            <key>PayloadContent</key>
            <data>
            $cert_data
            </data>
            <key>PayloadDescription</key>
            <string>Certificado CA para ValidacionApp</string>
            <key>PayloadDisplayName</key>
            <string>ValidacionApp CA Certificate</string>
            <key>PayloadIdentifier</key>
            <string>com.validacionapp.ca.certificate</string>
            <key>PayloadType</key>
            <string>com.apple.security.root</string>
            <key>PayloadUUID</key>
            <string>$(uuidgen)</string>
            <key>PayloadVersion</key>
            <integer>1</integer>
        </dict>
    </array>
    <key>PayloadDescription</key>
    <string>Instala el certificado CA necesario para ValidacionApp</string>
    <key>PayloadDisplayName</key>
    <string>ValidacionApp CA</string>
    <key>PayloadIdentifier</key>
    <string>com.validacionapp.ca</string>
    <key>PayloadRemovalDisallowed</key>
    <false/>
    <key>PayloadType</key>
    <string>Configuration</string>
    <key>PayloadUUID</key>
    <string>$(uuidgen)</string>
    <key>PayloadVersion</key>
    <integer>1</integer>
</dict>
</plist>
EOF

        echo "   ✅ Perfil iOS creado: ${cert_name}-ios.mobileconfig"
        echo "   📱 Envía este archivo por email o AirDrop a iOS"
        
    else
        echo "   ⚠️  No se pudo crear perfil iOS"
    fi
}

# Función para procesar todos los certificados
process_all_certificates() {
    echo "🔍 Buscando certificados en $CERT_DIR..."
    
    if [ ! -d "$CERT_DIR" ]; then
        echo "❌ Directorio de certificados no encontrado: $CERT_DIR"
        echo "💡 Asegúrate de haber copiado los certificados CA desde el servidor"
        return 1
    fi
    
    local found=false
    
    for cert_file in "$CERT_DIR"/*.{crt,pem}; do
        if [ -f "$cert_file" ]; then
            found=true
            local cert_name=$(basename "$cert_file" | sed 's/\.[^.]*$//')
            
            echo ""
            echo "📜 Procesando: $(basename "$cert_file")"
            
            # Verificar que es un certificado válido
            if openssl x509 -in "$cert_file" -text -noout >/dev/null 2>&1; then
                
                # Convertir a P12
                convert_to_p12 "$cert_file" "$cert_name"
                
                # Crear perfil iOS
                create_ios_profile "$cert_file" "$cert_name"
                
                # Crear versión optimizada para Android (DER)
                if openssl x509 -outform der -in "$cert_file" -out "$OUTPUT_DIR/${cert_name}-android-optimized.crt" 2>/dev/null; then
                    echo "   ✅ Certificado Android optimizado: ${cert_name}-android-optimized.crt"
                fi
                
            else
                echo "   ❌ Archivo no es un certificado válido"
            fi
        fi
    done
    
    if [ "$found" = false ]; then
        echo "⚠️  No se encontraron certificados en $CERT_DIR"
        echo ""
        echo "📥 PASOS PARA OBTENER EL CERTIFICADO CA:"
        echo "1. Conecta al servidor: ssh usuario@192.168.7.25"
        echo "2. Copia el script: scp server-ca-extractor.sh usuario@192.168.7.25:~/"
        echo "3. Ejecuta en el servidor: chmod +x ~/server-ca-extractor.sh && ~/server-ca-extractor.sh"
        echo "4. Descarga el paquete generado"
        echo "5. Extrae los certificados en el directorio $CERT_DIR"
        return 1
    fi
}

# Función para generar instrucciones específicas por plataforma
generate_platform_instructions() {
    echo ""
    echo "📖 GENERANDO INSTRUCCIONES POR PLATAFORMA..."
    
    # Instrucciones para Android
    cat > "$OUTPUT_DIR/ANDROID-INSTALACION.md" << 'EOF'
# Instalación de Certificado CA en Android

## 📱 MÉTODOS DE INSTALACIÓN

### Método 1: Archivo .crt (Recomendado)
1. Copia el archivo `*-android.crt` o `*-android-optimized.crt` a tu dispositivo
2. Ve a **Configuración** → **Seguridad** → **Cifrado y credenciales**
3. Selecciona **"Instalar desde almacenamiento del dispositivo"**
4. Busca y selecciona el archivo `.crt`
5. Asigna un nombre (ej: "ValidacionApp CA")
6. Selecciona **"Certificados CA"** como tipo
7. Confirma la instalación

### Método 2: Archivo .p12 (Avanzado)
1. Copia el archivo `*-mobile.p12` a tu dispositivo
2. Ve a **Configuración** → **Seguridad** → **Cifrado y credenciales**
3. Selecciona **"Instalar desde almacenamiento del dispositivo"**
4. Selecciona el archivo `.p12`
5. Contraseña: (vacía - solo presiona OK)
6. Para archivo `*-mobile-secured.p12`, contraseña: `validacion123`

### Método 3: Via Email/Navegador
1. Envía el archivo `.crt` por email a tu dispositivo
2. Abre el email en tu dispositivo Android
3. Toca el archivo adjunto
4. Sigue las instrucciones de instalación

## ⚠️ NOTAS IMPORTANTES

- **Android 7+**: Los certificados de usuario no afectan apps por defecto
- **Apps de terceros**: Pueden requerir configuración adicional
- **Navegadores**: Chrome/Firefox deberían funcionar automáticamente
- **Verificación**: Visita https://192.168.7.26:4000 desde el navegador

## 🔧 SOLUCIÓN DE PROBLEMAS

- **No aparece opción de instalación**: Verifica que el archivo tenga extensión `.crt`
- **Certificado no se aplica a apps**: Algunas apps ignoran certificados de usuario
- **Sigue mostrando "no seguro"**: Reinicia el navegador o la app
EOF

    # Instrucciones para iOS
    cat > "$OUTPUT_DIR/iOS-INSTALACION.md" << 'EOF'
# Instalación de Certificado CA en iOS

## 📱 MÉTODO CON PERFIL DE CONFIGURACIÓN (Recomendado)

1. Envía el archivo `*-ios.mobileconfig` por email o AirDrop a tu iPhone/iPad
2. Abre el archivo adjunto
3. Ve a **Configuración** → **General** → **Perfiles y administración de dispositivos**
4. Busca el perfil "ValidacionApp CA" y tócalo
5. Toca **"Instalar"** (puede solicitar tu código de desbloqueo)
6. Confirma la instalación

### PASO CRÍTICO - Activar Confianza:
7. Ve a **Configuración** → **General** → **Acerca de**
8. Busca **"Configuración de confianza de certificado"**
9. Activa el interruptor para "ValidacionApp CA"
10. Confirma tocando **"Continuar"**

## 📱 MÉTODO ALTERNATIVO (.crt)

1. Envía el archivo `*-navegadores.crt` por email o AirDrop
2. Abre el archivo adjunto
3. Sigue los pasos 3-10 del método anterior

## ✅ VERIFICACIÓN

- Abre Safari y visita `https://192.168.7.26:4000`
- Deberías ver un candado verde sin advertencias
- Si aún aparece "no seguro", verifica el paso 7-10

## ⚠️ NOTAS IMPORTANTES

- **Paso 7-10 es OBLIGATORIO**: Sin activar la confianza, el certificado no funcionará
- **Solo Safari**: Otros navegadores pueden usar sus propios almacenes de certificados
- **Perfiles corporativos**: Pueden interferir con certificados personalizados
EOF

    # Instrucciones para navegadores
    cat > "$OUTPUT_DIR/NAVEGADORES-INSTALACION.md" << 'EOF'
# Instalación de Certificado CA en Navegadores

## 🌐 CHROME/EDGE (Windows/Mac/Linux)

### Windows:
1. Abre Chrome o Edge
2. Ve a **Configuración** → **Privacidad y seguridad** → **Seguridad**
3. Busca **"Administrar certificados"**
4. Pestaña **"Autoridades de certificación raíz de confianza"**
5. Clic en **"Importar"**
6. Selecciona el archivo `*-navegadores.crt`
7. Marca **"Confiar en este certificado para identificar sitios web"**
8. Finaliza la importación

### Mac:
1. Haz doble clic en el archivo `*-navegadores.crt`
2. Se abrirá "Acceso a llaves" (Keychain Access)
3. Busca el certificado importado
4. Haz doble clic sobre él
5. Despliega la sección **"Confianza"**
6. Cambia **"Al usar este certificado"** a **"Confiar siempre"**

## 🦊 FIREFOX

1. Ve a **Configuración** → **Privacidad y seguridad**
2. Sección **"Certificados"** → **"Ver certificados"**
3. Pestaña **"Autoridades"**
4. Clic en **"Importar"**
5. Selecciona el archivo `*-navegadores.crt`
6. Marca **"Confiar en esta CA para identificar sitios web"**
7. Clic en **"Aceptar"**

## 🌐 SAFARI (Mac)

Usa el método de Keychain Access descrito en Chrome/Mac.

## 🐧 LINUX

### Método Sistema (Ubuntu/Debian):
```bash
sudo cp *-navegadores.crt /usr/local/share/ca-certificates/validacion-ca.crt
sudo update-ca-certificates
```

### Método Chrome/Firefox:
Sigue las instrucciones de Chrome/Firefox mencionadas arriba.

## ✅ VERIFICACIÓN

1. Reinicia el navegador después de instalar
2. Visita `https://192.168.7.26:4000`
3. Deberías ver un candado verde
4. No debería aparecer advertencia de "conexión no segura"

## 🔧 SOLUCIÓN DE PROBLEMAS

- **Chrome**: Ve a chrome://settings/certificates para verificar
- **Firefox**: Ve a about:preferences#privacy, busca "Certificados"
- **Cache**: Borra caché del navegador si persiste el problema
- **Múltiples navegadores**: Instala en cada navegador por separado
EOF

    echo "   ✅ Instrucciones generadas para Android, iOS y navegadores"
}

# Función para crear resumen final
create_final_summary() {
    cat > "$OUTPUT_DIR/RESUMEN-CERTIFICADOS.txt" << EOF
CERTIFICADOS CA EXTRAÍDOS - VALIDACIONAPP
========================================

Fecha de generación: $(date)
Servidor origen: 192.168.7.25

ARCHIVOS GENERADOS:
==================

PARA NAVEGADORES DE ESCRITORIO:
- *-navegadores.crt         → Chrome, Firefox, Safari, Edge

PARA ANDROID:
- *-android.crt             → Instalación estándar
- *-android-optimized.crt   → Formato DER optimizado
- *-mobile.p12              → Formato PKCS#12 sin contraseña
- *-mobile-secured.p12      → Formato PKCS#12 con contraseña (validacion123)

PARA iOS:
- *-ios.mobileconfig        → Perfil de configuración automática
- *-navegadores.crt         → Instalación manual alternativa

INSTRUCCIONES:
=============
- ANDROID-INSTALACION.md   → Guía detallada para Android
- iOS-INSTALACION.md       → Guía detallada para iOS  
- NAVEGADORES-INSTALACION.md → Guía para navegadores de escritorio

INFORMACIÓN:
- *-info.txt               → Detalles técnicos del certificado

VERIFICACIÓN:
============
Después de instalar en cualquier dispositivo:
1. Visitar: https://192.168.7.26:4000
2. Verificar candado verde sin advertencias
3. El sitio debe aparecer como "seguro"

SOPORTE:
=======
Si el certificado no funciona:
1. Verificar fecha de expiración en *-info.txt
2. Confirmar que corresponde al dominio/IP correcto
3. Reiniciar navegador/dispositivo después de instalar
4. En iOS: OBLIGATORIO activar confianza en configuración

¡El certificado CA ha sido extraído exitosamente!
EOF

    echo ""
    echo "📋 RESUMEN FINAL GENERADO: RESUMEN-CERTIFICADOS.txt"
}

# Menú principal
echo ""
echo "OPCIONES DISPONIBLES:"
echo "1) Procesar certificados existentes en ./certificates/"
echo "2) Mostrar instrucciones para extraer del servidor"
echo "3) Salir"
echo ""
read -p "Selecciona una opción (1-3): " choice

case $choice in
    1)
        process_all_certificates
        if [ $? -eq 0 ]; then
            generate_platform_instructions
            create_final_summary
            echo ""
            echo "🎉 ¡PROCESO COMPLETADO EXITOSAMENTE!"
            echo "📂 Revisa la carpeta: $OUTPUT_DIR"
            echo ""
            echo "📱 PRÓXIMOS PASOS:"
            echo "1. Instalar certificados en tus dispositivos usando las guías generadas"
            echo "2. Verificar en https://192.168.7.25:4000"
            echo "3. ¡Tu sitio debería aparecer como seguro!"
        fi
        ;;
    2)
        echo ""
        echo "📥 INSTRUCCIONES PARA EXTRAER DEL SERVIDOR:"
        echo ""
        echo "1. Copia el script al servidor:"
        echo "   scp server-ca-extractor.sh usuario@192.168.7.26:~/"
        echo ""
        echo "2. Conecta al servidor y ejecuta:"
        echo "   ssh usuario@192.168.7.26"
        echo "   chmod +x ~/server-ca-extractor.sh"
        echo "   ~/server-ca-extractor.sh"
        echo ""
        echo "3. Sigue las instrucciones del script para descargar el paquete"
        echo ""
        echo "4. Extrae los certificados en ./certificates/ y ejecuta este script nuevamente"
        ;;
    3)
        echo "👋 ¡Hasta luego!"
        ;;
    *)
        echo "❌ Opción inválida"
        ;;
esac

# Limpiar archivos temporales
rm -rf "$TEMP_DIR"