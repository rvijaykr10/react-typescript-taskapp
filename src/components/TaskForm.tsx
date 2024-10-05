import React, { useState } from "react";
import "./TaskForm.css";
import { TaskFormInput } from "../types/taskTypes";
import { createNewTask, updateExistingTask } from "../services/taskAPI";
import { useNavigate } from "react-router-dom";

interface TaskFormProps {
  taskId?: number;
  initialData?: TaskFormInput;
  onSuccess: () => void;
}

const TaskForm: React.FC<TaskFormProps> = ({
  taskId,
  initialData,
  onSuccess,
}) => {
  const [formData, setFormData] = useState<TaskFormInput>(
    initialData || { title: "", description: "" }
  );

  const navigate = useNavigate();

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (taskId) {
      await updateExistingTask(taskId, formData);
    } else {
      await createNewTask(formData);
    }
    setFormData({ title: "", description: "" });
    onSuccess();
  };

  return (
    <div className="task-form">
      <button type="button" onClick={() => navigate("/")}>
        Back
      </button>
      <h2>Add Task:</h2>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Task Title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
        <textarea
          rows={4}
          placeholder="Task Description"
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
        ></textarea>
        <button type="submit">{taskId ? "Update" : "Create"} Task</button>
      </form>
    </div>
  );
};

export default TaskForm;
