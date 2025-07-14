import { Field, ObjectType } from '@nestjs/graphql';
import { BaseDto } from '@common/entities';

@ObjectType('Plant')
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
