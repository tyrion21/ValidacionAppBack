// src/app.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): any {
    return {
      message: 'Validacion App Backend funcionando correctamente',
      timestamp: new Date(),
      server: {
        http: 'http://192.168.7.25:3000',
        https: 'https://192.168.7.25:4000',
      },
      endpoints: [
        'GET /login',
        'POST /login',
        'GET /frios',
        'GET /camaras/:codFri',
        'GET /existencias/:folio',
        'POST /validacion',
        'GET /validacion/folio/:folio',
      ],
      status: 'ONLINE',
    };
  }

  @Get('/test')
  getTest(): any {
    return {
      message: 'Conexión desde móvil exitosa',
      timestamp: new Date(),
      ip: '192.168.7.25',
      protocol: 'HTTP',
    };
  }

  // @Get('/users')
  // async getUsers() {
  //   try {
  //     const users = await this.appService.getUsers();
  //     return users;
  //   } catch (e) {
  //     console.error(e);
  //     throw new HttpException(
  //       'Internal server error',
  //       HttpStatus.INTERNAL_SERVER_ERROR,
  //     );
  //   }
  // }

  @Post('/login')
  async login(@Body() body: { user: string; pass: string }) {
    const { user, pass } = body;

    if (!user || !pass) {
      throw new HttpException('Faltan parámetros', HttpStatus.BAD_REQUEST);
    }

    try {
      const result = await this.appService.login(user, pass);
      if (!result) {
        throw new HttpException(
          'Usuario o contraseña incorrectos',
          HttpStatus.UNAUTHORIZED,
        );
      } else {
        return result;
      }
    } catch (e) {
      console.error(e);
      throw new HttpException(
        'Error interno del servidor',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
