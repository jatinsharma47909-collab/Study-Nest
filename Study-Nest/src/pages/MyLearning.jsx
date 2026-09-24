import courses from "../data/courses";
import { Link } from "react-router-dom";

function MyLearning() {
  const savedIds = JSON.parse(localStorage.getItem("myLearning")) || [];

  const myCourses = courses.filter((course) => savedIds.includes(course.id));

  const removeCourse = (id) => {
    const updatedCourses = savedIds.filter((courseId) => courseId !== id);

    localStorage.setItem("myLearning", JSON.stringify(updatedCourses));

    window.location.reload();
  };

  return (
    <div className="container py-5">
      <h1 className="mb-2">🎓 My Learning</h1>

      <p className="text-muted mb-4">Continue your learning journey</p>

      {myCourses.length === 0 ? (
        <div className="text-center mt-5">
          <h3>No courses in My Learning</h3>
          <p className="text-muted">Open a course to start learning.</p>

          <Link to="/courses" className="btn btn-primary">
            Explore Courses
          </Link>
        </div>
      ) : (
        <div className="row">
          {myCourses.map((course) => (
            <div className="col-md-6 col-lg-3 mb-4" key={course.id}>
              <div className="card h-100 shadow-sm">
                <img
                  src={course.image}
                  alt={course.name}
                  style={{
                    width: "100%",
                    height: "150px",
                    objectFit: "contain",
                  }}
                />

                <div className="card-body">
                  <h5>{course.name}</h5>

                  <Link
                    to={`/courses/${course.id}`}
                    className="btn btn-primary me-2"
                  >
                    Continue
                  </Link>

                  <button
                    onClick={() => removeCourse(course.id)}
                    className="btn btn-outline-danger mt-2"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyLearning;
