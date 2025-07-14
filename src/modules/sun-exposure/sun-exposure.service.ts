import { Injectable } from '@nestjs/common';
import { CreateSunExposureInput } from './dto/create-sun-exposure.input';
import { UpdateSunExposureInput } from './dto/update-sun-exposure.input';

@Injectable()
export class SunExposureService {
  create(createSunExposureInput: CreateSunExposureInput) {
    return 'This action adds a new sunExposure';
  }

  findAll() {
    return `This action returns all sunExposure`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sunExposure`;
  }

  update(id: number, updateSunExposureInput: UpdateSunExposureInput) {
    return `This action updates a #${id} sunExposure`;
  }

  remove(id: number) {
    return `This action removes a #${id} sunExposure`;
  }
}
