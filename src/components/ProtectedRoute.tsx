import React from 'react';
import { isAdminUser } from '../utils/authHelpers';
import { User } from '../types/taskTypes';

interface ProtectedRouteProps {
  user: User;
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ user, children }) => {
  if (!isAdminUser(user)) {
    return <div>Access Denied: You do not have the necessary permissions.</div>;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
