const express = require('express');
const app = express();
const port = 3000;
const mysql = require('mysql');

app.use(express.json());

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "ecommerce"
});

app.post('/countryfetch', function (req, res) {
  con.connect(function (err) {
    if (err) throw err;
    //var sql="Select id,txtStateName from tblstate where refCountryName=1";
    var a = "Select id,txtcountryname from tblcountry";

    con.query(a, function (err, result) {
      if (err) throw err;
      console.log("Result");
      res.send(result);
    });
  });
})
app.post('/statefetch', function (req, res) {
  var num=req.body.CountryId;
  //console.log(req.body.CountryId);
  con.connect(function (err) {
    if (err) throw err;
    var a="select id,txtStatename from tblstate where refCountryName='"+num+"' ";
    con.query(a,function (err, result)
     {
      if (err) throw err;
      console.log(a);
      console.log(num);
      res.send(result);
    });
  });
});

app.post('/Userinsert', function (req, res) {
  con.connect(function (err) {
    if (err) throw err;
    var c = "insert into tblusers (id,txtUserType,txtUsername,txtPassword,txtFirstName,txtLastName,refCountry,refState,txtAddress) values(5,'client','anuj3','we123','viraj','khanna',1,2,'gujarat')";
    
    con.query(c, function (err, result) {
      if (err) throw err;
      console.log("Result");
      res.send(result);
    });
  });
});

app.post('/fetchuser', function (req, res) {
  con.connect(function (err) {
    if (err) throw err;
    var A=req.body.txtUserType;
    var c = "select txtUsername,txtFirstName,txtLastName,txtUserType from tblusers where txtUserType='"+A+"';";
        con.query(c, function (err, result) {
      if (err) throw err;
      console.log("Result");
      res.send(result);
    });
  });
});

app.post('/updateuser', function (req, res) {
  con.connect(function (err) {
    if (err) throw err;

    var c=req.body.txtUserType;
    
    var b ="update tblusers set txtUserType= '"+c+"' where txtUsername= 'Danny1';";
    


    con.query(b, function (err, result)
     {
      if (err) throw err;
      console.log("Result");
      res.send(result);
    });
  });
});



app.listen(3000, () => {
  console.log(`Example app listening on port ${port}`)
})
