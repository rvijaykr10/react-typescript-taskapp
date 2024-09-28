export interface Task {
    id: number;
    title: string;
    description: string;
    status: TaskStatusEnum;
    priority: PriorityEnum;
  }
  
  export interface User {
    id: number;
    username: string;
    role: RoleEnum;
  }
  
  export enum TaskStatusEnum {
    Pending = "pending",
    InProgress = "in-progress",
    Completed = "completed",
  }
  
  export enum PriorityEnum {
    Low = "low",
    Medium = "medium",
    High = "high",
  }
  
  export enum RoleEnum {
    Admin = "admin",
    User = "user",
  }
  
  export interface TaskFormInput {
    title: string;
    description: string;
    status?: TaskStatusEnum;
    priority?: PriorityEnum;
  }
  