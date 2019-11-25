import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AppNavbar from "./components/AppNavbar";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <TaskList />
    </div>
  );
}

export default App;
