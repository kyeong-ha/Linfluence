/*
  Warnings:

  - The primary key for the `Influencer` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `influencerId` on the `Influencer` table. All the data in the column will be lost.
  - Added the required column `id` to the `Influencer` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Post` DROP FOREIGN KEY `Post_influencerId_fkey`;

-- DropForeignKey
ALTER TABLE `SNS` DROP FOREIGN KEY `SNS_influencerId_fkey`;

-- AlterTable
ALTER TABLE `Influencer` DROP PRIMARY KEY,
    DROP COLUMN `influencerId`,
    ADD COLUMN `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AddForeignKey
ALTER TABLE `SNS` ADD CONSTRAINT `SNS_influencerId_fkey` FOREIGN KEY (`influencerId`) REFERENCES `Influencer`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Post` ADD CONSTRAINT `Post_influencerId_fkey` FOREIGN KEY (`influencerId`) REFERENCES `Influencer`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
