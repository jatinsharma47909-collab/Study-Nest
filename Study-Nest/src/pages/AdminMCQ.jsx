import { useState } from "react";

function AdminMCQ() {
  const [questions, setQuestions] = useState([]);
  const [question, setQuestion] = useState("");
  const [optionA, setOptionA] = useState("");
  const [optionB, setOptionB] = useState("");
  const [optionC, setOptionC] = useState("");
  const [optionD, setOptionD] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");

  const addQuestion = (e) => {
    e.preventDefault();

    if (
      !question ||
      !optionA ||
      !optionB ||
      !optionC ||
      !optionD ||
      !correctAnswer
    ) {
      alert("Please fill all fields");
      return;
    }

    const newQuestion = {
      id: Date.now(),
      question,
      options: [optionA, optionB, optionC, optionD],
      answer: correctAnswer,
    };

    setQuestions([...questions, newQuestion]);

    setQuestion("");
    setOptionA("");
    setOptionB("");
    setOptionC("");
    setOptionD("");
    setCorrectAnswer("");

    alert("MCQ Question Added Successfully!");
  };

  const deleteQuestion = (id) => {
    const updatedQuestions = questions.filter((item) => item.id !== id);

    setQuestions(updatedQuestions);
  };

  return (
    <div className="container-fluid p-4">
      {/* Header */}
      <div className="mb-4">
        <h1 className="fw-bold">Manage MCQ Questions</h1>
        <p className="text-muted">Add and manage MCQ questions for StudyNest</p>
      </div>

      {/* Add MCQ Form */}
      <div className="card shadow-sm border-0 p-4 mb-4">
        <h3 className="fw-bold mb-4">📝 Add New MCQ</h3>

        <form onSubmit={addQuestion}>
          {/* Question */}
          <div className="mb-3">
            <label className="form-label fw-bold">Question</label>

            <textarea
              className="form-control"
              rows="3"
              placeholder="Enter your question"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            ></textarea>
          </div>

          {/* Option A */}
          <div className="mb-3">
            <label className="form-label fw-bold">Option A</label>

            <input
              type="text"
              className="form-control"
              placeholder="Enter option A"
              value={optionA}
              onChange={(e) => setOptionA(e.target.value)}
            />
          </div>

          {/* Option B */}
          <div className="mb-3">
            <label className="form-label fw-bold">Option B</label>

            <input
              type="text"
              className="form-control"
              placeholder="Enter option B"
              value={optionB}
              onChange={(e) => setOptionB(e.target.value)}
            />
          </div>

          {/* Option C */}
          <div className="mb-3">
            <label className="form-label fw-bold">Option C</label>

            <input
              type="text"
              className="form-control"
              placeholder="Enter option C"
              value={optionC}
              onChange={(e) => setOptionC(e.target.value)}
            />
          </div>

          {/* Option D */}
          <div className="mb-3">
            <label className="form-label fw-bold">Option D</label>

            <input
              type="text"
              className="form-control"
              placeholder="Enter option D"
              value={optionD}
              onChange={(e) => setOptionD(e.target.value)}
            />
          </div>

          {/* Correct Answer */}
          <div className="mb-4">
            <label className="form-label fw-bold">Correct Answer</label>

            <select
              className="form-select"
              value={correctAnswer}
              onChange={(e) => setCorrectAnswer(e.target.value)}
            >
              <option value="">Select Correct Answer</option>
              <option value={optionA}>{optionA || "Option A"}</option>
              <option value={optionB}>{optionB || "Option B"}</option>
              <option value={optionC}>{optionC || "Option C"}</option>
              <option value={optionD}>{optionD || "Option D"}</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary">
            ➕ Add Question
          </button>
        </form>
      </div>

      {/* Questions List */}
      <div className="card shadow-sm border-0 p-4">
        <h3 className="fw-bold mb-4">📚 MCQ Questions</h3>

        {questions.length === 0 ? (
          <div className="alert alert-info">No MCQ questions added yet.</div>
        ) : (
          questions.map((item, index) => (
            <div key={item.id} className="card border mb-3 p-3">
              <div className="d-flex justify-content-between align-items-start">
                <div>
                  <h5 className="fw-bold">
                    Q{index + 1}. {item.question}
                  </h5>

                  <p className="mb-1">A. {item.options[0]}</p>

                  <p className="mb-1">B. {item.options[1]}</p>

                  <p className="mb-1">C. {item.options[2]}</p>

                  <p className="mb-1">D. {item.options[3]}</p>

                  <p className="mt-3 mb-0">
                    <strong>Correct Answer:</strong>{" "}
                    <span className="text-success">{item.answer}</span>
                  </p>
                </div>

                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteQuestion(item.id)}
                >
                  🗑️ Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default AdminMCQ;
