#!/bin/bash
echo "📤 Copiando certificados al servidor..."
scp "C:\Apps\ValidacionAppBack\new-server-certs\server-key.pem" jason@192.168.7.26:/home/jason/backends/ValidacionAppBack/secrets/server-key.pem
scp "C:\Apps\ValidacionAppBack\new-server-certs\server-cert.pem" jason@192.168.7.26:/home/jason/backends/ValidacionAppBack/secrets/server-cert.pem
echo "✅ Certificados copiados"
echo "⚠️  Recuerda:"
echo "1. Actualizar configuración en main.ts para usar server-cert.pem y server-key.pem"
echo "2. Reiniciar el servidor: pm2 restart validacion-backend"
