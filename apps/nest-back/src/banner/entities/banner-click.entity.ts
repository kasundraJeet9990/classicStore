import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class BannerClick {
  @Field(() => ID)
  banner_clicks_uid: string;

  @Field()
  banner_uid: string;

  @Field()
  user_uid: string;

  @Field(() => Number)
  clicked_at: number;
}
