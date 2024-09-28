import React, { useEffect, useState } from 'react';
import { Task } from '../types/taskTypes';
import { fetchAllTasks, removeTask } from '../services/taskAPI';

const TaskListDisplay: React.FC = () => {
  const [taskList, setTaskList] = useState<Task[]>([]);

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
    <div>
      <h2>Task Manager</h2>
      <ul>
        {taskList.map(task => (
          <li key={task.id}>
            {task.title} - {task.status} - {task.priority}
            <button onClick={() => handleTaskDelete(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskListDisplay;
