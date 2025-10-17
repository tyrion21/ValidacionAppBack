#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

/**
 * Script para extraer y convertir el certificado CA a diferentes formatos
 * Compatible con certificados SSL instalados en servidor Linux
 */

const CERT_DIR = path.join(__dirname, '..', 'certificates');
const OUTPUT_DIR = path.join(__dirname, '..', 'ca-certificates');

// Crear directorio de salida si no existe
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

console.log('🔐 Extractor de Certificado CA para ValidacionApp');
console.log('================================================');

/**
 * Función principal para extraer certificados del servidor
 */
async function extractCertificates() {
  try {
    console.log('📋 Instrucciones para extraer certificado CA del servidor Linux:');
    console.log('');
    
    console.log('1. CONECTAR AL SERVIDOR LINUX:');
    console.log('   ssh usuario@192.168.7.26');
    console.log('');
    
    console.log('2. LOCALIZAR EL CERTIFICADO CA:');
    console.log('   # Buscar archivos de certificado CA');
    console.log('   sudo find / -name "*.crt" -o -name "*.pem" -o -name "*ca*" 2>/dev/null');
    console.log('   # Ubicaciones comunes:');
    console.log('   # /etc/ssl/certs/ca-certificates.crt');
    console.log('   # /usr/local/share/ca-certificates/');
    console.log('   # /opt/validacion/ssl/');
    console.log('   # /home/usuario/certificados/');
    console.log('');
    
    console.log('3. COPIAR CERTIFICADO CA AL DIRECTORIO LOCAL:');
    console.log('   # Ejemplo si el CA está en /opt/validacion/ssl/validacion-ca.crt');
    console.log('   scp usuario@192.168.7.26:/opt/validacion/ssl/validacion-ca.crt ./certificates/');
    console.log('   # O si es un .pem:');
    console.log('   scp usuario@192.168.7.26:/opt/validacion/ssl/validacion-ca.pem ./certificates/');
    console.log('');
    
    console.log('4. COMANDOS PARA BUSCAR EL CA EN EL SERVIDOR:');
    console.log('   # Ver certificados instalados en el sistema');
    console.log('   ls -la /etc/ssl/certs/ | grep -i validacion');
    console.log('   # Ver certificados personalizados');
    console.log('   ls -la /usr/local/share/ca-certificates/');
    console.log('   # Si usaste certbot/Let\'s Encrypt:');
    console.log('   sudo ls -la /etc/letsencrypt/live/');
    console.log('   # Ver certificados de Apache/Nginx:');
    console.log('   sudo grep -r "SSLCertificate" /etc/apache2/');
    console.log('   sudo grep -r "ssl_certificate" /etc/nginx/');
    console.log('');

    // Verificar si ya hay certificados en el directorio
    if (fs.existsSync(CERT_DIR)) {
      const certFiles = fs.readdirSync(CERT_DIR).filter(file => 
        file.endsWith('.crt') || file.endsWith('.pem') || file.includes('ca')
      );
      
      if (certFiles.length > 0) {
        console.log('✅ CERTIFICADOS ENCONTRADOS EN ./certificates/:');
        certFiles.forEach(file => {
          console.log(`   - ${file}`);
        });
        console.log('');
        
        // Procesar certificados encontrados
        await processCertificates(certFiles);
      } else {
        console.log('⚠️  No se encontraron certificados CA en ./certificates/');
        console.log('   Por favor, sigue los pasos anteriores para copiar el certificado CA.');
      }
    } else {
      console.log('📁 Creando directorio ./certificates/ ...');
      fs.mkdirSync(CERT_DIR, { recursive: true });
      console.log('   Directorio creado. Por favor, copia el certificado CA aquí.');
    }
    
  } catch (error) {
    console.error('❌ Error al extraer certificados:', error.message);
  }
}

/**
 * Procesar certificados encontrados y convertirlos
 */
async function processCertificates(certFiles) {
  console.log('🔄 PROCESANDO CERTIFICADOS...');
  
  for (const certFile of certFiles) {
    const certPath = path.join(CERT_DIR, certFile);
    const baseName = path.parse(certFile).name;
    
    console.log(`\n📜 Procesando: ${certFile}`);
    
    try {
      // 1. Copiar certificado original para navegadores (.crt)
      const browserCertPath = path.join(OUTPUT_DIR, `${baseName}-navegadores.crt`);
      fs.copyFileSync(certPath, browserCertPath);
      console.log(`   ✅ Certificado para navegadores: ${browserCertPath}`);
      
      // 2. Convertir a formato DER para Android
      const derCertPath = path.join(OUTPUT_DIR, `${baseName}-android.crt`);
      try {
        execSync(`openssl x509 -outform der -in "${certPath}" -out "${derCertPath}"`, { stdio: 'pipe' });
        console.log(`   ✅ Certificado para Android: ${derCertPath}`);
      } catch (opensslError) {
        console.log(`   ⚠️  No se pudo crear formato DER (OpenSSL no disponible)`);
        // Copiar como .crt normal para Android
        fs.copyFileSync(certPath, derCertPath);
        console.log(`   ✅ Certificado alternativo para Android: ${derCertPath}`);
      }
      
      // 3. Crear archivo de información
      const infoPath = path.join(OUTPUT_DIR, `${baseName}-info.txt`);
      const certInfo = getCertificateInfo(certPath);
      fs.writeFileSync(infoPath, certInfo);
      console.log(`   📋 Información del certificado: ${infoPath}`);
      
    } catch (error) {
      console.error(`   ❌ Error procesando ${certFile}:`, error.message);
    }
  }
  
  // Generar instrucciones de instalación
  generateInstallationInstructions();
}

