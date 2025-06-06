import React, { useState } from 'react';
import '../styles/Calculator.css';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  const handleOperation = (operator) => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    if (isNaN(a) || isNaN(b)) {
      setResult('Please enter valid numbers');
      return;
    }

    switch (operator) {
      case '+':
        setResult(a + b);
        break;
      case '-':
        setResult(a - b);
        break;
      case '*':
        setResult(a * b);
        break;
      case '/':
        setResult(b !== 0 ? a / b : 'Cannot divide by zero');
        break;
      default:
        setResult('Invalid operation');
    }
  };

  return (
    <div className="calculator-container">
      <h2>Day 10: Simple Calculator</h2>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="First number"
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Second number"
      />
      <div className="buttons">
        <button onClick={() => handleOperation('+')}>+</button>
        <button onClick={() => handleOperation('-')}>−</button>
        <button onClick={() => handleOperation('*')}>×</button>
        <button onClick={() => handleOperation('/')}>÷</button>
      </div>
      <p className="result">Result: {result !== null ? result : '-'}</p>
    </div>
  );
};

export default Calculator;
