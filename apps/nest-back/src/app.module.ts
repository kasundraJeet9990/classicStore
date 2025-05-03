import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ArticleModule } from './article/article.module';
import { GraphQLModule } from '@nestjs/graphql';
import { MercuriusDriver, MercuriusDriverConfig } from '@nestjs/mercurius';
import { join } from 'path';

@Module({
  imports: [ConfigModule.forRoot(), GraphQLModule.forRoot<MercuriusDriverConfig>({
    driver: MercuriusDriver,
    graphiql: true,
    autoSchemaFile: join(process.cwd(), '/graph/schema.gql'),
  }), ArticleModule]
})

export class AppModule {}
