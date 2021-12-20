import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Container from "./components/Container";
import TabPanel from "./TabPanel";

function TabRouter({ initialEntries }) {
  return (
    <Router initialEntries={initialEntries}>
      <div className="container">
        <TabPanel />
        <Routes>
          <Route path="/todo" element={<Container checkView={false} />} />
          <Route path="/done" element={<Container checkView={true} />} />
          <Route path="*" element={<Link to="/todo" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default TabRouter;
