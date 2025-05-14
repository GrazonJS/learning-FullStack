const express = require("express");
const jwt = require("jsonwebtoken");
const zod = require("zod");
const mongoose = require("mongoose");

const port = 3000;
const jwtPassword = "keyHash";

const app = express();
app.use(express.json());

mongoose.connect("");

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  name: String,
});
const User = mongoose.model("Users", userSchema);

const loginSchema = zod.object({
  username: zod.string().email({ message: "Invaild username" }),
  password: zod.string().min(6),
  name: zod.string(),
});

const userValidationMiddleware = (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  const name = req.body.name;

  req.username = username;
  req.password = password;
  req.name = name;

  const newUser = loginSchema.safeParse({
    username: username,
    password: password,
    name: name,
  });
  if (!newUser.success) {
    return res.json({
      newUser,
    });
  } else {
    next();
  }
};

const databaseValidationMiddleware = async (req, res, next) => {
  const email = req.username;
  const password = req.password;
  const name = req.name;

  const existingUser = await User.findOne({ email: email });

  if (existingUser) {
    return res.status(401).json({
      msg: "you already have an account?",
    });
  }
  const newUser = new User({
    email: email,
    password: password,
    name: name,
  });

  newUser.save();
  next();
};

app.post(
  "/signup",
  userValidationMiddleware,
  databaseValidationMiddleware,
  (req, res) => {
    res.send("signup was successfull");
  }
);

app.post("/login", userValidationMiddleware, async (req, res) => {
  const email = req.username;
  const password = req.password;
  const name = req.name;

  const existingUser = await User.findOne({
    email: email,
    password: password,
    name: name,
  });
  if (!existingUser) {
    res.status(400).json({
      msg: "first time? create an account",
    });
  }
  const token = jwt.sign({ username: email, name: name }, jwtPassword);
  res.json({ token: token });
});

app.listen(port, () => {
  console.log(`The PORT is running on ${port}`);
});
