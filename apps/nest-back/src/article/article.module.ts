import { Module } from '@nestjs/common';
import { ArticleService } from './article.service';
import { ArticleResolver } from './article.resolver';
import { ArticleTagResolver } from './article-tag.resolver';
import { ArticleTagService } from './article-tag.service';


@Module({
  providers: [ArticleResolver, ArticleService , ArticleTagResolver , ArticleTagService],
})

export class ArticleModule {}
