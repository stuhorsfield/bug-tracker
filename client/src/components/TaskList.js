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

  render() {
    const { tasks } = this.props.task;
    console.log(tasks);
    return (
      <ListGroup>
        <TransitionGroup className="task-list">
          {tasks.map(({ _id, title, description, dateDue }) => (
            <CSSTransition key={_id} timeout={500} classNames={"fade"}>
              <ListGroupItem>
                <h5>{title}</h5>
                <Button
                  className={"remove-btn"}
                  color={"danger"}
                  size={"sm"}
                  onClick={this.handleDelete(_id)}
                >
                  Remove
                </Button>
                <div className="task-description">
                  <h6>{description}</h6>
                </div>
                <div className="task-description">
                  <h6>Due: {dateDue}</h6>
                </div>
              </ListGroupItem>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ListGroup>
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
