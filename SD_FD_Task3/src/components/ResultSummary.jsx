import React from "react";

function ResultSummary({ score, total, selectedOptions }) {
  return (
    <div className="card shadow-lg border-0 animate__animated animate__fadeIn">
      <div className="card-body">
        <h3 className="mb-3 text-center text-success fw-bold">
           Quiz Completed!
        </h3>

        <div className="text-center mb-4">
          <span className="fs-5">Your Score:</span>
          <h1 className="display-5 fw-bold text-primary">
            {score} <small className="text-muted fs-4">/ {total}</small>
          </h1>
          <span className={`badge ${score / total >= 0.7 ? 'bg-success' : 'bg-warning'} fs-6`}>
            {score / total >= 0.7 ? "Great Job!" : "Keep Practicing!"}
          </span>
        </div>

        <h5 className="mb-3 text-secondary">📋 Answer Review</h5>
        <ul className="list-group list-group-flush">
          {selectedOptions.map((item, index) => (
            <li key={index} className="list-group-item">
              <p className="mb-1 fw-semibold text-dark">
                {index + 1}. {item.question}
              </p>
              <p className="mb-0">
                <span className="fw-bold">Your Answer:</span>{" "}
                <span className={item.selected === item.correct ? "text-success" : "text-danger"}>
                  {item.selected || "Not Answered"}
                </span>
              </p>
              {item.selected !== item.correct && (
                <p className="mb-0">
                  <span className="fw-bold text-muted">Correct Answer:</span>{" "}
                  <span className="text-success">{item.correct}</span>
                </p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ResultSummary;
