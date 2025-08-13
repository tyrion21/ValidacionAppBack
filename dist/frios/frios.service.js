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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FriosService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let FriosService = class FriosService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getFrios(temporada) {
        return await this.prisma.prismaClient2.fRIOS.findMany({
            where: {
                COD_TEM: temporada,
                OR: [{ COD_FRI: '175619' }, { COD_FRI: '3102213' }],
            },
            select: {
                COD_FRI: true,
                NOM_FRI: true,
            },
        });
    }
};
exports.FriosService = FriosService;
exports.FriosService = FriosService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], FriosService);
//# sourceMappingURL=frios.service.js.map