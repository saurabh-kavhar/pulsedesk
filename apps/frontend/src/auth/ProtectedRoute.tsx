import { Navigate } from 'react-router-dom';
import type { ReactElement } from 'react';
import { isAuthenticated } from './auth';

type Props = {
  children: ReactElement;
};

export default function ProtectedRoute({ children }: Props) {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
