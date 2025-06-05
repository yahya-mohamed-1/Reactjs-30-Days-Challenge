import React, { useState, useEffect } from 'react';
import ToggleSwitch from './components/ToggleSwitch';
import './index.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = isDarkMode ? 'dark-mode' : 'light-mode';
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Day 5: Toggle Switch (Dark/Light Mode)</h2>
      <ToggleSwitch isDarkMode={isDarkMode} onToggle={toggleTheme} />
      <p style={{ marginTop: '1rem' }}>
        {isDarkMode ? 'Dark Mode is On 🌙' : 'Light Mode is On ☀️'}
      </p>
    </div>
  );
}

export default App;