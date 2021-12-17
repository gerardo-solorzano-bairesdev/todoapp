import { render, screen } from "@testing-library/react";
import TaskList from "./TaskList";

test("renders Task list ToDo component", () => {
  const TEXT1 = "Learn React";
  const TEXT2 = "Visit Brazil";
  const taskList = [
    { id: "1", body: TEXT1, done: false },
    { id: "2", body: TEXT2, done: true },
  ];
  render(<TaskList taskList={taskList} checkView={false} />);
  expect(screen.getByText(TEXT1)).toBeInTheDocument();
  expect(screen.queryByText(TEXT2)).not.toBeInTheDocument();
});

test("renders Task list Done component", () => {
  const TEXT1 = "Learn React";
  const TEXT2 = "Visit Brazil";
  const taskList = [
    { id: "1", body: TEXT1, done: false },
    { id: "2", body: TEXT2, done: true },
  ];
  render(<TaskList taskList={taskList} checkView={true} />);
  expect(screen.getByText(TEXT2)).toBeInTheDocument();
  expect(screen.queryByText(TEXT1)).not.toBeInTheDocument();
});
