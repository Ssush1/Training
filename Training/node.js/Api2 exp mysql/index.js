const express = require('express')
const app = express()
const port = 3000
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/countryfetch', (req, res) => {
    res.send('India')
  })

  app.post('/statefetch', (req, res) => {
    res.send('statefetch')
    console.log(`Yes ${port}`)
  })
  

app.listen(3000, ()=>{
  console.log(`port running ${port}`)});
