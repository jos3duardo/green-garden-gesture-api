import { Module } from '@nestjs/common';
import { PlantStatusModule } from './modules/plant-status/plant-status.module';
import { GrowthStageModule } from './modules/growth-stage/growth-stage.module';
import { PlantModule } from './modules/plant/plant.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [PlantStatusModule, GrowthStageModule, PlantModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
