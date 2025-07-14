import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreatePlantInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
