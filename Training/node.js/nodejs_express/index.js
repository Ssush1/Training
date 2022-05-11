const express = require('express')
const app = express()
const port = 3000
app.use(express.json());



app.post('/addition', (req, res) => {
  var a = 7;
  var b = 8;
  var c = a + b;
  res.send ('addition'+c)
  console.log('/addition'+c)
})
  

app.listen(3000, () => {
  console.log(`Example app listening on port ${port}`)
})



