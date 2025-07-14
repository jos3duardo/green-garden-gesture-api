import { Injectable } from '@nestjs/common';
import { CreatePlantTypeInput } from './dto/create-plant-type.input';
import { UpdatePlantTypeInput } from './dto/update-plant-type.input';

@Injectable()
export class PlantTypeService {
  create(createPlantTypeInput: CreatePlantTypeInput) {
    return 'This action adds a new plantType';
  }

  findAll() {
    return `This action returns all plantType`;
  }

  findOne(id: number) {
    return `This action returns a #${id} plantType`;
  }

  update(id: number, updatePlantTypeInput: UpdatePlantTypeInput) {
    return `This action updates a #${id} plantType`;
  }

  remove(id: number) {
    return `This action removes a #${id} plantType`;
  }
}
