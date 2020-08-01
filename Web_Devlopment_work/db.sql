SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

CREATE DATABSE sih;

USE sih;


CREATE TABLE `sih`.`farmers` ( `Id` INT(255) NOT NULL AUTO_INCREMENT , `Name` VARCHAR(255) NOT NULL , `Aadhar` INT(12) NOT NULL , `LandRecord_no` INT(50) NOT NULL , `Bank_account_no` INT(20) NOT NULL , `Area_of_land` INT NOT NULL , `Latitude` BIGINT NOT NULL , `Longitude` BIGINT NOT NULL , `SoilType` VARCHAR(255) NOT NULL , `Mobile_no` BIGINT(10) NOT NULL , `Address` VARCHAR(255) NOT NULL , PRIMARY KEY (`Id`)) ENGINE = InnoDB;

CREATE TABLE `sih`.`shops` ( `ShopId` INT(10) NOT NULL AUTO_INCREMENT , `ShopName` VARCHAR(255) NOT NULL , `Address` VARCHAR(255) NOT NULL , `Contact_No` INT(10) NOT NULL , PRIMARY KEY (`ShopId`)) ENGINE = InnoDB;


