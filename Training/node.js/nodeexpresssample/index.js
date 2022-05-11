const express = require('express')
const app = express()
const port = 3000

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "assignment1"
});


app.post('/', (req, res) => {
  con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("SELECT txtempname FROM employee;", function (err, result) {
      if (err) throw err;
      console.log("done");
      res.send(result);
    });
  });
})
app.listen(3000, () => {
  console.log(`Example app listening on port ${port}`)
})