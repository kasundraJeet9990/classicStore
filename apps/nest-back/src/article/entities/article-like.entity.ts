import { ObjectType, Field, ID, Float } from '@nestjs/graphql';

@ObjectType()
export class ArticleLike {
  @Field(() => ID, { description: 'Unique identifier for the article like event' })
  article_likes_uid: string;

  @Field(() => String, { description: 'UUID of the article that was liked' })
  articles_uid: string;

  @Field(() => String, { description: 'UUID of the user who liked the article' })
  user_uid: string;

  @Field(() => Float, { description: 'Timestamp when the article was liked (Unix format)' })
  liked_at: number;
}
