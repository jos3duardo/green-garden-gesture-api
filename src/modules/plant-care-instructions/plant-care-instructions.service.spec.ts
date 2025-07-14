import { Test, TestingModule } from '@nestjs/testing';
import { PlantCareInstructionsService } from './plant-care-instructions.service';

describe('PlantCareInstructionsService', () => {
  let service: PlantCareInstructionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlantCareInstructionsService],
    }).compile();

    service = module.get<PlantCareInstructionsService>(PlantCareInstructionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
