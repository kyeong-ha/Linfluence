/*
  Warnings:

  - The primary key for the `Influencer` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The required column `id` was added to the `Influencer` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropForeignKey
ALTER TABLE `Post` DROP FOREIGN KEY `Post_influencerName_fkey`;

-- DropForeignKey
ALTER TABLE `SNS` DROP FOREIGN KEY `SNS_influencerName_fkey`;

-- AlterTable
ALTER TABLE `Influencer` DROP PRIMARY KEY,
    ADD COLUMN `id` VARCHAR(191) NOT NULL,
    MODIFY `name` VARCHAR(191) NOT NULL DEFAULT '',
    ADD PRIMARY KEY (`id`);

-- AddForeignKey
ALTER TABLE `SNS` ADD CONSTRAINT `SNS_influencerName_fkey` FOREIGN KEY (`influencerName`) REFERENCES `Influencer`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Post` ADD CONSTRAINT `Post_influencerName_fkey` FOREIGN KEY (`influencerName`) REFERENCES `Influencer`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
