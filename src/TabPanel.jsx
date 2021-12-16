import { useState, useEffect, useRef } from "react";
import "./App.css";
import { useNavigate, useLocation } from "react-router-dom";

function TabPanel() {
  const tabIndexes = { TabTodo: 0, TabDone: 1 };
  const [currentTab, setCurrentTab] = useState(0);
  const routes = [
    { path: "/todo", label: "ToDo" },
    { path: "/done", label: "Done" },
  ];

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

  const didMount = useRef(false);

  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (didMount.current) {
      //Mounted
      console.log("I run if toggle changes." + currentTab);
      navigate(routes[currentTab].path);
    } else {
      // Not Mounted
      didMount.current = true;
      console.log("I run only at mount.");

      const initialIndex = findIndexByRoute(location.pathname);

      setCurrentTab(initialIndex);
    }
  }, [currentTab]);

  const handleToggle = (index) => {
    console.log("new   index in toggleTab:" + index);
    setCurrentTab(index);
  };

  const Tab = ({ index, handleToggle }) => {
    return (
      <>
        <button
          className={currentTab === index ? "tabs active-tabs" : "tabs"}
          onClick={handleToggle}
        >
          {routes[index].label}
        </button>
      </>
    );
  };

  return (
    <div className="bloc-tabs">
      <Tab
        index={tabIndexes.TabTodo}
        handleToggle={() => handleToggle(tabIndexes.TabTodo)}
      ></Tab>
      <Tab
        index={tabIndexes.TabDone}
        handleToggle={() => handleToggle(tabIndexes.TabDone)}
      ></Tab>
    </div>
  );
}

export default TabPanel;
