import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import uuid from "uuid";
import { connect } from "react-redux";
import { getTasks, deleteTask, addTask } from "../actions/taskActions";
import PropTypes from "prop-types";

class TaskList extends Component {
  componentDidMount() {
    const { getTasks } = this.props;
    getTasks();
  }

  handleDelete = id => e => {
    const { deleteTask } = this.props;
    deleteTask(id);
  };

  handleAddTask = title => {
    const { addTask } = this.props;

    addTask(title);
  };

  render() {
    const { tasks } = this.props.task;

    return (
      <Container>
        <Button
          color={"dark"}
          className={"mb-3"}
          onClick={() => {
            const title = prompt("Enter title of task");
            if (title) this.handleAddTask(title);
          }}
        >
          Add Task
        </Button>
        <ListGroup>
          <TransitionGroup className="task-list">
            {tasks.map(({ id, title }) => (
              <CSSTransition key={id} timeout={500} classNames={"fade"}>
                <ListGroupItem>
                  {title}
                  <Button
                    className={"remove-btn"}
                    color={"danger"}
                    size={"sm"}
                    onClick={this.handleDelete(id)}
                  >
                    Remove
                  </Button>
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}

TaskList.propTypes = {
  getTasks: PropTypes.func.isRequired,
  task: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    task: state.task
  };
}

export default connect(
  mapStateToProps,
  { getTasks, deleteTask, addTask }
)(TaskList);
