import { Module } from '@nestjs/common';
import { PlantService } from './plant.service';
import {
  NestjsQueryGraphQLModule,
  PagingStrategies,
} from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Plant } from '@modules/plant/entities/plant.entity';
import { PlantType } from '@modules/plant/entities/plant.type';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Plant])],
      resolvers: [
        {
          pagingStrategy: PagingStrategies.NONE,
          DTOClass: PlantType,
          EntityClass: Plant,
          create: { disabled: true },
          update: { disabled: true },
          delete: { disabled: true },
        },
      ],
    }),
  ],
  providers: [PlantService],
})
export class PlantModule {}
