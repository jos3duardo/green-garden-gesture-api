import { Test, TestingModule } from '@nestjs/testing';
import { SunExposureService } from './sun-exposure.service';

describe('SunExposureService', () => {
  let service: SunExposureService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SunExposureService],
    }).compile();

    service = module.get<SunExposureService>(SunExposureService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
