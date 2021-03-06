import React, { useState } from "react";

const TaskAddForm = ({ handleAddTask }) => {
  const [taskBody, setTaskBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddTask({
      id: (+new Date()).toString(),
      done: false,
      body: taskBody,
    });
    setTaskBody("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginLeft: "50px" }}>
      <input
        type="text"
        placeholder="Add new task"
        value={taskBody}
        onChange={(e) => setTaskBody(e.target.value)}
      />
    </form>
  );
};

export default TaskAddForm;
