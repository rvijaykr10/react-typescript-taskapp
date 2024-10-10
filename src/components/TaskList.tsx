import React, { useEffect, useState } from "react";
import "./TaskList.css";
import { Task } from "../types/taskTypes";
import { fetchAllTasks, removeTask } from "../services/taskAPI";
import { useNavigate } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";

const TaskListDisplay: React.FC = () => {
  const [taskList, setTaskList] = useState<Task[]>([]);
  const [isLoading, setIsloading] = useState<Boolean>(false);

  const navigate = useNavigate();

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    setIsloading(true);
    const tasks = await fetchAllTasks();
    setTaskList(tasks);
    setIsloading(false);
  };

  const handleTaskDelete = async (taskId: number) => {
    await removeTask(taskId);
    loadTasks();
  };

  return (
    <div className="task-list">
      <button className="back-btn" type="button" onClick={() => navigate("/")}>
        <IoMdArrowBack /> &nbsp; back to home page
      </button>
      <h2>Task List</h2>
      {isLoading && "Loading !"}
      {!isLoading && taskList.length === 0 && "No Data Found !"}
      {taskList?.length > 0 && (
        <ol>
          {taskList?.map((task) => (
            <li key={task.id}>
              <div>
                <p>{task.title}</p>
                <button
                  className="delete-btn"
                  onClick={() => handleTaskDelete(task.id)}
                >
                  <RxCross1 />
                </button>
              </div>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
};

export default TaskListDisplay;
