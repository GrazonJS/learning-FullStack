const express = require("express");
const bodyParser = require("body-parser");
const { todoSchema, updateSchema } = require("./types");
const { Todo } = require("./database");
const cors = require("cors");
const app = express();

app.use(bodyParser.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.post("/todo", async (req, res) => {
  const title = req.body.title;
  const description = req.body.description;

  const newTodo = todoSchema.safeParse({
    title: title,
    description: description,
    completed: false,
  });
  if (!newTodo.success) {
    res.status(411).json({
      msg: "invalid todo formats",
    });
    return;
  }
  try {
    await Todo.create(newTodo.data);

    res.json({
      msg: "todo added sucessfully ",
      newTodo,
    });
  } catch (e) {
    res.status(500).json({ error: "error while saving your todo in db" });
  }
});

app.get("/todos", async (req, res) => {
  try {
    const allTodo = await Todo.find({});
    if (allTodo.length == 0) {
      res.json({ msg: "there are no todos" });
    } else {
      res.json({ allTodo });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch todos" });
  }
});

app.put("/completed", async (req, res) => {
  const updatedPayload = req.body;
  const parsedPayload = updateSchema.safeParse(updatedPayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "invalid input format",
    });
    return;
  }
  await Todo.updateOne({ _id: updatedPayload.id }, { completed: true });
  res.json({ msg: "updated the task sucessfully" });
});

const port = 3000;

app.listen(port, () => {
  console.log(`The port is running on ${port}`);
});
