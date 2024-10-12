import React, { useState } from "react";
import "./TaskForm.css";
import { TaskFormInput } from "../types/taskTypes";
import { createNewTask, updateExistingTask } from "../services/taskAPI";
import { useNavigate } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import { IoIosAdd } from "react-icons/io";

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
    initialData || { title: "" }
  );
  const [isPending, setPending] = useState<boolean>(false);

  const navigate = useNavigate();

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
    onSuccess();
  };

  return (
    <div className="task-form">
      <button className="back-btn" type="button" onClick={() => navigate("/")}>
        <IoMdArrowBack /> &nbsp; back to home page
      </button>
      <h2>Add Task:</h2>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Task Title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
        {/* <textarea
          rows={4}
          placeholder="Task Description"
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value.trim() })
          }
        ></textarea> */}
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
