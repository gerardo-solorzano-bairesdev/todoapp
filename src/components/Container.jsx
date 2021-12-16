import React, { useState } from "react";
import "../App.css";
import TaskAddForm from "./TaskAddForm";
import TaskList from "./TaskList";

const Container = ({ checkView }) => {
  const [taskList, setTaskList] = useState([]);

  const handleAddTask = (task) => {
    console.log(task, taskList);
    setTaskList([...taskList, task]);
    console.log(taskList);
  };

  const handleRemoveTask = (task) => {
    console.log(task, taskList);
    setTaskList(taskList.filter((task) => !task.done));
    console.log(taskList);
  };

  const findTaskIndexById = (taskId) => {
    console.log(taskId, taskList);

    return taskList.findIndex((task) => task.id === taskId);
  };

  const handleUpdate = (index, task) => {
    const newTaskList = [...taskList];
    newTaskList[index] = task;
    //setTaskList(newTaskList.filter((task) => task.done === checkView));
    setTaskList(newTaskList);
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
    <div className="content  active-content">
      {jsxTaskAddForm}
      {jsxTaskList}
    </div>
  );
};

Container.propTypes = {};

export default Container;