import { render, screen } from "@testing-library/react";
import Task from "./Task";

test("renders Task component", () => {
  const TEXT1 = "Learn React";
  const task = { id: "1", body: TEXT1, done: true };
  render(<Task task={task} />);
  expect(screen.getByText(TEXT1)).toBeInTheDocument();
});
