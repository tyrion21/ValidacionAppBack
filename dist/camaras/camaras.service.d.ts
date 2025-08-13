import { PrismaService } from '../prisma/prisma.service';
export declare class CamarasService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getCamaras(codFri: string): Promise<any>;
}
