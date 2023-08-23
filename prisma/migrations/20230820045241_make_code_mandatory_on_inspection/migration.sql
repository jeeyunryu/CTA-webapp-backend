/*
  Warnings:

  - Made the column `code` on table `inspection` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `inspection` MODIFY `code` VARCHAR(191) NOT NULL;
