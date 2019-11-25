import { GET_TASKS, ADD_TASK, DELETE_TASK } from "../actions/types";
import uuid from "uuid";

const initialState = {
  tasks: [
    { id: uuid(), title: "test task" },
    { id: uuid(), title: "test task 2" },
    { id: uuid(), title: "test task 3" },
    { id: uuid(), title: "test task 4" },
    { id: uuid(), title: "task again" }
  ]
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TASKS:
      return {
        ...state
      };
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload]
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: [...state.tasks.filter(task => task.id !== action.payload)]
      };
    default:
      return state;
  }
};

export default taskReducer;
