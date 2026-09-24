import { useParams } from "react-router-dom";
import courses from "../data/courses";
import "./TopicDetails.css";

function TopicDetails() {
  const { id, topicIndex } = useParams();

  const course = courses.find((course) => course.id === Number(id));

  const topic = course?.topics[Number(topicIndex)];

  if (!course || !topic) {
    return <h2 className="text-center mt-5">Topic not found</h2>;
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">{topic.name}</h1>

      <div className="row">
        {topic.subtopics.map((subtopic, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card h-100 shadow-sm">
              <div className="card-body text-center">
                <h4>{subtopic}</h4>

                {topic.name === "HTML" && subtopic === "HTML Introduction" && (
                  <a
                    href="/notes/HTMLNotes.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className=""
                  ></a>
                )}

                <button
                  className="btn btn-primary"
                  onClick={() => alert(`${topic.name} topic is opening...`)}
                >
                  Learn Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopicDetails;
