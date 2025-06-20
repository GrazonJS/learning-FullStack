const { Router } = require("express");
const { User } = require("../db/database");
const jwt = require("jsonwebtoken");
const JWT_PASSWORD = require("../config");
const router = Router();

router.post("/signup", async (req, res) => {
  const firstName = req.body.firstname;
  const lastName = req.body.lastname;
  const userName = req.body.username;
  const password = req.body.password;

  if (!firstName || !lastName || !userName || !password) {
    return res.status(400).json({
      msg: "all fields are required",
    });
  }

  const isAlreadyUser = await User.findOne({
    username: userName,
  });

  if (isAlreadyUser) {
    return res.status(411).json({
      msg: "existing user ?",
    });
  }

  await User.create({
    firstname: firstName,
    lastname: lastName,
    username: userName,
    password: password,
  });
  res.json({
    msg: "user created sucessfully",
  });
});

router.post("/signin", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (!username || !password) {
    return res.status(400).json({
      msg: "all fields are required",
    });
  }

  const isExistingUser = await User.findOne({
    username: username,
    password: password,
  });

  if (!isExistingUser) {
    return res.status(411).json({
      msg: "new user ? create an account",
    });
  }

  const token = jwt.sign({ username }, JWT_PASSWORD);
  res.json({
    msg: "logged in sucessfully",
    token: token,
  });
});

router.put("/updates", (req, res) => {});

module.exports = router;
