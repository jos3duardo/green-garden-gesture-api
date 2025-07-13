import { Test, TestingModule } from '@nestjs/testing';
import { PlantStatusService } from './plant-status.service';

describe('PlantStatusService', () => {
  let service: PlantStatusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlantStatusService],
    }).compile();

    service = module.get<PlantStatusService>(PlantStatusService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
