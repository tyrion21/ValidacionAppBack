import { Injectable } from '@nestjs/common';
import { CreateFrioDto } from './dto/create-frio.dto';
import { UpdateFrioDto } from './dto/update-frio.dto';
import { PrismaService } from '../prisma/prisma.service'; // Asegúrate de tener un PrismaService configurado


@Injectable()
export class FriosService {
  constructor(private readonly prisma: PrismaService) {}

  // create(createFrioDto: CreateFrioDto) {
  //   return 'This action adds a new frio';
  // }

  // findAll() {
  //   return `This action returns all frios`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} frio`;
  // }

  // update(id: number, updateFrioDto: UpdateFrioDto) {
  //   return `This action updates a #${id} frio`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} frio`;
  // }

  async getFrios(temporada: string): Promise<any> {
    return await this.prisma.prismaClient2.fRIOS.findMany({
      where: {
        COD_TEM: temporada,
        OR: [{ COD_FRI: '175619' }, { COD_FRI: '3102213' }],
      },
      select: {
        COD_FRI: true,
        NOM_FRI: true,
      },
    });
  }
}