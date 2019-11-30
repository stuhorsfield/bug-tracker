import {
  GET_TASKS,
  ADD_TASK,
  DELETE_TASK,
  TASKS_LOADING
} from "../actions/types";
import uuid from "uuid";

const initialState = {
  tasks: [],
  loading: false
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TASKS:
      return {
        ...state,
        tasks: action.payload,
        loading: false
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
    case TASKS_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};

export default taskReducer;
