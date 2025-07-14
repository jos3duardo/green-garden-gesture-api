import { Injectable } from '@nestjs/common';
import { CreateWatereingFrequencyInput } from './dto/create-watereing-frequency.input';
import { UpdateWatereingFrequencyInput } from './dto/update-watereing-frequency.input';

@Injectable()
export class WatereingFrequencyService {
  create(createWatereingFrequencyInput: CreateWatereingFrequencyInput) {
    return 'This action adds a new watereingFrequency';
  }

  findAll() {
    return `This action returns all watereingFrequency`;
  }

  findOne(id: number) {
    return `This action returns a #${id} watereingFrequency`;
  }

  update(id: number, updateWatereingFrequencyInput: UpdateWatereingFrequencyInput) {
    return `This action updates a #${id} watereingFrequency`;
  }

  remove(id: number) {
    return `This action removes a #${id} watereingFrequency`;
  }
}
