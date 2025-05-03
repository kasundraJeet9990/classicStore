import { ObjectType, Field, ID, Float } from '@nestjs/graphql';
import { ArticleLike } from './article-like.entity';
import { ArticleView } from './article-view.entity';
import { ArticleRead } from './article-read.entity';
import { TaggedArticle } from './tagged-article.entity';

@ObjectType()
export class Article {
  @Field(() => ID, { description: 'Unique identifier for the article' })
  articles_uid: string;

  @Field(() => String, { description: 'Title of the article' })
  title: string;

  @Field(() => String, { description: 'Description of the article' })
  description: string;

  @Field(() => String, { description: 'Main content of the article (in text or HTML format)' })
  content: string;

  @Field(() => String, { description: 'URL of the featured image for the article' })
  featured_image: string;

  @Field(() => Float, { description: 'Timestamp when the article was published (Unix format)' })
  published_at: number;

  @Field(() => Float, { description: 'Timestamp when the article was created (Unix format)' })
  created_at: number;

  @Field(() => Float, { nullable: true, description: 'Timestamp when the article was last updated (Unix format)' })
  updated_at?: number;

  @Field(() => [TaggedArticle], { nullable: 'itemsAndList' })
  taggedArticles?: TaggedArticle[];

  @Field(() => [ArticleView], { nullable: 'itemsAndList' })
  views?: ArticleView[];

  @Field(() => [ArticleLike], { nullable: 'itemsAndList' })
  likes?: ArticleLike[];

  @Field(() => [ArticleRead], { nullable: 'itemsAndList' })
  reads?: ArticleRead[];
}