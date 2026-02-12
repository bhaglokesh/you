import React from 'react';
import Section from '../components/Section';
import { EDUCATION } from '../constants';

const Education: React.FC = () => (
  <Section id="education" title="Education">
    <div className="relative border-l border-gray-300 dark:border-gray-600 ml-3 md:ml-4 my-4 space-y-10 py-2">
      {EDUCATION.map((edu) => (
        <div key={edu.id} className="relative pl-8 md:pl-10">
          <span className="absolute -left-[6px] top-2.5 h-3 w-3 rounded-full bg-wiki-blue dark:bg-wiki-linkdark ring-4 ring-white dark:ring-wiki-darkbg z-10 shadow-sm"></span>

          <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 mb-2">
            <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100">{edu.institution}</h3>
            <span className="hidden sm:inline text-gray-400 dark:text-gray-500 font-light">|</span>
            <span className="text-gray-700 dark:text-gray-300 italic font-medium">{edu.degree}</span>
          </div>
          
          <div className="mb-3">
              <span className="inline-block text-xs font-medium text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2.5 py-1 rounded border border-gray-200 dark:border-gray-700">
              {edu.period}
            </span>
          </div>

          {edu.description && edu.description.length > 0 && (
            <ul className="list-disc list-outside ml-5 space-y-1.5 text-gray-800 dark:text-gray-300 marker:text-gray-400 text-base leading-relaxed font-light">
              {edu.description.map((desc, i) => (
                <li key={i} className="pl-1">{desc}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  </Section>
);

export default Education;