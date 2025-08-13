import {
  Injectable,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreateExistenciaDto } from './dto/create-existencia.dto';
import { UpdateExistenciaDto } from './dto/update-existencia.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ExistenciasService {
  constructor(private readonly prisma: PrismaService) {}
  // create(createExistenciaDto: CreateExistenciaDto) {
  //   return 'This action adds a new existencia';
  // }

  // findAll() {
  //   return `This action returns all existencias`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} existencia`;
  // }

  // update(id: number, updateExistenciaDto: UpdateExistenciaDto) {
  //   return `This action updates a #${id} existencia`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} existencia`;
  // }

  async getExistencia(folio: string): Promise<any> {
    try {
      const existencia =
        await this.prisma.prismaClient3.existencias_cajas.findUnique({
          where: {
            Folio: folio,
          },
        });

      if (!existencia) {
        throw new NotFoundException(`Folio ${folio} no fue encontrado`);
      }

      return await this.prisma.prismaClient3.existencias_cajas.findUnique({
        where: {
          Folio: folio,
        },
        select: {
          Exportadora: true,
          Embalaje: true,
          Marca: true,
          Categoria: true,
          Calibre: true,
          Cajas: true,
          Especie: true,
        },      });
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        console.error('Error en getExistencia:', error);
        throw new InternalServerErrorException(
          'Ocurrió un error al buscar el folio',
        );
      }
    }
  }

  async getMixExistencia(folio: string): Promise<any> {
    try {
      const existencia =
        await this.prisma.prismaClient3.existenciamix_cajas.findUnique({
          where: {
            Folio: folio,
          },
        });

      if (!existencia) {
        throw new NotFoundException(`Folio ${folio} no fue encontrado`);
      }

      return await this.prisma.prismaClient3.existenciamix_cajas.findMany({
        where: {
          Folio: folio,
        },
        select: {
          CSG: true,
          Variedad: true,
          Cuartel: true,
          Calibre: true,
          Cajas: true,
        },      });
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        console.error('Error en getMixExistencia:', error);
        throw new InternalServerErrorException(
          'Ocurrió un error al buscar el folio',
        );
      }
    }
  }
}
