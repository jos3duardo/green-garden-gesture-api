import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class PlantType {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
