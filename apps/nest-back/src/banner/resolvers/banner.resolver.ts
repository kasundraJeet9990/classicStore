import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { BannerService } from '../service';
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
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.bannerService.findOne(id);
  }

  @Mutation(() => Banner)
  updateBanner(@Args('updateBannerInput') updateBannerInput: UpdateBannerInput) {
    return this.bannerService.update(updateBannerInput.banner_uid, updateBannerInput);
  }

  @Mutation(() => Banner)
  removeBanner(@Args('id', { type: () => Int }) id: number) {
    return this.bannerService.remove(id);
  }
}
