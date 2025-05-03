import { Injectable } from '@nestjs/common';
import { CreateArticleInput } from './dto/create-article.input';
import { UpdateArticleInput } from './dto/update-article.input';
import { Article } from './entities/article.entity';


@Injectable()
export class ArticleService {
  private articles: Article[] = [
    {
      articles_uid: 'f81d4fae-7dec-11d0-a765-00a0c91e6bf6',
      title: 'Article 1',
      content: 'Content 1',
      featured_image: '',
      published_at: 1672531200,
      created_at: 1672531200,
    }
  ];

  create(createArticleInput: CreateArticleInput) {
    return 'This action adds a new article';
  }

  findAll(): Article[] {
    return this.articles;
  }

  findOne(id: number) {
    return `This action returns a #${id} article`;
  }

  update(id: number, updateArticleInput: UpdateArticleInput) {
    return `This action updates a #${id} article`;
  }

  remove(id: number) {
    return `This action removes a #${id} article`;
  }
}
