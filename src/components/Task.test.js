import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Task from "./Task";

describe("Task", () => {
  test("renders Task component", () => {
    const TEXT1 = "Learn React";
    const task = { id: "1", body: TEXT1, done: true };
    render(<Task task={task} />);
    expect(screen.getByText(TEXT1)).toBeInTheDocument();
  });

  test("Test checkbox", () => {
    const onChange = jest.fn();
    const TEXT1 = "Learn React";
    const task = { id: "1", body: TEXT1, done: false };
    render(<Task task={task} onChange={onChange} />);
    const checkbox1 = screen.getByRole("checkbox");
    userEvent.click(checkbox1);
    expect(checkbox1).toBeChecked();
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
