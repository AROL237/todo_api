-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS,
                         UNIQUE_CHECKS=0;


SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS,
                              FOREIGN_KEY_CHECKS=0;


SET @OLD_SQL_MODE=@@SQL_MODE,
                    SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema tododb
-- -----------------------------------------------------
 -- -----------------------------------------------------
-- Schema tododb
-- -----------------------------------------------------

CREATE SCHEMA IF NOT EXISTS `tododb` DEFAULT CHARACTER
SET utf8 ;

USE `tododb` ;

-- -----------------------------------------------------
-- Table `tododb`.`todos`
-- -----------------------------------------------------

CREATE TABLE IF NOT EXISTS `tododb`.`todos` (`id` INT NOT NULL AUTO_INCREMENT,
                                                               `titel` VARCHAR(45) NOT NULL,
                                                                                   `description` VARCHAR(255) NULL,
                                                                                                              `completed` TINYINT NOT NULL DEFAULT 0,
                                                                                                                                                   PRIMARY KEY (`id`), UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE) ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;


SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;


SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `tododb`.`todos`
-- -----------------------------------------------------

START TRANSACTION;

USE `tododb`;


INSERT INTO `tododb`.`todos` (`id`, `titel`, `description`, `completed`)
VALUES (DEFAULT,
        'GO TO SCHOOL',
        'dsijfia dij a  dijoids dsnosdj idifu',
        true);


INSERT INTO `tododb`.`todos` (`id`, `titel`, `description`, `completed`)
VALUES (DEFAULT,
        'work',
        'i have to be at work tomorrow at 9 am',
        false);


COMMIT;

