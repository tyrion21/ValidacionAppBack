import { ValidacionService } from './validacion.service';
import { CreateValidacionDto } from './dto/create-validacion.dto';
export declare class ValidacionController {
    private readonly validacionService;
    constructor(validacionService: ValidacionService);
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
        message: string;
        data: any[];
        success?: undefined;
        count?: undefined;
    } | {
        success: boolean;
        count: number;
        data: {
            Folio: string;
            Cajas: number;
            Fecha_packing: string;
            LINEA: string;
        }[];
        message?: undefined;
    }>;
    getCajasPackingSummary(fecha?: string, linea?: string): Promise<{
        message: string;
        data: {
            totalFolios: number;
            totalCajas: number;
        };
        success?: undefined;
    } | {
        success: boolean;
        data: any;
        message?: undefined;
    }>;
    getCajasValidadasSummary(fecha?: string, linea?: string): Promise<{
        message: string;
        data: {
            totalFolios: number;
            totalCajas: number;
        };
        success?: undefined;
    } | {
        success: boolean;
        data: any;
        message?: undefined;
    }>;
    getCajasDesviacionesSummary(fecha?: string, linea?: string): Promise<{
        message: string;
        data: {
            totalFolios: number;
            totalCajas: number;
        };
        success?: undefined;
    } | {
        success: boolean;
        data: any;
        message?: undefined;
    }>;
    getMotivosRechazo(): Promise<{
        success: boolean;
        count: number;
        data: {
            id_motivo: number;
            nombre_motivo: string;
        }[];
    }>;
    rechazarPallet(rechazoDto: any): Promise<{
        success: boolean;
        message: string;
        data: {
            success: boolean;
            message: string;
            rejections: any[];
        };
    }>;
    verificarRechazo(folio: string): Promise<{
        success: boolean;
        data: {
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
        };
    }>;
    actualizarRechazo(folio: string): Promise<{
        success: boolean;
        data: {
            success: boolean;
            message: string;
            count?: undefined;
        } | {
            success: boolean;
            message: string;
            count: number;
        };
    }>;
    getInformeDiario(fecha?: string, estado?: string): Promise<{
        message: string;
        data: any[];
        success?: undefined;
        count?: undefined;
    } | {
        success: boolean;
        count: number;
        data: {
            Folio: string;
            Cajas: number;
            Especie: string;
            Estado: string;
            Camara: string;
            Fecha_packing: string;
            LINEA: string;
        }[];
        message?: undefined;
    }>;
    verificarValidacion(folio: string): Promise<{
        success: boolean;
        data: {
            validado: boolean;
            fecha: Date;
        };
    }>;
}
