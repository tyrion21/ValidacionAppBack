# 🔐 Guía para Extraer e Instalar Certificado CA

Esta guía te ayudará a extraer el certificado CA de tu servidor Linux y convertirlo para instalarlo en Android, iOS y navegadores, eliminando las advertencias de "sitio no seguro".

## 🎯 Objetivo

Convertir tu sitio `https://192.168.7.26:4000` de "sitio no seguro" a "sitio seguro" con candado verde en todos los dispositivos.

## 📋 Proceso Completo

### Paso 1: Extraer Certificado CA del Servidor Linux

1. **Copia el script al servidor:**
   ```bash
   scp scripts/server-ca-extractor.sh usuario@192.168.7.26:~/
   ```

2. **Conecta al servidor y ejecuta:**
   ```bash
   ssh usuario@192.168.7.26
   chmod +x ~/server-ca-extractor.sh
   ~/server-ca-extractor.sh
   ```

3. **El script buscará automáticamente en:**
   - `/etc/ssl/certs/`
   - `/usr/local/share/ca-certificates/`
   - `/opt/validacion/ssl/`
   - Certificados de Apache/Nginx
   - Certificados de Let's Encrypt

4. **Descarga el paquete generado:**
   ```bash
   scp usuario@192.168.7.26:/tmp/validacion-ca-certificates-*.tar.gz ./certificados-ca.tar.gz
   ```

5. **Extrae los certificados:**
   ```bash
   mkdir certificates
   tar -xzf certificados-ca.tar.gz -C certificates/
   ```

### Paso 2: Convertir a Formatos Móviles

1. **Ejecuta el conversor:**
   ```bash
   chmod +x scripts/convert-to-mobile-formats.sh
   ./scripts/convert-to-mobile-formats.sh
   ```

2. **O usa el script de Node.js:**
   ```bash
   node scripts/extract-ca-certificate.js
   ```

## 📱 Instalación por Plataforma

### Android

**Método 1: Archivo .crt (Más fácil)**
1. Copia `*-android.crt` a tu dispositivo
2. Configuración → Seguridad → Cifrado y credenciales
3. "Instalar desde almacenamiento del dispositivo"
4. Selecciona el archivo .crt
5. Nombre: "ValidacionApp CA"
6. Tipo: "Certificados CA"

**Método 2: Archivo .p12**
- Usa `*-mobile.p12` (sin contraseña)
- O `*-mobile-secured.p12` (contraseña: `validacion123`)

### iOS/iPhone

**Método con Perfil (Recomendado):**
1. Envía `*-ios.mobileconfig` por email o AirDrop
2. Abre el archivo adjunto
3. Configuración → General → Perfiles y administración de dispositivos
4. Instala el perfil "ValidacionApp CA"
5. **CRÍTICO**: Configuración → General → Acerca de → Configuración de confianza de certificado
6. Activa el interruptor para "ValidacionApp CA"

### Navegadores de Escritorio

**Chrome/Edge:**
1. Configuración → Privacidad y seguridad → Seguridad
2. "Administrar certificados"
3. Pestaña "Autoridades de certificación raíz de confianza"
4. Importar `*-navegadores.crt`

**Firefox:**
1. Configuración → Privacidad y seguridad → Certificados
2. "Ver certificados" → Pestaña "Autoridades"
3. Importar `*-navegadores.crt`

**Safari (Mac):**
1. Doble clic en `*-navegadores.crt`
2. Keychain Access → Busca el certificado
3. Doble clic → Confianza → "Confiar siempre"

## ✅ Verificación

Después de instalar en cualquier dispositivo:
1. Visita `https://192.168.7.26:4000`
2. Deberías ver un **candado verde**
3. No debe aparecer advertencia de "sitio no seguro"

## 🔧 Solución de Problemas

### Android
- **No aparece opción**: Verifica extensión `.crt`
- **Apps no funcionan**: Algunas apps ignoran certificados de usuario
- **Reinicia** el navegador después de instalar

### iOS
- **Paso crítico**: SIEMPRE activar confianza en paso 5-6
- **Solo Safari**: Otros navegadores pueden no funcionar
- **Perfiles corporativos**: Pueden interferir

### Navegadores
- **Reinicia** el navegador después de instalar
- **Borra caché** si persiste el problema
- **Verifica** en configuración de certificados

## 📂 Archivos Generados

```
ca-certificates/
├── validacion-navegadores.crt      # Para Chrome, Firefox, Safari
├── validacion-android.crt          # Para Android estándar
├── validacion-android-optimized.crt # Android formato DER
├── validacion-mobile.p12           # PKCS#12 sin contraseña
├── validacion-mobile-secured.p12   # PKCS#12 con contraseña
├── validacion-ios.mobileconfig     # Perfil automático iOS
├── ANDROID-INSTALACION.md          # Guía detallada Android
├── iOS-INSTALACION.md              # Guía detallada iOS
├── NAVEGADORES-INSTALACION.md      # Guía navegadores
└── RESUMEN-CERTIFICADOS.txt        # Resumen completo
```

## ⚠️ Notas Importantes

1. **Seguridad**: Los certificados CA dan acceso completo a sitios que usen ese certificado
2. **Expiración**: Verifica la fecha de expiración en `*-info.txt`
3. **Respaldo**: Guarda los certificados en lugar seguro
4. **Android 7+**: Apps pueden requerir configuración adicional
5. **Empresas**: Políticas corporativas pueden interferir

## 🚀 Comandos Rápidos

```bash
# Extraer del servidor (completo)
scp scripts/server-ca-extractor.sh usuario@192.168.7.26:~/ && \
ssh usuario@192.168.7.26 "chmod +x ~/server-ca-extractor.sh && ~/server-ca-extractor.sh"

# Convertir certificados
chmod +x scripts/convert-to-mobile-formats.sh && ./scripts/convert-to-mobile-formats.sh

# Verificar instalación
curl -I https://192.168.7.26:4000
```

## 📞 Soporte

Si tienes problemas:
1. Verifica que el certificado no haya expirado
2. Confirma que corresponde al dominio/IP correcto (192.168.7.26)
3. Reinicia navegador/dispositivo después de instalar
4. Revisa las guías específicas en `ca-certificates/`

¡Una vez instalado correctamente, tu sitio aparecerá como **seguro** en todos los dispositivos! 🎉