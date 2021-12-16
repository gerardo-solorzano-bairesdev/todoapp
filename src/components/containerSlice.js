import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseURL = "http://localhost:5000";

/*
  const handleAddTask = (task) => {
    axios
      .post(baseURL + "/api/todos/", {
        body: task.body,
      })
      .then((response) => {
        const newtask = response.data;
        setTaskList([...taskList, newtask]);
      });
  };
*/
const initialState = [];

const containerSlice = createSlice({
  name: "container",
  initialState,
  reducers: {
    taskGetAll: (state) => {
      state.container.taskList = [{id: 1, body:"asdasdas", done: false}, {id: 2, body:"fghfghfg", done: false}];
    },
    taskAdd: (state, action) => {
      state.container.taskList = [{id: 1, body:"asdasdas", done: false}, {id: 2, body:"fghfghfg", done: false}];
        //state.value += action.payload;
    },
    taskUpdate: (state, action) => {
        state.container.taskList = [{id: 1, body:"asdasdas", done: false}, {id: 2, body:"fghfghfg", done: false}];
      //state.value += action.payload;
    },
  },
});

export const { taskGetAll, taskAdd, taskUpdate } = containerSlice.actions;

export default containerSlice.reducer;
