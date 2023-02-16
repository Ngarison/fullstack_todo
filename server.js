const express = require('express')
const database = require("./config/database");
const app = express()
const PORT = process.env.PORT ||5000;
const path = require('path');

//Sending request to the home page http://localhost:5000;
app.get('/',  (req, res) =>{
  res.sendFile(path.join(__dirname+'/views/home.html'));
  //res.send('Hello World')
})

//Sending request to the admin page http://localhost:5000;
app.get('/todo',  (req, res) =>{
    res.sendFile(path.join(__dirname+'/views/todo.html'));
     //__dirname : It will resolve to your project folder.
    //res.send('admin page')
  })

  //Sending request to the admin page http://localhost:5000;
app.get('/profil',  (req, res) =>{
  res.sendFile(path.join(__dirname+'/views/todo.html'));
   //__dirname : It will resolve to your project folder.
  //res.send('admin page')
})
  
app.listen(PORT, (req, res, err) =>{
    if(err){
        throw err;
    }
    console.log(`Server is running on port ${PORT}`);
  });