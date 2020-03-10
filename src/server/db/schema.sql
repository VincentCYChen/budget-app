DROP DATABASE IF EXISTS budget;
CREATE DATABASE budget;

USE budget;

CREATE TABLE budget (
    amount DECIMAL(9,2)
);

CREATE TABLE transactions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    date VARCHAR(256),
    description VARCHAR(256),
    amount DECIMAL(9,2),
    transaction_type VARCHAR(256),
    category VARCHAR(256),
    account_name VARCHAR(256)
);