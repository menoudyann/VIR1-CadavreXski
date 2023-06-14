-- create database
CREATE DATABASE IF NOT EXISTS `vir1-db`;

-- Grand all privileges to root user
GRANT ALL ON `vir1-db`.* TO 'root' @'%' IDENTIFIED BY 'root';

-- Reload grant tables
FLUSH PRIVILEGES;

-- Use database vir1-db
USE `vir1-db`;

-- create table words with id and word
CREATE TABLE IF NOT EXISTS `words` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `word` VARCHAR(255) NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB;