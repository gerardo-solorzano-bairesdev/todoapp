import React, { useEffect } from "react";
import "../App.css";
import TaskAddForm from "./TaskAddForm";
import TaskList from "./TaskList";
import { apiGetTasks, apiUpdateTask, apiCreateTask } from "../app/api";
import { useSelector, useDispatch } from "react-redux";
import Chip from "@mui/material/Chip";

const Container = ({ checkView }) => {
  const { tasks, isLoading } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(apiGetTasks());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const handleAddTask = (task) => {
    dispatch(apiCreateTask(task));
  };

  const findTaskById = (taskId) => {
    return tasks.find((task) => task.id === taskId);
  };

  const handleCheckTask = (taskId) => {
    const task1 = findTaskById(taskId);
    dispatch(apiUpdateTask(task1));
  };

  if (isLoading) {
    return (
      <div className="content  active-content">
        <Chip
          style={{ marginLeft: "100px", marginTop: "100px", fontSize: "large" }}
          label="LOADING DATA, PLEASE WAIT!"
          color="primary"
        />
      </div>
    );
  }

  const jsxTaskList = (
    <TaskList
      taskList={tasks}
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

export default Container;
