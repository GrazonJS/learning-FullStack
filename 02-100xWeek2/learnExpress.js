const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const { log } = require("console");
const app = express();

// To change port, goto terminal and type: export PORT=3001
const port = process.env.PORT || 4000;

// When the console.log(req.body) is executed, it show undefined
// Express.js does not know how to parse the request body,
// therefore we use body-parser, to tell that the request should be parse as text, or JSON, or image or etc...
app.use(bodyParser.json());
// recently express also brought this feature
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello world");
});

app.post("/conversation", (req, res) => {
  console.log(req.header);
  console.log(req.body);
  console.log(res);

  res.send({
    msg: "here, the message is 4 ",
  });
});

app.listen(port, () => {
  console.log(`listening to port: ${port}`);
});
