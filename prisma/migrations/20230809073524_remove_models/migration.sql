/*
  Warnings:

  - You are about to drop the `_tagtopost` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `profile` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tag` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_tagtopost` DROP FOREIGN KEY `_TagTopost_A_fkey`;

-- DropForeignKey
ALTER TABLE `_tagtopost` DROP FOREIGN KEY `_TagTopost_B_fkey`;

-- DropForeignKey
ALTER TABLE `post` DROP FOREIGN KEY `Post_authorId_fkey`;

-- DropForeignKey
ALTER TABLE `profile` DROP FOREIGN KEY `profile_ibfk_1`;

-- DropTable
DROP TABLE `_tagtopost`;

-- DropTable
DROP TABLE `post`;

-- DropTable
DROP TABLE `profile`;

-- DropTable
DROP TABLE `tag`;

-- DropTable
DROP TABLE `user`;

-- CreateTable
CREATE TABLE `equipment` (
    `code` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NULL,
    `installationDate` DATETIME(3) NULL,
    `location` VARCHAR(191) NULL,
    `currentState` VARCHAR(191) NULL,
    `latestInspectionDate` DATETIME(3) NULL,
    `isDefective` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`code`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `inspection` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `code` VARCHAR(191) NOT NULL,
    `inspectionDate` DATETIME(3) NULL,
    `inspectionTime` DATETIME(3) NULL,
    `color` VARCHAR(191) NULL,
    `state` VARCHAR(191) NULL,

    INDEX `code`(`code`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `repairment` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `code` VARCHAR(191) NOT NULL,
    `repairmentDate` DATETIME(3) NULL,
    `repairmentNote` VARCHAR(191) NULL,
    `repairmentPhoto` LONGBLOB NULL,
    `repairerInCharge` VARCHAR(191) NULL,

    INDEX `code`(`code`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `inspection` ADD CONSTRAINT `inspection_ibfk_1` FOREIGN KEY (`code`) REFERENCES `equipment`(`code`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `repairment` ADD CONSTRAINT `repairment_ibfk_1` FOREIGN KEY (`code`) REFERENCES `equipment`(`code`) ON DELETE NO ACTION ON UPDATE NO ACTION;
