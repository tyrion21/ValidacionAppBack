import {
  Controller,
  Get,
  Param,
  NotFoundException,
  InternalServerErrorException,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { ExistenciasService } from './existencias.service';

@Controller('existencias')
export class ExistenciasController {
  constructor(private readonly existenciasService: ExistenciasService) {}

  @Get(':folio')
  async getExistencia(@Param('folio') folio: string) {
    try {
      return await this.existenciasService.getExistencia(folio);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new HttpException(
          {
            status: HttpStatus.NOT_FOUND,
            error: error.message,
          },
          HttpStatus.NOT_FOUND,
        );
      } else {
        console.error('Unexpected error:', error);
        throw new HttpException(
          {
            status: HttpStatus.INTERNAL_SERVER_ERROR,
            error: 'Ocurrió un error al buscar el folio',
          },
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
  }
  @Get('mixexistencias/:folio')
  async getMixExistencia(@Param('folio') folio: string) {
    try {
      return await this.existenciasService.getMixExistencia(folio);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new HttpException(
          {
            status: HttpStatus.NOT_FOUND,
            error: error.message,
          },
          HttpStatus.NOT_FOUND,
        );
      } else {
        console.error('Unexpected error:', error);
        throw new HttpException(
          {
            status: HttpStatus.INTERNAL_SERVER_ERROR,
            error: 'Ocurrió un error al buscar el folio en otro servicio',
          },
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
  }
}
