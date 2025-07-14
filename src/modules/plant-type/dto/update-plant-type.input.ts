import { CreatePlantTypeInput } from './create-plant-type.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePlantTypeInput extends PartialType(CreatePlantTypeInput) {
  @Field(() => Int)
  id: number;
}
