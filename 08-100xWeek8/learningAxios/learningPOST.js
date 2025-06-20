const axios = require("axios");

// POST method using fetch
const fetchData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "nothing new",
      body: "nothing new 1 2 ",
      userId: 2,
    }),
    headers: {
      "Content-type": "application/json",
    },
  });
  const newData = await res.json();
  console.log(newData);
};
fetchData();

//POST method using axios
const axiosPostData = async () => {
  const res = await axios.post(
    "https://jsonplaceholder.typicode.com/posts",
    {
      body: {
        title: "something new",
      },
    },
    {
      headers: {
        "Content-type": "application/json",
      },
    }
  );
  console.log(res.data);
};
axiosPostData();
