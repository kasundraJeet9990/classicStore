import { Injectable } from '@nestjs/common';
import { CreateBannerClickInput } from '../dto';

@Injectable()
export class BannerClickService {
  create(createBannerInput: CreateBannerClickInput) {
    return 'This action adds a new banner';
  }

  findAll() {
    return `This action returns all banner`;
  }
}
