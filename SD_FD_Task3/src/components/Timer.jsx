import React, { useEffect } from "react";

function Timer({ timeLeft, setTimeLeft, onTimeout }) {
  useEffect(() => {
    if (timeLeft <= 0) {
      onTimeout();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, setTimeLeft, onTimeout]);

  return (
    <div className="text-end text-secondary small fw-bold">
      {timeLeft}s
    </div>
  );
}

export default Timer;