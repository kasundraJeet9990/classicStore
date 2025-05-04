import { ObjectType, Field, ID , Float} from '@nestjs/graphql';

@ObjectType({ description: 'Represents a banner displayed in the application' })
export class Banner {
  @Field(() => ID, { description: 'Unique identifier for the banner' })
  banners_uid: string;

  @Field({ description: 'URL of the banner image' })
  banner_image: string;

  @Field({ description: 'Text displayed on the banner button' })
  button_text: string;

  @Field({ description: 'Link the button redirects to when clicked' })
  button_link: string;

  @Field({ description: 'Indicates whether the banner is currently active' })
  is_active: boolean;

  @Field(() => Float, { description: 'Unix timestamp when the banner was created' })
  created_at: number;

  @Field(() => Float, { description: 'Unix timestamp when the banner was last updated' , nullable: true })
  updated_at?: number;
}