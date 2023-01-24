import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

export const CustomModal = (props) => {
  return (
    <Modal show={props.show} onHide={() => props.handleCloseModal()}>
      <Modal.Header closeButton>
        <Modal.Title>Todo Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Todo Title</Form.Label>
            <Form.Control
              name="title"
              onChange={(e) => props.handleChange(e)}
              type="text"
              placeholder="enter todo title"
              autoFocus
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Todo Description</Form.Label>
            <Form.Control
              name="description"
              onChange={(e) => props.handleChange(e)}
              as="textarea"
              rows={3}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => props.handleCloseModal()}>
          Close
        </Button>
        <Button variant="primary" onClick={() => props.handleSaveChanges()}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
