import { useState, useEffect } from "react";
import axios from "axios";

const DataFetch = () => {
  return <Todo id={1} />;
};

const Todo = ({ id }) => {
  const [todo, setTodo] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://sum-server.100xdevs.com/todo?id=${id}`
        );
        console.log(response);

        setTodo(response.data);
        ``;
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, [id]);
  return (
    <div>
      <h2>{todo.title}</h2>
    </div>
  );
};

export default DataFetch;
