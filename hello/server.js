const http = require('http');
const server = http.createServer(function(req, res){
  res.end("Hello");
});
const port = 4000;
server.listen(port, ()=>{ //asynchronous function
  console.log(`AT PORT 4000`);
});