import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { CreateBannerInput , UpdateBannerInput } from '../dto';

@Injectable()
export class BannerService {
  constructor(private prisma: PrismaService) {}

  create(createBannerInput: CreateBannerInput) {
    return 'This action adds a new banner';
  }

  findAll() {
    return this.prisma.banner.findMany({
      include: {
        BannerClicks: true
      }
    });
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
