var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "assignment2"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM studentdetails", function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});
