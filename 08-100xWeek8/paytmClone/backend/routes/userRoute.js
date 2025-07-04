const { Router } = require("express");
const { User, Account } = require("../db/database");
const jwt = require("jsonwebtoken");
const zod = require("zod");
const JWT_PASSWORD = require("../config");
const { signupMiddleware } = require("../middlewares/signupMiddleware");
const { authMiddleware } = require("../middlewares/authmiddleware");
const router = Router();

router.post("/signup", signupMiddleware, async (req, res) => {
  const { firstname, lastname, username, password } = req.body;

  const isAlreadyUser = await User.findOne({ username });

  if (isAlreadyUser) {
    return res.status(411).json({
      msg: "existing user ? go login",
    });
  }

  const newUser = await User.create({
    firstname,
    lastname,
    username,
    password,
  });

  const token = jwt.sign({ userId: newUser._id }, JWT_PASSWORD);

  const random = Math.random() * 10000;
  const balance = random.toFixed(2);

  const newAccount = await Account.create({
    userId: newUser._id,
    balance,
  });

  res.json({
    msg: "user created sucessfully",
    token,
    newAccount,
  });
});

router.post("/signin", async (req, res) => {
  const { username, password } = req.body;

  const signinSchema = zod.object({
    username: zod.string().email(),
    password: zod.string(),
  });

  const isValidInput = signinSchema.safeParse({ username, password });

  if (!isValidInput.success) {
    return res.status(411).json({
      msg: "invalid inputs",
      error: isValidInput.error.issues,
    });
  }

  const isExistingUser = await User.findOne({ username, password });

  if (!isExistingUser) {
    return res.status(411).json({
      msg: "new user ? create an account",
    });
  } else {
    console.log(isExistingUser._id);
  }

  const token = jwt.sign({ userId: isExistingUser._id }, JWT_PASSWORD);
  res.json({
    msg: "logged in sucessfully",
    token: token,
  });
});

router.put("/updates", authMiddleware, async (req, res) => {
  const userSchema = zod.object({
    firstname: zod.string().optional(),
    lastname: zod.string().optional(),
    password: zod
      .string()
      .min(8, "Password must be at least 8 characters")
      .optional(),
  });

  const ValidateData = userSchema.safeParse(req.body);

  if (!ValidateData.success) {
    return res.status(411).json({
      msg: "error while updating the information",
      error: ValidateData.error.issues,
    });
  }

  await User.updateOne({ _id: req.userId }, { $set: ValidateData.data });
  res.json({
    msg: "updated sucessfully",
  });
});

router.get("/bulk", authMiddleware, async (req, res) => {
  const filter = req.query.filter || "";
  const users = await User.find({
    $or: [
      {
        firstname: {
          $regex: filter,
          $options: "i",
        },
      },
      {
        lastname: {
          $regex: filter,
          $options: "i",
        },
      },
    ],
  });

  return res.json({
    users: users.map((user) => ({
      firstname: user.firstname,
      lastname: user.lastname,
      _id: user._id,
    })),
  });
});

module.exports = router;
