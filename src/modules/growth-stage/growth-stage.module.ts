import { Module } from '@nestjs/common';
import { GrowthStageService } from './growth-stage.service';
import { GrowthStageController } from './growth-stage.controller';

@Module({
  controllers: [GrowthStageController],
  providers: [GrowthStageService],
})
export class GrowthStageModule {}
