import { useEffect, useState } from "react";
import axios from "axios";

const useTodos = (n) => {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const value = setInterval(async () => {
      const response = await axios.get("https://sum-server.100xdevs.com/todos");
      setTodos(response.data.todos);
      setIsLoading(false);
    }, n * 1000);
    const fetchData = async () => {
      const response = await axios.get("https://sum-server.100xdevs.com/todos");
      setTodos(response.data.todos);
      setIsLoading(false);
    };
    fetchData();
    return () => {
      clearInterval(value);
    };
  }, [n]);
  return { todos, isLoading };
};
export { useTodos };
