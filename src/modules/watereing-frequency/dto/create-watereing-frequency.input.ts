import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateWatereingFrequencyInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
