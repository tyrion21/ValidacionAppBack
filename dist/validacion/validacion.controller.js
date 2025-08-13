"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidacionController = void 0;
const common_1 = require("@nestjs/common");
const validacion_service_1 = require("./validacion.service");
const create_validacion_dto_1 = require("./dto/create-validacion.dto");
let ValidacionController = class ValidacionController {
    constructor(validacionService) {
        this.validacionService = validacionService;
    }
    create(createValidacionDto) {
        return this.validacionService.create(createValidacionDto);
    }
    async getFolioValidado(folio) {
        try {
            const validacion = await this.validacionService.getFolioValidado(folio);
            return validacion;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException('Ocurrió un error al buscar el folio');
            }
        }
    }
    async getCajasPacking() {
        try {
            const resultado = await this.validacionService.getCajasPacking();
            if (!resultado || resultado.length === 0) {
                return {
                    message: 'No se encontraron registros de cajas packing',
                    data: [],
                };
            }
            return {
                success: true,
                count: resultado.length,
                data: resultado,
            };
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(`Error al procesar la solicitud: ${error.message}`);
        }
    }
    async getCajasPackingSummary(fecha, linea) {
        try {
            const resultado = await this.validacionService.getCajasPackingSummary(fecha, linea);
            if (!resultado) {
                return {
                    message: 'No se encontraron registros de cajas packing con los filtros especificados',
                    data: {
                        totalFolios: 0,
                        totalCajas: 0,
                    },
                };
            }
            return {
                success: true,
                data: resultado,
            };
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(`Error al procesar la solicitud: ${error.message}`);
        }
    }
    async getCajasValidadasSummary(fecha, linea) {
        try {
            const resultado = await this.validacionService.getCajasValidadasSummary(fecha, linea);
            if (!resultado) {
                return {
                    message: 'No se encontraron registros de cajas packing con los filtros especificados',
                    data: {
                        totalFolios: 0,
                        totalCajas: 0,
                    },
                };
            }
            return {
                success: true,
                data: resultado,
            };
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(`Error al procesar la solicitud: ${error.message}`);
        }
    }
    async getCajasDesviacionesSummary(fecha, linea) {
        try {
            const resultado = await this.validacionService.getCajasDesviacionesSummary(fecha, linea);
            if (!resultado) {
                return {
                    message: 'No se encontraron registros de desviaciones con los filtros especificados',
                    data: {
                        totalFolios: 0,
                        totalCajas: 0,
                    },
                };
            }
            return {
                success: true,
                data: resultado,
            };
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(`Error al procesar la solicitud: ${error.message}`);
        }
    }
    async getMotivosRechazo() {
        try {
            const motivos = await this.validacionService.getMotivosRechazo();
            return {
                success: true,
                count: motivos.length,
                data: motivos
            };
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(`Error al obtener motivos de rechazo: ${error.message}`);
        }
    }
    async rechazarPallet(rechazoDto) {
        try {
            console.log('Received rejection request:', JSON.stringify(rechazoDto, null, 2));
            console.log('Tipo de datos recibidos:');
            console.log('- Folio:', typeof rechazoDto.Folio);
            console.log('- Especie:', typeof rechazoDto.Especie);
            console.log('- Cajas:', typeof rechazoDto.Cajas);
            console.log('- Motivos:', Array.isArray(rechazoDto.Motivos) ? 'array' : typeof rechazoDto.Motivos);
            if (!rechazoDto.Folio) {
                throw new Error('El folio es obligatorio');
            }
            if (!Array.isArray(rechazoDto.Motivos) || rechazoDto.Motivos.length === 0) {
                throw new Error('Debe seleccionar al menos un motivo de rechazo');
            }
            const resultado = await this.validacionService.createRechazo(rechazoDto);
            return {
                success: true,
                message: 'Pallet rechazado correctamente',
                data: resultado
            };
        }
        catch (error) {
            console.error('Error processing rejection:', error);
            if (error instanceof common_1.NotFoundException || error.status === 404) {
                throw error;
            }
            else if (error.status === 409) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException(`Error al registrar rechazo: ${error.message}`);
            }
        }
    }
    async verificarRechazo(folio) {
        try {
            const resultado = await this.validacionService.verificarRechazoPorFolio(folio);
            return {
                success: true,
                data: resultado
            };
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(`Error al verificar estado de rechazo: ${error.message}`);
        }
    }
    async actualizarRechazo(folio) {
        try {
            const resultado = await this.validacionService.actualizarEstadoRechazo(folio);
            return {
                success: true,
                data: resultado
            };
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(`Error al actualizar estado de rechazo: ${error.message}`);
        }
    }
    async getInformeDiario(fecha, estado) {
        try {
            const resultado = await this.validacionService.getInformeDiario(fecha, estado);
            if (!resultado || resultado.length === 0) {
                return {
                    message: 'No se encontraron registros para el informe diario con los filtros especificados',
                    data: [],
                };
            }
            return {
                success: true,
                count: resultado.length,
                data: resultado,
            };
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(`Error al procesar la solicitud de informe diario: ${error.message}`);
        }
    }
    async verificarValidacion(folio) {
        try {
            const resultado = await this.validacionService.verificarValidacionPorFolio(folio);
            return {
                success: true,
                data: resultado
            };
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(`Error al verificar estado de validación: ${error.message}`);
        }
    }
};
exports.ValidacionController = ValidacionController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_validacion_dto_1.CreateValidacionDto]),
    __metadata("design:returntype", void 0)
], ValidacionController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('folio/:folio'),
    __param(0, (0, common_1.Param)('folio')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ValidacionController.prototype, "getFolioValidado", null);
