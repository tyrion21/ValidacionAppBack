import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
  InternalServerErrorException,
  Query
} from '@nestjs/common';
import { ValidacionService } from './validacion.service';
import { CreateValidacionDto } from './dto/create-validacion.dto';
import { UpdateValidacionDto } from './dto/update-validacion.dto';

@Controller('validacion')
export class ValidacionController {
  constructor(private readonly validacionService: ValidacionService) {}

  @Post()
  create(@Body() createValidacionDto: CreateValidacionDto) {
    return this.validacionService.create(createValidacionDto);
  }

  @Get('folio/:folio')
  async getFolioValidado(@Param('folio') folio: string): Promise<any> {
    try {
      const validacion = await this.validacionService.getFolioValidado(folio);
      return validacion;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException(
          'Ocurrió un error al buscar el folio',
        );
      }
    }
  }
  // ...imports y código existente...

  @Get('cajas-packing')
  async getCajasPacking() {
    try {
      const resultado = await this.validacionService.getCajasPacking();

      // Si no hay datos, envía una respuesta más informativa
      if (!resultado || resultado.length === 0) {
        return {
          message: 'No se encontraron registros de cajas packing',
          data: [],
        };
      }

      return {
        success: true,
        count: resultado.length,
        data: resultado,
      };
    } catch (error) {
      throw new InternalServerErrorException(
        `Error al procesar la solicitud: ${error.message}`,
      );
    }
  }

  @Get('cajas-packing/summary')
  async getCajasPackingSummary(
    @Query('fecha') fecha?: string,
    @Query('linea') linea?: string,
  ) {
    try {
      const resultado = await this.validacionService.getCajasPackingSummary(
        fecha,
        linea,
      );

      // Si no hay datos, envía una respuesta informativa
      if (!resultado) {
        return {
          message:
            'No se encontraron registros de cajas packing con los filtros especificados',
          data: {
            totalFolios: 0,
            totalCajas: 0,
          },
        };
      }

      return {
        success: true,
        data: resultado,
      };
    } catch (error) {
      throw new InternalServerErrorException(
        `Error al procesar la solicitud: ${error.message}`,
      );
    }
  }

  @Get('cajas-validadas/summary')
  async getCajasValidadasSummary(
    @Query('fecha') fecha?: string,
    @Query('linea') linea?: string,
  ) {
    try {
      const resultado = await this.validacionService.getCajasValidadasSummary(
        fecha,
        linea,
      );

      // Si no hay datos, envía una respuesta informativa
      if (!resultado) {
        return {
          message:
            'No se encontraron registros de cajas packing con los filtros especificados',
          data: {
            totalFolios: 0,
            totalCajas: 0,
          },
        };
      }

      return {
        success: true,
        data: resultado,
      };
    } catch (error) {
      throw new InternalServerErrorException(
        `Error al procesar la solicitud: ${error.message}`,
      );
    }
  }

  @Get('cajas-desviaciones/summary')
  async getCajasDesviacionesSummary(
    @Query('fecha') fecha?: string,
    @Query('linea') linea?: string,
  ) {
    try {
      const resultado = await this.validacionService.getCajasDesviacionesSummary(
        fecha,
        linea,
      );

      // Si no hay datos, envía una respuesta informativa
      if (!resultado) {
        return {
          message:
            'No se encontraron registros de desviaciones con los filtros especificados',
          data: {
            totalFolios: 0,
            totalCajas: 0,
          },
        };
      }

      return {
        success: true,
        data: resultado,
      };
    } catch (error) {
      throw new InternalServerErrorException(
        `Error al procesar la solicitud: ${error.message}`,
      );
    }
  }

  // Endpoints para manejo de motivos de rechazo
  @Get('motivos-rechazo')
  async getMotivosRechazo() {
    try {
      const motivos = await this.validacionService.getMotivosRechazo();
      return {
        success: true,
        count: motivos.length,
        data: motivos
      };
    } catch (error) {
      throw new InternalServerErrorException(
        `Error al obtener motivos de rechazo: ${error.message}`
      );
    }
  }

  @Post('rechazar')
  async rechazarPallet(@Body() rechazoDto: any) {
    try {
      console.log('Received rejection request:', JSON.stringify(rechazoDto, null, 2));
      console.log('Tipo de datos recibidos:');
      console.log('- Folio:', typeof rechazoDto.Folio);
      console.log('- Especie:', typeof rechazoDto.Especie);
      console.log('- Cajas:', typeof rechazoDto.Cajas);
      console.log('- Motivos:', Array.isArray(rechazoDto.Motivos) ? 'array' : typeof rechazoDto.Motivos);
      
      // Validación de datos de entrada
      if (!rechazoDto.Folio) {
        throw new Error('El folio es obligatorio');
      }
      
      if (!Array.isArray(rechazoDto.Motivos) || rechazoDto.Motivos.length === 0) {
        throw new Error('Debe seleccionar al menos un motivo de rechazo');
      }
      
      const resultado = await this.validacionService.createRechazo(rechazoDto);
      return {
        success: true,
        message: 'Pallet rechazado correctamente',
        data: resultado
      };
    } catch (error) {
      console.error('Error processing rejection:', error);
      if (error instanceof NotFoundException || error.status === 404) {
        throw error;
      } else if (error.status === 409) {
        throw error;
      } else {
        throw new InternalServerErrorException(
          `Error al registrar rechazo: ${error.message}`
        );
      }
    }
  }


  //
  // @Get()
  // findAll() {
  //   return this.validacionService.findAll();
  // }
  //
  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.validacionService.findOne(+id);
  // }
  //
  // // @Patch(':id')
  // // update(@Param('id') id: string, @Body() updateValidacionDto: UpdateValidacionDto) {
  // //   return this.validacionService.update(+id, updateValidacionDto);
  // // }
  //
  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.validacionService.remove(+id);
  // }

  @Get('verificar-rechazo/:folio')
  async verificarRechazo(@Param('folio') folio: string) {
    try {
      const resultado = await this.validacionService.verificarRechazoPorFolio(folio);
      return {
        success: true,
        data: resultado
      };
    } catch (error) {
      throw new InternalServerErrorException(
        `Error al verificar estado de rechazo: ${error.message}`
      );
    }
  }

  @Patch('actualizar-rechazo/:folio')
  async actualizarRechazo(@Param('folio') folio: string) {
    try {
      const resultado = await this.validacionService.actualizarEstadoRechazo(folio);
      return {
        success: true,
        data: resultado
      };
    } catch (error) {
      throw new InternalServerErrorException(
        `Error al actualizar estado de rechazo: ${error.message}`
      );
    }
  }

  @Get('informe-diario')
  async getInformeDiario(
    @Query('fecha') fecha?: string,
    @Query('estado') estado?: string
  ) {
    try {
      const resultado = await this.validacionService.getInformeDiario(fecha, estado);

      // Si no hay datos, envía una respuesta informativa
      if (!resultado || resultado.length === 0) {
        return {
          message: 'No se encontraron registros para el informe diario con los filtros especificados',
          data: [],
        };
      }

      return {
        success: true,
        count: resultado.length,
        data: resultado,
      };
    } catch (error) {
      throw new InternalServerErrorException(
        `Error al procesar la solicitud de informe diario: ${error.message}`,
      );
    }
  }
  
  @Get('verificar-validacion/:folio')
  async verificarValidacion(@Param('folio') folio: string) {
    try {
      const resultado = await this.validacionService.verificarValidacionPorFolio(folio);
      return {
        success: true,
        data: resultado
      };
    } catch (error) {
      throw new InternalServerErrorException(
        `Error al verificar estado de validación: ${error.message}`
      );
    }
  }
}