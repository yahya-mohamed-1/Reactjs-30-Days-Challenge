import React, { useState } from 'react';
import '../styles/ModalPopup.css';

const ModalPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div className="modal-wrapper">
      <h2>Day 13: Modal Popup</h2>
      <button className="open-button" onClick={openModal}>
        Open Modal
      </button>

      {isOpen && (
        <>
          <div className="modal-overlay" onClick={closeModal}></div>
          <div className="modal">
            <h3>Hello from Modal!</h3>
            <p>This is a simple modal popup component.</p>
            <button className="close-button" onClick={closeModal}>
              Close
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ModalPopup;
