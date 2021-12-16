import axios from "axios";
import { getTasks, updateTask } from "./tasksSlice";
//const { usersSuccess, startLoading, hasError } = slice.actions;
//import { createTask, updateTask, getTasks } from "../app/tasksSlice";

const api = axios.create({
  baseURL: "http://localhost:5000",
  headers: {
    "Content-Type": "application/json",
  },
});

export const apiGetTasks = () => async (dispatch) => {
  try {
    await api
      .get("/api/todos/")
      .then((response) => dispatch(getTasks(response.data.todos)));
  } catch (e) {
    return console.error(e.message);
  }
};

export const apiCreateTask = (task) => async (dispatch) => {
  try {
    console.log("apiCreateTask taskBody " + task);
    //const newTask = { body: taskBody, done: false };
    await api.post("/api/todos/", task).then(() => dispatch(apiGetTasks()));
  } catch (e) {
    return console.error(e.message);
  }
};

export const apiUpdateTask = (task) => async (dispatch) => {
  try {
    console.log("dispatch   " + task);
    const newTask = { done: !task.done };
    await api
      .put("/api/todos/" + task.id, newTask)
      .then(() => dispatch(apiGetTasks()));
  } catch (e) {
    return console.error(e.message);
  }
};
