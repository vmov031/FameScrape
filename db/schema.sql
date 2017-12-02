DROP DATABASE IF EXISTS celebrities_db;
CREATE DATABASE celebrities_db;

USE celebrities_db;

CREATE TABLE celebrities(
  id INT AUTO_INCREMENT NOT NULL,
  celebrity_name VARCHAR(500) NOT NULL,
  cool VARCHAR(500) NOT NULL,
  not_cool VARCHAR(500) NOT NULL,
  PRIMARY KEY(id)
);