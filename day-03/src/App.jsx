import React from 'react';
import ProfileBadge from './components/ProfileBadge';

function App() {
  return (
    <div style={{ padding: '2rem', display: 'flex', justifyContent: 'center' }}>
      <ProfileBadge
        name="John Doe"
        title="Frontend Developer"
        avatar="https://images.unsplash.com/photo-1583583824088-fae0740b53f9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        bio="Passionate about building beautiful UIs with React and Tailwind CSS."
      />
    </div>
  );
}

export default App;
