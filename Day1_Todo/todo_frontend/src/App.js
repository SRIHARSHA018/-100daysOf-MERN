import "./App.css";
import { Header } from "./components/Header";
import { TodoListView } from "./components/TodoListView";
import { TodoCreator } from "./components/TodoCreator";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { getAllTodos } from "./controllers/todos";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  useEffect(() => {
    const setLocalData = async () => {
      try {
        const data = await getAllTodos();
        console.log(data);
        setTodos(data);
      } catch (err) {
        console.log(err);
      }
    };
    setLocalData();
  }, []);

  return (
    <div className="app__container">
      <Header title={"Todo App"} />
      <TodoListView todos={todos} setTodos={setTodos} />
      <TodoCreator addTodo={addTodo} />
    </div>
  );
}

export default App;
