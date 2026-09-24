import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div
      style={{
        width: "240px",
        minHeight: "100vh",
        position: "fixed",
        left: "0",
        top: "0",
        background: "#ffffff",
        borderRight: "1px solid #e2e8f0",
        boxShadow: "2px 0 10px rgba(0, 0, 0, 0.05)",
        padding: "25px 15px",
      }}
    >
      <h3
        className="text-center mb-4"
        style={{
          color: "#2563eb",
          fontWeight: "700",
        }}
      >
        📚 StudyNest
      </h3>

      <div className="d-flex flex-column gap-2">
        <Link
          to="/"
          className="text-decoration-none p-2 rounded"
          style={{ color: "#334155" }}
        >
          🏠 Home
        </Link>

        <Link
          to="/courses"
          className="text-decoration-none p-2 rounded"
          style={{ color: "#334155" }}
        >
          📚 Courses
        </Link>

        <Link
          to="/categories"
          className="text-decoration-none p-2 rounded"
          style={{ color: "#334155" }}
        >
          📂 Categories
        </Link>

        <Link
          to="/my-learning"
          className="text-decoration-none p-2 rounded"
          style={{ color: "#334155" }}
        >
          🎓 My Learning
        </Link>

        <Link
          to="/mcq"
          className="text-decoration-none p-2 rounded"
          style={{ color: "#334155" }}
        >
          🧠 MCQ Practice
        </Link>

        <Link
          to="/profile"
          className="text-decoration-none p-2 rounded"
          style={{ color: "#334155" }}
        >
          👤 Profile
        </Link>

        <Link
          to="/login"
          className="text-decoration-none p-2 rounded mt-3"
          style={{ color: "#dc2626" }}
        >
          🚪 Logout
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
