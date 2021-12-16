import logo from './logo.svg';
import './App.css';
import Container from './components/Container';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <Link to="/todo"> ToDo </Link>
          <Link to="/done"> Done </Link>
        </nav>
        <Routes>
          <Route path="/" element={<div> HOME PAGE </div>} />
          <Route path="/todo" element={<Container checkView={false} />} />
          <Route path="/done" element={<Container checkView={true} />} />
          <Route path="*" element={<div> ERROR PAGE </div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
