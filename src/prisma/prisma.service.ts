import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient as PrismaClient4 } from '../../prisma/generated/client4'; // Primer cliente de Prisma
import { PrismaClient as PrismaClient2 } from '../../prisma/generated/client2';; // Segundo cliente de Prisma
import { PrismaClient as PrismaClient3 } from '../../prisma/generated/client3';; // Segundo cliente de Prisma
import { PrismaClient as PrismaClient5 } from '../../prisma/generated/client5';; // Segundo cliente de Prisma
// import { PrismaClient as PrismaClient5 } from '../../prisma/generated/client5';; // Segundo cliente de Prisma


@Injectable()
export class PrismaService implements OnModuleInit, OnModuleDestroy {

  public prismaClient4: PrismaClient4;
  public prismaClient2: PrismaClient2;
  public prismaClient3: PrismaClient3;
  // public prismaClient5: PrismaClient5;

  constructor() {
    this.prismaClient4 = new PrismaClient4();
    this.prismaClient2 = new PrismaClient2();
    this.prismaClient3 = new PrismaClient3();
    // this.prismaClient5 = new PrismaClient5();
  }

  async onModuleInit() {
    await this.prismaClient4.$connect();
    await this.prismaClient2.$connect();
    await this.prismaClient3.$connect();
    // await this.prismaClient5.$connect();
  }

  async onModuleDestroy() {
    await this.prismaClient4.$disconnect();
    await this.prismaClient2.$disconnect();
    await this.prismaClient3.$disconnect();
    // await this.prismaClient5.$disconnect();
  }
}