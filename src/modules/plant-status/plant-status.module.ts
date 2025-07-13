import { Module } from '@nestjs/common';
import { PlantStatusService } from './plant-status.service';
import { PlantStatusController } from './plant-status.controller';

@Module({
  controllers: [PlantStatusController],
  providers: [PlantStatusService],
})
export class PlantStatusModule {}
