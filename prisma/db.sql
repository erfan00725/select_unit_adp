CREATE TABLE `Student`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `FirstName` VARCHAR(255) NOT NULL,
    `LastName` VARCHAR(255) NOT NULL,
    `NationalCode` VARCHAR(255) NOT NULL,
    `Father` VARCHAR(255) NULL,
    `Birth` DATE NULL,
    `Address` VARCHAR(255) NULL,
    `HomeNumber` VARCHAR(255) NULL,
    `PhoneNumber` VARCHAR(255) NULL,
    `Field` BIGINT NOT NULL,
    `Grade` ENUM('7', '8', '9', '10', '11', '12') NOT NULL,
    `Created_at` TIMESTAMP NOT NULL,
    `Updated_at` TIMESTAMP NOT NULL
);
ALTER TABLE
    `Student` ADD UNIQUE `student_nationalcode_unique`(`NationalCode`);
CREATE TABLE `User`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `UserName` VARCHAR(255) NOT NULL,
    `Password` VARCHAR(255) NOT NULL,
    `Type` ENUM('admin', 'user') NULL,
    `Created_at` TIMESTAMP NOT NULL
);
CREATE TABLE `Lesson`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `TeacherId` BIGINT NOT NULL,
    `LessonName` VARCHAR(255) NOT NULL,
    `Unit` INT NOT NULL,
    `Grade` ENUM('0', '7', '8', '9', '10', '11', '12') NOT NULL COMMENT '0 for general lessons',
    `Field` BIGINT NULL COMMENT 'null if you want to lesson to be general',
    `PassCondition` INT NULL,
    `TheoriHours` INT NULL,
    `PracticalHours` INT NULL,
    `RequireLesson` INT NULL,
    `RequireUnit` INT NULL,
    `NotifCode` BIGINT NOT NULL,
    `ValidFrom` DATE NOT NULL,
    `ValidTill` DATE NULL COMMENT 'if null have no time limit',
    `PricePerUnit` BIGINT NULL DEFAULT '-1' COMMENT '-1 for default price',
    `Created_at` TIMESTAMP NOT NULL,
    `Updated_at` TIMESTAMP NOT NULL
);
CREATE TABLE `SelectUnit`(
    `StudentId` BIGINT NULL,
    `LessonId` BIGINT NOT NULL,
    `Year` INT NOT NULL COMMENT 'created with two last digit of study year (eg 0304 for 1403-1404 study year)',
    `Period` ENUM('first', 'second', 'summer') NOT NULL,
    `ExtraFee` BIGINT NOT NULL DEFAULT '0',
    `Created_at` TIMESTAMP NOT NULL,
    `Updated_at` TIMESTAMP NOT NULL,
    PRIMARY KEY(
        `StudentId`,
        `LessonId`,
        `Year`,
        `Period`
    )
);
CREATE TABLE `Field`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `Name` VARCHAR(255) NOT NULL,
    `FixedFee` BIGINT NOT NULL DEFAULT '-1' COMMENT '-1 for default fee',
    `Created_at` TIMESTAMP NOT NULL
);
CREATE TABLE `General`(
    `Key` VARCHAR(255) NOT NULL,
    `Value` VARCHAR(255) NOT NULL,
    `Created_at` TIMESTAMP NOT NULL,
    PRIMARY KEY(`Key`)
);
CREATE TABLE `Teacher`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `NationalCode` VARCHAR(255) NOT NULL,
    `FirstName` VARCHAR(255) NOT NULL,
    `LastName` VARCHAR(255) NOT NULL,
    `PhoneNumber` VARCHAR(255) NOT NULL,
    `Field` BIGINT NULL,
    `Birth` DATE NULL,
    `Created_at` TIMESTAMP NOT NULL
);
ALTER TABLE
    `Teacher` ADD UNIQUE `teacher_nationalcode_unique`(`NationalCode`);
ALTER TABLE
    `Student` ADD CONSTRAINT `student_field_foreign` FOREIGN KEY(`Field`) REFERENCES `Field`(`id`);
ALTER TABLE
    `SelectUnit` ADD CONSTRAINT `selectunit_lessonid_foreign` FOREIGN KEY(`LessonId`) REFERENCES `Lesson`(`id`);
ALTER TABLE
    `Lesson` ADD CONSTRAINT `lesson_field_foreign` FOREIGN KEY(`Field`) REFERENCES `Field`(`id`);
ALTER TABLE
    `Lesson` ADD CONSTRAINT `lesson_requireunit_foreign` FOREIGN KEY(`RequireUnit`) REFERENCES `Lesson`(`id`);
ALTER TABLE
    `Lesson` ADD CONSTRAINT `lesson_teacherid_foreign` FOREIGN KEY(`TeacherId`) REFERENCES `Teacher`(`id`);
ALTER TABLE
    `Teacher` ADD CONSTRAINT `teacher_field_foreign` FOREIGN KEY(`Field`) REFERENCES `Field`(`id`);
ALTER TABLE
    `SelectUnit` ADD CONSTRAINT `selectunit_studentid_foreign` FOREIGN KEY(`StudentId`) REFERENCES `Student`(`id`);