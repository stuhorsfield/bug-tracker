import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import uuid from "uuid";
import { connect } from "react-redux";
import { addTask } from "../actions/taskActions";

class TaskModal extends Component {
  state = {
    modal: false,
    title: "",
    description: ""
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const { addTask } = this.props;

    const newTask = {
      title: this.state.title,
      description: this.state.description
    };

    addTask(newTask);

    this.toggle();
  };

  onInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div>
        <Button onClick={this.toggle} color={"dark"} className={"mb-2"}>
          Add Task
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Add a new Task</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for={"task"}>Task</Label>
                <Input
                  name={"title"}
                  type={"text"}
                  id={"task"}
                  placeholder={"Name the task"}
                  onChange={this.onInputChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for={"task"}>Description</Label>
                <Input
                  name={"description"}
                  type={"textarea"}
                  id={"description"}
                  placeholder={"Describe the task"}
                  onChange={this.onInputChange}
                />
              </FormGroup>
              <FormGroup>
                <Button
                  color={"dark"}
                  className={"mt-2"}
                  onClick={this.onSubmit}
                >
                  Save
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(
  mapStateToProps,
  { addTask }
)(TaskModal);
