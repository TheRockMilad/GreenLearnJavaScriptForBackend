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

  //اضافه کردن چند داکیومنت به دیتابیس
  //   const rentCollection = db.collection("rent");
  //   rentCollection.insertMany([
  //     { userID: 1, bookId: 1 },
  //     { userID: 2, bookId: 2 },
  //   ]);

  return "done";
};
main();