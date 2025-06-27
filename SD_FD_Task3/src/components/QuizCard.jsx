import React, { useState, useEffect } from "react";
import Timer from "./Timer";

function QuizCard({ questionObj, onAnswer }) {
  const [selected, setSelected] = useState(null);
  const [timeLeft, setTimeLeft] = useState(10);

  const handleAnswer = (option) => {
    if (selected !== null) return;
    setSelected(option);
    setTimeout(() => {
      onAnswer(option);
    }, 800);
  };

  const handleTimeout = () => {
    if (selected === null) {
      setSelected("TimeUp");
      setTimeout(() => {
        onAnswer(null); 
      }, 800);
    }
  };

  
  useEffect(() => {
    setSelected(null);
    setTimeLeft(10);
  }, [questionObj]);

  return (
    <div className="card mb-4 border-0 shadow-sm animate__animated animate__fadeIn">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center">
          <h4 className="mb-4">{questionObj.question}</h4>
          <Timer timeLeft={timeLeft} setTimeLeft={setTimeLeft} onTimeout={handleTimeout} />
        </div>
        {questionObj.options.map((opt, idx) => (
          <button
            key={idx}
            onClick={() => handleAnswer(opt)}
            className={`btn w-100 text-start mb-2 fw-semibold py-2 px-3 rounded-pill ${
              selected === null
                ? "btn-outline-secondary"
                : opt === questionObj.answer
                ? "btn-success"
                : selected === opt
                ? "btn-danger"
                : "btn-outline-secondary"
            }`}
            disabled={selected !== null}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuizCard;
