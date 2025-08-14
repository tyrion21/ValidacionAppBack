import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as fs from 'fs';
import * as path from 'path';

async function bootstrap() {
  // Crear también un servidor HTTP simple para testing
  const httpApp = await NestFactory.create(AppModule);
  httpApp.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
  });
  
  // Servidor HTTP en puerto 3000 para testing
  await httpApp.listen(3000, '0.0.0.0');
  console.log('Servidor HTTP de testing corriendo en http://0.0.0.0:3000 ');

  // Leer los certificados SSL
  const httpsOptions = {
    key: fs.readFileSync(
      path.join(__dirname, '../secrets/192.168.7.26-key.pem'),
    ),
    cert: fs.readFileSync(path.join(__dirname, '../secrets/192.168.7.26.pem')),
  };

  // Crear la aplicación NestJS con opciones HTTPS
  const app = await NestFactory.create(AppModule, {
     httpsOptions,
  });

  // Habilitar CORS
  app.enableCors({
    origin: '*', // Permitir todas las orígenes. Cambia esto según tus necesidades.
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
  });

  await app.listen(4000, '0.0.0.0');
  //console.log('Servidor HTTPS corriendo en http://localhost:4000');
   console.log('Servidor HTTPS corriendo en https://0.0.0.0:4000 probando deploy manual');
}
bootstrap();