/**
 * Obtener información del certificado
 */
function getCertificateInfo(certPath) {
  try {
    const certContent = fs.readFileSync(certPath, 'utf8');
    const info = `INFORMACIÓN DEL CERTIFICADO CA
================================

Archivo: ${path.basename(certPath)}
Fecha de extracción: ${new Date().toLocaleString()}

INSTALACIÓN EN NAVEGADORES (Windows/Mac/Linux):
1. Abrir el archivo *-navegadores.crt
2. Hacer doble clic e instalar en "Autoridades de certificación raíz de confianza"
3. O importar manualmente en configuración del navegador

INSTALACIÓN EN ANDROID:
1. Copiar el archivo *-android.crt al dispositivo
2. Ir a Configuración > Seguridad > Cifrado y credenciales
3. Seleccionar "Instalar desde almacenamiento del dispositivo"
4. Elegir el archivo .crt

INSTALACIÓN EN iOS:
1. Enviar el archivo *-navegadores.crt por email o AirDrop
2. Abrir el archivo adjunto
3. Ir a Configuración > General > Perfiles y administración de dispositivos
4. Instalar el perfil
5. Ir a Configuración > General > Acerca de > Configuración de confianza de certificado
6. Activar la confianza para el certificado

CONTENIDO DEL CERTIFICADO:
${certContent.substring(0, 500)}...
`;
    return info;
  } catch (error) {
    return `Error al leer información del certificado: ${error.message}`;
  }
}

/**
 * Generar instrucciones detalladas de instalación
 */
function generateInstallationInstructions() {
  const instructionsPath = path.join(OUTPUT_DIR, 'INSTRUCCIONES-INSTALACION.md');
  
  const instructions = `# Guía de Instalación del Certificado CA

## 📱 ANDROID

### Método 1: Instalación Manual
1. Copia el archivo \`*-android.crt\` a tu dispositivo Android
2. Ve a **Configuración** > **Seguridad** > **Cifrado y credenciales**
3. Selecciona **"Instalar desde almacenamiento del dispositivo"**
4. Busca y selecciona el archivo \`.crt\`
5. Asigna un nombre al certificado y confirma

### Método 2: Via Email/Bluetooth
1. Envía el archivo \`*-android.crt\` por email a tu dispositivo
2. Abre el adjunto desde el email
3. Sigue las instrucciones de instalación

## 🖥️ NAVEGADORES DE ESCRITORIO

### Chrome/Edge (Windows)
1. Abre Chrome/Edge
2. Ve a **Configuración** > **Privacidad y seguridad** > **Seguridad**
3. Selecciona **"Administrar certificados"**
4. Pestaña **"Autoridades de certificación raíz de confianza"**
5. Clic en **"Importar"** y selecciona el archivo \`*-navegadores.crt\`

### Firefox
1. Ve a **Configuración** > **Privacidad y seguridad**
2. Sección **"Certificados"** > **"Ver certificados"**
3. Pestaña **"Autoridades"**
4. Clic en **"Importar"** y selecciona el archivo \`*-navegadores.crt\`

### Safari (Mac)
1. Haz doble clic en el archivo \`*-navegadores.crt\`
2. Se abrirá "Acceso a llaves"
3. Busca el certificado y haz doble clic
4. Despliega **"Confianza"**
5. Cambia a **"Confiar siempre"**

## 📱 iOS/iPhone

1. Envía el archivo \`*-navegadores.crt\` por email o AirDrop
2. Abre el archivo adjunto
3. Ve a **Configuración** > **General** > **Perfiles y administración de dispositivos**
4. Instala el perfil del certificado
5. Ve a **Configuración** > **General** > **Acerca de** > **Configuración de confianza de certificado**
6. Activa la confianza para el certificado instalado

## ✅ VERIFICACIÓN

Después de instalar el certificado:
1. Visita \`https://192.168.7.25:4000\`
2. El navegador debería mostrar un candado verde
3. No debería aparecer advertencia de "sitio no seguro"

## 🔧 SOLUCIÓN DE PROBLEMAS

- **Android**: Si no aparece la opción de instalación, verifica que el archivo tenga extensión \`.crt\`
- **Chrome**: Reinicia el navegador después de instalar
- **Firefox**: Puede requerir reinicio del navegador
- **iOS**: Asegúrate de activar la confianza en el paso 6

## 📞 SOPORTE

Si tienes problemas con la instalación, verifica:
1. Que el certificado corresponda al dominio/IP correcto
2. Que el certificado no haya expirado
3. Que hayas seleccionado la opción correcta de confianza
`;

  fs.writeFileSync(instructionsPath, instructions);
  console.log(`\n📖 INSTRUCCIONES DE INSTALACIÓN GENERADAS:`);
  console.log(`   ${instructionsPath}`);
  console.log(`\n🎉 PROCESO COMPLETADO`);
  console.log(`   Revisa la carpeta: ${OUTPUT_DIR}`);
}

// Ejecutar el script
extractCertificates();