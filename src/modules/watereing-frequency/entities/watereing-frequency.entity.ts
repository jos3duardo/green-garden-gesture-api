import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class WatereingFrequency {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
