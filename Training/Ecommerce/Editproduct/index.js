
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

  app.post('/editproduct', function (req, res) {
  con.connect(function (err) {
    if (err) throw err;
    var b =" Select txtProdName,txtProdPrice from tblproduct where id=4;";

    con.query(b, function (err, result)
     {
      if (err) throw err;
      console.log("Result");
      res.send(result);
    });
  });
});
  
  app.post('/updateproduct', function (req, res) {
    con.connect(function (err) {
      if (err) throw err;
      
      var ProdName=req.body.txtProdName;
      var id=req.body.id;
      var b ="UPDATE tblproduct SET txtProdName='"+ProdName+"' WHERE id='"+id+"';";
  
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
    