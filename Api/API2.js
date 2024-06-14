// async and await

const fetchdata = async () => {
  const response = await fetch("https://fakestoreapi.com/products/1");
  const posts = await response.json();
  console.log(posts);
};

fetchdata();
