import React from 'react';
import CustomButton from './components/CustomButton';

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>Day 1: Custom Button Component</h2>

      <CustomButton
        text="Click Me!"
        color="teal"
        size="small"
        onClick={() => alert('Small Button Clicked!')}
      />

      <br /><br />

      <CustomButton
        text="Click Me!"
        color="orange"
        size="medium"
        onClick={() => alert('Medium Button Clicked!')}
      />

      <br /><br />

      <CustomButton
        text="Click Me!"
        color="crimson"
        size="large"
        onClick={() => alert('Large Button Clicked!')}
      />
    </div>
  );
}

export default App;
