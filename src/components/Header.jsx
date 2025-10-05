import React, { useState, useEffect } from 'react';

// Header Component
const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-cyan-400 hover:text-cyan-300 transition-colors">
          MJ
        </a>
        <div className="flex gap-8">
          <a href="#about" className="text-slate-300 hover:text-cyan-400 transition-colors text-sm font-medium">
            About
          </a>
          <a href="#experience" className="text-slate-300 hover:text-cyan-400 transition-colors text-sm font-medium">
            Experience
          </a>
          <a href="#projects" className="text-slate-300 hover:text-cyan-400 transition-colors text-sm font-medium">
            Projects
          </a>
          <a href="#contact" className="text-slate-300 hover:text-cyan-400 transition-colors text-sm font-medium">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
