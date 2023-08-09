-- DropIndex
DROP INDEX `code` ON `inspection`;

-- DropIndex
DROP INDEX `code` ON `repairment`;

-- AlterTable
ALTER TABLE `equipment` MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT;
