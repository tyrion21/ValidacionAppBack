import { ExistenciasService } from './existencias.service';
export declare class ExistenciasController {
    private readonly existenciasService;
    constructor(existenciasService: ExistenciasService);
    getExistencia(folio: string): Promise<any>;
    getMixExistencia(folio: string): Promise<any>;
}
