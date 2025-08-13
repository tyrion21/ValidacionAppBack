import { Module } from '@nestjs/common';
import { ExistenciasService } from './existencias.service';
import { ExistenciasController } from './existencias.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ExistenciasController],
  providers: [ExistenciasService],
})
export class ExistenciasModule {}
