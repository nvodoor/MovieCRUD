CREATE DATABASE IF NOT EXISTS Ferrismovies;

USE Ferrismovies;

DROP TABLE IF EXISTS movies;

CREATE TABLE movies (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(600) NOT NULL,
  date VARCHAR(600) NOT NULL,
  movieid INT NOT NULL,
  overview TEXT(21845) NOT NULL,
  image VARCHAR(600) NOT NULL,
  UNIQUE(movieid)
);