const fs = require('fs');
const http = require('http');
const functionModule = require('./validation');
const server = http.createServer((req, res)=>{
  console.log("Req recieved = > " + req.url);
  res.write("other pages = > " + functionModule.f1() + " " + functionModule.f2());
  res.end();
})

server.listen(5000, ()=>{
  console.log(`Server running at 5000`);
})