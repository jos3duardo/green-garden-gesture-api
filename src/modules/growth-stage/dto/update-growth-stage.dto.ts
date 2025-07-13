import { PartialType } from '@nestjs/mapped-types';
import { CreateGrowthStageDto } from './create-growth-stage.dto';

export class UpdateGrowthStageDto extends PartialType(CreateGrowthStageDto) {}
