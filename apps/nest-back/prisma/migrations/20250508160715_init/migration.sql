-- CreateTable
CREATE TABLE "Banner" (
    "banner_uid" TEXT NOT NULL,
    "banner_image" TEXT NOT NULL,
    "banner_alt" TEXT NOT NULL,
    "banner_link" TEXT NOT NULL,
    "is_enabled" BOOLEAN NOT NULL,
    "start_at" BIGINT NOT NULL,
    "end_at" BIGINT NOT NULL,
    "created_at" BIGINT NOT NULL,
    "updated_at" BIGINT NOT NULL,

    CONSTRAINT "Banner_pkey" PRIMARY KEY ("banner_uid")
);

-- CreateTable
CREATE TABLE "BannerClick" (
    "banner_clicks_uid" TEXT NOT NULL,
    "banner_uid" TEXT NOT NULL,
    "user_uid" TEXT NOT NULL,
    "clicked_at" BIGINT NOT NULL,

    CONSTRAINT "BannerClick_pkey" PRIMARY KEY ("banner_clicks_uid")
);

-- CreateIndex
CREATE INDEX "BannerClick_banner_uid_idx" ON "BannerClick"("banner_uid");

-- AddForeignKey
ALTER TABLE "BannerClick" ADD CONSTRAINT "BannerClick_banner_uid_fkey" FOREIGN KEY ("banner_uid") REFERENCES "Banner"("banner_uid") ON DELETE CASCADE ON UPDATE CASCADE;
