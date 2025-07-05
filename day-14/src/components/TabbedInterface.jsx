import React, { useState } from 'react';
import '../styles/TabbedInterface.css';

const TabbedInterface = () => {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <p>Welcome to the Home tab.</p>;
      case 'profile':
        return <p>This is your Profile information.</p>;
      case 'settings':
        return <p>Adjust your settings here.</p>;
      default:
        return <p>Select a tab to view content.</p>;
    }
  };

  return (
    <div className="tabbed-container">
      <h2>Day 14: Tabbed Interface</h2>
      <div className="tabs">
        <button
          className={activeTab === 'home' ? 'active' : ''}
          onClick={() => setActiveTab('home')}
        >
          Home
        </button>
        <button
          className={activeTab === 'profile' ? 'active' : ''}
          onClick={() => setActiveTab('profile')}
        >
          Profile
        </button>
        <button
          className={activeTab === 'settings' ? 'active' : ''}
          onClick={() => setActiveTab('settings')}
        >
          Settings
        </button>
      </div>
      <div className="tab-content">{renderContent()}</div>
    </div>
  );
};

export default TabbedInterface;
