import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { deleteTodo, updateTodo } from "../controllers/todos";
import { CustomModal } from "./CustomModal";

const TodoCard = (props) => {
  return (
    <Card
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        margin: "5px 2px",
        padding: "3px",
      }}
    >
      <Card.Body>
        <Card.Title>{props.todo.title}</Card.Title>
        <Card.Text>{props.todo.description}</Card.Text>
      </Card.Body>
      <Card.Body style={{ width: "20%" }}>
        <Button
          variant="outline-primary"
          size="sm"
          onClick={() => props.showEditOptions(props.todo)}
        >
          Edit
        </Button>
        <Button
          variant="outline-danger"
          size="sm"
          onClick={() => props.handleDelete(props.todo._id)}
        >
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export class TodoListView extends React.Component {
  state = {
    showEditMenu: false,
    title: "",
    description: "",
    _id: "",
  };
  handleChange(event) {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  }
  handleDelete(id) {
    deleteTodo(id);
    let updatedTodos = this.props.todos.filter((todo) => id != todo._id);
    this.props.setTodos(updatedTodos);
  }
  handleCloseModal() {
    this.setState({ showEditMenu: false });
  }
  showEditOptions(todo) {
    this.setState({
      showEditMenu: true,
      title: todo.title,
      description: todo.description,
      _id: todo._id,
    });
  }
  handleSaveChanges() {
    updateTodo(this.state._id, {
      title: this.state.title,
      description: this.state.description,
    }).then((updatedTodo) => {
      const todos = this.props.todos.map((todo, ind) => {
        if (todo._id == updatedTodo._id) {
          return updatedTodo;
        } else {
          return todo;
        }
      });
      this.props.setTodos(todos);
    });
    this.setState({ showEditMenu: false, title: "", description: "", _id: "" });
  }
  render() {
    return (
      <div className="todos__lists">
        {this.props.todos.map((todo) => (
          <TodoCard
            key={todo._id}
            todo={todo}
            handleDelete={this.handleDelete.bind(this)}
            showEditOptions={this.showEditOptions.bind(this)}
          />
        ))}
        <CustomModal
          show={this.state.showEditMenu}
          handleChange={this.handleChange.bind(this)}
          handleCloseModal={this.handleCloseModal.bind(this)}
          handleSaveChanges={this.handleSaveChanges.bind(this)}
        />
      </div>
    );
  }
}
