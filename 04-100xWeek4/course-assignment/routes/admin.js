const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../database/database");
const jwt = require("jsonwebtoken");
const { JWT_SECRET_KEY } = require("../config");

const router = Router();

//admin routes
router.post("/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const isAdmin = await Admin.findOne({
    username: username,
    password: password,
  });
  if (!isAdmin) {
    await Admin.create({
      username: username,
      password: password,
    });
    res.send("Admin created");
  } else {
    res.status(400).json({
      msg: "already have an account?",
    });
  }
});

router.post("/signin", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const isAdmin = await Admin.findOne({ username, password });
  console.log("-----------");
  console.log(JWT_SECRET_KEY);

  if (isAdmin) {
    const newToken = jwt.sign({ username, role: "admin" }, JWT_SECRET_KEY);
    res.json({ token: newToken });
  } else {
    res.status(403).json({
      msg: "invalid inputs |  not a user? create an accout",
    });
  }
});

router.post("/courses", adminMiddleware, async (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const imageLink = req.body.imageLink;
  const price = req.body.price;

  const newCourse = await Course.create({
    title,
    description,
    imageLink,
    price,
  });

  res.json({
    msg: "course created sucessfully",
    courseId: newCourse._id,
  });
});

router.get("/courses", adminMiddleware, async (req, res) => {
  const course = await Course.find({});
  res.json({
    course,
  });
});

module.exports = router;
