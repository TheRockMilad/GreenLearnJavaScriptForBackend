const { MongoClient, ObjectId } = require("mongodb");
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

  const userCollectiion = db.collection("Users");
  //   userCollectiion.insertOne({
  //     name: "Hamid",
  //     username: "HHH",
  //     eamil: "Hamid@gmail.com",
  //     crime: 0,
  //     role: "ADMIN",
  //   });

  //سرچ اونایی که جریمه 0 دارن
  // const noCrimeUsers = await userCollectiion.find({crime : 0}).toArray()
  // console.log(noCrimeUsers);

  // فیلتر با نام
  // const User = await userCollectiion.findOne({name : "Milad"})

  //فیلتر با آیدی
  // const User = await userCollectiion.findOne({_id : new ObjectId("66768087b76dbbdcd2dbf583")})
  // console.log(User);

  // deleteOne || deleteMany || findOneAndDelete
  //   const deleteRasult = await userCollectiion.deleteOne({
  //     _id: new ObjectId("66766cd4d40f674f5612b2f1"),
  //   });
  //   console.log(deleteRasult);

  // findOneAndDelete
  // این متد ، هرچیزی رو که پاک میکنه تو خروجی ذخیره میکنه

  //Update
  //   const updateUser = await userCollectiion.updateOne(
  //     { name: "Milad" },
  //     {
  //       $set: {
  //         crime: 120000,
  //       },
  //     }
  //   );

  //replace && nasted Document----------------------------------
  //   const replaceUser = await userCollectiion.replaceOne(
  //     { name: "Milad" },
  //     {
  //       name: "Milad",
  //       family : "Hosseini",
  //       username : "Therock_milad",
  //       age: 32,
  //       tags: ["Soccer Player", "Backend Dev", "Gamer"],
  //       address: {
  //         country: "Iran",
  //         province: "Tehran",
  //         city: "Tehran",
  //       },
  //     }
  //   );

  //   console.log(replaceUser);

  //   const mainUser = await userCollectiion.findOne({
  //     _id: new ObjectId("66766cd4d40f674f5612b2f2"),
  //   });
  //   console.log(mainUser.address.city);

  // ------------------- operators------------------------
  //   const result = await userCollectiion
  //     .find({
  //       // role : {$ne : "USER"}      نباشه
  //       // role : {$eq : "USER"}      باشه
  //       // crime : {$lt : 12}         crime > 12
  //       // crime : {$lte : 12}        crime >= 12
  //       // crime : {$gt : 12}         crime < 12
  //       // crime : {$gte : 12}        crime <= 12
  //       // crime : {$in : [12,5]}     include
  //       // crime : {$nin : [12,5]}    not in
  //       //   $or: [{ crime: { $in: [22, 12] } }, { age: 18 }],  یا
  //     })
  //     .toArray();

  //   console.log(result);

  //-----------------Drop Collection and Database---------------------
  // پاک کردن کالکشن ها
  // const result = await userCollectiion.drop()
  // const result = await db.collection("books").drop()
  // const result = await db.dropCollection('rents')

  // پاک کردن کل دیتابیس
  // const result = await db.dropDatabase()

  //-------------exists-------------------
  // const result = await userCollectiion.find({address:{$exists:true}}).toArray()
  // console.log(result);

  //------------------operator for update-------------------------
  // const result = await userCollectiion.updateOne(
  //   { username: "Therock_milad" },
  //   {
  //     // $set : {email : "therock.milad@gmail.com"},
  //     // $unset : {email : 1},
  //     // $inc :{age :3},
  //     // $min :{age :3},
  //     // $max :{age :3},
  //     // $mul :{age :3},
  //   }
  // );
  //---------------updateAt & createAt----------------

  // const result = await userCollectiion.updateMany({createdAt: { $exists: false }},{
  //   $currentDate : {
  //     createdAt  : true
  // }
  // $currentDate : {
  //   updatedAt  : true
  // }
  // }
  // )

  // ------------------کار با آرایه ها در دیتابیس---------------------------
  // const result = await userCollectiion.find({ tags: "seo" }).toArray();
  // const result = await userCollectiion.find({ tags: ["seo"] }).toArray();
  // const result = await userCollectiion.find({ tags: { $all: ["seo", "front"] } }).toArray();
  // const result = await userCollectiion.find({ tags: {$size : 4 }}).toArray();

  // const result = await userCollectiion.updateOne(
  //   { _id: new ObjectId("66768087b76dbbdcd2dbf583") },
  //   {
  //     // $push: { tags: "frontend" },
  //     // $addToSet: { tags: "frontend" },
  //     // $pop: { tags: 1 },
  //     // $pull : {tags : "seo"}

  //   }
  // );
  // console.log(result);

  // ----------------------------------------------------

  return "done";
};
main();
