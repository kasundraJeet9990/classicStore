import { Module } from '@nestjs/common';
import { BannerService , BannerClickService } from './service';
import { BannerResolver, BannerClickResolver } from './resolvers';

@Module({
  providers: [BannerResolver, BannerService, BannerClickResolver , BannerClickService],
})
export class BannerModule { }
