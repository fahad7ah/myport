
import React from 'react';
import { PROJECTS, GOLDEN_RATIO } from '../constants';
import { Project } from '../types';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="group relative overflow-hidden bg-[#1a1a1a] rounded-sm transition-all duration-700 hover:shadow-[0_0_50px_rgba(212,175,55,0.1)]">
      <div className="aspect-[1.618/1] overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
        />
      </div>
      <div className="p-8">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map(tag => (
            <span key={tag} className="text-[10px] uppercase tracking-widest border border-white/10 px-2 py-1 text-gray-500 group-hover:border-amber-500/50 group-hover:text-amber-500">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-2xl mb-3 font-serif group-hover:text-amber-400 transition-colors">{project.title}</h3>
        <p className="text-gray-400 leading-relaxed text-sm">
          {project.description}
        </p>
        <div className="mt-6">
          <a href={project.link} className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold hover:gap-4 transition-all group-hover:text-amber-500">
            View Details 
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

const ProjectsSection: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {PROJECTS.map(p => (
        <ProjectCard key={p.id} project={p} />
      ))}
    </div>
  );
};

export default ProjectsSection;
