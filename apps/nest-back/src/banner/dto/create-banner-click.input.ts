import { InputType, Field, Int } from '@nestjs/graphql';

@InputType({ description: 'Input data for tracking a banner click' })
export class CreateBannerClickInput {
  @Field(() => Int, { description: 'ID of the clicked banner' })
  banners_uid: number;

  @Field(() => Int, { description: 'ID of the user who clicked the banner' })
  user_uid: number;
}