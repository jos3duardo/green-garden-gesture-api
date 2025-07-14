import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class PlantGrowthStage {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
