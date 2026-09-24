import { Link } from "react-router-dom";
import courses from "../data/courses";

function Courses() {
  return (
    <div className="bg-light min-vh-100 py-5">
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-5">
          <h1 className="fw-bold text-primary">📚 Explore Our Courses</h1>

          <p className="text-secondary">
            Choose a course and start learning today.
          </p>
        </div>

        {/* Course Cards */}
        <div className="row g-4">
          {courses.map((course) => (
            <div className="col-md-6 col-lg-4" key={course.id}>
              <div className="card h-100 border-0 shadow-sm">
                <img
                  src={course.image}
                  alt={course.name}
                  className="card-img-top"
                  style={{
                    height: "200px",
                    objectFit: "cover",
                  }}
                />

                <div className="card-body text-center">
                  <h4 className="fw-bold">{course.name}</h4>

                  <p className="text-secondary">
                    {course.topics.length} Topics
                  </p>

                  <Link
                    to={`/courses/${course.id}`}
                    className="btn btn-primary"
                  >
                    View Course
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Courses;
