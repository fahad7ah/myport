
import React from 'react';
import { BIO, GOLDEN_RATIO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center px-4 sm:px-8 lg:px-16 overflow-hidden">
      <div className="max-w-[1440px] mx-auto w-full grid grid-cols-1 lg:grid-cols-[1.618fr_1fr] items-center">
        <div className="z-10">
          <h1 className="text-5xl md:text-7xl lg:text-8xl mb-8 leading-tight">
            Creative <span className="golden-text italic">Designer</span><br /> 
            & Marketing <span className="golden-text italic">Expert.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed">
            {BIO}
          </p>
          <div className="mt-12 flex gap-6">
            <a 
              href="#work" 
              className="px-8 py-4 bg-amber-500 text-black font-bold rounded-sm hover:bg-amber-400 transition-all shadow-lg"
            >
              View My Work
            </a>
            <a 
              href="#ai-assistant" 
              className="px-8 py-4 border border-white/20 hover:border-amber-500 transition-all rounded-sm flex items-center gap-2"
            >
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Ask AI Assistant
            </a>
          </div>
        </div>

        <div className="hidden lg:flex justify-center items-center relative">
          <div 
            className="w-[400px] h-[400px] border golden-border rounded-full opacity-20 absolute animate-[spin_20s_linear_infinite]"
          />
          <div 
            className="w-[300px] h-[300px] border golden-border rounded-full opacity-40 absolute animate-[spin_15s_linear_infinite_reverse]"
          />
          <img 
            src="https://picsum.photos/600/600?grayscale" 
            alt="Fahad Ahmed Ornob" 
            className="w-[450px] aspect-[1/1.618] object-cover grayscale brightness-50 z-10 rounded-sm border golden-border border-opacity-30 shadow-[0_0_80px_rgba(212,175,55,0.1)]"
          />
          <div className="absolute -bottom-8 -right-8 bg-amber-500 p-8 text-black z-20">
            <span className="text-4xl font-bold font-serif">50+</span>
            <br />
            <span className="text-xs uppercase tracking-widest font-bold">Projects Delivered</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
