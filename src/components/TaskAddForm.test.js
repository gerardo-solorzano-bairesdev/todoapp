import { render, screen } from "@testing-library/react";
import TaskAddForm from "./TaskAddForm";
import userEvent from "@testing-library/user-event";

test("Renders TaskAddForm component", () => {
  render(<TaskAddForm />);
  expect(screen.getByPlaceholderText("Add new task")).toBeInTheDocument();
});

test("Submits TaskAddForm component", () => {
  const handleAddTask = jest.fn();
  const TEXT3 = "Go to the chruch";
  render(<TaskAddForm handleAddTask={handleAddTask} />);
  const inputText = screen.getByPlaceholderText(/Add new task/i);
  userEvent.type(inputText, TEXT3);
  userEvent.keyboard("{Enter}");
  expect(screen.queryByText(TEXT3)).not.toBeInTheDocument();
  expect(handleAddTask).toHaveBeenCalledTimes(1);
});
