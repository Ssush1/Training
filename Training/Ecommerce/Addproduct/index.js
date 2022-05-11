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

  app.post('/addproduct', function (req, res) {
  con.connect(function (err) {
    if (err) throw err;
    var b ="insert into tblproduct(txtProdName,txtProdPrice,dtCreatedOn,dtUpdatedOn) values('shelf','rs.695','2022-05-01','2022-05-03');";
    con.query(b, function (err, result)
     {
      if (err) throw err;
      res.send(result);
    console.log("Result");
    });
  });
});
    app.listen(5000, () => {
    console.log(`Example app listening on port ${port}`)
  })
  