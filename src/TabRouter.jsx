import { useState, useEffect, useRef } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
import Container from "./components/Container";
import TabPanel from "./TabPanel";

function TabRouter() {
  return (
    <Router>
      <div className="container">
        <TabPanel />
        <Routes>
          <Route path="/todo" element={<Container checkView={false} />} />
          <Route path="/done" element={<Container checkView={true} />} />
          <Route path="*" element={<Container checkView={false} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default TabRouter;
