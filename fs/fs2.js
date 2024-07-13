const fs = require("fs");
const crypto = require("crypto");

//async ---------------------------------------------------

fs.writeFile("user.txt", "Zahra\n", { flag: "a" }, (err) => {
  if (err) {
    console.log(err);
  }
  console.log("New User added sucessfully :)");
});

//sync ----------------------------------------------------

// const result = fs.writeFileSync('user.txt','\nOmid',{flag : "a"})
// console.log('Result => ' + result);

console.log("Test log after write users files");

//Async added to Json file -----------------------------------------------

fs.readFile("data.json", (error, data) => {  //data == json
  if (error) {
    {throw error}
  }
  const db = JSON.parse(data);  // data => db => obj
  const newBook = { 
    id: db.books.length + 1,  // id + 1 
    title: "P Book",
  };
  db.books.push(newBook); // newBook => added to db
  fs.writeFile("data.json", JSON.stringify(db), (err) => {  //db = obj => json
    if (err) {
      throw err;
    }
    console.log("New book added successfully");
  });
  console.log(db);
});
