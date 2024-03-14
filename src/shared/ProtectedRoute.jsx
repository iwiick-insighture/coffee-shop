import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../lib/auth";

const ProtectedRoute = ({ children }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/log-in" replace />;
  }
  return children;
};

export default ProtectedRoute;
