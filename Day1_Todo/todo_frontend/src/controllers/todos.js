import { TextRotationAngledownSharp } from "@mui/icons-material";
import axios from "axios";

export const getAllTodos = async () => {
  try {
    const todos = await axios.get("http://localhost:8000/api/todos");
    return todos.data.data;
  } catch (err) {
    console.log(err);
  }
};

export const updateTodo = async (id, todoData) => {
  try {
    const todo = await axios.put(
      `http://localhost:8000/api/todos/${id}`,
      todoData
    );
    if (todo.data.success) {
      console.log("SUCCESS");
    }
    return todo.data.data;
  } catch (err) {
    console.log(err);
  }
};

export const createTodo = async (todoData) => {
  try {
    const response = await axios.post(
      "http://localhost:8000/api/todos/",
      todoData
    );
    if (response.data.success) {
      console.log("SUCCESS");
    }
    return response.data.data;
  } catch (err) {
    console.log(err);
  }
};

export const deleteTodo = async (id) => {
  try {
    const todos = await axios.delete(`http://localhost:8000/api/todos/${id}`);
    if (todos.data.success) {
      console.log("SUCCESS");
    }
  } catch (err) {
    console.log(err);
  }
};
