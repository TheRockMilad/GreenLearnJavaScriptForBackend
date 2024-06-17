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

fs.readFile("data.json", (error, data) => {
  if (error) {
    throw error;
  }
  const db = JSON.parse(data);
  const newBook = {
    id: db.books.length + 1,
    title: "Python Book",
  };
  db.books.push(newBook);
  fs.writeFile("data.json", JSON.stringify(db), (err) => {
    if (err) {
      throw err;
    }
    console.log("New book added successfully");
  });
  console.log(db);
});
