import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { MercuriusDriver, MercuriusDriverConfig } from '@nestjs/mercurius';

@Module({
  imports: [ConfigModule.forRoot(), GraphQLModule.forRoot<MercuriusDriverConfig>({ driver: MercuriusDriver, graphiql: true }),],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
