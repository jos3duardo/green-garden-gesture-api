import { Test, TestingModule } from '@nestjs/testing';
import { GrowthStageController } from './growth-stage.controller';
import { GrowthStageService } from './growth-stage.service';

describe('GrowthStageController', () => {
  let controller: GrowthStageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GrowthStageController],
      providers: [GrowthStageService],
    }).compile();

    controller = module.get<GrowthStageController>(GrowthStageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
