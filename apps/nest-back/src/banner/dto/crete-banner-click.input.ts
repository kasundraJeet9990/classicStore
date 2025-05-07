import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateBannerClickInput {
  @Field(() => String)
  banner_uid: string;

  @Field(() => String)
  user_uid: string;

  @Field(() => Number)
  clicked_at: number;
}
