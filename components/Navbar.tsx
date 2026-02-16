
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-[1440px] mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-bold tracking-tighter">
          <span className="golden-text font-serif">F.</span>
          <span className="text-white">A.O</span>
        </div>
        
        <div className="hidden md:flex gap-12 items-center text-sm uppercase tracking-[0.2em]">
          <a href="#work" className="hover:text-amber-400 transition-colors">Work</a>
          <a href="#skills" className="hover:text-amber-400 transition-colors">Expertise</a>
          <a href="#ai-assistant" className="hover:text-amber-400 transition-colors">Assistant</a>
          <a 
            href="mailto:contact@fahadarnob.com" 
            className="px-6 py-2 border golden-border rounded-full hover:bg-amber-400 hover:text-black transition-all"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
