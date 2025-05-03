import { ObjectType, Field, ID, Float } from '@nestjs/graphql';
import { TaggedArticle } from './tagged-article.entity';

@ObjectType()
export class ArticleTag {
  @Field(() => ID, { description: 'Unique identifier for the article tag' })
  tags_uid: string;

  @Field(() => String, { description: 'Name of the article tag (must be unique)' })
  name: string;

  @Field(() => Float, { description: 'Timestamp when the tag was created (Unix format)' })
  created_at: number;

  @Field(() => Float, { description: 'Timestamp when the tag was last updated (Unix format)' })
  updated_at?: number;

  @Field(() => [TaggedArticle], { nullable: 'itemsAndList' })
  taggedArticles?: TaggedArticle[];
}
