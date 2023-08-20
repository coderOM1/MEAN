const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res)=>{
    if(req.url == '/process' && req.method==='POST'){
      const body = '';
      req.on('data', chunk=>{
        body == chunk.toString();
      });
      req.on('end', ()=>{
        console.log(body);
        res.end('ok => ' + body);
      })
  }
  else if(req.url=='/index.html' && req.method === "GET")
  {
    fs.readFile("files/index.html", (err, data)=>{
      res.write(data);
      res.end();
    })
  }
  else{

  }
});

server.listen(5000);
console.log("Server started at 5000");