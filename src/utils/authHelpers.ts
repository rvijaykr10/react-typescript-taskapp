import { User, RoleEnum } from '../types/taskTypes';

export const isAdminUser = (user: User): boolean => {
  return user.role === RoleEnum.Admin;
};
