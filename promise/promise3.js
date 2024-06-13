// Chaining Handlers

// const wordPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const word = "milad";
//     if (word) {
//       resolve(word);
//     } else {
//       reject(new Error("text is empty !!"));
//     }
//   }, 1500);
// });
// wordPromise
//   .then((value) => value.split(""))
//   .then((value2) => value2.reverse())
//   .then((value3) => value3.join(""))
//   .then((value4) => console.log(value4))
//   .catch((value) => console.log(value));

//-----------------------------------------------------------------

const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("fetching Data Completed");
      resolve({ id: 1, message: "Fetching Data Completed", age: 30 });
    }, 2000);
  });
};

const parseData = (data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let parseData =
        "parsed the data was successfully => id :" +
        data.id +
        " And message: " +
        data.message;
      resolve({ parsed: parseData });
    }, 2000);
  });
};

const showData = (response) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(response.parsed);
      resolve(response);
    }, 2000);
  });
};

fetchData().then(parseData).then(showData);
