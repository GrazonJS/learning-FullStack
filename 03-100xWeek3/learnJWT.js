const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "12434";

const app = express();

app.use(express.json());

const allUsers = [
  {
    username: "dave@mail.com",
    password: "1234",
    name: "dave",
  },
  {
    username: "john@mail.com",
    password: "6542",
    name: "john",
  },
  {
    username: "doe@mail.com",
    password: "7654",
    name: "doe",
  },
];

const userExist = (username, password) => {
  //to check whether the user exist or not
  return allUsers.some((eachUser) => {
    return username === eachUser.username && password === eachUser.password;
  });
};

app.post("/signin", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExist(username, password)) {
    return res.status(403).json({
      msg: "page is foribidden for this user",
    });
  }

  var token = jwt.sign({ username: username }, jwtPassword);
  return res.json({ token });
});

app.get("/users", (req, res) => {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    res.json({ name: username });
  } catch (err) {
    return res.status(403).json({
      msg: "invalid token",
    });
  }
});

app.listen(3000, () => {
  console.log("the PORT is listening on 3000 ");
});
