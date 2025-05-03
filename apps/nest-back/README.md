hii chatgpt, i crete backend useing nest js(for E-commrces) and prisma(postgres) and use of graphql example of my prisma


generator client {
  provider = "prisma-client-js"
  output   = "../generated/prisma"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model Article {
  articles_uid    String   @id @default(uuid())
  title           String
  content         String
  featured_image  String
  published_at    BigInt   @default(0)
  created_at      BigInt   @default(0)
  updated_at      BigInt   @default(0)

  taggedArticles  TaggedArticle[]
  views           ArticleView[]
  likes           ArticleLike[]
  reads           ArticleRead[]
}

model ArticleTag {
  tags_uid   String   @id @default(uuid())
  name       String   @unique
  created_at BigInt   @default(0)
  updated_at BigInt   @default(0)

  taggedArticles TaggedArticle[]
}

model TaggedArticle {
  tagged_articles_uid String   @id @default(uuid())
  articles_uid        String
  tags_uid            String
  created_at          BigInt   @default(0)
  updated_at          BigInt   @default(0)

  article Article   @relation(fields: [articles_uid], references: [articles_uid])
  tag     ArticleTag @relation(fields: [tags_uid], references: [tags_uid])

  @@unique([articles_uid, tags_uid])
}

model ArticleView {
  article_views_uid String   @id @default(uuid())
  articles_uid      String
  user_uid          String
  viewed_at         BigInt   @default(0)

  article Article @relation(fields: [articles_uid], references: [articles_uid])
}

model ArticleLike {
  article_likes_uid String   @id @default(uuid())
  articles_uid      String
  user_uid          String
  liked_at          BigInt   @default(0)

  article Article @relation(fields: [articles_uid], references: [articles_uid])
}

model ArticleRead {
  article_reads_uid String   @id @default(uuid())
  articles_uid      String
  user_uid          String
  scroll_percentage Float
  read_at           BigInt   @default(0)

  article Article @relation(fields: [articles_uid], references: [articles_uid])
}

i crete Article crud useing `nest g resource` current use only dummy Article array for pratice and after connect with prisma and crete full crud 

* i crete some thing like this is entities
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

this is service 

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


crete all article crud 