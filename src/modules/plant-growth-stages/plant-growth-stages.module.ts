import { Module } from '@nestjs/common';
import { PlantGrowthStagesService } from './plant-growth-stages.service';
import { PlantGrowthStagesResolver } from './plant-growth-stages.resolver';

@Module({
  providers: [PlantGrowthStagesResolver, PlantGrowthStagesService],
})
export class PlantGrowthStagesModule {}
