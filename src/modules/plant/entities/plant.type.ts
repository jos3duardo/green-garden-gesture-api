import { Field, ObjectType } from '@nestjs/graphql';
import { BaseDto } from '@common/entities';
import { FilterableRelation } from '@nestjs-query/query-graphql';
import { FileType } from '@modules/file/entities/file.type';
import { relationOptions } from '@common/helpers';

@ObjectType('Plant')
@FilterableRelation('file', () => FileType, relationOptions)
export class PlantType extends BaseDto {
  @Field()
  name: string;

  @Field()
  type: string;

  @Field()
  plantedDate: Date;

  @Field()
  location: string;

  @Field()
  soilType: string;

  @Field()
  sunExposure: string;

  @Field()
  wateringFrequency: string;

  @Field()
  status: string;
}
