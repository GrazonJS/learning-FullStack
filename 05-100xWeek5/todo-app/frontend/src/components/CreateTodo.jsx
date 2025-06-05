import React, { useState } from "react";
import axios from "axios";

const CreateTodo = ({ setTodos }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleTodos = async () => {
    console.log(title);
    console.log(description);

    try {
      const response = await axios.post(
        "http://localhost:3000/todo",
        {
          title: title,
          description: description,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="title"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="description"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <button onClick={handleTodos}>Add todo</button>
    </div>
  );
};

export default CreateTodo;
