const fs = require('fs');
const forge = require('node-forge');
const path = require('path');

// New IP address
const NEW_IP = '192.168.7.26';

function generateCertificateForNewIP() {
  console.log(`Generating SSL certificates for IP: ${NEW_IP}`);

  // Generate a keypair
  const keys = forge.pki.rsa.generateKeyPair(2048);

  // Create a certificate
  const cert = forge.pki.createCertificate();
  cert.publicKey = keys.publicKey;
  cert.serialNumber = '01';
  cert.validity.notBefore = new Date();
  cert.validity.notAfter = new Date();
  cert.validity.notAfter.setFullYear(cert.validity.notBefore.getFullYear() + 1);

  const attrs = [
    {
      name: 'commonName',
      value: NEW_IP
    },
    {
      name: 'countryName',
      value: 'CL'
    },
    {
      shortName: 'ST',
      value: 'Chile'
    },
    {
      name: 'localityName',
      value: 'Santiago'
    },
    {
      name: 'organizationName',
      value: 'Validacion App'
    },
    {
      shortName: 'OU',
      value: 'IT Department'
    }
  ];

  cert.setSubject(attrs);
  cert.setIssuer(attrs);

  // Add IP to Subject Alternative Names
  cert.setExtensions([
    {
      name: 'basicConstraints',
      cA: false
    },
    {
      name: 'keyUsage',
      keyCertSign: false,
      digitalSignature: true,
      nonRepudiation: false,
      keyEncipherment: true,
      dataEncipherment: false
    },
    {
      name: 'extKeyUsage',
      serverAuth: true,
      clientAuth: false,
      codeSigning: false,
      emailProtection: false,
      timeStamping: false
    },
    {
      name: 'subjectAltName',
      altNames: [
        {
          type: 7, // IP
          ip: NEW_IP
        },
        {
          type: 2, // DNS
          value: NEW_IP
        }
      ]
    }
  ]);

  // Self-sign certificate
  cert.sign(keys.privateKey);

  // Convert to PEM format
  const certPem = forge.pki.certificateToPem(cert);
  const keyPem = forge.pki.privateKeyToPem(keys.privateKey);

  // Ensure secrets directory exists
  const secretsDir = path.join(__dirname, '..', 'secrets');
  if (!fs.existsSync(secretsDir)) {
    fs.mkdirSync(secretsDir, { recursive: true });
  }

  // Write certificate and key files
  const certPath = path.join(secretsDir, `${NEW_IP}.pem`);
  const keyPath = path.join(secretsDir, `${NEW_IP}-key.pem`);

  fs.writeFileSync(certPath, certPem);
  fs.writeFileSync(keyPath, keyPem);

  console.log(`Certificate written to: ${certPath}`);
  console.log(`Private key written to: ${keyPath}`);
  console.log('SSL certificates generated successfully!');
}

// Run the function
generateCertificateForNewIP();