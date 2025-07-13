import { Injectable } from '@nestjs/common';
import { CreateGrowthStageDto } from './dto/create-growth-stage.dto';
import { UpdateGrowthStageDto } from './dto/update-growth-stage.dto';

@Injectable()
export class GrowthStageService {
  create(createGrowthStageDto: CreateGrowthStageDto) {
    return 'This action adds a new growthStage';
  }

  findAll() {
    return `This action returns all growthStage`;
  }

  findOne(id: number) {
    return `This action returns a #${id} growthStage`;
  }

  update(id: number, updateGrowthStageDto: UpdateGrowthStageDto) {
    return `This action updates a #${id} growthStage`;
  }

  remove(id: number) {
    return `This action removes a #${id} growthStage`;
  }
}
