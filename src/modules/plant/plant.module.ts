import { Module } from '@nestjs/common';
import { PlantService } from './services/plant.service';
import {
  NestjsQueryGraphQLModule,
  PagingStrategies,
} from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Plant } from '@modules/plant/entities/plant.entity';
import { PlantType } from '@modules/plant/entities/plant.type';
import { FileModule } from '@modules/file/file.module';
import { PlantResolver } from '@modules/plant/resolvers/plant.resolver';

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
    FileModule,
  ],
  providers: [PlantResolver, PlantService],
})
export class PlantModule {}
