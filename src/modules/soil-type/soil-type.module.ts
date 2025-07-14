import { Module } from '@nestjs/common';
import { SoilTypeService } from './soil-type.service';
import { SoilTypeResolver } from './soil-type.resolver';

@Module({
  providers: [SoilTypeResolver, SoilTypeService],
})
export class SoilTypeModule {}
