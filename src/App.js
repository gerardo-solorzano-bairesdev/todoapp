import logo from "./logo.svg";
import "./App.css";
import Container from "./components/Container";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Tabs from "./Tabs";

function App() {
  return (
    <div className="App">
      <Tabs />
    </div>
  );
}

export default App;
