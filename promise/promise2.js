const mypromis = new Promise((resolve, reject) => {
  let isLogin = false;
  resolve("Success");
  reject("Promise Rejected");

  setTimeout(() => {
    if (isLogin) {
      resolve();
    } else {
      reject();
    }
  }, 2000);
});

console.log(mypromis);
