const express = require("express");
const zod = require("zod");
const app = express();

const schema = zod.array(zod.number());

//validating a login form
const loginSchema = zod.object({
  email: zod.string().email(),
  password: zod.string().min(8),
  country: zod.literal("IN").or(zod.literal("US")),
});
// --- -
app.use(express.json());

app.post("/", (req, res) => {
  const loginData = req.body;
  const response = loginSchema.safeParse(loginData);
  console.log(loginData);
  console.log(loginSchema);

  if (response.success) {
    res.send({ response });
  } else {
    res.status(411).json({
      msg: "invalid Input",
    });
  }
});

app.get("/health-checkup", (req, res) => {
  const kidneys = req.body.kidneys;
  const response = schema.safeParse(kidneys);
  console.log(kidneys);

  res.send({ response });
});

app.listen(3000, () => {
  console.log("listening on the port 3000");
});
