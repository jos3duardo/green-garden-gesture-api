import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PlantGrowthStagesService } from './plant-growth-stages.service';
import { PlantGrowthStage } from './entities/plant-growth-stage.entity';
import { CreatePlantGrowthStageInput } from './dto/create-plant-growth-stage.input';
import { UpdatePlantGrowthStageInput } from './dto/update-plant-growth-stage.input';

@Resolver(() => PlantGrowthStage)
export class PlantGrowthStagesResolver {
  constructor(private readonly plantGrowthStagesService: PlantGrowthStagesService) {}

  @Mutation(() => PlantGrowthStage)
  createPlantGrowthStage(@Args('createPlantGrowthStageInput') createPlantGrowthStageInput: CreatePlantGrowthStageInput) {
    return this.plantGrowthStagesService.create(createPlantGrowthStageInput);
  }

  @Query(() => [PlantGrowthStage], { name: 'plantGrowthStages' })
  findAll() {
    return this.plantGrowthStagesService.findAll();
  }

  @Query(() => PlantGrowthStage, { name: 'plantGrowthStage' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.plantGrowthStagesService.findOne(id);
  }

  @Mutation(() => PlantGrowthStage)
  updatePlantGrowthStage(@Args('updatePlantGrowthStageInput') updatePlantGrowthStageInput: UpdatePlantGrowthStageInput) {
    return this.plantGrowthStagesService.update(updatePlantGrowthStageInput.id, updatePlantGrowthStageInput);
  }

  @Mutation(() => PlantGrowthStage)
  removePlantGrowthStage(@Args('id', { type: () => Int }) id: number) {
    return this.plantGrowthStagesService.remove(id);
  }
}
