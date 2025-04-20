import React, { useState, useEffect } from 'react';
import ThemeToggle from './components/ThemeToggle';

const App = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div>
      <h1>Toggle Theme (Dark / Light)</h1>
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      <p>This is a sample text showing theme change.</p>
    </div>
  );
};

export default App;
