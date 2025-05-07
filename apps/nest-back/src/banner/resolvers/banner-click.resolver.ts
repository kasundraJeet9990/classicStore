import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { BannerClickService } from '../service';
import { BannerClick } from '../entities';
import { CreateBannerClickInput } from '../dto';

@Resolver(() => BannerClick)
export class BannerClickResolver {
  constructor(private readonly bannerClickService: BannerClickService) {}

  @Mutation(() => BannerClick)
  createBanner(@Args('createBannerClickInput') createBannerInput: CreateBannerClickInput) {
    return this.bannerClickService.create(createBannerInput);
  }

  @Query(() => [BannerClick], { name: 'bannerClick' })
  findAll() {
    return this.bannerClickService.findAll();
  }
}
