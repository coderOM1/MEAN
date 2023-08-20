const fs = require('fs');
// const data = fs.readFileSync("hello.txt", "utf-8");
//console.log(data);
fs.readFile("hello.txt", "utf-8", (err, data)=>{ //3 parameters path, encoding, function()=>
  console.log(data);
})
console.log("File reading done");// will execute first