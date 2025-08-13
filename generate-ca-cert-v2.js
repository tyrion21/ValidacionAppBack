const forge = require('node-forge');
const fs = require('fs');
const path = require('path');

try {
    console.log('🔑 Generando CA y certificado con extensiones correctas...');

    // 1. Generar clave privada para CA con mayor seguridad
    const caKeys = forge.pki.rsa.generateKeyPair(4096);
    
    // 2. Crear certificado CA
    const caCert = forge.pki.createCertificate();
    caCert.publicKey = caKeys.publicKey;
    caCert.serialNumber = '01';
    caCert.validity.notBefore = new Date();
    caCert.validity.notAfter = new Date();
    caCert.validity.notAfter.setFullYear(caCert.validity.notBefore.getFullYear() + 10);

    const caAttrs = [
        { name: 'commonName', value: 'Validacion Local Root CA' },
        { name: 'countryName', value: 'MX' },
        { name: 'stateOrProvinceName', value: 'Estado' },
        { name: 'localityName', value: 'Ciudad' },
        { name: 'organizationName', value: 'Validacion App Development' },
        { name: 'organizationalUnitName', value: 'IT Department' }
    ];

    caCert.setSubject(caAttrs);
    caCert.setIssuer(caAttrs); // Auto-firmado

    // 3. Extensiones críticas para CA
    caCert.setExtensions([
        {
            name: 'basicConstraints',
            cA: true,
            critical: true
        },
        {
            name: 'keyUsage',
            keyCertSign: true,
            cRLSign: true,
            critical: true
        },
        {
            name: 'subjectKeyIdentifier'
        }
    ]);

    // Auto-firmar el certificado CA con SHA-256
    caCert.sign(caKeys.privateKey, forge.md.sha256.create());

    // 4. Generar clave privada para el servidor
    const serverKeys = forge.pki.rsa.generateKeyPair(2048);
    
    // 5. Crear certificado del servidor
    const serverCert = forge.pki.createCertificate();
    serverCert.publicKey = serverKeys.publicKey;
    serverCert.serialNumber = '02';
    serverCert.validity.notBefore = new Date();
    serverCert.validity.notAfter = new Date();
    serverCert.validity.notAfter.setFullYear(serverCert.validity.notBefore.getFullYear() + 1);

    const serverAttrs = [
        { name: 'commonName', value: '192.168.7.25' },
        { name: 'countryName', value: 'MX' },
        { name: 'organizationName', value: 'Validacion App Development' }
    ];

    serverCert.setSubject(serverAttrs);
    serverCert.setIssuer(caAttrs);

    // 6. Extensiones para el servidor
    serverCert.setExtensions([
        {
            name: 'basicConstraints',
            cA: false
        },
        {
            name: 'keyUsage',
            digitalSignature: true,
            keyEncipherment: true,
            nonRepudiation: true
        },
        {
            name: 'extKeyUsage',
            serverAuth: true,
            clientAuth: true
        },
        {
            name: 'subjectAltName',
            altNames: [
                {
                    type: 7, // IP
                    ip: '192.168.7.25'
                },
                {
                    type: 2, // DNS
                    value: 'localhost'
                }
            ]
        }
    ]);

    // Firmar el certificado del servidor con la CA usando SHA-256
    serverCert.sign(caKeys.privateKey, forge.md.sha256.create());

    // 7. Crear directorio secrets si no existe
    const secretsDir = path.join(__dirname, 'secrets');
    if (!fs.existsSync(secretsDir)) {
        fs.mkdirSync(secretsDir, { recursive: true });
    }    // 8. Guardar archivos PEM para el servidor
    fs.writeFileSync(path.join(secretsDir, '192.168.7.25-key.pem'), forge.pki.privateKeyToPem(serverKeys.privateKey));
    fs.writeFileSync(path.join(secretsDir, '192.168.7.25.pem'), forge.pki.certificateToPem(serverCert));

    // 9. Guardar CA en formato PEM
    fs.writeFileSync(path.join(secretsDir, 'validacion-ca.pem'), forge.pki.certificateToPem(caCert));
    fs.writeFileSync(path.join(secretsDir, 'validacion-ca-key.pem'), forge.pki.privateKeyToPem(caKeys.privateKey));

    // 10. Crear archivo P12 para el CA (sin clave privada para mayor seguridad)
    const caP12Asn1 = forge.pkcs12.toPkcs12Asn1(
        null, // Sin clave privada
        [caCert], // Solo el certificado CA
        '', // password vacía
        {
            algorithm: 'aes256',
            friendlyName: 'Validacion Local Root CA'
        }
    );

    const caP12Der = forge.asn1.toDer(caP12Asn1).getBytes();
    fs.writeFileSync(path.join(secretsDir, 'validacion-ca.p12'), caP12Der, 'binary');

    // 11. También crear un archivo .crt para Android
    fs.writeFileSync(path.join(secretsDir, 'validacion-ca.crt'), forge.pki.certificateToPem(caCert));

    console.log('✅ Certificados generados exitosamente:');    console.log('📁 secrets/192.168.7.25.pem - Certificado del servidor');
    console.log('🔑 secrets/192.168.7.25-key.pem - Clave privada del servidor');
    console.log('🏛️  secrets/validacion-ca.pem - Certificado CA (PEM)');
    console.log('🏛️  secrets/validacion-ca.crt - Certificado CA (CRT para Android)');
    console.log('📱 secrets/validacion-ca.p12 - CA para instalar en móvil');
    console.log('');
    console.log('📲 INSTALAR EN MÓVIL:');
    console.log('');
    console.log('🤖 ANDROID:');
    console.log('   1. Transfiere "validacion-ca.crt" a tu dispositivo');
    console.log('   2. Ve a Configuración > Seguridad > Cifrado y credenciales');
    console.log('   3. Toca "Instalar desde almacenamiento" > "Certificados CA"');
    console.log('   4. Selecciona el archivo validacion-ca.crt');
    console.log('   5. Dale un nombre como "Validacion CA"');
    console.log('');
    console.log('🍎 iOS:');
    console.log('   1. Envía "validacion-ca.p12" por email a tu iPhone/iPad');
    console.log('   2. Abre el email y toca el archivo adjunto');
    console.log('   3. Contraseña: (vacía - presiona Siguiente)');
    console.log('   4. Ve a Configuración > General > Perfiles > Instalar');
    console.log('   5. Ve a Configuración > General > Acerca de > Configuración de confianza');
    console.log('   6. Habilita "Validacion Local Root CA"');

} catch (error) {
    console.error('❌ Error:', error.message);
    console.error(error.stack);
}
