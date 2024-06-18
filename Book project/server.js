const http = require("http");
const fs = require("fs");
const url = require("url");
const db = require("./db.json");
const crypto = require("crypto");

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/api/users") {
    fs.readFile("db.json", (err, db) => {
      if (err) {
        throw err;
      }
      const data = JSON.parse(db);
      res.writeHead(200, { "content-Type": "application/json" });
      res.write(JSON.stringify(data.users));
      res.end();
    });
  } else if (req.method === "GET" && req.url === "/api/books") {
    fs.readFile("db.json", (err, db) => {
      if (err) {
        throw err;
      }
      const data = JSON.parse(db);
      res.writeHead(200, { "content-Type": "application/json" });
      res.write(JSON.stringify(data.books));
      res.end();
    });
  } else if (req.method === "DELETE" && req.url.startsWith("/api/books")) {
    const parsedUrl = url.parse(req.url, true);
    const bookId = Number(parsedUrl.query.id);

    fs.readFile("db.json", (err, db) => {
      if (err) {
        throw err;
      }

      const data = JSON.parse(db);
      const newBook = data.books.filter((book) => book.id !== bookId);

      if (data.books.length === newBook.length) {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.write(JSON.stringify({ message: "This book does not exist" }));
        res.end();
      } else {
        const updatedDb = { ...data, books: newBook };
        fs.writeFile("db.json", JSON.stringify(updatedDb), (err) => {
          if (err) {
            throw err;
          }
          res.writeHead(200, { "Content-Type": "application/json" });
          res.write(JSON.stringify({ message: "Book removed successfully" }));
          res.end();
        });
      }
    });
  } else if (req.method === "POST" && req.url === "/api/books") {
    let book = "";
    //دیتا رو از بدنه میگیریم
    req.on("data", (data) => {
      book = book + data.toString();
    });

    // اگه با موفقیت به پایان برسه
    req.on("end", () => {
      console.log(JSON.parse(book));
      // اطلاعات رو توی کتاب جدید وارد میکنیم
      const newBook = {
        id: crypto.randomUUID(),
        ...JSON.parse(book),
        free: 1,
      };
      db.books.push(newBook);
      fs.writeFile("db.json", JSON.stringify(db), (err) => {
        if (err) {
          throw err;
        }
        res.writeHead(201, { "Content-Type": "application/json" });
        res.write(JSON.stringify({ message: "New book created" }));
        res.end();
      });
    });
    res.end("New book Added");
  } else if (req.method === "PUT" && req.url.startsWith("/api/books")) {
    const parsedUrl = url.parse(req.url, true);
    const bookId = parsedUrl.query.id;

    let bookNewInfo = "";

    req.on("data", (data) => {
      bookNewInfo = bookNewInfo + data.toString();
    });
    req.on("end", () => {
      const reqBody = JSON.parse(bookNewInfo);
      db.books.forEach(book => {
        if (book.id === Number(bookId)) {
          book.title = reqBody.title;
          book.author = reqBody.author;
          book.Price = reqBody.Price;
        }
      });
      fs.writeFile("./db.json", JSON.stringify(db), (err) => {
        if (err) {
          throw err;
        }
        res.writeHead(200, { "Content-Type": "application/json" });
        res.write(JSON.stringify({ message: "Book updated successfully" }));
        res.end();
      });
    });
  }
});

server.listen(4000, () => {
  console.log("Server Running on Port 4000");
});
