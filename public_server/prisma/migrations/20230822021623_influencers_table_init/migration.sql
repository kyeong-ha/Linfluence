/*
  Warnings:

  - You are about to drop the column `updated_at` on the `Influencer` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `Influencer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Influencer` DROP COLUMN `updated_at`,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;
