import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import AppNavbar from "./components/AppNavbar";
import TaskList from "./components/TaskList";
import TaskModal from "./components/TaskModal";
import { Container } from "reactstrap";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppNavbar />
        <Container>
          <TaskModal />
          <TaskList />
        </Container>
      </div>
    </Provider>
  );
}

export default App;
