import { PrismaService } from '../prisma/prisma.service';
export declare class ExistenciasService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getExistencia(folio: string): Promise<any>;
    getMixExistencia(folio: string): Promise<any>;
}
