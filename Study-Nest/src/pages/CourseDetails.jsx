import React from "react";
import { Link, useParams } from "react-router-dom";
import courses from "../data/courses";
import { useEffect } from "react";

function CourseDetails() {
  const { id } = useParams();

  const course = courses.find((item) => item.id === Number(id));

  // 👇 YAha spread operator use kiya my learning  ke liye oaske anadr jo bhi user
  //  dekhe vo rahena chaiye aur remove karke hat jana chaiye //
  useEffect(() => {
    if (!course) return;

    const savedCourses = JSON.parse(localStorage.getItem("myLearning")) || [];

    if (!savedCourses.includes(course.id)) {
      const updatedCourses = [...savedCourses, course.id];

      localStorage.setItem("myLearning", JSON.stringify(updatedCourses));
    }
  }, [course]);
  //..end......///

  if (!course) {
    return <h2 className="text-center mt-5">Course Not Found</h2>;
  }

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <img
          src={course.image}
          alt={course.name}
          style={{
            width: "100%",
            maxWidth: "1100px",
            height: "300px",
          }}
        />
        <h1 className="text-primary mt-4">Master {course.name} 🚀</h1>

        <p>{course.description}</p>
      </div>

      <h2 className="mb-4 text-center">🎓 What You’ll Learn</h2>

      <div className="row">
        {course.topics.map((topic, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card h-100 shadow">
              <img
                src={topic.image}
                alt={topic.name}
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "contain",
                }}
              />

              <div className="card-body text-center">
                <h4>{topic.name}</h4>

                <Link
                  to={`/courses/${course.id}/topic/${index}`}
                  className="btn mt-2"
                  style={{
                    backgroundColor: "#6f42c1",
                    color: "white",
                    borderRadius: "6px",
                  }}
                >
                  Learn More →
                </Link>
                <Link
                  to={`/mcq/${topic.name.toLowerCase().replaceAll(" ", "-")}`}
                  className="btn btn-outline-primary mt-2 ms-2"
                >
                  🧠 MCQ
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CourseDetails;
