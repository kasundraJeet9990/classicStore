import { CreateArticleInput } from './create-article.input';
import { InputType, Field, Int, PartialType  , Float} from '@nestjs/graphql';

@InputType()
export class UpdateArticleInput extends PartialType(CreateArticleInput) {
  @Field(() => Int)
  id: number;

  @Field(() => Float, { description: 'Example field (placeholder)' })
  updated_at: number;
}
