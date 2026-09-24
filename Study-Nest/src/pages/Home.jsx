import { Link } from "react-router-dom";
import "./Home.css";

import courses from "../data/courses";

function Home() {
  return (
    <div className="home-page">
     
      <section className="home-banner-section">
        <div className="container">
          <div className="home-banner">
            <div className="banner-content">
              <p className="banner-welcome">Welcome back, {localStorage.getItem("userName")} !1👋</p>

              <h1>
                Study Nest <br />
                Keep Learning,
                <br />
                <span>Keep Growing</span>
              </h1>

              <p className="banner-description">
                Explore top courses, track your progress and achieve your goals.
              </p>

              <div className="banner-buttons">
                <Link to="/courses" className="banner-btn explore-btn">
                  Explore Courses
                </Link>

                <Link to="/courses" className="banner-btn continue-btn">
                  Continue Learning
                </Link>
              </div>
            </div>

            <div className="banner-image">
              <img
                src="/images/HOME-BANNER-IMAGE.jpeg"
                alt="StudyNest Learning"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Top Categories */}
      <section className="categories-section">
        <div className="container">
          <div className="section-heading">
            <h2>Top Categories</h2>

            <Link to="/categories">View All →</Link>
          </div>

          <div className="categories-row">
            {courses.slice(0, 6).map((course) => (
              <Link
                to={`/courses/${course.id}`}
                className="category-card"
                key={course.id}
              >
                <img src={course.image} alt={course.name} />

                <h4>{course.name}</h4>

                <p>{course.topics.length}+ Topics</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Courses */}
      <section className="popular-section">
        <div className="container">
          <div className="section-heading">
            <h2>Popular Courses</h2>

            <Link to="/courses">View All →</Link>
          </div>

          <div className="popular-row">
            {courses.slice(0, 4).map((course) => (
              <Link
                to={`/courses/${course.id}`}
                className="popular-card"
                key={course.id}
              >
                <img
                  src={course.detailImage || course.image}
                  alt={course.name}
                />

                <div className="popular-card-body">
                  <h4>{course.name}</h4>

                  <p>Complete {course.name} Course</p>

                  <div className="course-info">
                    📚 {course.topics.length} Topics
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
