import { Module } from '@nestjs/common';
import { BannerService } from './services';
import { BannerResolver } from './resolvers';

@Module({
  providers: [BannerResolver, BannerService],
})
export class BannerModule {}
