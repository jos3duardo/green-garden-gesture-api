import { Module } from '@nestjs/common';
import { WatereingFrequencyService } from './watereing-frequency.service';
import { WatereingFrequencyResolver } from './watereing-frequency.resolver';

@Module({
  providers: [WatereingFrequencyResolver, WatereingFrequencyService],
})
export class WatereingFrequencyModule {}
