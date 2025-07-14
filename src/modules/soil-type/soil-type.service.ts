import { Injectable } from '@nestjs/common';
import { CreateSoilTypeInput } from './dto/create-soil-type.input';
import { UpdateSoilTypeInput } from './dto/update-soil-type.input';

@Injectable()
export class SoilTypeService {
  create(createSoilTypeInput: CreateSoilTypeInput) {
    return 'This action adds a new soilType';
  }

  findAll() {
    return `This action returns all soilType`;
  }

  findOne(id: number) {
    return `This action returns a #${id} soilType`;
  }

  update(id: number, updateSoilTypeInput: UpdateSoilTypeInput) {
    return `This action updates a #${id} soilType`;
  }

  remove(id: number) {
    return `This action removes a #${id} soilType`;
  }
}
