import { Link, useNavigate } from "react-router-dom";

function AdminNavbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-dark bg-dark px-4">
      <Link className="navbar-brand fw-bold" to="/admin/dashboard">
        📚 StudyNest Admin
      </Link>

      <div className="d-flex align-items-center gap-4">
        <Link className="nav-link text-white" to="/admin/dashboard">
          Dashboard
        </Link>

        <Link className="nav-link text-white" to="/admin/users">
          ManageUsers
        </Link>

        <Link className="nav-link text-white" to="/admin/material">
          Add Material
        </Link>

        <span className="text-white">Welcome, Admin</span>

        <button className="btn btn-danger" onClick={logout}>
          Logout
        </button>
      </div>
    </nav>
  );
}

export default AdminNavbar;
