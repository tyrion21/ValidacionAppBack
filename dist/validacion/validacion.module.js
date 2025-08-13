"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidacionModule = void 0;
const common_1 = require("@nestjs/common");
const validacion_service_1 = require("./validacion.service");
const validacion_controller_1 = require("./validacion.controller");
let ValidacionModule = class ValidacionModule {
};
exports.ValidacionModule = ValidacionModule;
exports.ValidacionModule = ValidacionModule = __decorate([
    (0, common_1.Module)({
        controllers: [validacion_controller_1.ValidacionController],
        providers: [validacion_service_1.ValidacionService],
    })
], ValidacionModule);
//# sourceMappingURL=validacion.module.js.map