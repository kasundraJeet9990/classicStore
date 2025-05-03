import { ObjectType, Field, ID, Float } from '@nestjs/graphql';

@ObjectType()
export class ArticleRead {
  @Field(() => ID, { description: 'Unique identifier for the article read event' })
  article_reads_uid: string;

  @Field(() => String, { description: 'UUID of the article that was read' })
  articles_uid: string;

  @Field(() => String, { description: 'UUID of the user who read the article' })
  user_uid: string;

  @Field(() => Float, { description: 'Percentage of the article scrolled/read by the user (e.g., 0.75 for 75%)' })
  scroll_percentage: number;

  @Field(() => Float, { description: 'Timestamp when the article was read (Unix format)' })
  read_at: number;
}