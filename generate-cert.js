const mkcert = require('mkcert');
const fs = require('fs');
const path = require('path');

const secretsDir = path.join(__dirname, 'secrets');
if (!fs.existsSync(secretsDir)) fs.mkdirSync(secretsDir, { recursive: true });

(async () => {
  try {
    console.log('🔄 Iniciando generación de certificados...');
    
    // Crear CA local si no existe
    console.log('📋 Creando CA local...');
    const ca = await mkcert.createCA({
      organization: 'Development CA',
      countryCode: 'US',
      state: 'Local',
      locality: 'Local',
      commonName: 'Development CA',
    });
    console.log('✅ CA creada exitosamente');

    // Generar certificado para la IP
    console.log('🔐 Generando certificado para 192.168.7.25...');
    const cert = await mkcert.createCert({
      domains: ['192.168.7.25'],
      validityDays: 365,
      caKey: ca.key,
      caCert: ca.cert,
    });
    console.log('✅ Certificado generado exitosamente');

    // Escribir archivos en secrets
    console.log('💾 Guardando archivos...');
    fs.writeFileSync(path.join(secretsDir, '192.168.7.25-key.pem'), cert.key);
    fs.writeFileSync(path.join(secretsDir, '192.168.7.25.pem'), cert.cert);

    console.log('✅ Certificados generados con mkcert en secrets/');
    console.log('   - 192.168.7.25-key.pem (clave privada)');
    console.log('   - 192.168.7.25.pem (certificado)');
  } catch (err) {
    console.error('❌ Error generando certificados:', err.message);
    console.error('Stack:', err.stack);
  }
})();