__decorate([
    (0, common_1.Get)('cajas-packing'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ValidacionController.prototype, "getCajasPacking", null);
__decorate([
    (0, common_1.Get)('cajas-packing/summary'),
    __param(0, (0, common_1.Query)('fecha')),
    __param(1, (0, common_1.Query)('linea')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ValidacionController.prototype, "getCajasPackingSummary", null);
__decorate([
    (0, common_1.Get)('cajas-validadas/summary'),
    __param(0, (0, common_1.Query)('fecha')),
    __param(1, (0, common_1.Query)('linea')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ValidacionController.prototype, "getCajasValidadasSummary", null);
__decorate([
    (0, common_1.Get)('cajas-desviaciones/summary'),
    __param(0, (0, common_1.Query)('fecha')),
    __param(1, (0, common_1.Query)('linea')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ValidacionController.prototype, "getCajasDesviacionesSummary", null);
__decorate([
    (0, common_1.Get)('motivos-rechazo'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ValidacionController.prototype, "getMotivosRechazo", null);
__decorate([
    (0, common_1.Post)('rechazar'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ValidacionController.prototype, "rechazarPallet", null);
__decorate([
    (0, common_1.Get)('verificar-rechazo/:folio'),
    __param(0, (0, common_1.Param)('folio')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ValidacionController.prototype, "verificarRechazo", null);
__decorate([
    (0, common_1.Patch)('actualizar-rechazo/:folio'),
    __param(0, (0, common_1.Param)('folio')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ValidacionController.prototype, "actualizarRechazo", null);
__decorate([
    (0, common_1.Get)('informe-diario'),
    __param(0, (0, common_1.Query)('fecha')),
    __param(1, (0, common_1.Query)('estado')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ValidacionController.prototype, "getInformeDiario", null);
__decorate([
    (0, common_1.Get)('verificar-validacion/:folio'),
    __param(0, (0, common_1.Param)('folio')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ValidacionController.prototype, "verificarValidacion", null);
exports.ValidacionController = ValidacionController = __decorate([
    (0, common_1.Controller)('validacion'),
    __metadata("design:paramtypes", [validacion_service_1.ValidacionService])
], ValidacionController);
//# sourceMappingURL=validacion.controller.js.map