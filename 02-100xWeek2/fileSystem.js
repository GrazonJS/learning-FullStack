const fs = require("fs");
const path = require("path");
const express = require("express");

const app = express();

const port = 3000;

app.use(express.json());

app.get("/files", (req, res) => {
  fs.readdir(__dirname, (err, data) => {
    res.json({
      directory: __dirname,
      files: data,
    });
  });
});

app.get("/files/:filename", (req, res) => {
  const name = req.params.filename;
  console.log(name);
  fs.readFile(name, "utf-8", (err, data) => {
    console.log(data);
    res.json({
      msg: data,
    });
  });
});

app.listen(port, () => {
  console.log(`the port is running on ${port}`);
});
