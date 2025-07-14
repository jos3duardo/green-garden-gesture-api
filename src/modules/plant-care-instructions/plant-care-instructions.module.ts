import { Module } from '@nestjs/common';
import { PlantCareInstructionsService } from './plant-care-instructions.service';
import { PlantCareInstructionsResolver } from './plant-care-instructions.resolver';

@Module({
  providers: [PlantCareInstructionsResolver, PlantCareInstructionsService],
})
export class PlantCareInstructionsModule {}
