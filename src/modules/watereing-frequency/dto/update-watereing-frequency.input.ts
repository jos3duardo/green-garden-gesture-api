import { CreateWatereingFrequencyInput } from './create-watereing-frequency.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateWatereingFrequencyInput extends PartialType(CreateWatereingFrequencyInput) {
  @Field(() => Int)
  id: number;
}
