import React, { useState } from 'react';
import '../styles/ClickCounter.css';

const ClickCounter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-container">
      <h2>Day 8: Click Counter</h2>
      <p className="count">{count}</p>
      <div className="button-group">
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
};

export default ClickCounter;
