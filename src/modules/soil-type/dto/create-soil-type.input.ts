import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateSoilTypeInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
