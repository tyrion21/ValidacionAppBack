"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateValidacionDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_validacion_dto_1 = require("./create-validacion.dto");
class UpdateValidacionDto extends (0, mapped_types_1.PartialType)(create_validacion_dto_1.CreateValidacionDto) {
}
exports.UpdateValidacionDto = UpdateValidacionDto;
//# sourceMappingURL=update-validacion.dto.js.map