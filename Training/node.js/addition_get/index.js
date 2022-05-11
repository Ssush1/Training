const express = require('express')
const app = express()
const port = 8000

app.post('/addition', (req, res) => {
  var a = 7;
  var b = 8;
  var c = a + b;
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.header('Access-Control-Allow-Credentials', true);

  res.send ('addition'+c)
})
  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})