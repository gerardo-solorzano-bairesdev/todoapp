import React from "react";
import { Checkbox, FormControlLabel } from "@mui/material";

const Task = ({ task, onChange }) => {
  return (
    <div>
      <FormControlLabel
        control={
          <Checkbox
            name={task.id}
            defaultChecked={task.done}
            onChange={onChange}
          />
        }
        label={task.body}
      />
    </div>
  );
};

export default Task;
