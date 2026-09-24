import { useState } from "react";
import { useParams } from "react-router-dom";

function Notes() {
  const { topicName } = useParams();

  // ==============================
  // QUESTION DATA
  // ==============================
  const questionData = {
    html: [
      {
        question: "What does HTML stand for?",
        options: [
          "Hyper Text Markup Language",
          "High Text Machine Language",
          "Home Tool Markup Language",
          "Hyperlink Text Mark Language",
        ],
        answer: "Hyper Text Markup Language",
      },
      {
        question: "Which tag is used for the largest heading?",
        options: ["<h6>", "<h1>", "<head>", "<heading>"],
        answer: "<h1>",
      },
      {
        question: "Which tag is used to create a paragraph?",
        options: ["<p>", "<para>", "<paragraph>", "<text>"],
        answer: "<p>",
      },
      {
        question: "Which tag is used to create a hyperlink?",
        options: ["<link>", "<a>", "<href>", "<url>"],
        answer: "<a>",
      },
      {
        question: "Which tag is used to display an image?",
        options: ["<image>", "<picture>", "<img>", "<src>"],
        answer: "<img>",
      },
      {
        question: "Which tag creates an unordered list?",
        options: ["<ol>", "<ul>", "<li>", "<list>"],
        answer: "<ul>",
      },
      {
        question: "Which tag creates an ordered list?",
        options: ["<ul>", "<ol>", "<li>", "<order>"],
        answer: "<ol>",
      },
      {
        question: "Which tag represents a list item?",
        options: ["<item>", "<li>", "<list>", "<ul>"],
        answer: "<li>",
      },
      {
        question: "Which tag is used to create a table?",
        options: ["<table>", "<tab>", "<tr>", "<td>"],
        answer: "<table>",
      },
      {
        question: "Which tag defines a table row?",
        options: ["<td>", "<th>", "<tr>", "<row>"],
        answer: "<tr>",
      },
    ],

    css: [
      {
        question: "What does CSS stand for?",
        options: [
          "Cascading Style Sheets",
          "Creative Style Sheets",
          "Computer Style Sheets",
          "Colorful Style Sheets",
        ],
        answer: "Cascading Style Sheets",
      },
      {
        question: "Which property changes text color?",
        options: ["font-color", "color", "text-color", "background-color"],
        answer: "color",
      },
      {
        question: "Which property changes background color?",
        options: ["bg-color", "background", "background-color", "color"],
        answer: "background-color",
      },
      {
        question: "Which property changes font size?",
        options: ["font-size", "text-size", "font", "size"],
        answer: "font-size",
      },
      {
        question: "Which property makes text bold?",
        options: ["font-weight", "text-bold", "font-style", "bold"],
        answer: "font-weight",
      },
      {
        question: "Which property aligns text?",
        options: ["text-align", "align-text", "font-align", "text-position"],
        answer: "text-align",
      },
      {
        question: "Which property adds space inside an element?",
        options: ["margin", "padding", "spacing", "border"],
        answer: "padding",
      },
      {
        question: "Which property adds space outside an element?",
        options: ["padding", "margin", "space", "border"],
        answer: "margin",
      },
      {
        question: "Which property rounds the corners of an element?",
        options: ["corner-radius", "border-radius", "radius", "round-border"],
        answer: "border-radius",
      },
      {
        question: "Which property changes the font family?",
        options: ["font-family", "font-type", "text-family", "family"],
        answer: "font-family",
      },
    ],

    javascript: [
      {
        question: "What is JavaScript mainly used for?",
        options: [
          "Adding interactivity to webpages",
          "Creating databases only",
          "Styling webpages only",
          "Creating images only",
        ],
        answer: "Adding interactivity to webpages",
      },
      {
        question: "Which keyword declares a variable that can be reassigned?",
        options: ["const", "let", "fixed", "static"],
        answer: "let",
      },
      {
        question: "Which keyword declares a constant?",
        options: ["let", "var", "const", "constant"],
        answer: "const",
      },
      {
        question: "Which function prints data to the console?",
        options: ["print()", "console.log()", "display()", "write()"],
        answer: "console.log()",
      },
      {
        question: "Which operator is used for strict equality?",
        options: ["=", "==", "===", "!="],
        answer: "===",
      },
      {
        question: "Which symbol starts a single-line comment?",
        options: ["<!--", "//", "##", "**"],
        answer: "//",
      },
      {
        question: "Which method adds an item to the end of an array?",
        options: ["push()", "add()", "insert()", "append()"],
        answer: "push()",
      },
      {
        question: "Which method removes the last array item?",
        options: ["delete()", "remove()", "pop()", "last()"],
        answer: "pop()",
      },
      {
        question: "Which loop runs while a condition is true?",
        options: ["if", "while", "switch", "case"],
        answer: "while",
      },
      {
        question: "Which keyword is used to define a function?",
        options: ["function", "func", "define", "method"],
        answer: "function",
      },
    ],

    bootstrap: [
      {
        question: "What is Bootstrap?",
        options: [
          "A CSS framework",
          "A database",
          "A programming language",
          "An operating system",
        ],
        answer: "A CSS framework",
      },
      {
        question: "Which class creates a Bootstrap container?",
        options: [".box", ".container", ".wrapper", ".main"],
        answer: ".container",
      },
      {
        question: "Which class creates a primary button?",
        options: [".btn-primary", ".button-blue", ".primary-btn", ".btn-main"],
        answer: ".btn-primary",
      },
      {
        question: "Which class makes an element full width?",
        options: [".w-100", ".width-full", ".full", ".100-width"],
        answer: ".w-100",
      },
      {
        question: "Which class adds margin in Bootstrap?",
        options: [".m-3", ".margin-3", ".mg-3", ".space-3"],
        answer: ".m-3",
      },
      {
        question: "Which class adds padding?",
        options: [".p-3", ".padding-3", ".pd-3", ".space-p-3"],
        answer: ".p-3",
      },
      {
        question: "Which class makes text centered?",
        options: [".center", ".text-center", ".align-center", ".text-middle"],
        answer: ".text-center",
      },
      {
        question: "Which class creates a card?",
        options: [".card", ".box", ".panel-card", ".bootstrap-card"],
        answer: ".card",
      },
      {
        question: "Which class creates a responsive row?",
        options: [".row", ".grid", ".line", ".flex-row-only"],
        answer: ".row",
      },
      {
        question: "Which class creates a column?",
        options: [".column", ".col", ".grid-col", ".box-col"],
        answer: ".col",
      },
    ],

    react: [
      {
        question: "What is React?",
        options: [
          "A JavaScript library",
          "A database",
          "A CSS framework",
          "An operating system",
        ],
        answer: "A JavaScript library",
      },
      {
        question: "Who developed React?",
        options: ["Google", "Facebook", "Microsoft", "Amazon"],
        answer: "Facebook",
      },
      {
        question: "Which language is mainly used with React?",
        options: ["Java", "Python", "JavaScript", "C++"],
        answer: "JavaScript",
      },
      {
        question: "What is JSX?",
        options: [
          "JavaScript XML",
          "Java Syntax XML",
          "JSON XML",
          "Java Extended Syntax",
        ],
        answer: "JavaScript XML",
      },
      {
        question: "Which hook is used to manage state?",
        options: ["useState", "useData", "useValue", "useManage"],
        answer: "useState",
      },
      {
        question: "Which hook is used for side effects?",
        options: ["useEffect", "useSide", "useAction", "useChange"],
        answer: "useEffect",
      },
      {
        question: "What is a component?",
        options: [
          "Reusable UI building block",
          "Database table",
          "CSS property",
          "HTML attribute",
        ],
        answer: "Reusable UI building block",
      },
      {
        question: "Which file commonly contains React component code?",
        options: [".jsx", ".css", ".sql", ".java"],
        answer: ".jsx",
      },
      {
        question: "What is React Router used for?",
        options: [
          "Navigation between pages",
          "Database connection",
          "Styling",
          "Image editing",
        ],
        answer: "Navigation between pages",
      },
      {
        question: "Which command commonly starts a Vite React project?",
        options: [
          "npm run dev",
          "npm start project",
          "react start",
          "vite begin",
        ],
        answer: "npm run dev",
      },
    ],

    "node.js": [
      {
        question: "What is Node.js?",
        options: [
          "JavaScript runtime environment",
          "CSS framework",
          "Database",
          "HTML editor",
        ],
        answer: "JavaScript runtime environment",
      },
      {
        question: "Node.js is built on which JavaScript engine?",
        options: ["V8", "SpiderMonkey", "JavaScriptCore", "Chakra"],
        answer: "V8",
      },
      {
        question: "Which command checks Node.js version?",
        options: ["node -v", "node version", "npm -node", "node check"],
        answer: "node -v",
      },
      {
        question: "Which package manager comes with Node.js?",
        options: ["npm", "pip", "composer", "gradle"],
        answer: "npm",
      },
      {
        question: "Which file stores Node project information?",
        options: ["package.json", "node.json", "project.json", "server.json"],
        answer: "package.json",
      },
      {
        question: "Which framework is commonly used with Node.js?",
        options: ["Express", "Bootstrap", "React CSS", "Laravel CSS"],
        answer: "Express",
      },
      {
        question: "Which command initializes a Node project?",
        options: ["npm init", "node create", "npm start", "node init-project"],
        answer: "npm init",
      },
      {
        question: "What is npm used for?",
        options: [
          "Managing packages",
          "Creating images",
          "Writing CSS",
          "Creating HTML tables",
        ],
        answer: "Managing packages",
      },
      {
        question:
          "Which object provides information about the current Node process?",
        options: ["process", "node", "server", "system"],
        answer: "process",
      },
      {
        question: "Can Node.js run JavaScript outside the browser?",
        options: ["Yes", "No", "Only CSS", "Only HTML"],
        answer: "Yes",
      },
    ],

    mongodb: [
      {
        question: "What type of database is MongoDB?",
        options: [
          "NoSQL database",
          "Relational database",
          "File system",
          "Graphical database",
        ],
        answer: "NoSQL database",
      },
      {
        question: "MongoDB stores data in which format?",
        options: ["Documents", "Rows only", "Columns only", "HTML"],
        answer: "Documents",
      },
      {
        question: "MongoDB documents are similar to which format?",
        options: ["JSON", "HTML", "CSS", "XML only"],
        answer: "JSON",
      },
      {
        question: "What is a collection in MongoDB?",
        options: [
          "Group of documents",
          "Single field",
          "Database server",
          "Programming language",
        ],
        answer: "Group of documents",
      },
      {
        question: "Which command shows databases in MongoDB shell?",
        options: ["show dbs", "show databases", "db list", "list db"],
        answer: "show dbs",
      },
      {
        question: "Which method inserts one document?",
        options: ["insertOne()", "addOne()", "createOne()", "saveOne()"],
        answer: "insertOne()",
      },
      {
        question: "Which method finds documents?",
        options: ["find()", "search()", "get()", "select()"],
        answer: "find()",
      },
      {
        question: "Which method deletes one document?",
        options: ["deleteOne()", "removeOne()", "dropOne()", "eraseOne()"],
        answer: "deleteOne()",
      },
      {
        question: "Which method updates one document?",
        options: ["updateOne()", "changeOne()", "editOne()", "modifyOne()"],
        answer: "updateOne()",
      },
      {
        question: "What is the default unique identifier field in MongoDB?",
        options: ["_id", "id", "key", "uid"],
        answer: "_id",
      },
    ],

    java: [
      {
        question: "Who developed Java?",
        options: ["Sun Microsystems", "Microsoft", "Google", "Apple"],
        answer: "Sun Microsystems",
      },
      {
        question: "Which keyword is used to create a class?",
        options: ["class", "Class", "newclass", "object"],
        answer: "class",
      },
      {
        question: "Which method is the entry point of a Java program?",
        options: ["main()", "start()", "run()", "begin()"],
        answer: "main()",
      },
      {
        question: "Which keyword creates an object?",
        options: ["new", "create", "object", "make"],
        answer: "new",
      },
      {
        question: "Which data type stores whole numbers?",
        options: ["int", "float", "char", "boolean"],
        answer: "int",
      },
      {
        question: "Which data type stores true or false?",
        options: ["boolean", "bool", "truefalse", "logical"],
        answer: "boolean",
      },
      {
        question: "Which symbol ends most Java statements?",
        options: [";", ":", ".", ","],
        answer: ";",
      },
      {
        question: "Java is which type of language?",
        options: [
          "Object-oriented",
          "Only procedural",
          "Only markup",
          "Only scripting",
        ],
        answer: "Object-oriented",
      },
      {
        question: "Which keyword is used for inheritance?",
        options: ["extends", "inherits", "implements", "parent"],
        answer: "extends",
      },
      {
        question: "Which keyword is used to implement an interface?",
        options: ["implements", "extends", "interface", "uses"],
        answer: "implements",
      },
    ],

    database: [
      {
        question: "What does DBMS stand for?",
        options: [
          "Database Management System",
          "Data Basic Management System",
          "Database Machine System",
          "Data Backup Management System",
        ],
        answer: "Database Management System",
      },
      {
        question: "What does SQL stand for?",
        options: [
          "Structured Query Language",
          "Simple Query Language",
          "System Query Language",
          "Structured Question Language",
        ],
        answer: "Structured Query Language",
      },
      {
        question: "Which command is used to retrieve data?",
        options: ["SELECT", "GET", "FETCH", "READ"],
        answer: "SELECT",
      },
      {
        question: "Which command adds new data?",
        options: ["INSERT", "ADD", "CREATE", "PUT"],
        answer: "INSERT",
      },
      {
        question: "Which command modifies existing data?",
        options: ["UPDATE", "CHANGE", "MODIFY", "EDIT"],
        answer: "UPDATE",
      },
      {
        question: "Which command removes data?",
        options: ["DELETE", "REMOVE", "DROP", "CLEAR"],
        answer: "DELETE",
      },
      {
        question: "Which command creates a database?",
        options: [
          "CREATE DATABASE",
          "NEW DATABASE",
          "MAKE DATABASE",
          "ADD DATABASE",
        ],
        answer: "CREATE DATABASE",
      },
      {
        question: "Which key uniquely identifies a row?",
        options: ["Primary Key", "Foreign Key", "Unique Row", "Main Key"],
        answer: "Primary Key",
      },
      {
        question: "Which key creates a relationship between tables?",
        options: ["Foreign Key", "Primary Key", "Link Key", "Table Key"],
        answer: "Foreign Key",
      },
      {
        question: "Which SQL clause filters records?",
        options: ["WHERE", "FILTER", "HAVINGONLY", "SELECT"],
        answer: "WHERE",
      },
    ],

    python: [
      {
        question: "What is Python?",
        options: [
          "Programming Language",
          "Database",
          "Operating System",
          "Browser",
        ],
        answer: "Programming Language",
      },
    ],
  };

  // ==============================
  // GET QUESTIONS
  // ==============================
  const quizQuestions = questionData[topicName?.toLowerCase()] || [];

  // ==============================
  // STATES
  // ==============================
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [selectedAnswer, setSelectedAnswer] = useState("");

  const [score, setScore] = useState(0);

  const [showResult, setShowResult] = useState(false);

  const [userAnswers, setUserAnswers] = useState([]);

  const question = quizQuestions[currentQuestion];

  // ==============================
  // SELECT ANSWER
  // ==============================
  const handleAnswer = (option) => {
    setSelectedAnswer(option);
  };

  // ==============================
  // NEXT / FINISH QUIZ
  // ==============================
  const handleNext = () => {
    if (!selectedAnswer) {
      alert("Please select an answer");
      return;
    }

    const answerData = {
      question: question.question,
      yourAnswer: selectedAnswer,
      correctAnswer: question.answer,
      isCorrect: selectedAnswer === question.answer,
    };

    // Add current answer
    const updatedAnswers = [...userAnswers, answerData];

    // Calculate final score
    const finalScore = score + (answerData.isCorrect ? 1 : 0);

    setUserAnswers(updatedAnswers);
    setScore(finalScore);

    // ==============================
    // LAST QUESTION
    // ==============================
    if (currentQuestion === quizQuestions.length - 1) {
      // Get logged-in user
      let loggedInUser = {};

      try {
        loggedInUser = JSON.parse(localStorage.getItem("loggedInUser")) || {};
      } catch (error) {
        console.log("Logged-in user not found");
      }

      // Student name
      const studentName =
        loggedInUser.name ||
        loggedInUser.username ||
        loggedInUser.fullName ||
        loggedInUser.email ||
        "Student";

      // Get old scores
      let existingScores = [];

      try {
        existingScores = JSON.parse(localStorage.getItem("quizScores")) || [];
      } catch (error) {
        existingScores = [];
      }

      // ==============================
      // DATE
      // ==============================
      const today = new Date();

      const formattedDate =
        `${String(today.getDate()).padStart(2, "0")}-` +
        `${String(today.getMonth() + 1).padStart(2, "0")}-` +
        `${today.getFullYear()}`;

      // ==============================
      // NEW SCORE
      // ==============================
      const newScore = {
        id: Date.now(),
        studentName: studentName,
        topic: topicName,
        score: finalScore,
        total: quizQuestions.length,
        date: formattedDate,
      };

      // ==============================
      // SAVE SCORE
      // ==============================
      const allScores = [...existingScores, newScore];

      localStorage.setItem("quizScores", JSON.stringify(allScores));

      console.log("QUIZ SCORE SAVED:", newScore);

      console.log("ALL QUIZ SCORES:", allScores);

      // Show result
      setShowResult(true);
    } else {
      // Next question
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);

      setSelectedAnswer("");
    }
  };

  // ==============================
  // RESTART QUIZ
  // ==============================
  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer("");
    setScore(0);
    setUserAnswers([]);
    setShowResult(false);
  };

  // ==============================
  // NO QUESTIONS
  // ==============================
  if (quizQuestions.length === 0) {
    return (
      <div className="container py-5 text-center">
        <h2>MCQ Not Available</h2>

        <p className="text-muted">
          Questions are not available for this topic.
        </p>
      </div>
    );
  }

  // ==============================
  // FINAL RESULT
  // ==============================
  if (showResult) {
    return (
      <div className="container py-5">
        {/* RESULT HEADING */}
        <div className="text-center mb-5">
          <h1>🎉 Quiz Completed!</h1>

          <h2 className="mt-3 text-primary">
            Your Score: {score} / {quizQuestions.length}
          </h2>

          <p className="text-muted">Here is your complete answer review</p>
        </div>

        {/* ALL QUESTIONS */}
        <div
          className="mx-auto"
          style={{
            maxWidth: "800px",
          }}
        >
          {userAnswers.map((item, index) => (
            <div
              key={index}
              className={`card shadow-sm mb-4 ${
                item.isCorrect ? "border-success" : "border-danger"
              }`}
            >
              <div className="card-body">
                {/* QUESTION */}
                <h5 className="mb-3">
                  Q{index + 1}. {item.question}
                </h5>

                {/* CORRECT / WRONG */}
                {item.isCorrect ? (
                  <div className="alert alert-success py-2">✅ Correct</div>
                ) : (
                  <div className="alert alert-danger py-2">❌ Wrong</div>
                )}

                {/* YOUR ANSWER */}
                <p className="mb-2">
                  <strong>Your Answer:</strong>{" "}
                  <span
                    className={item.isCorrect ? "text-success" : "text-danger"}
                  >
                    {item.yourAnswer}
                  </span>
                </p>

                {/* CORRECT ANSWER */}
                <p className="mb-0">
                  <strong>Correct Answer:</strong>{" "}
                  <span className="text-success">{item.correctAnswer}</span>
                </p>
              </div>
            </div>
          ))}

          {/* FINAL SCORE */}
          <div className="card shadow text-center p-4 mt-4">
            <h3>🏆 Final Score</h3>

            <h1 className="text-primary mt-2">
              {score} / {quizQuestions.length}
            </h1>
          </div>

          {/* RETRY */}
          <div className="text-center mt-4">
            <button onClick={restartQuiz} className="btn btn-primary btn-lg">
              🔄 Retry Quiz
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ==============================
  // MCQ QUESTION PAGE
  // ==============================
  return (
    <div className="container py-5">
      {/* HEADER */}
      <div className="text-center mb-4">
        <h1>🧠 {topicName?.toUpperCase()} MCQ Practice</h1>

        <p className="text-muted">Test your {topicName} knowledge</p>

        <span className="badge bg-primary">
          Question {currentQuestion + 1} / {quizQuestions.length}
        </span>
      </div>

      {/* QUESTION CARD */}
      <div
        className="card shadow p-4 mx-auto"
        style={{
          maxWidth: "700px",
        }}
      >
        {/* QUESTION */}
        <h4 className="mb-4">
          Q{currentQuestion + 1}. {question.question}
        </h4>

        {/* OPTIONS */}
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(option)}
            className={`btn text-start mb-3 p-3 ${
              selectedAnswer === option
                ? "btn-primary"
                : "btn-outline-secondary"
            }`}
          >
            {option}
          </button>
        ))}

        {/* NEXT / FINISH */}
        <button onClick={handleNext} className="btn btn-primary mt-2">
          {currentQuestion === quizQuestions.length - 1
            ? "Finish Quiz"
            : "Next Question →"}
        </button>
      </div>
    </div>
  );
}

export default Notes;
