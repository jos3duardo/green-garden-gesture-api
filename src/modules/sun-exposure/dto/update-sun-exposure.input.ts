import { CreateSunExposureInput } from './create-sun-exposure.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateSunExposureInput extends PartialType(CreateSunExposureInput) {
  @Field(() => Int)
  id: number;
}
