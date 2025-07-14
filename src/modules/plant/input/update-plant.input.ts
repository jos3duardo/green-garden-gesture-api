import { CreatePlantInput } from './create-plant.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePlantInput extends PartialType(CreatePlantInput) {
  @Field(() => Int)
  id: number;
}
