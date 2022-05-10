const express = require('express');
const app = express();
const port = 5000;
const mysql = require('mysql');
app.use(express.json());

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "ecommerce"
  });



  

app.listen(5000, () => {
    console.log(`Example app listening on port ${port}`)
  })
  

