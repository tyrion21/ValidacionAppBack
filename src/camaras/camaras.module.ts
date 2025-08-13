import { Module } from '@nestjs/common';
import { CamarasService } from './camaras.service';
import { CamarasController } from './camaras.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [CamarasController],
  providers: [CamarasService],
})
export class CamarasModule {}
