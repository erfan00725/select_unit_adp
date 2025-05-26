/*
  Warnings:

  - You are about to alter the column `Created_at` on the `Field` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `Updated_at` on the `Field` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `Updated_at` on the `General` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `Created_at` on the `General` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to drop the column `NotifCode` on the `Lesson` table. All the data in the column will be lost.
  - You are about to alter the column `Created_at` on the `Lesson` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `Updated_at` on the `Lesson` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `Created_at` on the `Payments` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `Updated_at` on the `Payments` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `Created_at` on the `SelectUnit` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `Updated_at` on the `SelectUnit` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `Updated_at` on the `Student` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `Created_at` on the `Student` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `Updated_at` on the `Teacher` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `Created_at` on the `Teacher` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `Created_at` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - Made the column `Grade` on table `Lesson` required. This step will fail if there are existing NULL values in that column.
  - Made the column `TheoriHours` on table `Lesson` required. This step will fail if there are existing NULL values in that column.
  - Made the column `PracticalHours` on table `Lesson` required. This step will fail if there are existing NULL values in that column.
  - Made the column `ValidFrom` on table `Lesson` required. This step will fail if there are existing NULL values in that column.
  - Made the column `ExtraFee` on table `SelectUnit` required. This step will fail if there are existing NULL values in that column.
  - Made the column `FixedFee` on table `SelectUnit` required. This step will fail if there are existing NULL values in that column.
  - Made the column `CertificateFee` on table `SelectUnit` required. This step will fail if there are existing NULL values in that column.
  - Made the column `ExtraClassFee` on table `SelectUnit` required. This step will fail if there are existing NULL values in that column.
  - Made the column `BooksFee` on table `SelectUnit` required. This step will fail if there are existing NULL values in that column.
  - Made the column `Discount` on table `SelectUnit` required. This step will fail if there are existing NULL values in that column.
  - Made the column `Type` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Field` MODIFY `Created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `Updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `General` ADD COLUMN `Description` VARCHAR(255) NULL,
    ADD COLUMN `Title` VARCHAR(255) NULL,
    MODIFY `Updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `Created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `Lesson` DROP COLUMN `NotifCode`,
    ADD COLUMN `Introducer` VARCHAR(255) NULL,
    MODIFY `Grade` ENUM('0', '7', '8', '9', '10', '11', '12') NOT NULL DEFAULT '0',
    MODIFY `TheoriHours` INTEGER NOT NULL DEFAULT 0,
    MODIFY `PracticalHours` INTEGER NOT NULL DEFAULT 0,
    MODIFY `ValidFrom` DATE NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `Created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `Updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `Payments` MODIFY `Created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `Updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `SelectUnit` ADD COLUMN `InsuranceFee` BIGINT UNSIGNED NOT NULL DEFAULT 0,
    ADD COLUMN `PaymentDescription` VARCHAR(255) NULL,
    ADD COLUMN `PaymentMethod` ENUM('creditCard', 'deposit', 'check', 'cash') NULL,
    MODIFY `ExtraFee` BIGINT UNSIGNED NOT NULL DEFAULT 0,
    MODIFY `FixedFee` BIGINT NOT NULL DEFAULT 0,
    MODIFY `CertificateFee` BIGINT NOT NULL DEFAULT 0,
    MODIFY `ExtraClassFee` BIGINT NOT NULL DEFAULT 0,
    MODIFY `BooksFee` BIGINT NOT NULL DEFAULT 0,
    MODIFY `Created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `Updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `Discount` BIGINT UNSIGNED NOT NULL DEFAULT 0,
    MODIFY `Paid` BIT(1) NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `Student` MODIFY `Gender` BIT(1) NOT NULL DEFAULT true,
    MODIFY `Updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `Created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `Teacher` MODIFY `Gender` BIT(1) NOT NULL DEFAULT true,
    MODIFY `Updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `Created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `User` MODIFY `Type` ENUM('admin', 'user') NOT NULL DEFAULT 'user',
    MODIFY `Created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
