import { Module } from '@nestjs/common';
import { PlantStatusModule } from '@modules/plant-status/plant-status.module';
import { PlantModule } from '@modules/plant/plant.module';
import { UserModule } from '@modules/user/user.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions, gqlConfig } from '@config/index';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriverConfig } from '@nestjs/apollo';
import { FileModule } from './modules/file/file.module';
import { HealthModule } from './modules/health/health.module';
import { SoilTypeModule } from './modules/soil-type/soil-type.module';
import { PlantTypeModule } from './modules/plant-type/plant-type.module';
import { SunExposureModule } from './modules/sun-exposure/sun-exposure.module';
import { WatereingFrequencyModule } from './modules/watereing-frequency/watereing-frequency.module';
import { PlantCareInstructionsModule } from './modules/plant-care-instructions/plant-care-instructions.module';
import { PlantGrowthStagesModule } from './modules/plant-growth-stages/plant-growth-stages.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env'],
    }),
    TypeOrmModule.forRoot(dataSourceOptions),
    GraphQLModule.forRoot<ApolloDriverConfig>(gqlConfig),
    PlantStatusModule,
    PlantModule,
    UserModule,
    FileModule,
    HealthModule,
    SoilTypeModule,
    PlantTypeModule,
    SunExposureModule,
    WatereingFrequencyModule,
    PlantCareInstructionsModule,
    PlantGrowthStagesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
