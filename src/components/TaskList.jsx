import React from "react";
import Task from "./Task";

const Tasklist = ({ taskList, handleCheckTask, checkView }) => {
  const onChange = (e) => {
    const { name: taskId } = e.target;
    handleCheckTask(taskId);
  };

  const jsxTaskList = taskList
    .filter((task) => task.done === checkView)
    .map((task) => <Task key={task.id} task={task} onChange={onChange} />);

  return (
    <div style={{ marginLeft: "50px" }}>
      {taskList.length ? jsxTaskList : "No tasks"}
    </div>
  );
};

export default Tasklist;
