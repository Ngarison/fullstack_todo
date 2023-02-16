const mysql = require("mysql");
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    // database: "ToDo"
});
//connect to mysql
connection.connect((err) =>{
    //check for error
    if(err){
        throw err;
    }
    //if no error then show message
    console.log("MySql connected...");
});
//Creation of Database
/* connection.query("CREATE DATABASE IF NOT EXISTS DB",(err)=>{
    if(err){
        throw err
    }
    console.log("database created!")
}) */

connection.query(" USE DB",(err)=>{
    if(err){
        throw err
    }
    console.log("DB used!")
})

//Creation of the table user
connection.query("CREATE TABLE IF NOT EXISTS USERS (UsersID int primary key auto_increment, Password varchar(255),LastName varchar(255),FirstName varchar(255));",(err)=>{
    if(err){
        throw err
    }
    console.log("Table Persons created!")
})

//creation of the table task;
connection.query("CREATE TABLE IF NOT EXISTS TASKS (id int  primary key auto_increment);",(err)=>{
    if(err){
        throw err
    }
    console.log("Table task created!")
})


//Insertion of values in user table
connection.query("INSERT INTO USERS (Password, LastName, FirstName) VALUES ('12540', 'Arnaud', 'Ngari');",(err)=>{
    if(err){
        throw err
    }
    console.log("User Inserted!")
})

exports.modules= connection;