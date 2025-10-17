#!/bin/bash

# Script para ejecutar en el servidor Linux
# Extrae el certificado CA y lo prepara para descarga

echo "🔐 Extractor de Certificado CA - Servidor Linux"
echo "=============================================="

# Crear directorio temporal
TEMP_DIR="/tmp/ca-export-$(date +%s)"
mkdir -p "$TEMP_DIR"
echo "📁 Directorio temporal: $TEMP_DIR"

# Función para buscar certificados CA
find_ca_certificates() {
    echo "🔍 Buscando certificados CA..."
    
    # Ubicaciones comunes de certificados CA
    CA_LOCATIONS=(
        "/etc/ssl/certs/"
        "/usr/local/share/ca-certificates/"
        "/opt/validacion/ssl/"
        "/home/$USER/certificados/"
        "/etc/pki/ca-trust/source/anchors/"
        "/etc/ca-certificates/trust-source/anchors/"
    )
    
    FOUND_CERTS=()
    
    for location in "${CA_LOCATIONS[@]}"; do
        if [ -d "$location" ]; then
            echo "   Revisando: $location"
            while IFS= read -r -d '' cert_file; do
                if [[ "$cert_file" == *"ca"* ]] || [[ "$cert_file" == *"CA"* ]] || [[ "$cert_file" == *"validacion"* ]]; then
                    FOUND_CERTS+=("$cert_file")
                    echo "   ✅ Encontrado: $cert_file"
                fi
            done < <(find "$location" -name "*.crt" -o -name "*.pem" -print0 2>/dev/null)
        fi
    done
    
    # Buscar certificados específicos de validacion
    echo "   Buscando certificados específicos de ValidacionApp..."
    while IFS= read -r -d '' cert_file; do
        FOUND_CERTS+=("$cert_file")
        echo "   ✅ Encontrado: $cert_file"
    done < <(find /etc /opt /home -name "*validacion*" \( -name "*.crt" -o -name "*.pem" \) -print0 2>/dev/null)
    
    if [ ${#FOUND_CERTS[@]} -eq 0 ]; then
        echo "   ⚠️  No se encontraron certificados CA automáticamente"
        echo "   💡 Intenta buscar manualmente con:"
        echo "      sudo find / -name '*ca*' -type f 2>/dev/null | grep -E '\.(crt|pem)$'"
        return 1
    fi
    
    return 0
}

# Función para procesar certificados encontrados
process_certificates() {
    echo ""
    echo "🔄 PROCESANDO CERTIFICADOS ENCONTRADOS..."
    
    for cert_file in "${FOUND_CERTS[@]}"; do
        if [ -f "$cert_file" ]; then
            echo ""
            echo "📜 Procesando: $cert_file"
            
            # Verificar que es un certificado válido
            if openssl x509 -in "$cert_file" -text -noout >/dev/null 2>&1; then
                cert_name=$(basename "$cert_file" | sed 's/\.[^.]*$//')
                
                # 1. Copiar para navegadores (formato PEM)
                cp "$cert_file" "$TEMP_DIR/${cert_name}-navegadores.crt"
                echo "   ✅ Certificado para navegadores: ${cert_name}-navegadores.crt"
                
                # 2. Convertir a DER para Android
                if openssl x509 -outform der -in "$cert_file" -out "$TEMP_DIR/${cert_name}-android.crt" 2>/dev/null; then
                    echo "   ✅ Certificado para Android: ${cert_name}-android.crt"
                else
                    # Fallback: copiar como PEM para Android también
                    cp "$cert_file" "$TEMP_DIR/${cert_name}-android.crt"
                    echo "   ⚠️  Formato DER no disponible, usando PEM para Android"
                fi
                
                # 3. Extraer información del certificado
                {
                    echo "INFORMACIÓN DEL CERTIFICADO"
                    echo "=========================="
                    echo "Archivo: $cert_file"
                    echo "Fecha de extracción: $(date)"
                    echo ""
                    openssl x509 -in "$cert_file" -text -noout 2>/dev/null || echo "No se pudo extraer información detallada"
                } > "$TEMP_DIR/${cert_name}-info.txt"
                echo "   📋 Información guardada: ${cert_name}-info.txt"
                
            else
                echo "   ❌ Archivo no es un certificado válido: $cert_file"
            fi
        fi
    done
}

# Función para crear archivo tar con todos los certificados
create_download_package() {
    echo ""
    echo "📦 CREANDO PAQUETE DE DESCARGA..."
    
    # Crear instrucciones
    cat > "$TEMP_DIR/INSTRUCCIONES.txt" << 'EOF'
CERTIFICADOS CA EXTRAÍDOS
========================

ARCHIVOS INCLUIDOS:
- *-navegadores.crt: Para instalar en navegadores de PC/Mac
- *-android.crt: Para instalar en dispositivos Android
- *-info.txt: Información detallada de cada certificado

INSTALACIÓN EN ANDROID:
1. Copia el archivo *-android.crt a tu dispositivo
2. Ve a Configuración > Seguridad > Cifrado y credenciales  
3. Selecciona "Instalar desde almacenamiento"
4. Selecciona el archivo .crt

INSTALACIÓN EN NAVEGADORES:
1. Abre el navegador
2. Ve a Configuración > Certificados
3. Importa el archivo *-navegadores.crt
4. Marca como "Autoridad de certificación de confianza"

VERIFICACIÓN:
Después de instalar, visita https://192.168.7.25:4000
Deberías ver un candado verde sin advertencias.
EOF

    # Crear archivo tar
    PACKAGE_NAME="validacion-ca-certificates-$(date +%Y%m%d-%H%M%S).tar.gz"
    cd "$TEMP_DIR"
    tar -czf "/tmp/$PACKAGE_NAME" *
    
    echo "   ✅ Paquete creado: /tmp/$PACKAGE_NAME"
    echo ""
    echo "📥 PARA DESCARGAR EL PAQUETE:"
    echo "   scp usuario@192.168.7.26:/tmp/$PACKAGE_NAME ./certificados-ca.tar.gz"
    echo ""
    echo "📂 PARA EXTRAER EN TU PC:"
    echo "   tar -xzf certificados-ca.tar.gz"
    echo ""
    echo "🧹 LIMPIAR ARCHIVOS TEMPORALES (ejecutar después de descargar):"
    echo "   rm -rf $TEMP_DIR /tmp/$PACKAGE_NAME"
}

# Función para mostrar certificados del sistema
show_system_certificates() {
    echo ""
    echo "📋 CERTIFICADOS INSTALADOS EN EL SISTEMA:"
    
    if command -v update-ca-certificates >/dev/null 2>&1; then
        echo "   Sistema: Debian/Ubuntu"
        ls -la /usr/local/share/ca-certificates/ 2>/dev/null || echo "   No hay certificados personalizados"
    fi
    
    if command -v update-ca-trust >/dev/null 2>&1; then
        echo "   Sistema: RedHat/CentOS/Fedora"
        ls -la /etc/pki/ca-trust/source/anchors/ 2>/dev/null || echo "   No hay certificados personalizados"
    fi
    
    # Mostrar certificados de servicios web
    echo ""
    echo "📋 CERTIFICADOS DE SERVICIOS WEB:"
    
    if command -v apache2ctl >/dev/null 2>&1; then
        echo "   🌐 Apache encontrado"
        grep -r "SSLCertificate" /etc/apache2/ 2>/dev/null | head -5
    fi
    
    if command -v nginx >/dev/null 2>&1; then
        echo "   🌐 Nginx encontrado"
        grep -r "ssl_certificate" /etc/nginx/ 2>/dev/null | head -5
    fi
    
    # Buscar certificados de Let's Encrypt
    if [ -d "/etc/letsencrypt/live/" ]; then
        echo "   🔒 Certificados Let's Encrypt:"
        ls -la /etc/letsencrypt/live/ 2>/dev/null
    fi
}

# Menú principal
main_menu() {
    echo ""
    echo "SELECCIONA UNA OPCIÓN:"
    echo "1) Buscar y extraer certificados CA automáticamente"
    echo "2) Mostrar certificados del sistema"
    echo "3) Extraer certificado específico (ruta manual)"
    echo "4) Salir"
    echo ""
    read -p "Opción (1-4): " choice
    
    case $choice in
        1)
            if find_ca_certificates; then
                process_certificates
                create_download_package
            fi
            ;;
        2)
            show_system_certificates
            main_menu
            ;;
        3)
            echo ""
            read -p "Ingresa la ruta completa del certificado CA: " manual_cert
            if [ -f "$manual_cert" ]; then
                FOUND_CERTS=("$manual_cert")
                process_certificates
                create_download_package
            else
                echo "   ❌ Archivo no encontrado: $manual_cert"
                main_menu
            fi
            ;;
        4)
            echo "👋 ¡Hasta luego!"
            exit 0
            ;;
        *)
            echo "❌ Opción inválida"
            main_menu
            ;;
    esac
}

# Verificar permisos
if [ "$EUID" -eq 0 ]; then
    echo "⚠️  Ejecutándose como root - ten cuidado con los permisos"
else
    echo "📝 Ejecutándose como usuario: $USER"
    echo "💡 Si necesitas acceder a certificados del sistema, usa: sudo $0"
fi

# Ejecutar menú principal
main_menu