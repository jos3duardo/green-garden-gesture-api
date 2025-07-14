import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { FileUpload, GraphQLUpload } from 'graphql-upload-minimal';
import { PlantType } from '@modules/plant/entities/plant.type';
import { PlantService } from '@modules/plant/services/plant.service';
import { CreatePlantInput } from '@modules/plant/input/create-plant.input';
import { Plant } from '@modules/plant/entities/plant.entity';

@Resolver(() => PlantType)
export class PlantResolver {
  constructor(private readonly plantService: PlantService) {}

  @Mutation(() => PlantType)
  async createOnePlant(
    @Args({
      name: 'file',
      type: () => GraphQLUpload,
    })
    fileUpload: FileUpload,
    @Args('input') input: CreatePlantInput,
  ): Promise<Plant> {
    return this.plantService.createOnePlant(input, fileUpload);
  }
}
