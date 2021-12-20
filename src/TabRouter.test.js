import { render, screen } from "@testing-library/react";
import TabRouter from "./TabRouter";
import * as reactRedux from "react-redux";
import userEvent from "@testing-library/user-event";
import { createMemoryHistory } from "history";
//import React from "react";
import { MemoryRouter } from "react-router";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Container from "./components/Container";
import TabPanel from "./TabPanel";

function TestRouter(initialEntries) {
  return (
    <MemoryRouter initialEntries={initialEntries}>
      <div className="container">
        <TabPanel />
        <Routes>
          <Route path="/todo" element={<Container checkView={false} />} />
          <Route path="/done" element={<Container checkView={true} />} />
          <Route path="*" element={<Link to="/todo">About</Link>} />
        </Routes>
      </div>
    </MemoryRouter>
  );
}

test("Renders TabRouter and test a bad route", () => {
  const TEXT1 = "Learn React";
  const TEXT2 = "Go to the mall";
  const initialState = [
    { id: "1", body: TEXT1, done: false },
    { id: "2", body: TEXT2, done: true },
  ];
  jest.spyOn(reactRedux, "useSelector").mockImplementation(() => ({
    tasks: initialState,
  }));

  const voidFn = jest.fn(() => null);

  jest.spyOn(reactRedux, "useDispatch").mockImplementation(() => {
    return voidFn;
  });

  render(TestRouter(["/badroute56"]));
  expect(screen.getByPlaceholderText("Add new task")).toBeInTheDocument();
  expect(screen.getByText(TEXT1)).toBeInTheDocument();
  expect(screen.queryByText(TEXT2)).not.toBeInTheDocument();
});

test("Renders TabRouter and test ToDo route", () => {
  const TEXT1 = "Learn React";
  const TEXT2 = "Go to the mall";
  const initialState = [
    { id: "1", body: TEXT1, done: false },
    { id: "2", body: TEXT2, done: true },
  ];
  jest.spyOn(reactRedux, "useSelector").mockImplementation(() => ({
    tasks: initialState,
  }));

  const voidFn = jest.fn(() => null);

  jest.spyOn(reactRedux, "useDispatch").mockImplementation(() => {
    return voidFn;
  });

  render(TestRouter(["/todo"]));
  expect(screen.getByPlaceholderText("Add new task")).toBeInTheDocument();
  expect(screen.getByText(TEXT1)).toBeInTheDocument();
  expect(screen.queryByText(TEXT2)).not.toBeInTheDocument();
});

test("Renders TabRouter and test done route", () => {
  const TEXT1 = "Learn React";
  const TEXT2 = "Go to the mall";
  const initialState = [
    { id: "1", body: TEXT1, done: false },
    { id: "2", body: TEXT2, done: true },
  ];
  jest.spyOn(reactRedux, "useSelector").mockImplementation(() => ({
    tasks: initialState,
  }));

  const voidFn = jest.fn(() => null);

  jest.spyOn(reactRedux, "useDispatch").mockImplementation(() => {
    return voidFn;
  });

  render(TestRouter(["/done"]));

  expect(screen.queryByPlaceholderText("Add new task")).not.toBeInTheDocument();
  expect(screen.getByText(TEXT2)).toBeInTheDocument();
  expect(screen.queryByText(TEXT1)).not.toBeInTheDocument();
});
