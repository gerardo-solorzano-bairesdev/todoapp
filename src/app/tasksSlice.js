import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
    isLoading: false,
  },
  reducers: {
    getTasks: (state, action) => {
      state.tasks = action.payload;
      state.isLoading = false;

      return state;
    },
    createTask: (state, action) => {
      state.push(action.payload);
      console.log(state.value);
      return state;
    },
    updateTask: (state, action) => {
      state.tasks = [
        { id: "1", body: "asdasdas", done: false },
        { id: "2", body: "fghfghfg", done: true },
      ];
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { getTasks, createTask, updateTask, setLoading } = slice.actions;

export default slice.reducer;
