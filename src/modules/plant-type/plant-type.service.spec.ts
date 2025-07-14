import { Test, TestingModule } from '@nestjs/testing';
import { PlantTypeService } from './plant-type.service';

describe('PlantTypeService', () => {
  let service: PlantTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlantTypeService],
    }).compile();

    service = module.get<PlantTypeService>(PlantTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
