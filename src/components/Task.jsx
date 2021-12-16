import React from "react";


const Task = ({ task, onChange }) => {
  return (
    <div>
      <input
        name={task.id}
        type="checkbox"
        defaultChecked={task.done}
        onChange={onChange}
      ></input>
      {task.body}
    </div>
  );
};



export default Task;