const express = require('express')
const app = express();

app.use(express.json());

app.post('/addition', function (req, res) {
    console.log(req.body);

    var a = req.body.name;
    var b = req.body.age;
    var c = req.body.city;
    let z=a+' '
    +b+' '
    +c
    res.send(''+z)
    res.end()
})


app.listen(3000, () => {
    console.log(`server is running`)
})
