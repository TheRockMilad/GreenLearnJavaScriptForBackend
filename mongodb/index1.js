const { MongoClient } = require("mongodb");
const url = "mongodb://127.0.0.1:27017";
const dbconnection = new MongoClient(url);
const dbName = "library";

const main = async () => {
  await dbconnection.connect();
  console.log("Connected to dbConnection succesfully");
  const db = dbconnection.db(dbName);

  //اضافه کردن یک داکیومنت به دیتابیس
  //   const userCollectiion = db.collection("Users");
  //   userCollectiion.insertOne({
  //     name: "Milad",
  //     username: "smh",
  //     eamil: "therock@gmail.com",
  //     crime: 0,
  //     role: "ADMIN",
  //   });


  return "done";
};
main();

console.log("object");
