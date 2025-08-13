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
exports.ExistenciasController = void 0;
const common_1 = require("@nestjs/common");
const existencias_service_1 = require("./existencias.service");
let ExistenciasController = class ExistenciasController {
    constructor(existenciasService) {
        this.existenciasService = existenciasService;
    }
    async getExistencia(folio) {
        try {
            return await this.existenciasService.getExistencia(folio);
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw new common_1.HttpException({
                    status: common_1.HttpStatus.NOT_FOUND,
                    error: error.message,
                }, common_1.HttpStatus.NOT_FOUND);
            }
            else {
                console.error('Unexpected error:', error);
                throw new common_1.HttpException({
                    status: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                    error: 'Ocurrió un error al buscar el folio',
                }, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
    }
    async getMixExistencia(folio) {
        try {
            return await this.existenciasService.getMixExistencia(folio);
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw new common_1.HttpException({
                    status: common_1.HttpStatus.NOT_FOUND,
                    error: error.message,
                }, common_1.HttpStatus.NOT_FOUND);
            }
            else {
                console.error('Unexpected error:', error);
                throw new common_1.HttpException({
                    status: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                    error: 'Ocurrió un error al buscar el folio en otro servicio',
                }, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
    }
};
exports.ExistenciasController = ExistenciasController;
__decorate([
    (0, common_1.Get)(':folio'),
    __param(0, (0, common_1.Param)('folio')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ExistenciasController.prototype, "getExistencia", null);
__decorate([
    (0, common_1.Get)('mixexistencias/:folio'),
    __param(0, (0, common_1.Param)('folio')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ExistenciasController.prototype, "getMixExistencia", null);
exports.ExistenciasController = ExistenciasController = __decorate([
    (0, common_1.Controller)('existencias'),
    __metadata("design:paramtypes", [existencias_service_1.ExistenciasService])
], ExistenciasController);
//# sourceMappingURL=existencias.controller.js.map