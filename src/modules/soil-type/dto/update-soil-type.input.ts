import { CreateSoilTypeInput } from './create-soil-type.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateSoilTypeInput extends PartialType(CreateSoilTypeInput) {
  @Field(() => Int)
  id: number;
}
