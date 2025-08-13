"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCamaraDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_camara_dto_1 = require("./create-camara.dto");
class UpdateCamaraDto extends (0, mapped_types_1.PartialType)(create_camara_dto_1.CreateCamaraDto) {
}
exports.UpdateCamaraDto = UpdateCamaraDto;
//# sourceMappingURL=update-camara.dto.js.map