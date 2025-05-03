import { ObjectType, Field, ID, Float } from '@nestjs/graphql';

@ObjectType()
export class Article {
  @Field(() => ID, { description: 'Article UUID' })
  articles_uid: string;

  @Field(() => String, { description: 'Article title' })
  title: string;

  @Field(() => String, { description: 'Article content' })
  content: string;

  @Field(() => String, { description: 'Article featured image URL' })
  featured_image: string;

  @Field(() => Float, { description: 'Published at (Unix timestamp)' })
  published_at: number;

  @Field(() => Float, { description: 'Created at (Unix timestamp)' })
  created_at: number;

  @Field(() => Float, { description: 'Updated at (Unix timestamp)' })
  updated_at?: number;
}
