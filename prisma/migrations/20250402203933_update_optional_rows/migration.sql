/*
  Warnings:

  - You are about to alter the column `Created_at` on the `Field` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `Created_at` on the `General` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `Updated_at` on the `General` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `Created_at` on the `Lesson` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `Updated_at` on the `Lesson` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `Created_at` on the `SelectUnit` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `Updated_at` on the `SelectUnit` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `Created_at` on the `Student` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `Updated_at` on the `Student` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `Created_at` on the `Teacher` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `Updated_at` on the `Teacher` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `Created_at` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.

*/
-- DropForeignKey
ALTER TABLE `Lesson` DROP FOREIGN KEY `Lesson_TeacherId_fkey`;

-- DropIndex
DROP INDEX `Lesson_TeacherId_fkey` ON `Lesson`;

-- AlterTable
ALTER TABLE `Field` MODIFY `FixedFee` BIGINT NULL DEFAULT 0,
    MODIFY `Created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `General` MODIFY `Created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `Updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `Lesson` MODIFY `TeacherId` BIGINT UNSIGNED NULL,
    MODIFY `Grade` ENUM('0', '7', '8', '9', '10', '11', '12') NULL DEFAULT '0',
    MODIFY `NotifCode` BIGINT UNSIGNED NULL,
    MODIFY `ValidFrom` DATE NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `Created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `Updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `SelectUnit` MODIFY `ExtraFee` BIGINT UNSIGNED NULL DEFAULT 0,
    MODIFY `Created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `Updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `Student` MODIFY `Grade` ENUM('7', '8', '9', '10', '11', '12') NOT NULL DEFAULT '7',
    MODIFY `Created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `Updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `Gender` BIT(1) NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE `Teacher` MODIFY `Created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `Updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `Gender` BIT(1) NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE `User` MODIFY `Type` ENUM('admin', 'user') NULL DEFAULT 'user',
    MODIFY `Created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AddForeignKey
ALTER TABLE `Lesson` ADD CONSTRAINT `Lesson_TeacherId_fkey` FOREIGN KEY (`TeacherId`) REFERENCES `Teacher`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
