import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Profile() {
  const navigate = useNavigate();

  const [showComplaint, setShowComplaint] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);

  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  const logout = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/login");
  };

  return (
    <div className="container py-5">
      {/* Profile Header */}
      <div
        className="card border-0 shadow-sm mb-4"
        style={{
          borderRadius: "20px",
          background: "linear-gradient(135deg, #e3f2fd, #ede7f6)",
        }}
      >
        <div className="card-body p-4">
          <div className="d-flex align-items-center">
            <div
              className="rounded-circle d-flex align-items-center justify-content-center me-4"
              style={{
                width: "80px",
                height: "80px",
                background: "#6366f1",
                color: "white",
                fontSize: "32px",
                fontWeight: "bold",
              }}
            >
              {user?.name?.charAt(0).toUpperCase()}
            </div>

            <div>
              <p className="text-muted mb-1">Welcome back 👋</p>
              <h2 className="fw-bold mb-1">{user?.name}</h2>
              <p className="text-muted mb-0">{user?.email}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Progress */}
      <div
        className="card border-0 shadow-sm mb-4"
        style={{ borderRadius: "20px" }}
      >
        <div className="card-body p-4">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div>
              <h4 className="fw-bold mb-1">📊 My Progress</h4>
              <p className="text-muted mb-0">Keep going, you're doing great!</p>
            </div>

            <h3 className="fw-bold text-primary">50%</h3>
          </div>

          <div
            className="progress"
            style={{ height: "14px", borderRadius: "10px" }}
          >
            <div
              className="progress-bar"
              style={{
                width: "50%",
                borderRadius: "10px",
              }}
            ></div>
          </div>

          <div className="d-flex justify-content-between mt-3">
            <span className="text-muted">Courses Started</span>
            <span className="fw-bold">2 Courses</span>
          </div>
        </div>
      </div>

      {/* Options */}
      <div className="row g-4">
        {/* My Learning */}
        <div className="col-md-6">
          <div
            className="card border-0 shadow-sm h-100"
            style={{
              borderRadius: "20px",
              background: "#f3e8ff",
            }}
          >
            <div className="card-body p-4">
              <div className="fs-1 mb-2">📚</div>

              <h4 className="fw-bold">My Learning</h4>

              <p className="text-muted">
                View and continue your saved courses.
              </p>

              <button
                className="btn btn-primary rounded-pill px-4"
                onClick={() => navigate("/my-learning")}
              >
                View My Learning →
              </button>
            </div>
          </div>
        </div>

        {/* Help / Complaint */}
        <div className="col-md-6">
          <div
            className="card border-0 shadow-sm h-100"
            style={{
              borderRadius: "20px",
              background: "#ffe9ed",
            }}
          >
            <div className="card-body p-4">
              <div className="fs-1 mb-2">🆘</div>

              <h4 className="fw-bold">Help / Complaint</h4>

              <p className="text-muted">
                Have a problem? Let us know and get help.
              </p>

              <button
                className="btn btn-outline-danger rounded-pill px-4"
                onClick={() => {
                  setShowComplaint(true);
                  setShowFeedback(false);
                }}
              >
                Contact Support →
              </button>
            </div>
          </div>
        </div>

        {/* Feedback */}
        <div className="col-md-6">
          <div
            className="card border-0 shadow-sm h-100"
            style={{
              borderRadius: "20px",
              background: "#fff5d6",
            }}
          >
            <div className="card-body p-4">
              <div className="fs-1 mb-2">⭐</div>

              <h4 className="fw-bold">Feedback</h4>

              <p className="text-muted">
                Share your experience and help us improve.
              </p>

              <button
                className="btn btn-outline-warning rounded-pill px-4"
                onClick={() => {
                  setShowFeedback(true);
                  setShowComplaint(false);
                }}
              >
                Give Feedback →
              </button>
            </div>
          </div>
        </div>

        {/* Account */}
        <div className="col-md-6">
          <div
            className="card border-0 shadow-sm h-100"
            style={{
              borderRadius: "20px",
              background: "#e8f5e9",
            }}
          >
            <div className="card-body p-4">
              <div className="fs-1 mb-2">🎓</div>

              <h4 className="fw-bold">Keep Learning!</h4>

              <p className="text-muted">
                Learn new skills and complete your courses.
              </p>

              <button
                className="btn btn-success rounded-pill px-4"
                onClick={() => navigate("/courses")}
              >
                Explore Courses →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Complaint Form */}
      {showComplaint && (
        <div
          className="card border-0 shadow-sm mt-4"
          style={{ borderRadius: "20px" }}
        >
          <div className="card-body p-4">
            <h4 className="fw-bold mb-3">📝 Submit Your Complaint</h4>

            <input
              type="text"
              className="form-control mb-3"
              placeholder="Enter your name"
            />

            <input
              type="email"
              className="form-control mb-3"
              placeholder="Enter your email"
            />

            <textarea
              className="form-control mb-3"
              rows="4"
              placeholder="Write your complaint..."
            ></textarea>

            <button
              className="btn btn-danger rounded-pill px-4"
              onClick={() => {
                alert("Complaint submitted successfully!");
                setShowComplaint(false);
              }}
            >
              Submit Complaint
            </button>

            <button
              className="btn btn-secondary rounded-pill px-4 ms-2"
              onClick={() => setShowComplaint(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Feedback Form */}
      {showFeedback && (
        <div
          className="card border-0 shadow-sm mt-4"
          style={{ borderRadius: "20px" }}
        >
          <div className="card-body p-4">
            <h4 className="fw-bold mb-3">⭐ Give Your Feedback</h4>

            <input
              type="text"
              className="form-control mb-3"
              placeholder="Enter your name"
            />

            <select className="form-select mb-3">
              <option>Select Rating</option>
              <option>⭐ 1 Star</option>
              <option>⭐⭐ 2 Stars</option>
              <option>⭐⭐⭐ 3 Stars</option>
              <option>⭐⭐⭐⭐ 4 Stars</option>
              <option>⭐⭐⭐⭐⭐ 5 Stars</option>
            </select>

            <textarea
              className="form-control mb-3"
              rows="4"
              placeholder="Write your feedback..."
            ></textarea>

            <button
              className="btn btn-warning rounded-pill px-4"
              onClick={() => {
                alert("Feedback submitted successfully!");
                setShowFeedback(false);
              }}
            >
              Submit Feedback
            </button>

            <button
              className="btn btn-secondary rounded-pill px-4 ms-2"
              onClick={() => setShowFeedback(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Logout */}
      <div className="text-center mt-5">
        <button onClick={logout} className="btn btn-danger rounded-pill px-5">
          🚪 Logout
        </button>
      </div>
    </div>
  );
}

export default Profile;
