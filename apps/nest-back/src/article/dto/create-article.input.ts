import { InputType,  Field , ID,  Float } from '@nestjs/graphql';

@InputType()
export class CreateArticleInput {
  @Field(() => ID, { description: 'Example field (placeholder)' })
  articles_uid: string;

  @Field(() => String, { description: 'Example field (placeholder)' })
  title: string;

  @Field(() => String, { description: 'Example field (placeholder)' })
  description: string;

  @Field(() => String, { description: 'Example field (placeholder)' })
  content: string;

  @Field(() => String, { description: 'Example field (placeholder)' })
  featured_image: string;

  @Field(() => Float, { description: 'Example field (placeholder)' })
  published_at: number;

  @Field(() => Float, { description: 'Example field (placeholder)' })
  created_at: number;
}
