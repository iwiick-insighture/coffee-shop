import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '@lib/auth';

const ProtectedRoute = ({ children }) => {
    if (!isAuthenticated()) {
        return <Navigate to="/sign-in" replace />;
      }
    
      return children;
}

export default ProtectedRoute