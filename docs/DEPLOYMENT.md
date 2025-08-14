# 🚀 Deployment Guide

## GitHub Actions CI/CD Setup

### Required Secrets

Para configurar el deployment automático, necesitas agregar estos secrets en GitHub:

1. Ve a tu repositorio en GitHub
2. Settings → Secrets and variables → Actions
3. Agrega estos **Repository secrets**:

| Secret Name | Description | Example |
|-------------|-------------|---------|
| `HOST` | IP de tu servidor Ubuntu | `192.168.7.26` |
| `USERNAME` | Usuario SSH del servidor | `jason` |
| `SSH_KEY` | Clave privada SSH | (contenido de tu clave privada) |
| `APP_PATH` | Ruta del proyecto en servidor | `/home/jason/backends/ValidacionAppBack` |

### Configuración SSH

#### 1. Generar clave SSH (si no tienes una):
```bash
# En tu servidor Ubuntu
ssh-keygen -t rsa -b 4096 -C "github-actions"
```

#### 2. Agregar clave pública a authorized_keys:
```bash
cat ~/.ssh/id_rsa.pub >> ~/.ssh/authorized_keys
```

#### 3. Copiar clave privada para GitHub:
```bash
cat ~/.ssh/id_rsa
# Copia todo el contenido y agrégalo como SSH_KEY secret
```

### Flujo de Deploy

#### ✅ **Automático en cada push a main:**
1. **CI Tests** - Linting, tests, build
2. **SSH Connect** - Conexión al servidor
3. **Git Pull** - Actualizar código
4. **Docker Rebuild** - Rebuilding containers
5. **Health Check** - Verificar deployment

#### 🔍 **Solo CI en PRs:**
- Tests y build verification
- No deployment to server

### Manual Commands

#### Force redeploy:
```bash
# En tu servidor Ubuntu
cd /home/jason/backends/ValidacionAppBack
git pull origin main
docker-compose up --build -d
```

#### Check deployment:
```bash
docker ps
docker logs validacion-app-backend
```

### Troubleshooting

#### SSH Connection Issues:
- Verificar que SSH_KEY secret tenga formato correcto
- Confirmar que USERNAME tiene permisos sudo
- Verificar que HOST sea accesible desde GitHub Actions

#### Docker Issues:
- Verificar que .env existe en servidor
- Confirmar que puertos no estén en uso
- Revisar logs con `docker logs validacion-app-backend`

### Security Notes

- 🔒 Secrets están encriptados en GitHub
- 🚫 Nunca commitear claves SSH o .env
- ✅ Usar SSH keys en lugar de passwords
- 🔄 Rotar SSH keys regularmente