import React, { useState } from 'react';
import '../styles/CharacterCounter.css';

const CharacterCounter = () => {
  const [text, setText] = useState('');

  return (
    <div className="char-counter-container">
      <h2>Day 9: Character Counter</h2>
      <textarea
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={5}
      />
      <p className="char-count">Character Count: {text.length}</p>
    </div>
  );
};

export default CharacterCounter;
