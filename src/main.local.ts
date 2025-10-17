import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // Crear aplicación HTTP simple para desarrollo local
  const app = await NestFactory.create(AppModule);

  // Habilitar CORS
  app.enableCors({
    origin: '*', // Permitir todas las orígenes en desarrollo local
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
  });

  // Servidor HTTP en puerto 3000 para desarrollo local
  await app.listen(3000, '0.0.0.0');
  console.log('🚀 Servidor LOCAL HTTP corriendo en http://0.0.0.0:3000');
  console.log('📝 Modo: DESARROLLO LOCAL (sin HTTPS)');
}

bootstrap();
