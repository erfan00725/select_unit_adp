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
    `Grade` ENUM('7', '8', '9', '10', '11', '12') NOT NULL DEFAULT '7',
    `Gender` BIT(1) NOT NULL DEFAULT true,
    `Updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `Created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Student_NationalCode_key`(`NationalCode`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `UserName` VARCHAR(255) NOT NULL,
    `Password` VARCHAR(255) NOT NULL,
    `Type` ENUM('admin', 'user') NULL DEFAULT 'user',
    `Created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Lesson` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `TeacherId` BIGINT UNSIGNED NULL,
    `LessonName` VARCHAR(255) NOT NULL,
    `PracticalUnit` INTEGER NOT NULL,
    `TheoriUnit` INTEGER NOT NULL,
    `Grade` ENUM('0', '7', '8', '9', '10', '11', '12') NULL DEFAULT '0',
    `Field` BIGINT UNSIGNED NULL,
    `PassCondition` INTEGER NULL,
    `TheoriHours` INTEGER NULL DEFAULT 0,
    `PracticalHours` INTEGER NULL DEFAULT 0,
    `RequireLesson` BIGINT UNSIGNED NULL,
    `RequireUnit` INTEGER NULL,
    `NotifCode` BIGINT UNSIGNED NULL,
    `ValidFrom` DATE NULL DEFAULT CURRENT_TIMESTAMP(3),
    `ValidTill` DATE NULL,
    `PricePerUnit` BIGINT NULL,
    `Created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `Updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SelectUnit` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `StudentId` BIGINT UNSIGNED NOT NULL,
    `Year` INTEGER NOT NULL,
    `Period` ENUM('first', 'second', 'summer') NOT NULL,
    `ExtraFee` BIGINT UNSIGNED NULL DEFAULT 0,
    `FixedFee` BIGINT NULL DEFAULT 0,
    `CertificateFee` BIGINT NULL DEFAULT 0,
    `ExtraClassFee` BIGINT NULL DEFAULT 0,
    `BooksFee` BIGINT NULL DEFAULT 0,
    `Created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `Updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `lessonId` BIGINT UNSIGNED NULL,

    UNIQUE INDEX `SelectUnit_StudentId_Year_Period_key`(`StudentId`, `Year`, `Period`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SelectedLesson` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `selectUnitId` BIGINT UNSIGNED NOT NULL,
    `lessonId` BIGINT UNSIGNED NOT NULL,

    UNIQUE INDEX `SelectedLesson_selectUnitId_lessonId_key`(`selectUnitId`, `lessonId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Payments` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `Check` VARCHAR(255) NULL,
    `BankName` VARCHAR(255) NULL,
    `BranchCode` VARCHAR(255) NULL,
    `Branch` VARCHAR(255) NULL,
    `Amount` BIGINT NOT NULL,
    `selectUnitId` BIGINT UNSIGNED NOT NULL,
    `PaymentDate` DATE NULL,
    `Created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `Updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Field` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `Name` VARCHAR(255) NOT NULL,
    `FixedFee` BIGINT NULL DEFAULT 0,
    `Created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `Updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `General` (
    `Key` VARCHAR(255) NOT NULL,
    `Value` VARCHAR(255) NOT NULL,
    `Updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `Created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

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
    `Gender` BIT(1) NOT NULL DEFAULT true,
    `Updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `Created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Teacher_NationalCode_key`(`NationalCode`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Student` ADD CONSTRAINT `Student_Field_fkey` FOREIGN KEY (`Field`) REFERENCES `Field`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Lesson` ADD CONSTRAINT `Lesson_Field_fkey` FOREIGN KEY (`Field`) REFERENCES `Field`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Lesson` ADD CONSTRAINT `Lesson_TeacherId_fkey` FOREIGN KEY (`TeacherId`) REFERENCES `Teacher`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Lesson` ADD CONSTRAINT `Lesson_RequireLesson_fkey` FOREIGN KEY (`RequireLesson`) REFERENCES `Lesson`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SelectUnit` ADD CONSTRAINT `SelectUnit_StudentId_fkey` FOREIGN KEY (`StudentId`) REFERENCES `Student`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SelectUnit` ADD CONSTRAINT `SelectUnit_lessonId_fkey` FOREIGN KEY (`lessonId`) REFERENCES `Lesson`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SelectedLesson` ADD CONSTRAINT `SelectedLesson_selectUnitId_fkey` FOREIGN KEY (`selectUnitId`) REFERENCES `SelectUnit`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SelectedLesson` ADD CONSTRAINT `SelectedLesson_lessonId_fkey` FOREIGN KEY (`lessonId`) REFERENCES `Lesson`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Payments` ADD CONSTRAINT `Payments_selectUnitId_fkey` FOREIGN KEY (`selectUnitId`) REFERENCES `SelectUnit`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Teacher` ADD CONSTRAINT `Teacher_Field_fkey` FOREIGN KEY (`Field`) REFERENCES `Field`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
