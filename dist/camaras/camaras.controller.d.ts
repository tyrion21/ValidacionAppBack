import { CamarasService } from './camaras.service';
import { Response } from 'express';
export declare class CamarasController {
    private readonly camarasService;
    constructor(camarasService: CamarasService);
    getCamaras(codFri: string, res: Response): Promise<Response<any, Record<string, any>>>;
}
