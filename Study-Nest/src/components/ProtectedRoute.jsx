import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, role }) {
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  if (!loggedInUser) {
    return <Navigate to="/login" />;
  }

  if (loggedInUser.role !== role) {
    return <Navigate to="/" />;
  }

  return children;
}

export default ProtectedRoute;
