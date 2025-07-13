import { PartialType } from '@nestjs/mapped-types';
import { CreatePlantStatusDto } from './create-plant-status.dto';

export class UpdatePlantStatusDto extends PartialType(CreatePlantStatusDto) {}
