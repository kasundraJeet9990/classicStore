import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateBannerInput {
  @Field(() => String)
  banner_image: string;

  @Field(() => String)
  banner_alt: string;

  @Field(() => String)
  banner_link: string;

  @Field(() => Boolean)
  is_enabled: boolean;

  @Field(() => Number, { nullable: true })
  start_at?: number;

  @Field(() => Number, { nullable: true })
  end_at?: number;

  @Field(() => Number)
  created_at: number;

  @Field(() => Number)
  updated_at: number;
}
