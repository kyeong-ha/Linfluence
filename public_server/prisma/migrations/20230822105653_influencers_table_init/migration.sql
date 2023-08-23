/*
  Warnings:

  - The primary key for the `Influencer` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Influencer` table. All the data in the column will be lost.
  - You are about to drop the column `influencerName` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `influencerName` on the `SNS` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[influencerId]` on the table `Post` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[influencerId]` on the table `SNS` will be added. If there are existing duplicate values, this will fail.
  - The required column `influencerId` was added to the `Influencer` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `influencerId` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `influencerId` to the `SNS` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Post` DROP FOREIGN KEY `Post_influencerName_fkey`;

-- DropForeignKey
ALTER TABLE `SNS` DROP FOREIGN KEY `SNS_influencerName_fkey`;

-- AlterTable
ALTER TABLE `Influencer` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD COLUMN `influencerId` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`influencerId`);

-- AlterTable
ALTER TABLE `Post` DROP COLUMN `influencerName`,
    ADD COLUMN `influencerId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `SNS` DROP COLUMN `influencerName`,
    ADD COLUMN `influencerId` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Post_influencerId_key` ON `Post`(`influencerId`);

-- CreateIndex
CREATE UNIQUE INDEX `SNS_influencerId_key` ON `SNS`(`influencerId`);

-- AddForeignKey
ALTER TABLE `SNS` ADD CONSTRAINT `SNS_influencerId_fkey` FOREIGN KEY (`influencerId`) REFERENCES `Influencer`(`influencerId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Post` ADD CONSTRAINT `Post_influencerId_fkey` FOREIGN KEY (`influencerId`) REFERENCES `Influencer`(`influencerId`) ON DELETE RESTRICT ON UPDATE CASCADE;
