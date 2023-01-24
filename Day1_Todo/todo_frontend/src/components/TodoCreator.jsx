import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { createTodo } from "../controllers/todos";
import { CustomModal } from "./CustomModal";

export class TodoCreator extends React.Component {
  constructor() {
    super();
    this.state = { title: "", description: "", show: false };
  }
  handleModalShow() {
    this.setState({ show: true });
  }
  handleCloseModal() {
    this.setState({ show: false });
  }
  handleSaveChanges() {
    let todo = { title: this.state.title, description: this.state.description };
    createTodo(todo).then((todo) => {
      console.log(todo);
      this.props.addTodo(todo);
    });
    this.setState({ title: "", description: "", show: false });
  }
  handleChange(event) {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  }
  render() {
    return (
      <div>
        <Card
          style={{
            position: "fixed",
            bottom: "0px",
            backgroundColor: "#126bbf",
            borderRadius: "2px",
          }}
        >
          <Button onClick={() => this.handleModalShow()}>Add Todo</Button>
        </Card>
        <CustomModal
          show={this.state.show}
          handleCloseModal={this.handleCloseModal.bind(this)}
          handleSaveChanges={this.handleSaveChanges.bind(this)}
          handleChange={this.handleChange.bind(this)}
        />
      </div>
    );
  }
}
