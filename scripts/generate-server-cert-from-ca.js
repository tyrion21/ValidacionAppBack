#!/usr/bin/env node

const fs = require('fs');
const { execSync } = require('child_process');
const path = require('path');

console.log('🔐 Generador de Certificado de Servidor con CA ValidacionApp');
console.log('=========================================================');

const CA_CERT = './certificates/validacion-ca-navegadores.crt';
const CA_KEY = './certificates/validacion-ca-key.pem';
const SERVER_IP = '192.168.7.26';
const OUTPUT_DIR = './new-server-certs';

// Crear directorio de salida
if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Verificar archivos CA
if (!fs.existsSync(CA_CERT)) {
    console.error('❌ No se encuentra el certificado CA:', CA_CERT);
    process.exit(1);
}

if (!fs.existsSync(CA_KEY)) {
    console.error('❌ No se encuentra la clave privada CA:', CA_KEY);
    process.exit(1);
}

console.log('✅ Archivos CA encontrados');

try {
    console.log('\n🔧 Generando certificado para el servidor...');
    
    // 1. Generar clave privada del servidor
    const serverKeyPath = path.join(OUTPUT_DIR, 'server-key.pem');
    console.log('   Generando clave privada del servidor...');
    execSync(`openssl genrsa -out "${serverKeyPath}" 2048`, { stdio: 'pipe' });
    console.log(`   ✅ Clave privada: ${serverKeyPath}`);

    // 2. Crear archivo de configuración para el CSR
    const configPath = path.join(OUTPUT_DIR, 'server.conf');
    const configContent = `[req]
default_bits = 2048
prompt = no
default_md = sha256
distinguished_name = dn
req_extensions = v3_req

[dn]
CN=${SERVER_IP}
C=MX
ST=Estado
L=Ciudad
O=Validacion App Development
OU=IT Department

[v3_req]
basicConstraints = CA:FALSE
keyUsage = nonRepudiation, digitalSignature, keyEncipherment
subjectAltName = @alt_names

[alt_names]
IP.1 = ${SERVER_IP}
DNS.1 = ${SERVER_IP}
DNS.2 = localhost
DNS.3 = validacion.local`;

    fs.writeFileSync(configPath, configContent);
    console.log(`   ✅ Configuración: ${configPath}`);

    // 3. Generar CSR (Certificate Signing Request)
    const csrPath = path.join(OUTPUT_DIR, 'server.csr');
    console.log('   Generando solicitud de certificado (CSR)...');
    execSync(`openssl req -new -key "${serverKeyPath}" -out "${csrPath}" -config "${configPath}"`, { stdio: 'pipe' });
    console.log(`   ✅ CSR: ${csrPath}`);

    // 4. Generar certificado del servidor firmado por nuestro CA
    const serverCertPath = path.join(OUTPUT_DIR, 'server-cert.pem');
    console.log('   Firmando certificado con CA ValidacionApp...');
    
    execSync(`openssl x509 -req -in "${csrPath}" -CA "${CA_CERT}" -CAkey "${CA_KEY}" -CAcreateserial -out "${serverCertPath}" -days 365 -extensions v3_req -extfile "${configPath}"`, { stdio: 'pipe' });
    console.log(`   ✅ Certificado del servidor: ${serverCertPath}`);

    // 5. Verificar el certificado generado
    console.log('\n🔍 Verificando certificado generado...');
    const certInfo = execSync(`openssl x509 -in "${serverCertPath}" -text -noout`, { encoding: 'utf8' });
    
    // Extraer información relevante
    const issuerMatch = certInfo.match(/Issuer: (.+)/);
    const subjectMatch = certInfo.match(/Subject: (.+)/);
    const validFromMatch = certInfo.match(/Not Before: (.+)/);
    const validToMatch = certInfo.match(/Not After : (.+)/);
    
    console.log('   📋 Información del certificado:');
    console.log(`   👤 Emitido para: ${subjectMatch ? subjectMatch[1] : 'N/A'}`);
    console.log(`   🏢 Emitido por: ${issuerMatch ? issuerMatch[1] : 'N/A'}`);
    console.log(`   📅 Válido desde: ${validFromMatch ? validFromMatch[1] : 'N/A'}`);
    console.log(`   📅 Válido hasta: ${validToMatch ? validToMatch[1] : 'N/A'}`);

    // 6. Verificar que fue firmado por nuestro CA
    console.log('\n✅ Verificando cadena de confianza...');
    try {
        execSync(`openssl verify -CAfile "${CA_CERT}" "${serverCertPath}"`, { stdio: 'pipe' });
        console.log('   ✅ Certificado verificado correctamente con el CA');
    } catch (error) {
        console.log('   ⚠️  Advertencia: No se pudo verificar automáticamente');
    }

    // 7. Crear bundle completo
    const bundlePath = path.join(OUTPUT_DIR, 'server-bundle.pem');
    const serverCert = fs.readFileSync(serverCertPath, 'utf8');
    const caCert = fs.readFileSync(CA_CERT, 'utf8');
    fs.writeFileSync(bundlePath, serverCert + '\n' + caCert);
    console.log(`   ✅ Bundle completo: ${bundlePath}`);

    console.log('\n🎉 ¡Certificado generado exitosamente!');
    console.log('\n📁 Archivos generados:');
    console.log(`   🔑 Clave privada del servidor: ${serverKeyPath}`);
    console.log(`   📜 Certificado del servidor: ${serverCertPath}`);
    console.log(`   📦 Bundle completo: ${bundlePath}`);

    console.log('\n📋 PRÓXIMOS PASOS:');
    console.log('1. Copia estos archivos al servidor:');
    console.log(`   scp "${serverKeyPath}" jason@${SERVER_IP}:/home/jason/backends/ValidacionAppBack/secrets/`);
    console.log(`   scp "${serverCertPath}" jason@${SERVER_IP}:/home/jason/backends/ValidacionAppBack/secrets/`);
    console.log('');
    console.log('2. En el servidor, actualiza la configuración HTTPS para usar:');
    console.log('   - Certificado: server-cert.pem');
    console.log('   - Clave privada: server-key.pem');
    console.log('');
    console.log('3. Reinicia el servidor backend');
    console.log('');
    console.log('4. El sitio https://192.168.7.26:4000 debería aparecer como seguro');

    // 8. Crear script de copia automática
    const copyScriptPath = path.join(OUTPUT_DIR, 'copy-to-server.sh');
    const copyScript = `#!/bin/bash
echo "📤 Copiando certificados al servidor..."
scp "${path.resolve(serverKeyPath)}" jason@${SERVER_IP}:/home/jason/backends/ValidacionAppBack/secrets/server-key.pem
scp "${path.resolve(serverCertPath)}" jason@${SERVER_IP}:/home/jason/backends/ValidacionAppBack/secrets/server-cert.pem
echo "✅ Certificados copiados"
echo "⚠️  Recuerda:"
echo "1. Actualizar configuración en main.ts para usar server-cert.pem y server-key.pem"
echo "2. Reiniciar el servidor: pm2 restart validacion-backend"
`;
    fs.writeFileSync(copyScriptPath, copyScript);
    fs.chmodSync(copyScriptPath, '755');
    console.log(`\n🚀 Script de copia automática: ${copyScriptPath}`);

} catch (error) {
    console.error('❌ Error generando certificado:', error.message);
    console.log('\n💡 Soluciones:');
    console.log('1. Instala OpenSSL si no está disponible');
    console.log('2. Verifica que los archivos CA sean correctos');
    console.log('3. Ejecuta con permisos adecuados');
}