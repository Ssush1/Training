const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/countryfetch', (req, res) => {
    res.send('India')
  })

  app.get('/statefetch', (req, res) => {
    res.send('statefetch')
  })
  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})