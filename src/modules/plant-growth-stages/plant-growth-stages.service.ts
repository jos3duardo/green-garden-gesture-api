import { Injectable } from '@nestjs/common';
import { CreatePlantGrowthStageInput } from './dto/create-plant-growth-stage.input';
import { UpdatePlantGrowthStageInput } from './dto/update-plant-growth-stage.input';

@Injectable()
export class PlantGrowthStagesService {
  create(createPlantGrowthStageInput: CreatePlantGrowthStageInput) {
    return 'This action adds a new plantGrowthStage';
  }

  findAll() {
    return `This action returns all plantGrowthStages`;
  }

  findOne(id: number) {
    return `This action returns a #${id} plantGrowthStage`;
  }

  update(id: number, updatePlantGrowthStageInput: UpdatePlantGrowthStageInput) {
    return `This action updates a #${id} plantGrowthStage`;
  }

  remove(id: number) {
    return `This action removes a #${id} plantGrowthStage`;
  }
}
