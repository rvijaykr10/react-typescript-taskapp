import React, { useState } from 'react';
import { TaskFormInput, 
    // TaskStatusEnum, 
    // PriorityEnum 
} from '../types/taskTypes';
import { createNewTask, updateExistingTask } from '../services/taskAPI';

interface TaskEditorFormProps {
  taskId?: number;  // Optional for editing
  initialData?: TaskFormInput;  // Data for editing
  onSuccess: () => void;
}

const TaskEditorForm: React.FC<TaskEditorFormProps> = ({ taskId, initialData, onSuccess }) => {
  const [formData, setFormData] = useState<TaskFormInput>(initialData || { title: '', description: '' });

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (taskId) {
      await updateExistingTask(taskId, formData);
    } else {
      await createNewTask(formData);
    }
    onSuccess(); // Callback after success
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        placeholder="Task Title"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
      />
      <textarea
        placeholder="Task Description"
        value={formData.description}
        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
      ></textarea>
      <button type="submit">{taskId ? 'Update' : 'Create'} Task</button>
    </form>
  );
};

export default TaskEditorForm;
