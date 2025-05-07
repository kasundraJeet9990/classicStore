import { Injectable } from '@nestjs/common';
import { CreateBannerInput , UpdateBannerInput } from '../dto';

@Injectable()
export class BannerService {
  create(createBannerInput: CreateBannerInput) {
    return 'This action adds a new banner';
  }

  findAll() {
    return [{banner_uid: '122'}];
  }

  findOne(id: number) {
    return `This action returns a #${id} banner`;
  }

  update(id: string, updateBannerInput: UpdateBannerInput) {
    return `This action updates a #${id} banner`;
  }

  remove(id: number) {
    return `This action removes a #${id} banner`;
  }
}
