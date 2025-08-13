import { Module } from '@nestjs/common';
import { FriosService } from './frios.service';
import { FriosController } from './frios.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [FriosController],
  providers: [FriosService],
})
export class FriosModule {}
