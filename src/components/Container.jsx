import React, { useState, useEffect } from "react";
import "../App.css";
import TaskAddForm from "./TaskAddForm";
import TaskList from "./TaskList";
import axios from "axios";

const baseURL = "http://localhost:5000";

const Container = ({ checkView }) => {
  const [taskList, setTaskList] = useState([]);

    useEffect(() => {
    axios.get(baseURL + "/api/todos/").then((response) => {
      setTaskList(response.data.todos);
    });
  }, []);

  const handleAddTask = (task) => {
    axios
      .post(baseURL + "/api/todos/", {
        body: task.body,
      })
      .then((response) => {
        const newtask = response.data;
        setTaskList([...taskList, newtask]);
      });
  };


  const findTaskIndexById = (taskId) => {
    return taskList.findIndex((task) => task.id === taskId);
  };

  const handleUpdate = (index, task) => {
    const tempTaskList = [...taskList];

    axios
      .put(baseURL + "/api/todos/" + task.id, {
        done: task.done,
      })
      .then((response) => {
        const newtask = response.data;
        tempTaskList[index] = newtask;
        setTaskList(tempTaskList);
      });
  };

  const handleCheckTask = (taskId) => {
    const taskIndex = findTaskIndexById(taskId);
    const originalTask = taskList[taskIndex];
    const modifiedTask = { ...originalTask, done: !originalTask.done };
    handleUpdate(taskIndex, modifiedTask);
  };

  const jsxTaskList = (
    <TaskList
      taskList={taskList}
      handleCheckTask={handleCheckTask}
      checkView={checkView}
    />
  );

  const jsxTaskAddForm = !checkView ? (
    <TaskAddForm handleAddTask={handleAddTask} />
  ) : (
    <div></div>
  );

  return (
    <div >
      {jsxTaskAddForm}
      {jsxTaskList}
    </div>
  );
};

export default Container;