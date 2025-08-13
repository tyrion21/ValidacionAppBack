"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFrioDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_frio_dto_1 = require("./create-frio.dto");
class UpdateFrioDto extends (0, mapped_types_1.PartialType)(create_frio_dto_1.CreateFrioDto) {
}
exports.UpdateFrioDto = UpdateFrioDto;
//# sourceMappingURL=update-frio.dto.js.map