import { useEffect, useState } from "react";

function AdminScores() {
  const [scores, setScores] = useState([]);

  // ==============================
  // LOAD SCORES FROM LOCAL STORAGE
  // ==============================
  useEffect(() => {
    const savedScores = localStorage.getItem("quizScores");

    if (savedScores) {
      setScores(JSON.parse(savedScores));
    }
  }, []);

  // ==============================
  // DELETE SCORE
  // ==============================
  const deleteScore = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this score?",
    );

    if (!confirmDelete) {
      return;
    }

    const updatedScores = scores.filter((item) => item.id !== id);

    setScores(updatedScores);

    localStorage.setItem("quizScores", JSON.stringify(updatedScores));
  };

  // ==============================
  // CLEAR ALL SCORES
  // ==============================
  const clearAllScores = () => {
    const confirmClear = window.confirm(
      "Are you sure you want to delete all scores?",
    );

    if (!confirmClear) {
      return;
    }

    setScores([]);

    localStorage.removeItem("quizScores");
  };

  return (
    <div className="container-fluid p-4">
      {/* ==============================
          HEADER
      ============================== */}
      <div className="mb-4">
        <h1 className="fw-bold">Manage Scores</h1>

        <p className="text-muted">View and manage student MCQ scores</p>
      </div>

      {/* ==============================
          STATISTICS
      ============================== */}
      <div className="row g-4 mb-4">
        {/* Total Attempts */}
        <div className="col-md-4">
          <div className="card shadow-sm border-0 p-4 h-100">
            <h6 className="text-muted">Total Attempts</h6>

            <h2 className="fw-bold">{scores.length}</h2>

            <p className="mb-0">Quiz attempts</p>
          </div>
        </div>

        {/* Total Questions */}
        <div className="col-md-4">
          <div className="card shadow-sm border-0 p-4 h-100">
            <h6 className="text-muted">Total Questions</h6>

            <h2 className="fw-bold">
              {scores.reduce(
                (total, item) => total + Number(item.total || 0),
                0,
              )}
            </h2>

            <p className="mb-0">Questions attempted</p>
          </div>
        </div>

        {/* Average Score */}
        <div className="col-md-4">
          <div className="card shadow-sm border-0 p-4 h-100">
            <h6 className="text-muted">Average Score</h6>

            <h2 className="fw-bold">
              {scores.length > 0
                ? (
                    scores.reduce(
                      (total, item) =>
                        total + (Number(item.score) / Number(item.total)) * 100,
                      0,
                    ) / scores.length
                  ).toFixed(0)
                : 0}
              %
            </h2>

            <p className="mb-0">Average performance</p>
          </div>
        </div>
      </div>

      {/* ==============================
          SCORES TABLE
      ============================== */}
      <div className="card shadow-sm border-0">
        <div className="card-body">
          {/* Table Header */}
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div>
              <h3 className="fw-bold mb-1">🏆 Student Scores</h3>

              <p className="text-muted mb-0">MCQ quiz results</p>
            </div>

            {scores.length > 0 && (
              <button className="btn btn-danger" onClick={clearAllScores}>
                🗑️ Clear All
              </button>
            )}
          </div>

          {/* No Scores */}
          {scores.length === 0 ? (
            <div className="alert alert-info text-center">
              No scores available yet.
              <br />
              Students' MCQ scores will appear here after completing a quiz.
            </div>
          ) : (
            <div className="table-responsive">
              <table className="table table-hover align-middle">
                <thead className="table-light">
                  <tr>
                    <th>#</th>
                    <th>Student Name</th>
                    <th>Topic</th>
                    <th>Score</th>
                    <th>Total</th>
                    <th>Percentage</th>
                    <th>Date</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {scores.map((item, index) => {
                    const percentage =
                      Number(item.total) > 0
                        ? (Number(item.score) / Number(item.total)) * 100
                        : 0;

                    return (
                      <tr key={item.id}>
                        {/* Number */}
                        <td>{index + 1}</td>

                        {/* Student Name */}
                        <td>
                          <strong>{item.studentName || "Student"}</strong>
                        </td>

                        {/* Topic */}
                        <td>
                          <span className="badge bg-secondary">
                            {item.topic}
                          </span>
                        </td>

                        {/* Score */}
                        <td>
                          <strong className="text-primary">{item.score}</strong>
                        </td>

                        {/* Total */}
                        <td>{item.total}</td>

                        {/* Percentage */}
                        <td>
                          <span
                            className={
                              percentage >= 70
                                ? "badge bg-success"
                                : percentage >= 40
                                  ? "badge bg-warning text-dark"
                                  : "badge bg-danger"
                            }
                          >
                            {percentage.toFixed(0)}%
                          </span>
                        </td>

                        {/* Date */}
                        <td>{item.date || "-"}</td>

                        {/* Delete */}
                        <td>
                          <button
                            className="btn btn-sm btn-danger"
                            onClick={() => deleteScore(item.id)}
                          >
                            🗑️ Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminScores;
