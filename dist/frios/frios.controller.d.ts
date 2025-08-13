import { FriosService } from './frios.service';
import { Response } from 'express';
export declare class FriosController {
    private readonly friosService;
    constructor(friosService: FriosService);
    getFrios(res: Response): Promise<Response<any, Record<string, any>>>;
}
