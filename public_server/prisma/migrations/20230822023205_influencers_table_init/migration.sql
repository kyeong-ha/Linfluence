/*
  Warnings:

  - You are about to drop the column `youtubeVideoId` on the `Clip` table. All the data in the column will be lost.
  - You are about to drop the `SnsLink` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `YoutubeVideo` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[postId]` on the table `Clip` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `postId` to the `Clip` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Clip` DROP FOREIGN KEY `Clip_youtubeVideoId_fkey`;

-- DropForeignKey
ALTER TABLE `SnsLink` DROP FOREIGN KEY `SnsLink_influencerName_fkey`;

-- DropForeignKey
ALTER TABLE `YoutubeVideo` DROP FOREIGN KEY `YoutubeVideo_influencerName_fkey`;

-- AlterTable
ALTER TABLE `Clip` DROP COLUMN `youtubeVideoId`,
    ADD COLUMN `postId` INTEGER NOT NULL;

-- DropTable
DROP TABLE `SnsLink`;

-- DropTable
DROP TABLE `YoutubeVideo`;

-- CreateTable
CREATE TABLE `SNS` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `naverBlog` VARCHAR(191) NOT NULL DEFAULT 'undefined',
    `instagram` VARCHAR(191) NOT NULL DEFAULT 'undefined',
    `facebook` VARCHAR(191) NOT NULL DEFAULT 'undefined',
    `influencerName` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `SNS_influencerName_key`(`influencerName`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Post` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL DEFAULT 'undefined',
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `influencerName` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Post_influencerName_key`(`influencerName`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Clip_postId_key` ON `Clip`(`postId`);

-- AddForeignKey
ALTER TABLE `SNS` ADD CONSTRAINT `SNS_influencerName_fkey` FOREIGN KEY (`influencerName`) REFERENCES `Influencer`(`name`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Post` ADD CONSTRAINT `Post_influencerName_fkey` FOREIGN KEY (`influencerName`) REFERENCES `Influencer`(`name`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Clip` ADD CONSTRAINT `Clip_postId_fkey` FOREIGN KEY (`postId`) REFERENCES `Post`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
