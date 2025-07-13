import { Test, TestingModule } from '@nestjs/testing';
import { PlantStatusController } from './plant-status.controller';
import { PlantStatusService } from './plant-status.service';

describe('PlantStatusController', () => {
  let controller: PlantStatusController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlantStatusController],
      providers: [PlantStatusService],
    }).compile();

    controller = module.get<PlantStatusController>(PlantStatusController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
