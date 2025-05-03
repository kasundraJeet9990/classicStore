-- CreateTable
CREATE TABLE "Article" (
    "articles_uid" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "featured_image" TEXT NOT NULL,
    "published_at" BIGINT NOT NULL DEFAULT 0,
    "created_at" BIGINT NOT NULL DEFAULT 0,
    "updated_at" BIGINT NOT NULL DEFAULT 0,

    CONSTRAINT "Article_pkey" PRIMARY KEY ("articles_uid")
);

-- CreateTable
CREATE TABLE "ArticleTag" (
    "tags_uid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" BIGINT NOT NULL DEFAULT 0,
    "updated_at" BIGINT NOT NULL DEFAULT 0,

    CONSTRAINT "ArticleTag_pkey" PRIMARY KEY ("tags_uid")
);

-- CreateTable
CREATE TABLE "TaggedArticle" (
    "tagged_articles_uid" TEXT NOT NULL,
    "articles_uid" TEXT NOT NULL,
    "tags_uid" TEXT NOT NULL,
    "created_at" BIGINT NOT NULL DEFAULT 0,
    "updated_at" BIGINT NOT NULL DEFAULT 0,

    CONSTRAINT "TaggedArticle_pkey" PRIMARY KEY ("tagged_articles_uid")
);

-- CreateTable
CREATE TABLE "ArticleView" (
    "article_views_uid" TEXT NOT NULL,
    "articles_uid" TEXT NOT NULL,
    "user_uid" TEXT NOT NULL,
    "viewed_at" BIGINT NOT NULL DEFAULT 0,

    CONSTRAINT "ArticleView_pkey" PRIMARY KEY ("article_views_uid")
);

-- CreateTable
CREATE TABLE "ArticleLike" (
    "article_likes_uid" TEXT NOT NULL,
    "articles_uid" TEXT NOT NULL,
    "user_uid" TEXT NOT NULL,
    "liked_at" BIGINT NOT NULL DEFAULT 0,

    CONSTRAINT "ArticleLike_pkey" PRIMARY KEY ("article_likes_uid")
);

-- CreateTable
CREATE TABLE "ArticleRead" (
    "article_reads_uid" TEXT NOT NULL,
    "articles_uid" TEXT NOT NULL,
    "user_uid" TEXT NOT NULL,
    "scroll_percentage" DOUBLE PRECISION NOT NULL,
    "read_at" BIGINT NOT NULL DEFAULT 0,

    CONSTRAINT "ArticleRead_pkey" PRIMARY KEY ("article_reads_uid")
);

-- CreateIndex
CREATE UNIQUE INDEX "ArticleTag_name_key" ON "ArticleTag"("name");

-- CreateIndex
CREATE UNIQUE INDEX "TaggedArticle_articles_uid_tags_uid_key" ON "TaggedArticle"("articles_uid", "tags_uid");

-- AddForeignKey
ALTER TABLE "TaggedArticle" ADD CONSTRAINT "TaggedArticle_articles_uid_fkey" FOREIGN KEY ("articles_uid") REFERENCES "Article"("articles_uid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TaggedArticle" ADD CONSTRAINT "TaggedArticle_tags_uid_fkey" FOREIGN KEY ("tags_uid") REFERENCES "ArticleTag"("tags_uid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ArticleView" ADD CONSTRAINT "ArticleView_articles_uid_fkey" FOREIGN KEY ("articles_uid") REFERENCES "Article"("articles_uid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ArticleLike" ADD CONSTRAINT "ArticleLike_articles_uid_fkey" FOREIGN KEY ("articles_uid") REFERENCES "Article"("articles_uid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ArticleRead" ADD CONSTRAINT "ArticleRead_articles_uid_fkey" FOREIGN KEY ("articles_uid") REFERENCES "Article"("articles_uid") ON DELETE RESTRICT ON UPDATE CASCADE;
