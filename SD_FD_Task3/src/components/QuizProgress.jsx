import React from "react";

function ProgressBar({ current, total }) {
  const percentage = (current / total) * 100;

  return (
    <div className="w-100 me-3">
      <div className="progress" style={{ height: "8px" }}>
        <div
          className="progress-bar bg-primary"
          role="progressbar"
          style={{ width: `${percentage}%` }}
          aria-valuenow={percentage}
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
  );
}

export default ProgressBar;