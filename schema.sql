-- Create database called 'bamazon' 
CREATE DATABASE bamazon;

USE bamazon;

-- Create a table inside of that database called 'products'; within the table create columns that contain the following 
CREATE TABLE products (
    item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(50) NOT NULL, 
    department_name VARCHAR(50) NOT NULL, 
    price DECIMAL(10,2) NOT NULL,
    stock_qunity INTEGER(11) NOT NULL, 
    PRIMARY KEY (item_id)
);

SELECT * FROM products