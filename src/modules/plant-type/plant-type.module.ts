import { Module } from '@nestjs/common';
import { PlantTypeService } from './plant-type.service';
import { PlantTypeResolver } from './plant-type.resolver';

@Module({
  providers: [PlantTypeResolver, PlantTypeService],
})
export class PlantTypeModule {}
