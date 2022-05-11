var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  var num =5;
  var count =6;
  var result='';
  //for loop upto count
  for(let i=0;i<count;i++){
    for(let j=0;j<i;j++){
//result add num + ''
    result+=num+'';
 }
 result+='<br/>';
 }

res.write(result);
res.end();
}).listen(5050);
