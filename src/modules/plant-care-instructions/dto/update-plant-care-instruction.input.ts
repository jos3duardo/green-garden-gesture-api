import { CreatePlantCareInstructionInput } from './create-plant-care-instruction.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePlantCareInstructionInput extends PartialType(CreatePlantCareInstructionInput) {
  @Field(() => Int)
  id: number;
}
