const express = require("express");
const zod = require("zod");
const app = express();

const schema = zod.array(zod.number());

app.get("/ugly-health-checkup", (req, res) => {
  const username = req.headers.username;
  const password = req.headers.password;
  const kidneyId = req.query.id;

  if (username != "admin" || password != "pass") {
    res.status(400).json({
      msg: "wrong credential  input",
    });
    return;
  }
  if (kidneyId != 1 && kidneyId != 2) {
    res.status(400).json({
      msg: "Invalid number of Kidneys",
    });
    return;
  }
  res.json({ msg: "your kidney is fine" });
});

const userMiddleware = (req, res, next) => {
  const username = req.headers.username;
  const password = req.headers.password;
  if (username != "admin" || password != "pass") {
    res.status(400).json({
      msg: "wrong user credentials",
    });
  } else {
    next();
  }
};

const kidneyMiddleware = (req, res, next) => {
  const KidneyID = req.query.id;
  if (KidneyID == 1 || KidneyID == 2) {
    next();
  } else {
    res.status(400).json({ msg: "invalid count of kidney" });
  }
};

app.get("/health-checkup", userMiddleware, kidneyMiddleware, (req, res) => {
  res.send({ msg: "everything is good" });
});

//Global catches
app.use((err, req, res, next) => {
  res.json({
    msg: "there is an error with the server",
  });
});

app.listen(3000, () => {
  console.log("port is running on 3000");
});
