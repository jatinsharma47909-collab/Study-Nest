function AdminDashboard() {
  return (
    <div className="container-fluid p-4">
      {/* Header */}
      <div className="mb-4">
        <h1 className="fw-bold">Admin Dashboard</h1>
        <p className="text-muted">Welcome to StudyNest Admin Panel</p>
      </div>

      {/* Statistics */}
      <div className="row g-4 mb-4">
        {/* Total Users */}
        <div className="col-md-3">
          <div className="card shadow-sm border-0 p-4 h-100">
            <h5 className="text-muted">Total Users</h5>
            <h2 className="fw-bold">2</h2>
            <p className="mb-0">Registered students</p>
          </div>
        </div>

        {/* Courses */}
        <div className="col-md-3">
          <div className="card shadow-sm border-0 p-4 h-100">
            <h5 className="text-muted">Courses</h5>
            <h2 className="fw-bold">8</h2>
            <p className="mb-0">Available courses</p>
          </div>
        </div>

        {/* Materials */}
        <div className="col-md-3">
          <div className="card shadow-sm border-0 p-4 h-100">
            <h5 className="text-muted">Materials</h5>
            <h2 className="fw-bold">45</h2>
            <p className="mb-0">Study materials</p>
          </div>
        </div>

        {/* Downloads */}
        <div className="col-md-3">
          <div className="card shadow-sm border-0 p-4 h-100">
            <h5 className="text-muted">Downloads</h5>
            <h2 className="fw-bold">2</h2>
            <p className="mb-0">Total downloads</p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="card shadow-sm border-0 p-4">
        <h3 className="fw-bold mb-3">Quick Actions</h3>

        <div className="d-flex gap-3 flex-wrap">
          {/* Manage Users */}
          <a href="/admin/users" className="btn btn-primary">
            👥 Manage Users
          </a>

          {/* Add Material */}
          <a href="/admin/material" className="btn btn-success">
            📚 Add Material
          </a>

          {/* Manage MCQ */}
          <a href="/admin/mcq" className="btn btn-warning">
            📝 Manage MCQ Questions
          </a>
          <a href="/admin/scores" className="btn btn-info">
            🏆 Manage Scores
          </a>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
