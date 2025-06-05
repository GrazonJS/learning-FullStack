const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../database/database");
const jwt = require("jsonwebtoken");
const { JWT_SECRET_KEY } = require("../config");

router.post("/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const isUser = await User.findOne({ username, password });
  if (isUser) {
    res.status(400).json({
      msg: "User already exists",
    });
  } else {
    await User.create({
      username,
      password,
    });

    res.send("user account created successfully");
  }
});

router.post("/signin", async (req, res) => {
  const username = req.headers.username;
  const password = req.headers.password;

  const isUser = await User.findOne({ username, password });

  if (isUser) {
    const token = jwt.sign({ username, role: "user" }, JWT_SECRET_KEY);
    res.json({ token });
  } else {
    res.status(403).json({
      msg: "incorrect inputs | first time ? create an account",
    });
  }
});
router.get("/courses", async (req, res) => {
  const course = await Course.find({});
  res.json({ course });
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  const courseId = req.params.courseId;
  const username = req.username;
  await User.updateOne(
    {
      username,
    },
    {
      $push: {
        purchasedCourses: courseId,
      },
    }
  );
  res.json({
    msg: "Course purchased sucessfully",
  });
});

router.get("/purchasedCourse", userMiddleware, async (req, res) => {
  const username = req.username;

  const userData = await User.findOne({ username });
  console.log(userData);
  const courseData = await Course.find({
    _id: {
      $in: userData.purchasedCourses,
    },
  });

  res.json({
    purchasedCourses: courseData,
  });
});

module.exports = router;
