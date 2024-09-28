import axios from 'axios';
import { Task, TaskFormInput } from '../types/taskTypes';

const BASE_URL = 'http://localhost:5000/tasks';

export const fetchAllTasks = async (): Promise<Task[]> => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

export const createNewTask = async (taskInput: TaskFormInput): Promise<Task> => {
  const response = await axios.post(BASE_URL, taskInput);
  return response.data;
};

export const updateExistingTask = async (taskId: number, taskInput: TaskFormInput): Promise<Task> => {
  const response = await axios.put(`${BASE_URL}/${taskId}`, taskInput);
  return response.data;
};

export const removeTask = async (taskId: number): Promise<void> => {
  await axios.delete(`${BASE_URL}/${taskId}`);
};
