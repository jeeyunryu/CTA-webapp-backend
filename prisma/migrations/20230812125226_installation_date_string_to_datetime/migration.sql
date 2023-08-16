/*
  Warnings:

  - You are about to alter the column `installationDate` on the `equipment` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `DateTime(3)`.

*/
-- AlterTable
ALTER TABLE `equipment` MODIFY `installationDate` DATETIME(3) NOT NULL;
