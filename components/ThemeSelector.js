import { useState, useEffect } from 'react';

export default function ThemeSelector() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.body.className = `theme-${savedTheme}`;
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.body.className = `theme-${newTheme}`;
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button 
        onClick={toggleTheme}
        className="bg-[#1a1a1a] text-[#d4d4d4] p-3 rounded-full shadow-lg hover:bg-[#2a2a2a] transition duration-200"
        aria-label="Toggle theme"
      >
        {theme === 'dark' ? '☀️' : '🌙'}
      </button>
    </div>
  );
}