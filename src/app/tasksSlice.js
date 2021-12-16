import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
  },
  reducers: {
    getTasks: (state, action) => {
      state.tasks = action.payload;
      //state.tasks = [{ id: "1", body: "asdasdas", done: false }];
      //state.tasks = [{ id: "1", body: "asdasdas", done: false }];
      /*
      axios.get(baseURL + "/api/todos/").then((response) => {
        setTaskList(response.data.todos);
      });
      */
    },
    createTask: (state, action) => {
      //state.tasks = action.payload;
      state.tasks = [
        { id: "1", body: "asdasdas", done: false },
        { id: "2", body: "fghfghfg", done: false },
      ];
    },
    updateTask: (state, action) => {
      //state.tasks = action.payload;
      state.tasks = [
        { id: "1", body: "asdasdas", done: false },
        { id: "2", body: "fghfghfg", done: true },
      ];
    },
  },
});

export const { getTasks, createTask, updateTask } = slice.actions;

export default slice.reducer;
