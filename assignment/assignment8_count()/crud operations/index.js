const express = require('express')
const app = express()
const port = 3000
app.use(express.json())

var mysql = require('mysql')

var con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'employee1',
})

app.post('/update', function (req, res) {
  con.connect(function (err) {
    if (err) throw err

    var sql = "UPDATE citizens SET author ='LL' WHERE id=1015;"

    con.query(sql, function (err, result) {
      if (err) throw err
      console.log('Result||')
      res.send(result)
    })
  })
})

app.listen(3000, () => {
  console.log(`port running ${port}`)
})
