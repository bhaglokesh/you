import React from 'react';
import Section from '../components/Section';
import { SKILLS } from '../constants';

const Skills: React.FC = () => (
  <Section id="skills" title="Skills & Competencies">
    <div className="space-y-4 md:space-y-5 my-4">
        {SKILLS.map((group) => (
          <div key={group.category} className="md:flex md:items-baseline">
            <h3 className="font-semibold text-gray-900 dark:text-white md:w-40 shrink-0 mb-1 md:mb-0 text-base">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-x-1.5 gap-y-1 text-gray-800 dark:text-gray-300 leading-relaxed text-sm font-light">
              {group.items.map((skill, index) => (
                <span key={skill} className="inline-flex items-center">
                  <span className="hover:text-wiki-blue dark:hover:text-wiki-linkdark cursor-default transition-colors font-normal">
                    {skill}
                  </span>
                  {index < group.items.length - 1 && (
                    <span className="text-gray-400 dark:text-gray-600 ml-1.5 select-none">·</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        ))}
    </div>
  </Section>
);

export default Skills;