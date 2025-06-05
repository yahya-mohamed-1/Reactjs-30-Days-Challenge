import React, { useState } from 'react';
import '../styles/Accordion.css';

const Accordion = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      {faqs.map((faq, index) => (
        <div className="accordion-item" key={index}>
          <button className="accordion-question" onClick={() => toggle(index)}>
            {faq.question}
            <span>{openIndex === index ? '−' : '+'}</span>
          </button>
          <div className={`accordion-answer ${openIndex === index ? 'open' : ''}`}>
            {faq.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
