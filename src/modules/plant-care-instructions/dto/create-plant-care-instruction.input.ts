import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreatePlantCareInstructionInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
