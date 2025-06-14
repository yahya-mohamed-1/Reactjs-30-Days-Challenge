import React, { useState, useRef } from 'react';
import '../styles/Stopwatch.css';

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);

  const start = () => {
    if (!isRunning) {
      setIsRunning(true);
      timerRef.current = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }
  };

  const stop = () => {
    setIsRunning(false);
    clearInterval(timerRef.current);
  };

  const reset = () => {
    setIsRunning(false);
    clearInterval(timerRef.current);
    setTime(0);
  };

  return (
    <div className="stopwatch-container">
      <h2>Day 12: Stopwatch</h2>
      <div className="time-display">{time}s</div>
      <div className="button-group">
        <button onClick={start}>Start</button>
        <button onClick={stop}>Stop</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default Stopwatch;
