const express = require('express');
const app = express();
const port = 3030;
const mysql = require('mysql');
app.use(express.json());

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "agileprom"
});

con.connect(function (err) {
  if (err) throw err;
  console.log("connected");
});

app.post('/uservalidate', function (req, res) {
  var uname = req.body.username;
  var paswd = req.body.password;

  var sql1 = "Select id from tblusers where txtUsername='" + uname + "';;"
  var sql2 = "Select RefUserRole from tblusers where txtUsername='" + uname + "'and txtPassword='" + paswd + "';;"

  con.query(sql1, function (err, result) {
    var a = result[0];
    if (a == undefined) {
      res.send("user doesn't exist go to signup");
    }
    else {
      con.query(sql2, function (err, result) {
        if (err) throw err;
        else {
          res.send(result);
  
          }
      }

      )
    };
  })
})

app.post('/userfetch', function (req, res) {
  var sql3 = "Select txtUsername,txtPassword from tblusers where id=2;"
  con.query(sql3, function (err, result) {
    if (err) throw err;
    else {
      res.send(result);
    }
  })
})

app.post('/userinsert', function (req, res) {
  var uname = req.body.txtUsername;
  var paswd = req.body.txtPassword;
  var userrole = req.body.RefUserRole;

  var sql1 = "Select id from tblusers where txtUsername='" + uname + "';"
  var sql2 = "Insert into tblusers(txtUsername,txtPassword,RefUserRole) values('" + uname + "','" + paswd + "','" + userrole + "');"

  con.query(sql1, function (err, result) {
    var a = result[0];
    if (a != undefined) {
      res.send("user already exists!!");
    }
    else {
      con.query(sql2, function (err, result) 
      {
        if (err) throw err;
        else {
          res.send(result);
        }
      }

      )
    };
  })
})


app.post('/userfetch', function (req, res) {
  var sql4 = "Select id,txtUserrole from tbluserroles;"

  con.query(sql4, function (err, result) {
    if (err) throw err;
    else {
      res.send(result);
    }
  })
});

app.post('/projectfetch', function (req, res) {
  var sql4 = "Select txtName,txttype,refprojectOwner,dtEststartdate,dtestenddate from tblprojects where id=5;"

  con.query(sql4, function (err, result) {
    if (err) throw err;
    else {
      res.send(result);
    }
  })
});

app.post('/insertproject', function (req, res) {
  var name = req.body.txtName;
  var type = req.body.txttype;
  var owner = req.body.refprojectOwner;
  var stdate=req.body.dtEststartdate;
  var endate=req.body.dtestenddate;

  var sql2 = "insert into tblprojects(txtName,txttype,refprojectOwner,dtEststartdate,dtestenddate) values ('"+ name +"','"+ type +"','"+ owner +"','"+ stdate +"','"+ endate+"');"

        con.query(sql2, function (err, result) 
      {
        if (err) throw err;
        else {
          res.send(result);
        }
      })
    });


app.listen(3030, () => {
  console.log(`Example app listening on port ${port}`);
});
