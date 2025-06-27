import React, { useState } from "react";
import QuizDashboard from "./components/QuizDashboard";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [quizStarted, setQuizStarted] = useState(false);

  const startQuiz = () => {
    setQuizStarted(true);
  };

  const goBack = () => {
    setQuizStarted(false);
  };

  return (
    <>
      {quizStarted ? (
        <div className="bg-light min-vh-100 d-flex flex-column align-items-start p-4">
          <button 
            onClick={goBack} 
            className="btn btn-outline-secondary mb-3"
            style={{ fontSize: "1.2rem" }}
          >
            <i className="fas fa-arrow-left me-2"></i>Back
          </button>
          <div className="flex-grow-1 w-100 d-flex align-items-center justify-content-center">
            <QuizDashboard />
          </div>
        </div>
      ) : (
        <div className="container d-flex flex-column align-items-center justify-content-center min-vh-100">
          <h1 className="display-4 text-center mb-4">
            Let's Start the <br />
            <span className="fw-bold text-primary">Quiz</span>
          </h1>
          <button
            className="btn btn-warning text-white w-75 fs-4 fw-bold"
            onClick={startQuiz}
          >
            Start Quiz
          </button>
        </div>
      )}
    </>
  );
}

export default App;
