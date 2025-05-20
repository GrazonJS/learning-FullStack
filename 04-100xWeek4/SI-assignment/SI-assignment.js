const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  const principle = parseInt(req.query.principle);
  const time = parseInt(req.query.time);
  const rate = parseInt(req.query.rate);

  console.log();

  const simpleInterest = (principle * time * rate) / 100;
  const total = principle + simpleInterest;

  res.json({
    simpleInterest: simpleInterest,
    total: total,
  });
});

app.listen(port, () => {
  console.log(`The PORT is running on ${port}`);
});
