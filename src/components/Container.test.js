import { render, screen } from "@testing-library/react";
import * as reactRedux from "react-redux";
import Container from "./Container";
import userEvent from "@testing-library/user-event";
import reducer, { createTask } from "../app/tasksSlice";

test("Renders Container, insert a new one task and assert it", () => {
  const TEXT1 = "Learn React";
  const TEXT2 = "Visit Brazil";
  const TEXT3 = "Go to the mall";
  const previousState = [
    { id: "1", body: TEXT1, done: false },
    { id: "2", body: TEXT2, done: true },
  ];

  jest.spyOn(reactRedux, "useSelector").mockImplementation(() => ({
    tasks: previousState,
  }));

  const voidFn = jest.fn(() => null);

  jest.spyOn(reactRedux, "useDispatch").mockImplementation(() => {
    return voidFn;
  });

  render(<Container checkView={false} />);

  expect(screen.getByText(TEXT1)).toBeInTheDocument();
  expect(screen.queryByText(TEXT2)).not.toBeInTheDocument();

  userEvent.type(screen.getByPlaceholderText(/Add new task/i), TEXT3);
  userEvent.keyboard("{Enter}");

  const newState = reducer(
    previousState,
    createTask({ id: "3", body: TEXT3, done: false })
  );

  expect(Object.keys(newState).length).toBe(3);
});

test("Renders Container with 2 tasks (1 Done 1 ToDo) and assert them", () => {
  const TEXT1 = "Learn React";
  const TEXT2 = "Visit Brazil";
  jest.spyOn(reactRedux, "useSelector").mockImplementation(() => ({
    tasks: [
      { id: "1", body: TEXT1, done: false },
      { id: "2", body: TEXT2, done: true },
    ],
  }));

  const voidFn = jest.fn(() => null);

  jest.spyOn(reactRedux, "useDispatch").mockImplementation(() => {
    return voidFn;
  });

  render(<Container checkView={false} />);

  expect(screen.getByText(TEXT1)).toBeInTheDocument();
  expect(screen.queryByText(TEXT2)).not.toBeInTheDocument();
});
