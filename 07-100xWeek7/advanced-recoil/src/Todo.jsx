import React from "react";
import { useRecoilValue } from "recoil";
import { todosSelectorFamily } from "./atoms";

const Todo = ({ id }) => {
  const currentTodo = useRecoilValue(todosSelectorFamily(id));
  return (
    <div>
      <p>{currentTodo.title}</p>
      <p>{currentTodo.description}</p>
    </div>
  );
};

export default Todo;
