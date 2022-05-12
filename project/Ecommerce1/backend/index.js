const express = require('express')
const app = express()
const port = 8000
const mysql = require('mysql')
const cors = require('cors')
app.use(cors())
app.use(express.json())
const jwt = require('jsonwebtoken')
//const res = require('express/lib/response')

var con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'ecommerce',
})

function verifyToken(req, res, next) {
  const bearerHeader = req.headers['authorization']

  if (typeof bearerHeader !== 'undefined') {
    const bearerToken = bearerHeader.split(' ')[1]

    jwt.verify(bearerToken, 'secretkey', (err, authdata) => {
      if (err) res.sendStatus(403)
      else {
        next()
      }
    })
  } else {
    res.sendStatus(403)
  }
}

con.connect(function (err) {
  if (err) {
    console.log(err)
  } else {
    console.log('connected')
  }
})

app.post('/uservalidate', function (req, res) {
  
  var usrname = req.body.username

  var passwrd = req.body.password

  var a =
    "select id,txtUsername,txtPassword from tblusers where txtUsername='" +
    usrname +
    "' and txtPassword='" +
    passwrd +
    "';"

  con.query(a, function (err, result) {
    //if (err) throw err
    //res.send(result)

    if (result.length > 0) {
      const usr = result[0]
      jwt.sign({ user: usr }, 'secretkey', (err, token) => {
        if (err) res.send(err)
        else {
          res.json({ token: token })
        }
      })
    } else {
      res.json({ token: '' })
    }
  })
})

app.post('/getproducts', verifyToken, (req, res) => {
result = [
{ Id: '1', txtprdName: 'sample', Rate: '100', Tax: '18' },
{ Id: '2', txtprdName: 'sample2', Rate: '100', Tax: '18' },
{ Id: '3', txtprdName: 'sample3', Rate: '100', Tax: '18' },
]
res.send(result)
})
console.log('Hi')
app.listen(8000, () => {
  console.log(`Example app listening on port ${port}`)
})
