import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import uuid from "uuid";
// import {connect} from 'react-redux';

// function mapStateToProps(state) {
//     return {};
// }
//
// function mapDispatchToProps(dispatch) {
//     return {};
// }

class TaskList extends Component {
  state = {
    tasks: [
      { id: uuid(), title: "test task" },
      { id: uuid(), title: "test task 2" },
      { id: uuid(), title: "test task 3" },
      { id: uuid(), title: "test task 4" },
      { id: uuid(), title: "test task 5" }
    ]
  };

  render() {
    const { tasks } = this.state;
    return (
      <Container>
        <Button
          color={"dark"}
          className={"mb-3"}
          onClick={() => {
            const title = prompt("Enter title of task");
            if (title)
              this.setState({
                tasks: [...this.state.tasks, { id: uuid(), title }]
              });
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
                    onClick={() => {
                      this.setState({
                        tasks: [
                          ...this.state.tasks.filter(task => task.id !== id)
                        ]
                      });
                    }}
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

export default TaskList;
