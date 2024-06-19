const fs = require("fs");

fs.rename("./db1.json", "db2.json", (err) => {
  if (err) {
    throw err;
  }
  console.log("file rename successfully");
});

fs.unlink("./db.json", (err) => {
  if (err) {
    throw err;
  }
  console.log("file remove successfully");
});

if (fs.existsSync("./db3.json")) {
  console.log("file is exist");
} else {
  console.log("file is not exist");
}

fs.appendFile('/.users.txt','amin\n',(err)=>{
  
})