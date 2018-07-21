var mysql = require("mysql");
var inquirer = require("inquirer");
var columnify = require("columnify");

var connection = mysql.createConnection({
    host: "localhost",
    port: 8889, 
    user: "root", 
    password: "root", 
    database: "bamazon_db"

});