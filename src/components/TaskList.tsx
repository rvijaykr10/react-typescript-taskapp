import React, { useEffect, useState } from "react";
import "./TaskList.css";
import { Task } from "../types/taskTypes";
import { fetchAllTasks, removeTask } from "../services/taskAPI";
import { useNavigate } from "react-router-dom";

const TaskListDisplay: React.FC = () => {
  const [taskList, setTaskList] = useState<Task[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    const tasks = await fetchAllTasks();
    setTaskList(tasks);
  };

  const handleTaskDelete = async (taskId: number) => {
    await removeTask(taskId);
    loadTasks(); // Refresh list after delete
  };

  return (
    <div className="task-list">
      <button type="button" onClick={() => navigate("/")}>
        Back
      </button>
      <h2>Task List</h2>
      <ol>
        {taskList.map((task) => (
          <li key={task.id}>
            <div>
              <p>{task.title}</p>
              <button onClick={() => handleTaskDelete(task.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default TaskListDisplay;
