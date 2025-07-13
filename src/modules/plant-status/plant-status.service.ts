import { Injectable } from '@nestjs/common';
import { CreatePlantStatusDto } from './dto/create-plant-status.dto';
import { UpdatePlantStatusDto } from './dto/update-plant-status.dto';

@Injectable()
export class PlantStatusService {
  create(createPlantStatusDto: CreatePlantStatusDto) {
    return 'This action adds a new plantStatus';
  }

  findAll() {
    return `This action returns all plantStatus`;
  }

  findOne(id: number) {
    return `This action returns a #${id} plantStatus`;
  }

  update(id: number, updatePlantStatusDto: UpdatePlantStatusDto) {
    return `This action updates a #${id} plantStatus`;
  }

  remove(id: number) {
    return `This action removes a #${id} plantStatus`;
  }
}
