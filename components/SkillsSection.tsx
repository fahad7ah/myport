
import React from 'react';
import { SKILLS } from '../constants';

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-4 sm:px-8 lg:px-16 border-y border-white/5 bg-black/20">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {SKILLS.map((skill, idx) => (
            <div key={idx} className="relative">
              <span className="text-6xl font-serif opacity-5 absolute -top-8 -left-4 pointer-events-none select-none">0{idx + 1}</span>
              <h3 className="text-lg golden-text mb-8 uppercase tracking-[0.3em] flex items-center gap-4">
                <div className="h-[1px] w-8 bg-amber-500"></div>
                {skill.category}
              </h3>
              <ul className="space-y-4">
                {skill.items.map(item => (
                  <li key={item} className="text-gray-400 flex items-center justify-between group cursor-pointer py-1">
                    <span className="group-hover:text-white group-hover:text-lg group-hover:translate-x-1 transition-all duration-300 origin-left inline-block select-none">
                      {item}
                    </span>
                    <div className="flex-grow h-[1px] bg-amber-500/10 transition-all duration-700 mx-4 opacity-0 group-hover:opacity-100 hidden sm:block"></div>
                    <svg 
                      className="w-5 h-5 text-amber-500 opacity-0 group-hover:opacity-100 group-hover:animate-[pulse_1.5s_infinite] transition-all duration-300 shrink-0" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor" 
                      strokeWidth="3"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
