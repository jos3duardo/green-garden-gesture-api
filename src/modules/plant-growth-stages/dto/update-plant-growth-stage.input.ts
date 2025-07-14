import { CreatePlantGrowthStageInput } from './create-plant-growth-stage.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePlantGrowthStageInput extends PartialType(CreatePlantGrowthStageInput) {
  @Field(() => Int)
  id: number;
}
