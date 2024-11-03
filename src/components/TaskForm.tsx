import React, { useState } from "react";
import "./TaskForm.css";
import { TaskFormInput } from "../types/taskTypes";
import { createNewTask, updateExistingTask } from "../services/taskAPI";
import { IoIosAdd } from "react-icons/io";

interface TaskFormProps {
  taskId?: number;
  initialData?: TaskFormInput;
}

const TaskForm: React.FC<TaskFormProps> = ({ taskId, initialData }) => {
  const [formData, setFormData] = useState<TaskFormInput>(
    initialData || { title: "" }
  );
  const [isPending, setPending] = useState<boolean>(false);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.title === "") {
      return;
    }
    setPending(true);
    if (taskId) {
      await updateExistingTask(taskId, formData);
    } else {
      await createNewTask(formData);
    }
    setFormData({ title: "" });
    setPending(false);
  };

  return (
    <div className="task-form">
      <h2>Add Task:</h2>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Task Title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
        <button
          disabled={formData.title.trim() === "" || isPending}
          style={isPending ? { cursor: "progress" } : {}}
          type="submit"
        >
          <IoIosAdd />
          &nbsp;{taskId ? "Update" : "Create"} Task
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
