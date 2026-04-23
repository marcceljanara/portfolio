import { useEffect, useState } from 'react';

// Header Component
const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg'
          : 'bg-slate-900/95 backdrop-blur-sm border-b border-slate-800/70'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-3 items-center sm:px-6 sm:py-4 sm:flex-row sm:justify-between">
        <a href="#home" className="inline-block shrink-0 transition-transform hover:scale-105">
          <img
            src="/logo.png"
            alt="logo"
            className="h-10 w-10 object-contain bg-white rounded-lg p-1 shadow-md"
          />
        </a>
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 sm:gap-8">
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
