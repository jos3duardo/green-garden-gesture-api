import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PlantTypeService } from './plant-type.service';
import { PlantType } from './entities/plant-type.entity';
import { CreatePlantTypeInput } from './dto/create-plant-type.input';
import { UpdatePlantTypeInput } from './dto/update-plant-type.input';

@Resolver(() => PlantType)
export class PlantTypeResolver {
  constructor(private readonly plantTypeService: PlantTypeService) {}

  @Mutation(() => PlantType)
  createPlantType(@Args('createPlantTypeInput') createPlantTypeInput: CreatePlantTypeInput) {
    return this.plantTypeService.create(createPlantTypeInput);
  }

  @Query(() => [PlantType], { name: 'plantType' })
  findAll() {
    return this.plantTypeService.findAll();
  }

  @Query(() => PlantType, { name: 'plantType' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.plantTypeService.findOne(id);
  }

  @Mutation(() => PlantType)
  updatePlantType(@Args('updatePlantTypeInput') updatePlantTypeInput: UpdatePlantTypeInput) {
    return this.plantTypeService.update(updatePlantTypeInput.id, updatePlantTypeInput);
  }

  @Mutation(() => PlantType)
  removePlantType(@Args('id', { type: () => Int }) id: number) {
    return this.plantTypeService.remove(id);
  }
}
