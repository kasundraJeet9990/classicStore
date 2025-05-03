import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ArticleModule } from './article/article.module';
import { GraphQLModule } from '@nestjs/graphql';
import { MercuriusDriver, MercuriusDriverConfig } from '@nestjs/mercurius';


@Module({
  imports: [ConfigModule.forRoot(), GraphQLModule.forRoot<MercuriusDriverConfig>({
    driver: MercuriusDriver,
    graphiql: true,
    autoSchemaFile: 'schema.gql',
  }), ArticleModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
