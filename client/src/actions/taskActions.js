import { GET_TASKS, ADD_TASK, DELETE_TASK, TASKS_LOADING } from "./types";
import axios from "axios";

export const getTasks = () => dispatch => {
  dispatch(setTasksLoading());

  axios.get("/api/tasks").then(res => {
    dispatch({ type: GET_TASKS, payload: res.data });
  });
};

export const deleteTask = id => {
  return {
    type: DELETE_TASK,
    payload: id
  };
};

export const addTask = task => dispatch => {
  axios.post("/api/tasks", task).then(res => {
    dispatch({
      type: ADD_TASK,
      payload: task
    });
  });
};

export const setTasksLoading = _ => {
  return {
    type: TASKS_LOADING
  };
};
