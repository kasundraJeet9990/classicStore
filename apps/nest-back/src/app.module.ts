import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { MercuriusDriver, MercuriusDriverConfig } from '@nestjs/mercurius';
import { join } from 'path';
import { BannerModule } from './banner/banner.module';
import { PrismaModule } from './prisma.module';

@Module({
  imports: [ConfigModule.forRoot(), GraphQLModule.forRoot<MercuriusDriverConfig>({
    driver: MercuriusDriver,
    graphiql: true,
    autoSchemaFile: join(process.cwd(), '/graph/schema.gql'),
  }), BannerModule, PrismaModule],
})

export class AppModule { }
