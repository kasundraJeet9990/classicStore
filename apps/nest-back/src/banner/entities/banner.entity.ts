import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Banner {
  @Field(() => ID)
  banner_uid: string;

  @Field()
  banner_image: string;

  @Field()
  banner_alt: string;

  @Field()
  banner_link: string;

  @Field(() => Boolean)
  is_enabled: boolean;

  @Field(() => Number, { nullable: true })
  start_at: number;

  @Field(() => Number, { nullable: true })
  end_at: number;  

  @Field(() => Number)
  created_at: number;

  @Field(() => Number)
  updated_at: number;
}
