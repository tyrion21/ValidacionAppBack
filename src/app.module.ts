import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginModule } from './login/login.module';
import { PrismaService } from './prisma/prisma.service';
import { FriosModule } from './frios/frios.module';
import { CamarasModule } from './camaras/camaras.module';
import { ExistenciasModule } from './existencias/existencias.module';
import { ValidacionModule } from './validacion/validacion.module';

@Module({
  imports: [LoginModule, FriosModule, CamarasModule, ExistenciasModule, ValidacionModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
