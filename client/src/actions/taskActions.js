import { GET_TASKS, ADD_TASK, DELETE_TASK, TASKS_LOADING } from "./types";
import axios from "axios";

export const getTasks = () => dispatch => {
  dispatch(setTasksLoading());

  axios.get("/api/tasks").then(res => {
    dispatch({ type: GET_TASKS, payload: res.data });
  });
};

export const deleteTask = id => dispatch => {
  axios.delete(`/api/tasks/${id}`).then(res => {
    dispatch({
      type: DELETE_TASK,
      payload: id
    });
  });
};

export const addTask = task => dispatch => {
  // const dueDate = new Date(task.dateDue);
  // console.log(task);
  //
  // console.log(dueDate);
  axios.post("/api/tasks", task).then(res => {
    console.log(res);

    dispatch({
      type: ADD_TASK,
      payload: res.data
    });
  });
};

export const setTasksLoading = _ => {
  return {
    type: TASKS_LOADING
  };
};
