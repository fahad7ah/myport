
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import AIChat from './components/AIChat';
import Footer from './components/Footer';
import { GOLDEN_RATIO } from './constants';

const MainLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col relative overflow-x-hidden">
      {/* Background Decorative Fibonacci Spiral */}
      <svg 
        className="fib-spiral top-0 right-0 w-[80vw] h-[80vw]" 
        viewBox="0 0 100 100" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="0.05"
      >
        <path d="M50 50 C 50 20, 80 20, 80 50 C 80 80, 20 80, 20 50 C 20 20, 50 20, 50 50" stroke="#d4af37" />
        <path d="M0 0 L 100 100 M 0 100 L 100 0" stroke="#d4af37" opacity="0.1" />
      </svg>

      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        {/* Golden Ratio Container: 61.8% / 38.2% Split Layout for content in some sections */}
        <section id="work" className="py-24 px-4 sm:px-8 lg:px-16">
          <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-[1.618fr_1fr] gap-12">
            <div>
              <h2 className="text-5xl mb-12 golden-text">Selected Works</h2>
              <ProjectsSection />
            </div>
            <div className="lg:sticky lg:top-24 h-fit">
              <div className="p-8 border golden-border rounded-lg bg-black/40 backdrop-blur-sm">
                <h3 className="text-2xl mb-6 font-serif">Design Philosophy</h3>
                <p className="text-gray-400 leading-relaxed italic">
                  "Architecture is frozen music. I believe software should be as harmonious as a Bach fugue, 
                  where every line of code contributes to a balanced, emergent structure."
                </p>
                <div className="mt-8 pt-8 border-t golden-border opacity-30">
                  <span className="text-xs tracking-widest uppercase">Ratio: 1.618</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <SkillsSection />

        <section id="ai-assistant" className="py-24 px-4 sm:px-8 lg:px-16 bg-[#111]">
          <div className="max-w-[1440px] mx-auto">
            <div className="mb-12 text-center">
              <h2 className="text-4xl golden-text mb-4">Chat with my AI Assistant</h2>
              <p className="text-gray-400">Ask about my experience, tech stack, or availability.</p>
            </div>
            <AIChat />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />} />
      </Routes>
    </Router>
  );
};

export default App;
