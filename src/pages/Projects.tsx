import React from 'react';
import Section from '../components/Section';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => (
  <Section id="projects" title="Selected Projects">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {PROJECTS.map((project) => (
        <div key={project.id} className="group relative bg-white dark:bg-wiki-darkpanel border border-gray-200 dark:border-gray-700 rounded-lg p-5 shadow-sm hover:shadow-md hover:border-wiki-blue dark:hover:border-wiki-linkdark transition-all duration-300 flex flex-col h-full">
          <div className="absolute top-0 left-0 w-full h-1 bg-wiki-blue dark:bg-wiki-linkdark opacity-0 group-hover:opacity-100 rounded-t-lg transition-opacity"></div>
          
          <div className="flex justify-between items-start mb-3">
            <h3 className="font-serif font-semibold text-lg text-wiki-blue dark:text-wiki-linkdark group-hover:underline decoration-1 underline-offset-2 tracking-tight">
              <a href={project.link} className="flex items-center gap-2 after:content-['_↗'] after:text-sm after:opacity-0 group-hover:after:opacity-100 after:transition-opacity">
                {project.title}
              </a>
            </h3>
            <span className="text-xs font-mono font-normal bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-gray-600 dark:text-gray-400">{project.year}</span>
          </div>
          
          <p className="mb-4 text-gray-700 dark:text-gray-300 text-sm leading-relaxed flex-grow font-light">{project.description}</p>
          
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.technologies.map(tech => (
              <span key={tech} className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-600 px-2 py-1 rounded text-xs font-medium text-gray-600 dark:text-gray-400">
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </Section>
);

export default Projects;