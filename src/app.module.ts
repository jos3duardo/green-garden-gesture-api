import { Module } from '@nestjs/common';
import { PlantStatusModule } from '@modules/plant-status/plant-status.module';
import { GrowthStageModule } from '@modules/growth-stage/growth-stage.module';
import { PlantModule } from '@modules/plant/plant.module';
import { UserModule } from '@modules/user/user.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions, gqlConfig } from '@config/index';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriverConfig } from '@nestjs/apollo';
import { FileModule } from './modules/file/file.module';
import { HealthModule } from './modules/health/health.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env'],
    }),
    TypeOrmModule.forRoot(dataSourceOptions),
    GraphQLModule.forRoot<ApolloDriverConfig>(gqlConfig),
    PlantStatusModule,
    GrowthStageModule,
    PlantModule,
    UserModule,
    FileModule,
    HealthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
