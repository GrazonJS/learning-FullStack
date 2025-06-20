const axios = require("axios");

//using just promise
const promiseFunction = () => {
  fetch("https://api.github.com/users/GrazonJS")
    .then((res) => res.json())
    .then((data) => {
      console.log(data.name);
    });
};
promiseFunction();

//using async await
const asncAwaitFunction = async () => {
  const res = await fetch("https://api.github.com/users/GrazonJS");
  const data = await res.json();
  console.log(data.name);
};
asncAwaitFunction();

//using axios>
const axiosFunction = async () => {
  const res = await axios("https://api.github.com/users/GrazonJS");
  console.log(res.data.name);
};
axiosFunction();
