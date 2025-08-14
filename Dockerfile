# Multi-stage build for production optimization
FROM node:18-alpine AS builder

# Install OpenSSL 1.1 compatibility and other required packages
RUN apk add --no-cache openssl1.1-compat libc6-compat

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=development

# Copy source code
COPY . .

# Set environment for Prisma
ENV PRISMA_CLI_BINARY_TARGETS="linux-musl,linux-musl-openssl-1.1.x"

# Generate Prisma client for schema4
RUN npx prisma generate --schema=prisma/schema4.prisma

# Build the application
RUN npm run build

# Production stage
FROM node:18-alpine AS production

# Install required packages for Prisma and proper signal handling
RUN apk add --no-cache openssl1.1-compat libc6-compat dumb-init

# Create non-root user
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nestjs -u 1001

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install production dependencies only
RUN npm ci --only=production

# Copy built application from builder stage
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma

# Copy secrets directory (SSL certificates)
COPY --chown=nestjs:nodejs secrets ./secrets

# Set environment for Prisma in production
ENV PRISMA_CLI_BINARY_TARGETS="linux-musl,linux-musl-openssl-1.1.x"

# Generate Prisma client for production using schema4
RUN npx prisma generate --schema=prisma/schema4.prisma

# Change ownership of the app directory to the nestjs user
RUN chown -R nestjs:nodejs /app

# Switch to non-root user
USER nestjs

# Expose ports
EXPOSE 3000 4000

# Add healthcheck
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:3000/ || exit 1

# Use dumb-init to handle signals properly
ENTRYPOINT ["dumb-init", "--"]

# Start the application
CMD ["node", "dist/main.js"]