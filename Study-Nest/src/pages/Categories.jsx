import { Link } from "react-router-dom";
import courses from "../data/courses";

function Categories() {

  const catergoriesImages = [
    "https://www.xavor.com/wp-content/uploads/2022/11/full-stack-development-2.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEhrPi8Q_FB52gZNI1IZquxSRqV8n01SRUEYFLlVDsVg&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmPhVJkctOW_XhQBI7ENW7lUmcvh8un38jx437t9wDVA&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz_9ZomIcgTmFHwCcOfEeDTVrW8EDwozLzy-1Ia5d0UQ&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbbgHHydj3TScvMdPOG1S3SfiPE6AQJap5DVFYaHuJbA&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyafyG-ney4s9qEUAPdU4FjbVnDeJhkMxc4W8dU1Z8ow&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW3Ped_oOOz495V3OPMmGOI-4Y10LmV2Rn0WwiUT3Onw&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJhRgA7cdLjEKswIXsR4sPb2hSwyQqE6ZncUgZ6IvRvA&s=10",
  ];
  return (
    <div className="bg-light min-vh-100 py-5">

      <div className="container">

        {/* Heading */}
        <div className="text-center mb-5">
          <h1 className="fw-bold text-primary">
            🎯 Course Categories
          </h1>

          <p className="text-secondary">
            Explore different learning categories.
          </p>
        </div>

        {/* Categories */}
        <div className="row g-4">

          {courses.map((course,index) => (
            <div
              className="col-md-6 col-lg-3"
              key={course.id}
            >
              <div className="card h-100 border-0 shadow-sm">

                <img
                  src={catergoriesImages[index]}
                  alt={course.name}
                  className="card-img-top"
                  style={{
                    height: "170px",
                    objectFit: "cover",
                  }}
                />

                <div className="card-body text-center">

                  <h5 className="fw-bold">
                    {course.name}
                  </h5>

                  <p className="text-secondary small">
                    {course.topics.length} Topics
                  </p>

                  <Link
                    to={`/courses/${course.id}`}
                    className="btn btn-outline-primary"
                  >
                    Explore
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

export default Categories;