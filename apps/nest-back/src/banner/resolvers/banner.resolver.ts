import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { BannerService } from '../services';
import { Banner } from '../entities';
import { CreateBannerInput , UpdateBannerInput } from '../dto';

@Resolver(() => Banner)
export class BannerResolver {
  constructor(private readonly bannerService: BannerService) {}

  @Mutation(() => Banner)
  createBanner(@Args('createBannerInput') createBannerInput: CreateBannerInput) {
    return this.bannerService.create(createBannerInput);
  }

  @Query(() => [Banner], { name: 'banners' })
  findAll() {
    return this.bannerService.findAll();
  }

  @Query(() => Banner, { name: 'banner' })
  findOne(@Args('banner_id', { type: () => Float }) id: string) {
    return this.bannerService.findOne(id);
  }

  @Mutation(() => Banner)
  updateBanner(@Args('updateBanner') updateBannerInput: UpdateBannerInput) {
    return this.bannerService.update(updateBannerInput.banners_uid, updateBannerInput);
  }

  @Mutation(() => Banner)
  removeBanner(@Args('banner_id', { type: () => Float }) id: string) {
    return this.bannerService.remove(id);
  }
}
