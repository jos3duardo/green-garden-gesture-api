import { Module } from '@nestjs/common';
import { SunExposureService } from './sun-exposure.service';
import { SunExposureResolver } from './sun-exposure.resolver';

@Module({
  providers: [SunExposureResolver, SunExposureService],
})
export class SunExposureModule {}
