import { Injectable } from '@nestjs/common';
import { CreatePlantInput } from '@modules/plant/input/create-plant.input';
import { UpdatePlantInput } from '@modules/plant/input/update-plant.input';

@Injectable()
export class PlantService {
  create(createPlantInput: CreatePlantInput) {
    return 'This action adds a new plant';
  }

  findAll() {
    return `This action returns all plant`;
  }

  findOne(id: number) {
    return `This action returns a #${id} plant`;
  }

  update(id: number, updatePlantInput: UpdatePlantInput) {
    return `This action updates a #${id} plant`;
  }

  remove(id: number) {
    return `This action removes a #${id} plant`;
  }
}
