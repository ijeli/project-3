DROP DATABASE IF EXISTS check_ill_db;
CREATE DATABASE check_ill_db;


USE check_ill_db;

CREATE TABLE Profiles
(
id INT NOT NULL AUTO_INCREMENT,
firstName VARCHAR(20) NOT NULL,
lastName VARCHAR(20) NOT NULL,
monthOfBirth INTEGER (10) NULL,
dayOfBirth INTEGER (10) NULL,
yearOfBirth INTEGER (10) NULL,
createdAt DATETIME NOT NULL,
updatedAt DATETIME NOT NULL,
Primary Key (id)

);

INSERT INTO Profiles (firstName, lastName, monthOfBirth, dayOfBirth, yearOfBirth, createdAt, updatedAt)
VALUES ('Jeremy','Legaspi', 8 , 17, 1994, 01/01/2000, 01/01/2000);