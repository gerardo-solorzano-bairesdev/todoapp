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
      console.log("handleCheckTask = (taskId) " + taskId)
      console.log("handleCheckTask = (taskList) " + taskList)
    const taskIndex = findTaskIndexById(taskId);
    const originalTask = taskList[taskIndex];
    const modifiedTask = { ...originalTask, done: !originalTask.done };
    handleUpdate(taskIndex, modifiedTask);
    console.log("handleCheckTask = (taskList) " + taskList)
  };

  const jsxTaskListToDo = (
    <TaskList
      taskList={taskList}
      handleCheckTask={handleCheckTask}
      checkView={false}
    />
  );

    const jsxTaskListDone = (
    <TaskList
      taskList={taskList}
      handleCheckTask={handleCheckTask}
      checkView={true}
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
      {jsxTaskListToDo}
      {jsxTaskListDone}
    </div>
  );
};

export default Container;