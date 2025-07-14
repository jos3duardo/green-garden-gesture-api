import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PlantCareInstructionsService } from './plant-care-instructions.service';
import { PlantCareInstruction } from './entities/plant-care-instruction.entity';
import { CreatePlantCareInstructionInput } from './dto/create-plant-care-instruction.input';
import { UpdatePlantCareInstructionInput } from './dto/update-plant-care-instruction.input';

@Resolver(() => PlantCareInstruction)
export class PlantCareInstructionsResolver {
  constructor(private readonly plantCareInstructionsService: PlantCareInstructionsService) {}

  @Mutation(() => PlantCareInstruction)
  createPlantCareInstruction(@Args('createPlantCareInstructionInput') createPlantCareInstructionInput: CreatePlantCareInstructionInput) {
    return this.plantCareInstructionsService.create(createPlantCareInstructionInput);
  }

  @Query(() => [PlantCareInstruction], { name: 'plantCareInstructions' })
  findAll() {
    return this.plantCareInstructionsService.findAll();
  }

  @Query(() => PlantCareInstruction, { name: 'plantCareInstruction' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.plantCareInstructionsService.findOne(id);
  }

  @Mutation(() => PlantCareInstruction)
  updatePlantCareInstruction(@Args('updatePlantCareInstructionInput') updatePlantCareInstructionInput: UpdatePlantCareInstructionInput) {
    return this.plantCareInstructionsService.update(updatePlantCareInstructionInput.id, updatePlantCareInstructionInput);
  }

  @Mutation(() => PlantCareInstruction)
  removePlantCareInstruction(@Args('id', { type: () => Int }) id: number) {
    return this.plantCareInstructionsService.remove(id);
  }
}
