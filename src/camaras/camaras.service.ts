import { Injectable } from '@nestjs/common';
import { CreateCamaraDto } from './dto/create-camara.dto';
import { UpdateCamaraDto } from './dto/update-camara.dto';
import { PrismaService } from '../prisma/prisma.service'; // Asegúrate de tener un PrismaService configurado

@Injectable()
export class CamarasService {
  constructor(private readonly prisma: PrismaService) {}
  // create(createCamaraDto: CreateCamaraDto) {
  //   return 'This action adds a new camara';
  // }

  // findAll() {
  //   return `This action returns all camaras`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} camara`;
  // }

  // update(id: number, updateCamaraDto: UpdateCamaraDto) {
  //   return `This action updates a #${id} camara`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} camara`;
  // }
  async getCamaras(codFri: string): Promise<any> {
    //const temporada = '7';
    const temporada = '8';
    return await this.prisma.prismaClient2.cAMARAS.findMany({
      where: {
        COD_TEM: temporada,
        COD_FRI: codFri,
        DES_CAM: {
          startsWith: 'PA',
        },
      },
      select: {
        DES_CAM: true,
      },
    });
  }
}