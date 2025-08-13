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
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getHello() {
        return {
            message: 'Validacion App Backend funcionando correctamente',
            timestamp: new Date(),
            server: {
                http: 'http://192.168.7.25:3000',
                https: 'https://192.168.7.25:4000',
            },
            endpoints: [
                'GET /login',
                'POST /login',
                'GET /frios',
                'GET /camaras/:codFri',
                'GET /existencias/:folio',
                'POST /validacion',
                'GET /validacion/folio/:folio',
            ],
            status: 'ONLINE',
        };
    }
    getTest() {
        return {
            message: 'Conexión desde móvil exitosa',
            timestamp: new Date(),
            ip: '192.168.7.25',
            protocol: 'HTTP',
        };
    }
    async login(body) {
        const { user, pass } = body;
        if (!user || !pass) {
            throw new common_1.HttpException('Faltan parámetros', common_1.HttpStatus.BAD_REQUEST);
        }
        try {
            const result = await this.appService.login(user, pass);
            if (!result) {
                throw new common_1.HttpException('Usuario o contraseña incorrectos', common_1.HttpStatus.UNAUTHORIZED);
            }
            else {
                return result;
            }
        }
        catch (e) {
            console.error(e);
            throw new common_1.HttpException('Error interno del servidor', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], AppController.prototype, "getHello", null);
__decorate([
    (0, common_1.Get)('/test'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], AppController.prototype, "getTest", null);
__decorate([
    (0, common_1.Post)('/login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "login", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
//# sourceMappingURL=app.controller.js.map