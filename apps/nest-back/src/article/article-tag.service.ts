import { Injectable } from '@nestjs/common';
import { CreateArticleInput } from './dto/create-article.input';
import { Article } from './entities/article.entity';

@Injectable()
export class ArticleTagService {
  private articles: Article[] = [
    {
      articles_uid: 'f81d4fae-7dec-11d0-a765-00a0c91e6bf6',
      title: 'Article 1',
      description: 'Description 1',
      content: 'Content 1',
      featured_image: '',
      published_at: 1672531200,
      created_at: 1672531200,
    }
  ];

  createTag(createArticleInput: CreateArticleInput) {
    return 'This action adds a new article';
  }
}
