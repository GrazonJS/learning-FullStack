import React from "react";

const Todos = ({ todos }) => {
  return (
    <div>
      {todos.map((todo, value) => {
        return (
          <div key={value}>
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
            <button>{todo.completed ? "completed" : "mark as complete"}</button>
          </div>
        );
      })}
    </div>
  );
};

export default Todos;
