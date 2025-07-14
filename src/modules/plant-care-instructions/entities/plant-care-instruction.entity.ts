import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class PlantCareInstruction {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
