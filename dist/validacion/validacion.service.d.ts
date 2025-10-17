import { PrismaService } from '../prisma/prisma.service';
import { CreateValidacionDto } from './dto/create-validacion.dto';
export declare class ValidacionService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private verificarExistenciaFolio;
    create(createValidacionDto: CreateValidacionDto): Promise<{
        id: number;
        Folio: string;
        Cajas: number;
        Especie: string;
        Estado: boolean;
        Temporada: string;
        Camara: string;
        Usuario: string;
        Packing: string;
        createdAt: Date;
        updatedAt: Date;
    } | {
        message: string;
    }>;
    getFolioValidado(folio: string): Promise<any>;
    getCajasPacking(): Promise<{
        Folio: string;
        Cajas: number;
        Fecha_packing: string;
        LINEA: string;
    }[]>;
    getCajasValidadas(): Promise<{
        Folio: string;
        Cajas: number;
        Camara: string;
        Fecha_packing: string;
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
        Cajas: number;
        Especie: string;
        Estado: string;
        Camara: string;
        Fecha_packing: string;
        LINEA: string;
    }[]>;
}
