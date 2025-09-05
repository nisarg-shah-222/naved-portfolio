import React, { useEffect } from 'react';
import Navbar from "./Navbar"
import ThemeSelector from './ThemeSelector';

const Layout = ({ children }: { children: any }) => {
  useEffect(() => {
    // Apply saved theme on component mount
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      document.body.className = `theme-${savedTheme}`;
    }
  }, []);
  
    return (
      <>
        <Navbar/>
        <div className="pt-16">
          {children}
        </div>
        <ThemeSelector />
      </>
    );
}

export default Layout