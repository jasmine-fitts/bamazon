//Dependencies
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

//Create connection to the database
connection.connect(function(err) {
    if (err) throw err; 
    console.log("connected as id" + connection.threadId);
    // userPurchase();
});

function showInventory() {
    connection.query("SELECT * FROM products", function(err, res){
        if (err) throw err; 
        console.log(columnify(res));
        userPurchase();
       
    });
}

function userPurchase() {
    inquirer.prompt([
        {
            name: "item_id", 
            type: "input", 
            message: "What ID number would you like to purchase?", 
            validate: function(value) {
                if (isNaN(value) === false) {
                    return true;
                }
                return false;
            }
         }, 
        {
            name: "quanity", 
            type: "input", 
            message: "How many of products would you like to buy?", 
        
    }
    ]);
    //  .then(function(answer) {
    //     connection.query(
    //       "SELECT * FROM products WHERE item_id = ?", [answer.item_id], function (err, res){
    //           if(err) throw err;
    //         var updatedQuantity = res[0].stock_quantity - answer.quantity;
    //         if (updatedQuantity < 0){
    //           console.log("Insufficient quantity! We do not have enough in stock.");
    //           showInventory();
    //         } else {
    //           console.log("Your order has been fulfilled " + res[0].product_name + ". Here's " + answer.quantity);
    //         connection.query("UPDATE products SET ? WHERE ?", [{stock_quantity: updatedQuantity},{item_id: answer.itemChoice}],function(err) {
    //           if (err) throw err;
    //         });
    //       showInventory();
    //       }
    //   });
    //   });
    };
    showInventory();
    
  