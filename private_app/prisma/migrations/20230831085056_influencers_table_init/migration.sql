-- CreateTable
CREATE TABLE `Influencer` (
    `influencerId` VARCHAR(191) NOT NULL,
    `youtubeId` VARCHAR(191) NOT NULL DEFAULT '',
    `name` VARCHAR(191) NOT NULL DEFAULT '',
    `description` VARCHAR(191) NOT NULL DEFAULT '',
    `profileImg` VARCHAR(191) NOT NULL DEFAULT '',
    `bannerImg` VARCHAR(191) NOT NULL DEFAULT '',
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`influencerId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SNS` (
    `snsId` VARCHAR(191) NOT NULL,
    `naverBlog` VARCHAR(191) NOT NULL DEFAULT 'undefined',
    `instagram` VARCHAR(191) NOT NULL DEFAULT 'undefined',
    `facebook` VARCHAR(191) NOT NULL DEFAULT 'undefined',
    `influencerId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `SNS_influencerId_key`(`influencerId`),
    PRIMARY KEY (`snsId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Post` (
    `postId` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL DEFAULT '',
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `influencerId` VARCHAR(191) NOT NULL DEFAULT '',

    PRIMARY KEY (`postId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Clip` (
    `clipId` VARCHAR(191) NOT NULL,
    `clipUrl` VARCHAR(191) NOT NULL DEFAULT 'undefined',
    `postId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`clipId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Product` (
    `id` VARCHAR(191) NOT NULL,
    `imageUrl` VARCHAR(191) NOT NULL DEFAULT 'undefined',
    `infoJson` VARCHAR(191) NOT NULL DEFAULT 'undefined',
    `clipId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `SNS` ADD CONSTRAINT `SNS_influencerId_fkey` FOREIGN KEY (`influencerId`) REFERENCES `Influencer`(`influencerId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Post` ADD CONSTRAINT `Post_influencerId_fkey` FOREIGN KEY (`influencerId`) REFERENCES `Influencer`(`influencerId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Clip` ADD CONSTRAINT `Clip_postId_fkey` FOREIGN KEY (`postId`) REFERENCES `Post`(`postId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Product` ADD CONSTRAINT `Product_clipId_fkey` FOREIGN KEY (`clipId`) REFERENCES `Clip`(`clipId`) ON DELETE RESTRICT ON UPDATE CASCADE;
