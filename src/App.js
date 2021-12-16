import logo from "./logo.svg";
import "./App.css";
import Container from "./components/Container";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TabRouter from "./TabRouter";

function App() {
  return (
    <div className="App">
      <TabRouter />
    </div>
  );
}

export default App;
