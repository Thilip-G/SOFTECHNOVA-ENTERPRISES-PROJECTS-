import React, { useEffect, useState } from "react";
import QuizCard from "../components/QuizCard";
import ProgressBar from "../components/QuizProgress";
import ResultSummary from "../components/ResultSummary";

function QuizDashboard() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    fetch("/sample_questions_500.json") 
      .then((res) => res.json())
      .then((data) => {
        const shuffled = data.sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, 20); 
        setQuestions(selected);
      })
      .catch((err) => console.error("Failed to load questions:", err));
  }, []);

  const handleNextQuestion = (option) => {
    const currentQuestion = questions[currentIndex];
    const isCorrect = option === currentQuestion.answer;

    if (isCorrect) setScore((prev) => prev + 1);

    setSelectedOptions((prev) => [
      ...prev,
      {
        question: currentQuestion.question,
        selected: option,
        correct: currentQuestion.answer,
      },
    ]);

    setCurrentIndex((prev) => {
      if (prev + 1 < questions.length) {
        return prev + 1;
      } else {
        setShowResult(true);
        return prev;
      }
    });
  };

  if (questions.length === 0) {
    return (
      <div className="container text-center py-5">
        <h4 className="text-muted">Loading questions...</h4>
      </div>
    );
  }

  return (
    <div className="container py-4">
      <div className="card shadow-lg p-4">
        <h1 className="display-5 text-center mb-4 text-primary fw-bolder">
          SD Quiz Platform
        </h1>
        {showResult ? (
          <ResultSummary
            score={score}
            total={questions.length}
            selectedOptions={selectedOptions}
          />
        ) : (
          <div>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <ProgressBar current={currentIndex + 1} total={questions.length} />
            </div>
            <QuizCard
              key={currentIndex}
              questionObj={questions[currentIndex]}
              onAnswer={handleNextQuestion}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default QuizDashboard;
