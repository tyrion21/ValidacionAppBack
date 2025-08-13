import { OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient as PrismaClient4 } from '../../prisma/generated/client4';
import { PrismaClient as PrismaClient2 } from '../../prisma/generated/client2';
import { PrismaClient as PrismaClient3 } from '../../prisma/generated/client3';
export declare class PrismaService implements OnModuleInit, OnModuleDestroy {
    prismaClient4: PrismaClient4;
    prismaClient2: PrismaClient2;
    prismaClient3: PrismaClient3;
    constructor();
    onModuleInit(): Promise<void>;
    onModuleDestroy(): Promise<void>;
}
