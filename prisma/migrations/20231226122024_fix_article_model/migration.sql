/*
  Warnings:

  - You are about to drop the column `userId` on the `Article` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Article` DROP FOREIGN KEY `Article_userId_fkey`;

-- AlterTable
ALTER TABLE `Article` DROP COLUMN `userId`,
    ADD COLUMN `authorId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Article` ADD CONSTRAINT `Article_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
