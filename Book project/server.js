const http = require("http");
const fs = require("fs");
const url = require("url");
const db = require("./db.json");

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
  } else if (req.method === "DELETE") {
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
  }
});

server.listen(4000, () => {
  console.log("Server Running on Port 4000");
});
