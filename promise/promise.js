const { default: mongoose } = require("mongoose");

const mypromis = new Promise((resolve, reject) => {
  let isLogin = true;
  setTimeout(() => {
    if (isLogin) {
      resolve();
    } else {
      reject();
    }
  }, 2000);
});

const success = () => console.log("Success :))");
const error = () => console.log("Error :((");

// mypromis.then(success,error) // نوع اول
// mypromis.then(()=>{console.log(" Success :))")}).catch(()=>{console.log("error")}) // نوع دوم

// استایک
mongoose
  .connect("mongodb://127.0.0.1:27017/test")
  .then(() => console.log("yes"))
  .catch((err) => console.log("error " + err));

// دریافت پرامیس در خروجی  --------------------------------------------------
const mypromis2 = new Promise((resolve, reject) => {
  let isLogin = true;
  setTimeout(() => {
    if (isLogin) {
      resolve("Promis ressolved");
    } else {
      reject("Promis rejeccted");
    }
  }, 2000);
});

mypromis2
  .then((value) => console.log(value))
  .catch((value) => console.log(value));

// addBook ----------------------------------------------------------------------
const books = [
  { id: 1, title: "Golestan", price: 500_000 },
  { id: 2, title: "shahnameh", price: 800_000 },
  { id: 3, title: "bi shouri", price: 250_000 },
];

const addbook = (title, price) => {
  let newbook = {
    id: books.length + 1,
    title: title,
    price: price,
  };
  // پرامیس باید حتما بره داخل روت بدنه
  // نباید بره توی ی عملیات ای سینک => 1
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // 1 => اینجا خطا میده
      if (books.push(newbook)) {
        resolve(books);
      } else {
        reject(new Error("Rejected :(("));
      }
    }, 2000);
  });
};

addbook("Pedar Madar ...", 400_000)
  .then(() => console.log("book added"))
  .catch((value) => console.log(value))
  .finally(() => console.log("Promise Finished"));
