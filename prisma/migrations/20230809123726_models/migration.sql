/*
  Warnings:

  - The primary key for the `equipment` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `inspectionDate` on the `inspection` table. All the data in the column will be lost.
  - You are about to drop the column `inspectionTime` on the `inspection` table. All the data in the column will be lost.
  - Added the required column `id` to the `equipment` table without a default value. This is not possible if the table is not empty.
  - Made the column `name` on table `equipment` required. This step will fail if there are existing NULL values in that column.
  - Made the column `installationDate` on table `equipment` required. This step will fail if there are existing NULL values in that column.
  - Made the column `location` on table `equipment` required. This step will fail if there are existing NULL values in that column.
  - Made the column `currentState` on table `equipment` required. This step will fail if there are existing NULL values in that column.
  - Made the column `latestInspectionDate` on table `equipment` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `inspectionDateTime` to the `inspection` table without a default value. This is not possible if the table is not empty.
  - Made the column `color` on table `inspection` required. This step will fail if there are existing NULL values in that column.
  - Made the column `state` on table `inspection` required. This step will fail if there are existing NULL values in that column.
  - Made the column `repairmentDate` on table `repairment` required. This step will fail if there are existing NULL values in that column.
  - Made the column `repairmentPhoto` on table `repairment` required. This step will fail if there are existing NULL values in that column.
  - Made the column `repairerInCharge` on table `repairment` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `inspection` DROP FOREIGN KEY `inspection_ibfk_1`;

-- DropForeignKey
ALTER TABLE `repairment` DROP FOREIGN KEY `repairment_ibfk_1`;

-- AlterTable
ALTER TABLE `equipment` DROP PRIMARY KEY,
    ADD COLUMN `id` INTEGER NOT NULL,
    MODIFY `name` VARCHAR(191) NOT NULL,
    MODIFY `installationDate` DATETIME(3) NOT NULL,
    MODIFY `location` VARCHAR(191) NOT NULL,
    MODIFY `currentState` VARCHAR(191) NOT NULL,
    MODIFY `latestInspectionDate` DATETIME(3) NOT NULL,
    ALTER COLUMN `isDefective` DROP DEFAULT,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `inspection` DROP COLUMN `inspectionDate`,
    DROP COLUMN `inspectionTime`,
    ADD COLUMN `inspectionDateTime` DATETIME(3) NOT NULL,
    MODIFY `id` INTEGER NOT NULL,
    MODIFY `color` VARCHAR(191) NOT NULL,
    MODIFY `state` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `repairment` MODIFY `id` INTEGER NOT NULL,
    MODIFY `repairmentDate` DATETIME(3) NOT NULL,
    MODIFY `repairmentPhoto` LONGBLOB NOT NULL,
    MODIFY `repairerInCharge` VARCHAR(191) NOT NULL;
