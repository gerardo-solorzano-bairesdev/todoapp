import { useState, useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
import Container from "./components/Container";

function Tabs() {
  const [toggleState, setToggleState] = useState(0);
  const routes = [
    { path: "/todo", label: "ToDo" },
    { path: "/done", label: "Done" },
  ];

  //const location = useLocation();

  const toggleTab = (index) => {
    console.log("index in toggleTab:" + index);
    setToggleState(index);
  };

  /*
  function handleRouteToHome(index) {
    let navigate = useNavigate();
    navigate("/home");
    toggleTab(index);
  };
  */

  useEffect(() => {
    console.log(toggleState);
  }, [toggleState]);

  function findIndexByRoute(route) {
    let indexFound = 0;
    for (var i = 0; i < routes.length; i++) {
      if (routes[i].path === route) {
        indexFound = i;
        break;
      }
    }
    return indexFound;
  }

  const Tab = ({ index }) => {
    const location = useLocation();
    const realIndex = findIndexByRoute(location.pathname);

    toggleTab(realIndex);
    console.log("realIndex:" + realIndex);
    console.log("route:" + location.pathname);
    let navigate = useNavigate();

    const handleClick = () => {
      toggleTab(index);
      navigate(routes[index].path);
    };
    console.log("index param:" + index);

    return (
      <>
        <button
          className={toggleState === index ? "tabs active-tabs" : "tabs"}
          onClick={handleClick}
        >
          {routes[index].label}
        </button>
      </>
    );
  };

  return (
    <Router>
      <div className="container">
        <div className="bloc-tabs">
          <Tab index={0}></Tab>
          <Tab index={1}></Tab>
        </div>
        <Routes>
          <Route path="/todo" element={<Container checkView={false} />} />
          <Route path="/done" element={<Container checkView={true} />} />
          <Route path="*" element={<Container checkView={false} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Tabs;
