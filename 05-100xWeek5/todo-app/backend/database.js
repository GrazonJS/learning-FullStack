const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://Graceshon:I9Mv6Pga9604lHaE@cluster0.sxag7i8.mongodb.net/TodoApp"
);

const todoSchema = new mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const Todo = mongoose.model("Todos", todoSchema);

module.exports = { Todo };
