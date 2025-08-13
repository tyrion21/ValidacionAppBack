import { Injectable, InternalServerErrorException, NotFoundException, ConflictException } from "@nestjs/common";
import { PrismaService } from '../prisma/prisma.service';
import { CreateValidacionDto } from './dto/create-validacion.dto';

@Injectable()
export class ValidacionService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createValidacionDto: CreateValidacionDto) {
    const { Folio, Cajas, Especie, Estado, Camara, Usuario, Packing } = createValidacionDto;

    try {
      const findValidacion = await this.prisma.prismaClient4.validaciones.findFirst({
        where: { Folio: Folio },
      });


      if (findValidacion) {
        return { message: 'Folio ya fue validado' };
      } else {
        const newValidacion = await this.prisma.prismaClient4.validaciones.create({
          data: {
            Folio,
            Cajas,
            Especie,
            Estado,
            Camara,
            Usuario,
            Packing,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        });
        return newValidacion;
      }
    } catch (error) {
      throw new InternalServerErrorException(`Error al insertar validación: ${error.message}`);
      
    } finally {
      // await this.prisma.prismaClient4.$disconnect();
    }
  }

  async getFolioValidado(folio: string): Promise<any> {
    try {
      const validacion = await this.prisma.prismaClient4.validaciones.findUnique({
        where: { Folio: folio },
        select: { createdAt: true },
      });

      if (validacion) {
        throw new NotFoundException(`Folio ${folio} validado el ${validacion.createdAt}`);

      } else {
        throw new NotFoundException(`Folio ${folio} no fue encontrado`);
      }
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException('Ocurrió un error al buscar el folio');
      }
    }
  }



  async getCajasPacking() {
    try {
      // Agrega un log para verificar que se ejecuta
      console.log('Consultando cajas-packing...');

      const resultado =
        await this.prisma.prismaClient4.v_cajas_packing.findMany({
          select: {
            Fecha_packing: true,
            Folio: true,
            Cajas: true,
            LINEA: true,
            // Agregar campos adicionales si son necesarios
          },
        });

      // Log para verificar resultados
      console.log(`Se encontraron ${resultado.length} registros`);
      return resultado;
    } catch (error) {
      console.error('Error detallado en getCajasPacking:', error);
      throw new InternalServerErrorException(
        `Error al obtener datos de cajas packing: ${error.message}`,
      );
    }
  }
  async getCajasValidadas() {
    try {
      return await this.prisma.prismaClient4.v_cajas_validadas.findMany({
        select: {
          Fecha_packing: true,
          Folio: true,
          Cajas: true,
          Camara: true,
        },
      });
    } catch (error) {
      console.error('Error en getCajasValidadas:', error);
      throw new InternalServerErrorException(
        'Error al obtener datos de cajas validadas',
      );
    }
  }
  async getCajasPackingSummary(fecha?: string, linea?: string): Promise<any> {
    try {
      console.log(
        `Consultando resumen con filtros - fecha: ${fecha}, linea: ${linea}`,
      );

      // Construir condiciones de filtro
      const where: any = {};

      if (fecha) {
        where.Fecha_packing = fecha;
      }

      if (linea) {
        where.LINEA = linea;
      }

      // Obtener datos filtrados
      const registros =
        await this.prisma.prismaClient4.v_cajas_packing.findMany({
          where,
          select: {
            Folio: true,
            Cajas: true,
          },
        });

      // Calcular resumen
      const totalFolios = registros.length;
      const totalCajas = registros.reduce(
        (sum, record) => sum + record.Cajas,
        0,
      );

      return {
        totalFolios,
        totalCajas,
      };
    } catch (error) {
      console.error('Error detallado en getCajasPackingSummary:', error);
      throw new InternalServerErrorException(
        `Error al obtener resumen de cajas packing: ${error.message}`,
      );
    }
  }

  async getCajasValidadasSummary(fecha?: string, linea?: string): Promise<any> {
    try {
      console.log(
        `Consultando resumen con filtros - fecha: ${fecha}, linea: ${linea}`,
      );

      // Construir condiciones de filtro
      const where: any = {};

      if (fecha) {
        where.Fecha_packing = fecha;
      }

      if (linea) {
        where.Camara = linea;
      }

      // Obtener datos filtrados
      const registros =
        await this.prisma.prismaClient4.v_cajas_validadas.findMany({
          where,
          select: {
            Folio: true,
            Cajas: true,
          },
        });

      // Calcular resumen
      const totalFolios = registros.length;
      const totalCajas = registros.reduce(
        (sum, record) => sum + record.Cajas,
        0,
      );

      return {
        totalFolios,
        totalCajas,
      };
    } catch (error) {
      console.error('Error detallado en getCajasPackingSummary:', error);
      throw new InternalServerErrorException(
        `Error al obtener resumen de cajas packing: ${error.message}`,
      );
    }
  }

  /**
   * Obtiene el resumen de desviaciones (diferencia entre packing y validación) por fecha y línea
   * @param fecha Fecha para filtrar en formato DD/MM/YYYY
   * @param linea Línea para filtrar (opcional)
   * @returns Objeto con totales de folios y cajas desviados
   */
  async getCajasDesviacionesSummary(fecha?: string, linea?: string): Promise<any> {
    try {
      console.log(
        `Consultando resumen de desviaciones con filtros - fecha: ${fecha}, linea: ${linea}`,
      );

      // Obtener datos de packing
      const where: any = {};
      if (fecha) {
        where.Fecha_packing = fecha;
      }
      if (linea) {
        where.camara = linea;
      }

      const registros =
        await this.prisma.prismaClient4.v_cajas_rechazadas.findMany({
          where,
          select: {
            folio_rechazado: true,
            cajas: true,
          },
        });

      // Calcular resumen
      const totalFolios = registros.length;
      const totalCajas = registros.reduce(
        (sum, record) => sum + record.cajas,
        0,
      );

      return {
        totalFolios,
        totalCajas,
      };
    } catch (error) {
      console.error('Error detallado en getCajasDesviacionesSummary:', error);
      throw new InternalServerErrorException(
        `Error al obtener resumen de desviaciones: ${error.message}`,
      );
    }
  }

  /**
   * Registra un rechazo de pallet
   * @param rechazoDto Datos del rechazo
   * @returns Objeto con el resultado de la operación
   */
  async createRechazo(rechazoDto: any) {
    try {
      const { Folio, Motivos, Usuario, Especie, Cajas, Camara, Packing } = rechazoDto;
      
      // Registro de depuración para ver qué valores llegan
      console.log('Valores recibidos para createRechazo:');
      console.log('Folio:', Folio, 'tipo:', typeof Folio);
      console.log('Especie:', Especie, 'tipo:', typeof Especie);
      console.log('Cajas:', Cajas, 'tipo:', typeof Cajas);
      console.log('Camara:', Camara, 'tipo:', typeof Camara);
      console.log('Packing:', Packing, 'tipo:', typeof Packing);
      console.log('Motivos:', Motivos, 'es array:', Array.isArray(Motivos));
      
      // Comprobar si el folio ya fue rechazado anteriormente
      try {
        const existingRejection = await this.prisma.prismaClient4.rechazados.findFirst({
          where: { folio_rechazado: String(Folio || '') }
        });
        
        if (existingRejection) {
          throw new ConflictException('Este folio ya ha sido rechazado anteriormente');
        }
      } catch (error) {
        if (error instanceof ConflictException) {
          throw error;
        }
        // Si el error no es de conflicto, continuamos con la inserción
      }
      
      // Obtener el último ID para incrementar
      const lastRejection = await this.prisma.prismaClient4.rechazados.findFirst({
        orderBy: {
          id_rechazado: 'desc'
        }
      });
      
      let lastId = 1;
      if (lastRejection) {
        lastId = lastRejection.id_rechazado + 1;
      }
      
      if (!Array.isArray(Motivos) || Motivos.length === 0) {
        throw new Error('No se especificaron motivos de rechazo válidos');
      }
      
      // Crear un registro para cada motivo seleccionado
      const now = new Date();
      const createdRejections = [];
      
      for (const motivo of Motivos) {
        // Verificar que el motivo tenga un id válido
        if (!motivo || !motivo.id) {
          console.warn('Motivo sin ID, se omitirá:', motivo);
          continue;
        }
        
        // Realizar la conversión segura de tipos
        const motivoId = typeof motivo.id === 'number' ? motivo.id : parseInt(motivo.id, 10);
        const folio = String(Folio || '');
        const cajas = typeof Cajas === 'number' ? Cajas : parseInt(String(Cajas || '0'), 10) || 0;
        const usuario = String(Usuario || 'jason');
        const especie = String(Especie || '');
        const camara = String(Camara || '');
        const packing = String(Packing || '');
        
        try {
          const newRechazo = await this.prisma.prismaClient4.rechazados.create({
            data: {
              id_rechazado: lastId++,
              folio_rechazado: folio,
              id_motivo_rechazo_fk: motivoId,
              fecha_rechazado: now,
              usuario: usuario,
              cajas: cajas,
              camara: camara,
              nombre_estado: 'R', // Estado fijo como 'R'
              estado: true,
              packing: packing,
              especie: especie
            }
          });
          
          createdRejections.push(newRechazo);
        } catch (error) {
          console.error('Error al crear registro de rechazo para motivo:', motivo, error);
          // Continuamos con el siguiente motivo
        }
      }
      
      if (createdRejections.length === 0) {
        throw new Error('No se pudo crear ningún registro de rechazo');
      }
      
      return { 
        success: true, 
        message: 'Pallet rechazado correctamente',
        rejections: createdRejections
      };
    } catch (error) {
      console.error('Error en createRechazo:', error);
      if (error instanceof ConflictException) {
        throw error;
      }
      throw new InternalServerErrorException(
        `No se pudo registrar el rechazo: ${error.message}`
      );
    }
  }

  /**
   * Obtiene todos los motivos de rechazo disponibles
   * @returns Lista de motivos de rechazo
   */
  async getMotivosRechazo() {
    try {
      const motivos = await this.prisma.prismaClient4.dm_motivo_rechazo.findMany({
        where: {
          estado_motivo: true // Solo motivos activos
        },
        select: {
          id_motivo: true,
          nombre_motivo: true
        }
      });
      
      return motivos;
    } catch (error) {
      console.error('Error al obtener motivos de rechazo:', error);
      throw new InternalServerErrorException(
        `Error al obtener motivos de rechazo: ${error.message}`
      );
    }
  }

  /**
   * Verifica si un folio está en la tabla de rechazados
   * @param folio Número de folio a consultar
   * @returns Información sobre el estado de rechazo del folio
   */
  async verificarRechazoPorFolio(folio: string) {
    try {
      // Buscar en la tabla de rechazados
      const rechazo = await this.prisma.prismaClient4.rechazados.findFirst({
        where: { 
          folio_rechazado: String(folio || '') 
        }
      });
      
      if (!rechazo) {
        return {
          rechazado: false,
          message: 'El folio no ha sido rechazado'
        };
      }
      
      return {
        rechazado: true,
        estado: rechazo.nombre_estado,
        message: 'El folio ha sido rechazado anteriormente',
        fecha: rechazo.fecha_rechazado,
        motivo_id: rechazo.id_motivo_rechazo_fk
      };
    } catch (error) {
      console.error('Error en verificarRechazoPorFolio:', error);
      throw new InternalServerErrorException(
        `Error al verificar estado de rechazo: ${error.message}`
      );
    }
  }

  /**
   * Actualiza el estado de un folio rechazado a 'A' (Aprobado después de rechazo)
   * @param folio Número de folio a actualizar
   * @returns Resultado de la operación
   */
  async actualizarEstadoRechazo(folio: string) {
    try {
      // Actualizar todos los registros de rechazo para el folio
      const result = await this.prisma.prismaClient4.rechazados.updateMany({
        where: { 
          folio_rechazado: String(folio || ''),
          nombre_estado: 'R' // Solo actualizar si está en estado 'R'
        },
        data: {
          nombre_estado: 'A' // Actualizar a estado 'A' (Aprobado después de rechazo)
        }
      });
      
      if (result.count === 0) {
        return {
          success: false,
          message: 'No se encontraron registros de rechazo para actualizar'
        };
      }
      
      return {
        success: true,
        message: `Se han actualizado ${result.count} registros de rechazo`,
        count: result.count
      };
    } catch (error) {
      console.error('Error en actualizarEstadoRechazo:', error);
      throw new InternalServerErrorException(
        `Error al actualizar estado de rechazo: ${error.message}`
      );
    }
  }

  /**
   * Verifica si un pallet ha sido validado
   * @param folio Folio del pallet a verificar
   * @returns Objeto con información del estado de validación
   */
  async verificarValidacionPorFolio(folio: string) {
    try {
      // Buscar el folio en la tabla de validaciones
      const validacion = await this.prisma.prismaClient4.validaciones.findUnique({
        where: { Folio: folio }
      });
      
      return {
        validado: validacion !== null,
        fecha: validacion ? validacion.createdAt : null
      };
    } catch (error) {
      console.error('Error en verificarValidacionPorFolio:', error);
      throw new InternalServerErrorException(
        `Error al verificar estado de validación: ${error.message}`
      );
    }
  }

  async getInformeDiario(fecha?: string, estado?: string) {
    try {
      const where = {};
      
      // Aplicar filtros si se proporcionan
      if (fecha) {
        where['Fecha_packing'] = fecha;
      }
      
      if (estado) {
        where['Estado'] = estado;
      }
      
      // Consultar la vista v_informe_diario con los filtros aplicados
      const informeDiario = await this.prisma.prismaClient4.v_informe_diario.findMany({
        where,
        select: {
          Folio: true,
          Especie: true,
          Fecha_packing: true,
          Cajas: true,
          LINEA: true,
          Camara: true,
          Estado: true
        },
        orderBy: [
          { Fecha_packing: 'desc' },
          { Folio: 'asc' }
        ]
      });
      
      return informeDiario;
    } catch (error) {
      console.error('Error al obtener informe diario:', error);
      throw new InternalServerErrorException(
        `Error al obtener informe diario: ${error.message}`
      );
    }
  }  
}