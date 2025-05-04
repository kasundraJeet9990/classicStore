import { InputType, Field } from '@nestjs/graphql';

@InputType({ description: 'Input data for creating a new banner' })
export class CreateBannerInput {
  @Field({ description: 'URL of the banner image' })
  banner_image: string;

  @Field({ description: 'Text displayed on the banner button' })
  button_text: string;

  @Field({ description: 'Link the button redirects to when clicked' })
  button_link: string;
}
