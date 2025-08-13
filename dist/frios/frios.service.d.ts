import { PrismaService } from '../prisma/prisma.service';
export declare class FriosService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getFrios(temporada: string): Promise<any>;
}
