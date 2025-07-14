import { Test, TestingModule } from '@nestjs/testing';
import { SoilTypeService } from './soil-type.service';

describe('SoilTypeService', () => {
  let service: SoilTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SoilTypeService],
    }).compile();

    service = module.get<SoilTypeService>(SoilTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
