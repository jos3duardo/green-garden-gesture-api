import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreatePlantGrowthStageInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
