/*
  Warnings:

  - You are about to drop the column `postId` on the `Clip` table. All the data in the column will be lost.
  - The primary key for the `Post` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Post` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[postTitle]` on the table `Clip` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `postTitle` to the `Clip` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Clip` DROP FOREIGN KEY `Clip_postId_fkey`;

-- AlterTable
ALTER TABLE `Clip` DROP COLUMN `postId`,
    ADD COLUMN `postTitle` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Post` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ALTER COLUMN `title` DROP DEFAULT,
    ADD PRIMARY KEY (`title`);

-- CreateIndex
CREATE UNIQUE INDEX `Clip_postTitle_key` ON `Clip`(`postTitle`);

-- AddForeignKey
ALTER TABLE `Clip` ADD CONSTRAINT `Clip_postTitle_fkey` FOREIGN KEY (`postTitle`) REFERENCES `Post`(`title`) ON DELETE RESTRICT ON UPDATE CASCADE;
