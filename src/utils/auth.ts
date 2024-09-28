import { User, RoleEnum } from '../types/taskTypes';

export const isAdmin = (user: User): boolean => {
  return user.role === RoleEnum.Admin;
};


