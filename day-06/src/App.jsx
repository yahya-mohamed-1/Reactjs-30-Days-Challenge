import React, { useState } from 'react';
import Toast from './components/Toast';

function App() {
  const [toasts, setToasts] = useState([]);

  const showToast = (type) => {
    const id = Date.now();
    const newToast = {
      id,
      type,
      message: `${type.charAt(0).toUpperCase() + type.slice(1)} Notification`,
    };
    setToasts((prev) => [...prev, newToast]);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Day 6: Toast Notifications</h2>
      <div style={{ marginBottom: '1rem' }}>
        <button onClick={() => showToast('info')}>Info</button>
        <button onClick={() => showToast('success')} style={{ marginLeft: '1rem' }}>Success</button>
        <button onClick={() => showToast('error')} style={{ marginLeft: '1rem' }}>Error</button>
      </div>

      <div style={{
        position: 'fixed',
        top: '1rem',
        right: '1rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
        zIndex: 999
      }}>
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            type={toast.type}
            message={toast.message}
            onClose={() => removeToast(toast.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
