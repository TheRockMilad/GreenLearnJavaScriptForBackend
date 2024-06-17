const { error } = require("console");
const { json } = require("express");
const fs = require("fs");

// console.log("text before fs");

// const data = fs.readFileSync("user.txt");
// try {
//   console.log(`${data}`);
// } catch (error) {
//   console.log(error);
// }

// console.log("text after fs");

//----------------------------------------------------

fs.readFile("data.json", (error, data) => {
  try {
    console.log(JSON.parse(data).books[1]);
  } catch (err) {
    console.log(error);
  }
});
