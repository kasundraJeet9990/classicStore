import { CreateBannerInput } from './create-banner.input';
import { InputType, Field, ID, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateBannerInput extends PartialType(CreateBannerInput) {
  @Field(() => ID)
  banner_uid: string;
}
