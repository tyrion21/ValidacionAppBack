"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateExistenciaDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_existencia_dto_1 = require("./create-existencia.dto");
class UpdateExistenciaDto extends (0, mapped_types_1.PartialType)(create_existencia_dto_1.CreateExistenciaDto) {
}
exports.UpdateExistenciaDto = UpdateExistenciaDto;
//# sourceMappingURL=update-existencia.dto.js.map