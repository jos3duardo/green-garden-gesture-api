import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class SoilType {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
