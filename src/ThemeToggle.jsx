import React, { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(localStorage.getItem('darkMode') === 'true');

  useEffect(() => {
    document.body.className = darkMode ? 'dark-theme' : 'light-theme';
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  return (
    <div className="theme-toggle-container">
      <button className='btns mt-5' onClick={() => {
        console.log('Button clicked');
        setDarkMode(!darkMode);
      }}>
        {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
    </div>
  );
};

export default ThemeToggle;


