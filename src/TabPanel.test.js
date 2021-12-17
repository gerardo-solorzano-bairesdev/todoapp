import { getByRole, render, screen } from "@testing-library/react";
import TabPanel from "./TabPanel";
import userEvent from "@testing-library/user-event";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function TestRouter() {
  return (
    <Router>
      <TabPanel />
    </Router>
  );
}

test("Renders TabPanel component", () => {
  render(<TestRouter />);
  const buttonsList = screen.queryAllByRole("button");
  expect(buttonsList[0].className).toBe("tabs active-tabs");
  expect(buttonsList[1].className).toBe("tabs");
});
