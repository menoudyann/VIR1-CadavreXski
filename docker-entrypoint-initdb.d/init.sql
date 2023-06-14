-- create database
CREATE DATABASE IF NOT EXISTS `vir1-db`;

-- Use database vir1-db
USE `vir1-db`;

-- create table words with id and word
CREATE TABLE IF NOT EXISTS `words` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `word` VARCHAR(255) NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB;