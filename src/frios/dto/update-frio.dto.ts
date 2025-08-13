import { PartialType } from '@nestjs/mapped-types';
import { CreateFrioDto } from './create-frio.dto';

export class UpdateFrioDto extends PartialType(CreateFrioDto) {}
