import { useState } from "react";
import CreateTodo from "./components/CreateTodo";
import "./App.css";
import Todos from "./components/Todos";

function App() {
  const [todos, setTodos] = useState([]);
  console.log(todos);

  return (
    <>
      <CreateTodo setTodos={setTodos} />
      <Todos todos={todos} />
    </>
  );
}

export default App;
