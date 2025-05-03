import { ObjectType, Field, ID, Float } from '@nestjs/graphql';
import { Article } from './article.entity';
import { ArticleTag } from './article-tag.entity';

@ObjectType()
export class TaggedArticle {
  @Field(() => ID, { description: 'Unique identifier for the tagged article relationship' })
  tagged_articles_uid: string;

  @Field(() => String, { description: 'UUID of the associated article' })
  articles_uid: string;

  @Field(() => String, { description: 'UUID of the associated tag' })
  tags_uid: string;

  @Field(() => Float, { description: 'Timestamp when the tag was added to the article (Unix format)' })
  created_at: number;

  @Field(() => Float, { description: 'Timestamp when the tag-article relation was last updated (Unix format)' })
  updated_at?: number;

  @Field(() => Article, { nullable: true })
  article?: Article;

  @Field(() => ArticleTag, { nullable: true })
  tag?: ArticleTag;
}