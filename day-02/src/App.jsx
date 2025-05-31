import React from 'react';
import Card from './components/CardComponent';

function App() {
  const sampleData = [
    {
      title: 'React Basics',
      description: 'Learn the core concepts of React like components, props, and state.',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      link: 'https://reactjs.org'
    },
    {
      title: 'JavaScript ES6',
      description: 'Master modern JavaScript features like arrow functions, spread operators, and more.',
      image: 'https://images.unsplash.com/photo-1667372393086-9d4001d51cf1?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
    }
  ];

  return (
    <div style={{ display: 'flex', gap: '2rem', padding: '2rem', flexWrap: 'wrap' }}>
      {sampleData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.description}
          image={card.image}
          link={card.link}
        />
      ))}
    </div>
  );
}

export default App;
