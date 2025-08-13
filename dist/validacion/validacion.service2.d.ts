import { PrismaService } from '../prisma/prisma.service';
import { CreateValidacionDto } from './dto/create-validacion.dto';
export declare class ValidacionService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createValidacionDto: CreateValidacionDto): Promise<{
        id: number;
        Folio: string;
        Camara: string;
        Especie: string;
        Packing: string;
        Cajas: number;
        Estado: boolean;
        Usuario: string;
        createdAt: Date;
        updatedAt: Date;
    } | {
        message: string;
    }>;
    getFolioValidado(folio: string): Promise<any>;
    getCajasPacking(): Promise<{
        Folio: string;
        Fecha_packing: string;
        Cajas: number;
        LINEA: string;
    }[]>;
    getCajasValidadas(): Promise<{
        Folio: string;
        Camara: string;
        Fecha_packing: string;
        Cajas: number;
    }[]>;
    getCajasPackingSummary(fecha?: string, linea?: string): Promise<any>;
    getCajasValidadasSummary(fecha?: string, linea?: string): Promise<any>;
    getCajasDesviacionesSummary(fecha?: string, linea?: string): Promise<any>;
    createRechazo(rechazoDto: any): Promise<{
        success: boolean;
        message: string;
        rejections: any[];
    }>;
    getMotivosRechazo(): Promise<{
        id_motivo: number;
        nombre_motivo: string;
    }[]>;
    verificarRechazoPorFolio(folio: string): Promise<{
        rechazado: boolean;
        message: string;
        estado?: undefined;
        fecha?: undefined;
        motivo_id?: undefined;
    } | {
        rechazado: boolean;
        estado: string;
        message: string;
        fecha: Date;
        motivo_id: number;
    }>;
    actualizarEstadoRechazo(folio: string): Promise<{
        success: boolean;
        message: string;
        count?: undefined;
    } | {
        success: boolean;
        message: string;
        count: number;
    }>;
    verificarValidacionPorFolio(folio: string): Promise<{
        validado: boolean;
        fecha: Date;
    }>;
    getInformeDiario(fecha?: string, estado?: string): Promise<{
        Folio: string;
        Camara: string;
        Especie: string;
        Fecha_packing: string;
        Cajas: number;
        Estado: string;
        LINEA: string;
    }[]>;
}
