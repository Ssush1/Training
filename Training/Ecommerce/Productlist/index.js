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

  app.post('/fetchproduct', function (req, res) {
  con.connect(function (err) {
    if (err) throw err;
    var b ="Select txtProdName,txtProdPrice,dtCreatedOn,dtUpdatedOn from tblproduct where id=2;";
    con.query(b, function (err, result)
     {
      if (err) throw err;
      console.log("Result");
      res.send(result);
    });
  });
});
    app.listen(5000, () => {
    console.log(`Example app listening on port ${port}`)
  })
  