import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBannerInput, UpdateBannerInput } from '../dto';
import { Banner } from '../entities';
import { uid } from 'uid';

@Injectable()
export class BannerService {
  private banners: Banner[] = [];

  create(createBannerInput: CreateBannerInput): Banner {
    const id = uid();
    const banner: Banner = {
      ...createBannerInput,
      banners_uid: id,
      is_active: true,
      created_at: Date.now(),
      updated_at: Date.now()
    };
    this.banners.push(banner);
    return banner;
  }

  findAll(): Banner[] {
    return this.banners;
  }

  findOne(id: string): Banner {
    const banner = this.banners.find(b => b.banners_uid === id);
    if (!banner) {
      throw new NotFoundException(`Banner with ID ${id} not found`);
    }
    return banner;
  }

  update(id: string, updateBannerInput: UpdateBannerInput): Banner {
    const index = this.banners.findIndex(b => b.banners_uid === id);
    if (index === -1) {
      throw new NotFoundException(`Banner with ID ${id} not found`);
    }

    const existingBanner = this.banners[index];
    const updatedBanner = {
      ...existingBanner,
      ...updateBannerInput,
      updated_at: Date.now()
    };

    // this.banners[index.toString] = updatedBanner;
    return updatedBanner;
  }

  remove(id: string): string {
    const index = this.banners.findIndex(b => b.banners_uid === id);
    if (index === -1) {
      throw new NotFoundException(`Banner with ID ${id} not found`);
    }

    this.banners.splice(index, 1);
    return `Banner with ID ${id} has been removed`;
  }
}
