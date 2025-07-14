import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreatePlantTypeInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
