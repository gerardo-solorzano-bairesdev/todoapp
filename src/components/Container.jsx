import React, { useState, useEffect } from "react";
import "../App.css";
import TaskAddForm from "./TaskAddForm";
import TaskList from "./TaskList";
import { apiGetTasks, apiUpdateTask, apiCreateTask } from "../app/api";
import { createTask, updateTask, getTasks } from "../app/tasksSlice";
import { useSelector, useDispatch } from "react-redux";

//const baseURL = "http://localhost:5000";

const Container = ({ checkView }) => {
  //const [taskList, setTaskList] = useState([]);

  //const taskList = useSelector((state) => state.container.taskList);
  //const taskList = useSelector(getTasks)
  const { tasks, isLoading } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    //axios.get(baseURL + "/api/todos/").then((response) => {
    //setTaskList(response.data.todos);
    //});
    //console.log("taskList: " + tasks);
    dispatch(apiGetTasks());
    console.log("tasks list len: " + tasks.length);
  }, [dispatch]);
  /*
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
*/

  const handleAddTask = (task) => {
    dispatch(apiCreateTask(task));
  };
  const findTaskIndexById = (taskId) => {
    return tasks.findIndex((task) => task.id === taskId);
  };

  const findTaskById = (taskId) => {
    return tasks.find((task) => task.id === taskId);
  };

  const handleCheckTask = (taskId) => {
    const task1 = findTaskById(taskId);
    console.log("handleCheckTask = (task1)   " + task1.body);
    dispatch(apiUpdateTask(task1));
  };

  /*
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

  */

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
