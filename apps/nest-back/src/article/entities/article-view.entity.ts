import { ObjectType, Field, ID, Float } from '@nestjs/graphql';

@ObjectType()
export class ArticleView {
  @Field(() => ID, { description: 'Unique identifier for the article view event' })
  article_views_uid: string;

  @Field(() => String, { description: 'UUID of the article that was viewed' })
  articles_uid: string;

  @Field(() => String, { description: 'UUID of the user who viewed the article' })
  user_uid: string;

  @Field(() => Float, { description: 'Timestamp when the article was viewed (Unix format)' })
  viewed_at: number;
}