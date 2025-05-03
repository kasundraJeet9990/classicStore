import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { ArticleTagService } from './article-tag.service';
import { ArticleTag } from './entities';
import { CreateArticleInput } from './dto/create-article.input';

@Resolver(() => ArticleTag)
export class ArticleTagResolver {
    constructor(private readonly articleTagService: ArticleTagService) { }

    @Mutation(() => ArticleTag)
    createArticleTag(@Args('createArticleInput') createArticleInput: CreateArticleInput) {
        return this.articleTagService.createTag(createArticleInput);
    }
}
