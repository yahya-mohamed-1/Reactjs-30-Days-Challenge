import React, { useState } from 'react';
import '../styles/TipCalculator.css';

const TipCalculator = () => {
  const [bill, setBill] = useState('');
  const [tipPercent, setTipPercent] = useState('');
  const [tipAmount, setTipAmount] = useState(null);
  const [total, setTotal] = useState(null);

  const calculateTip = () => {
    const billValue = parseFloat(bill);
    const tipValue = parseFloat(tipPercent);

    if (isNaN(billValue) || isNaN(tipValue)) {
      setTipAmount('Invalid input');
      setTotal(null);
      return;
    }

    const tip = (billValue * tipValue) / 100;
    setTipAmount(tip.toFixed(2));
    setTotal((billValue + tip).toFixed(2));
  };

  return (
    <div className="tip-calculator">
      <h2>Day 11: Tip Calculator</h2>
      <input
        type="number"
        placeholder="Bill Amount"
        value={bill}
        onChange={(e) => setBill(e.target.value)}
      />
      <input
        type="number"
        placeholder="Tip %"
        value={tipPercent}
        onChange={(e) => setTipPercent(e.target.value)}
      />
      <button onClick={calculateTip}>Calculate Tip</button>
      {tipAmount && (
        <div className="results">
          <p>Tip: ${tipAmount}</p>
          <p>Total: ${total}</p>
        </div>
      )}
    </div>
  );
};

export default TipCalculator;
