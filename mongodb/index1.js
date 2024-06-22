const { MongoClient } = require("mongodb");
const http = require("http");
//.env اینجور این فایل کانفیگ میشه
require("dotenv").config();

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/") {
    console.log("Home");
  }
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end();
});

// میشه اینجا ازش استفاده کرد
server.listen(process.env.PORT, () => {
  console.log(`Server Running On Port ${process.env.PORT}`);
});

const dbconnection = new MongoClient(process.env.dbConnectionUrl);
const dbName = process.env.dbName;

const main = async () => {
  await dbconnection.connect();
  console.log("Connected to dbConnection succesfully");
  const db = dbconnection.db(dbName);

//   const userCollectiion = db.collection("Users");
//   userCollectiion.insertOne({
//     name: "Hamid",
//     username: "HHH",
//     eamil: "Hamid@gmail.com",
//     crime: 0,
//     role: "ADMIN",
//   });

  return "done";
};
main();
