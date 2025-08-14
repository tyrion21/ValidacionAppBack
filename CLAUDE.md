# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
This is a NestJS backend application for "ValidacionApp" that provides validation and inventory management services. It's designed to run with HTTPS certificates and connects to multiple database clients using Prisma.

## Development Commands

### Installation & Setup
```bash
npm install
# or
pnpm install
```

### Development Server
```bash
npm run start:dev      # Development mode with watch
npm run start:debug    # Debug mode with watch
npm run start          # Production mode
```

### Building
```bash
npm run build          # Build the application
npm run prebuild       # Clean dist folder before build
```

### Testing
```bash
npm run test           # Run unit tests
npm run test:watch     # Run tests in watch mode
npm run test:cov       # Run tests with coverage
npm run test:e2e       # Run end-to-end tests
npm run test:debug     # Debug tests
```

### Code Quality
```bash
npm run lint           # Lint and fix TypeScript files
npm run format         # Format code with Prettier
```

### PM2 Process Management
```bash
npm run pm2:start      # Start application with PM2
npm run pm2:stop       # Stop PM2 processes
npm run pm2:restart    # Restart PM2 processes
npm run pm2:delete     # Delete PM2 processes
npm run pm2:logs       # View PM2 logs
npm run pm2:monit      # Monitor PM2 processes
npm run pm2:status     # Check PM2 status
npm run pm2:diagnose   # Run PM2 diagnostics
npm run pm2:cleanup    # Clean up PM2 processes
npm run pm2:fix        # Fix PM2 issues
```

## Architecture

### Module Structure
- **LoginModule**: Authentication services
- **FriosModule**: Cold storage management
- **CamarasModule**: Camera/monitoring systems
- **ExistenciasModule**: Inventory management
- **ValidacionModule**: Core validation functionality

### Database Architecture
- Uses **Prisma ORM** with multiple database clients (client2, client3, client4, client5)
- Each client connects to different database schemas
- Located in `prisma/generated/` directory
- Multiple schema files: `schema2.prisma`, `schema3.prisma`, `schema4.prisma`, `schema5.prisma`

### SSL/HTTPS Configuration
- Application runs on both HTTP (port 3000) and HTTPS (port 4000)
- SSL certificates located in `secrets/` directory
- Configured for IP address 192.168.7.25
- CORS enabled with wildcard origin

### Key Services
- **PrismaService**: Database connection management
- **AppService**: Core application logic
- Each module has dedicated controllers and services following NestJS patterns

## Important Files
- `src/main.ts`: Application bootstrap with SSL configuration
- `ecosystem.config.js`: PM2 configuration
- `docs/tasks.md`: Comprehensive improvement checklist
- `prisma/migrations/`: Database migration files
- `prisma/views/`: Database view definitions

## Docker Deployment

### Build and Run with Docker
```bash
# Build the Docker image
docker build -t validacion-backend .

# Run with Docker Compose (recommended)
docker-compose up -d

# Or run standalone container
docker run -d \
  --name validacion-app-backend \
  -p 3000:3000 \
  -p 4000:4000 \
  validacion-backend
```

### SSL Certificates
Generate new SSL certificates for the updated IP (192.168.7.26):
```bash
node scripts/generate-certs-new-ip.js
```

### Container Management
```bash
# View container logs
docker-compose logs -f validacion-backend

# Restart container
docker-compose restart validacion-backend

# Stop services
docker-compose down

# Rebuild and restart
docker-compose up -d --build
```

## Development Notes
- The application serves both HTTP (port 3000) and HTTPS (port 4000) simultaneously
- Configured for IP address 192.168.7.26
- Multiple Prisma clients suggest a multi-tenant or multi-database architecture
- PM2 is used for production process management (not needed in Docker)
- Test files follow NestJS naming convention (*.spec.ts)
- TypeScript configuration includes path mapping support
- SSL certificates are automatically copied to container during build