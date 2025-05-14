const mongoose = require("mongoose");
const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());

mongoose.connect("-");

const User = mongoose.model("Users", {
  name: String,
  email: String,
  password: String,
});

app.post("/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const name = req.body.name;

  const existingUser = await User.findOne({ email: username });
  if (existingUser) {
    res.status(400).json({
      msg: "user already exist",
    });
  }
  const user = new User({
    name: name,
    email: username,
    password: password,
  });

  user.save();
  res.json({
    msg: "user created sucessfully",
  });
});

app.listen(3000, () => {
  console.log("Listening to the PORT 3000");
});
