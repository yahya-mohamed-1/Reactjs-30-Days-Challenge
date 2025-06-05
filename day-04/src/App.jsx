import React from 'react';
import Accordion from './components/Accordion';

function App() {
  const faqData = [
    {
      question: 'What is React?',
      answer: 'React is a JavaScript library for building user interfaces.',
    },
    {
      question: 'What is a component?',
      answer: 'Components let you split the UI into independent, reusable pieces.',
    },
    {
      question: 'What is state in React?',
      answer: 'State is a built-in object that stores property values that belong to the component.',
    },
  ];

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Day 4: FAQ Accordion</h2>
      <Accordion faqs={faqData} />
    </div>
  );
}

export default App;
