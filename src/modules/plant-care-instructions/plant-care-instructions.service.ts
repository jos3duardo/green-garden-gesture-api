import { Injectable } from '@nestjs/common';
import { CreatePlantCareInstructionInput } from './dto/create-plant-care-instruction.input';
import { UpdatePlantCareInstructionInput } from './dto/update-plant-care-instruction.input';

@Injectable()
export class PlantCareInstructionsService {
  create(createPlantCareInstructionInput: CreatePlantCareInstructionInput) {
    return 'This action adds a new plantCareInstruction';
  }

  findAll() {
    return `This action returns all plantCareInstructions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} plantCareInstruction`;
  }

  update(id: number, updatePlantCareInstructionInput: UpdatePlantCareInstructionInput) {
    return `This action updates a #${id} plantCareInstruction`;
  }

  remove(id: number) {
    return `This action removes a #${id} plantCareInstruction`;
  }
}
