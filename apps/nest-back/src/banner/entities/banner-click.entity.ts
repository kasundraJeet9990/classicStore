import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType({ description: 'Tracks user clicks on banners' })
export class BannerClick {
  @Field(() => Int, { description: 'Unique identifier for the banner click event' })
  banner_clicks_uid: number;

  @Field(() => Int, { description: 'Identifier of the clicked banner' })
  banners_uid: number;

  @Field(() => Int, { description: 'Identifier of the user who clicked the banner' })
  user_uid: number;

  @Field(() => Int, { description: 'Unix timestamp when the banner was clicked' })
  clicked_at: number;
}