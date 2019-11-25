import { GET_TASKS, ADD_TASK, DELETE_TASK } from "./types";
import uuid from "uuid";

export const getTasks = () => {
  return {
    type: GET_TASKS
  };
};

export const deleteTask = id => {
  return {
    type: DELETE_TASK,
    payload: id
  };
};

export const addTask = title => {
  const task = { id: uuid(), title: title };
  return {
    type: ADD_TASK,
    payload: task
  };
};