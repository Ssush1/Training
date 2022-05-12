const express = require('express')
const app = express()
const port = 8000
const mysql = require('mysql')
const cors=require('cors')
app.use(cors());
app.use(express.json())
const jwt = require ("jsonwebtoken");
//jwt-required to secure the data  by data-encryption

//calling the function verifytoken
function verifytoken(req,res,next){
  //parameters-request,response,next (for verification of 
  //each line in the page and moving to the next line)
  //This verify token is generated once in the index file and 
  //used again in other pages of the project by calling at the validation of each page
  
  // req.header.token;
  const bearerHeader = req.headers["authorization"];
  //if bearertoken is generated as Bearer 5015885085484809959059"
  if (typeof bearerHeader !== "undefined") {
    
    const bearerToken = bearerHeader.split(" ")[1];
    //Bearertoken is generated in the array format so it is denoted as [1] 
    //(<-position) and the postion is 1 because there is a space in between 
    //such that _token space in the 0th postion and token in the 1st postion
    jwt.verify(bearerToken,"secretkey",(err, authData)=>{
      //Secretkey -generated with the token
      if(err)
        res.sendStatus(403)
      else{
        next();
      }
    })
  }else{
    res.sendStatus(403);
  }
  //This function -jwt.verify(()=>{}) if else means: verifying the bearertoken
      // and secretkey -if error then show(sending status on the webpage) 403 and 
      //else then go to next line/page like this -> jwt.verify(true next else 403) 
}


var con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'ecommerce',
})

app.post('/Uservalidate', function (req, res) {
  var usrname = req.body.username

  var passwrd = req.body.password
  //if (req.body.username == existing username && req.body.password == existing password then
    // result = [{ id: "1" }];
     //res.send(result);
     //result + "secretkey"=got from=>jwt

  var a =
    "select id,txtUsername,txtPassword from tblusers where txtUsername='" +
    usrname +
    "' and txtPassword='" +
    passwrd +
    "';"
    //the result or response comes as an array and the id of the person comes at the 0th position
    //if the array data length, is greater than 0,the id exists so the loop proceeds
    if(result.length>0){
      const usr=result[0];
      jwt.sign({user:usr},"secretkey",(err, token)=>{
        if(err)
          res.send(err)
        else
          res.json({token:token})
      })
    } else{
      res.json({token:""})
    }}
    )
    app.post("/getproducts", verifyToken, (req, res) => {
      result = [
        { Id: "1", txtprdName: "sample", Rate: "100", Tax: "18" },
        { Id: "2", txtprdName: "sample2", Rate: "100", Tax: "18" },
        { Id: "3", txtprdName: "sample3", Rate: "100", Tax: "18" },
      ];
      res.send(result);
    });
   
  app.listen(8000, () => {
  console.log(`Example app listening on port ${port}`)
});
