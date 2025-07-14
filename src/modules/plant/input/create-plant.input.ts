import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class CreatePlantInput {
  @Field({ description: 'Plant name' })
  @IsNotEmpty({ message: 'name is required' })
  name: string;

  @Field({ description: 'Plant type' })
  type: string;

  @Field({ description: 'Plant planted Date' })
  plantedDate: Date;

  @Field({ description: 'Plant location' })
  location: string;

  @Field({ description: 'Plant soil Type' })
  soilType: string;

  @Field({ description: 'Plant sun Exposure' })
  sunExposure: string;

  @Field({ description: 'Plant watering Frequency' })
  wateringFrequency: string;

  @Field({ description: 'Plant status' })
  status: string;
}
