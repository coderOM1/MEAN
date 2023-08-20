const fs = require('fs')

fs.writeFile('hello.txt', "Jai Shree Ram", (err, data)=>{// writing in the file
  if(err) throw err;
  console.log("File written");
})

fs.appendFile('hello.txt', "Jai Shree Ram", (err, data)=>{// appending in the file
  if(err) throw err;
  console.log("File appended");
})

fs.readFile('hello.txt', "utf-8", (err, data)=>{// reading the file
  if(err) throw err;
  console.log(data);
});

fs.rename('hello.txt', 'hello2.txt', (err, data)=>{// renaming the file
  if(err) throw err;
  console.log("File renamed");
});

console.log(__filename);

// fs.unlink('hello.txt', (err, data)=>{// deleting the file
//   if(err) throw err;
//   console.log("File deleted");
// })