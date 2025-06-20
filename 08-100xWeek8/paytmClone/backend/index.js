const express = require("express");
const mainRouter = require("./routes/index");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173/",
    methods: ["GET", "POST", "PUT"],
  })
);
app.use("/api/v1", mainRouter);

const port = 3000;

app.listen(port, () => {
  console.log(`The port is running on ${port}`);
});
