import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class SunExposure {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
