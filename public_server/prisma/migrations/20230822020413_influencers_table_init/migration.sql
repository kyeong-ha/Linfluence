-- CreateTable
CREATE TABLE `Influencer` (
    `name` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`name`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SnsLink` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `naverBlog` VARCHAR(191) NOT NULL DEFAULT 'undefined',
    `instagram` VARCHAR(191) NOT NULL DEFAULT 'undefined',
    `facebook` VARCHAR(191) NOT NULL DEFAULT 'undefined',
    `influencerName` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `SnsLink_influencerName_key`(`influencerName`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `YoutubeVideo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL DEFAULT 'undefined',
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `influencerName` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `YoutubeVideo_influencerName_key`(`influencerName`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Clip` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `clipUrl` VARCHAR(191) NOT NULL DEFAULT 'undefined',
    `youtubeVideoId` INTEGER NOT NULL,

    UNIQUE INDEX `Clip_youtubeVideoId_key`(`youtubeVideoId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Product` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `imageUrl` VARCHAR(191) NOT NULL DEFAULT 'undefined',
    `infoJson` VARCHAR(191) NOT NULL DEFAULT 'undefined',
    `clipId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `SnsLink` ADD CONSTRAINT `SnsLink_influencerName_fkey` FOREIGN KEY (`influencerName`) REFERENCES `Influencer`(`name`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `YoutubeVideo` ADD CONSTRAINT `YoutubeVideo_influencerName_fkey` FOREIGN KEY (`influencerName`) REFERENCES `Influencer`(`name`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Clip` ADD CONSTRAINT `Clip_youtubeVideoId_fkey` FOREIGN KEY (`youtubeVideoId`) REFERENCES `YoutubeVideo`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Product` ADD CONSTRAINT `Product_clipId_fkey` FOREIGN KEY (`clipId`) REFERENCES `Clip`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
