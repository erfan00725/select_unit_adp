-- CreateTable
CREATE TABLE `Student` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `FirstName` VARCHAR(255) NOT NULL,
    `LastName` VARCHAR(255) NOT NULL,
    `NationalCode` VARCHAR(255) NOT NULL,
    `Father` VARCHAR(255) NULL,
    `Birth` DATE NULL,
    `Address` VARCHAR(255) NULL,
    `HomeNumber` VARCHAR(255) NULL,
    `PhoneNumber` VARCHAR(255) NULL,
    `Field` BIGINT UNSIGNED NOT NULL,
    `Grade` ENUM('7', '8', '9', '10', '11', '12') NOT NULL,
    `Created_at` TIMESTAMP NOT NULL,
    `Updated_at` TIMESTAMP NOT NULL,

    UNIQUE INDEX `Student_NationalCode_key`(`NationalCode`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `UserName` VARCHAR(255) NOT NULL,
    `Password` VARCHAR(255) NOT NULL,
    `Type` ENUM('admin', 'user') NULL,
    `Created_at` TIMESTAMP NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Lesson` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `TeacherId` BIGINT UNSIGNED NOT NULL,
    `LessonName` VARCHAR(255) NOT NULL,
    `Unit` INTEGER NOT NULL,
    `Grade` ENUM('0', '7', '8', '9', '10', '11', '12') NOT NULL,
    `Field` BIGINT UNSIGNED NULL,
    `PassCondition` INTEGER NULL,
    `TheoriHours` INTEGER NULL,
    `PracticalHours` INTEGER NULL,
    `RequireLesson` INTEGER NULL,
    `RequireUnit` BIGINT UNSIGNED NULL,
    `NotifCode` BIGINT UNSIGNED NOT NULL,
    `ValidFrom` DATE NOT NULL,
    `ValidTill` DATE NULL,
    `PricePerUnit` BIGINT NULL DEFAULT 0,
    `Created_at` TIMESTAMP NOT NULL,
    `Updated_at` TIMESTAMP NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SelectUnit` (
    `StudentId` BIGINT UNSIGNED NOT NULL,
    `LessonId` BIGINT UNSIGNED NOT NULL,
    `Year` INTEGER NOT NULL,
    `Period` ENUM('first', 'second', 'summer') NOT NULL,
    `ExtraFee` BIGINT UNSIGNED NOT NULL DEFAULT 0,
    `Created_at` TIMESTAMP NOT NULL,
    `Updated_at` TIMESTAMP NOT NULL,

    PRIMARY KEY (`StudentId`, `LessonId`, `Year`, `Period`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Field` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `Name` VARCHAR(255) NOT NULL,
    `FixedFee` BIGINT NOT NULL DEFAULT 0,
    `Created_at` TIMESTAMP NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `General` (
    `Key` VARCHAR(255) NOT NULL,
    `Value` VARCHAR(255) NOT NULL,
    `Created_at` TIMESTAMP NOT NULL,

    PRIMARY KEY (`Key`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Teacher` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `NationalCode` VARCHAR(255) NOT NULL,
    `FirstName` VARCHAR(255) NOT NULL,
    `LastName` VARCHAR(255) NOT NULL,
    `PhoneNumber` VARCHAR(255) NOT NULL,
    `Field` BIGINT UNSIGNED NULL,
    `Birth` DATE NULL,
    `Created_at` TIMESTAMP NOT NULL,

    UNIQUE INDEX `Teacher_NationalCode_key`(`NationalCode`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Student` ADD CONSTRAINT `Student_Field_fkey` FOREIGN KEY (`Field`) REFERENCES `Field`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Lesson` ADD CONSTRAINT `Lesson_Field_fkey` FOREIGN KEY (`Field`) REFERENCES `Field`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Lesson` ADD CONSTRAINT `Lesson_TeacherId_fkey` FOREIGN KEY (`TeacherId`) REFERENCES `Teacher`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Lesson` ADD CONSTRAINT `Lesson_RequireUnit_fkey` FOREIGN KEY (`RequireUnit`) REFERENCES `Lesson`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SelectUnit` ADD CONSTRAINT `SelectUnit_StudentId_fkey` FOREIGN KEY (`StudentId`) REFERENCES `Student`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SelectUnit` ADD CONSTRAINT `SelectUnit_LessonId_fkey` FOREIGN KEY (`LessonId`) REFERENCES `Lesson`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Teacher` ADD CONSTRAINT `Teacher_Field_fkey` FOREIGN KEY (`Field`) REFERENCES `Field`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
