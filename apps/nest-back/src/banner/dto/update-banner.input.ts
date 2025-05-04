import { CreateBannerInput } from './create-banner.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateBannerInput extends PartialType(CreateBannerInput) {
  @Field(() => Int, { description: 'Unique identifier of the banner to update' })
  banners_uid: string;
}
