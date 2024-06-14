// // API

// const { response } = require("express");

// fetch("https://jsonplaceholder.typicode.com/posts/1")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     return response.json();
//   })
//   .then((posts) => console.log(posts));

//---------------------------------------------------------

fetch("https://fakestoreapi.com/products/1")
  .then((response) => response.json())
  .then((products) => console.log(products));
