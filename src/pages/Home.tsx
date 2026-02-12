import React from 'react';
import { Github, Linkedin, Instagram, Youtube } from 'lucide-react';
import { PROFILE } from '../constants';

const Home: React.FC = () => (
  <div className="animate-fade-in max-w-4xl mx-auto">
    {/* Hero Section */}
    <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12 mt-6 md:mt-12">
      {/* Profile Image */}
      <div className="shrink-0">
        <div className="w-32 h-32 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-white dark:border-wiki-darkpanel shadow-lg ring-1 ring-gray-200 dark:ring-gray-700">
          <img 
            src={PROFILE.image} 
            alt={PROFILE.name} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
      
      {/* Introduction */}
      <div className="text-center md:text-left flex-1 pt-2 md:pt-4">
        <h1 className="text-4xl md:text-5xl font-serif font-medium text-gray-900 dark:text-white tracking-tight mb-3">
          {PROFILE.name}
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-sans font-light mb-6">
          {PROFILE.role}
        </p>
        
        {/* Social Icons */}
        <div className="flex items-center justify-center md:justify-start gap-6">
          {PROFILE.socials.github && (
            <a href={PROFILE.socials.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white transition-transform hover:scale-110" aria-label="GitHub">
              <Github size={24} strokeWidth={1.5} />
            </a>
          )}
          {PROFILE.socials.linkedin && (
            <a href={PROFILE.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-transform hover:scale-110" aria-label="LinkedIn">
              <Linkedin size={24} strokeWidth={1.5} />
            </a>
          )}
          {PROFILE.socials.instagram && (
            <a href={PROFILE.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-pink-600 dark:text-gray-400 dark:hover:text-pink-400 transition-transform hover:scale-110" aria-label="Instagram">
              <Instagram size={24} strokeWidth={1.5} />
            </a>
          )}
          {PROFILE.socials.youtube && (
            <a href={PROFILE.socials.youtube} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-500 transition-transform hover:scale-110" aria-label="YouTube">
              <Youtube size={24} strokeWidth={1.5} />
            </a>
          )}
        </div>
      </div>
    </div>

    {/* Content Section */}
    <div className="space-y-10">
      
       {/* Preserved Blue Box (Digital Garden Note) */}
       <div className="p-4 md:p-5 bg-[#f0f7ff] dark:bg-blue-900/10 border-l-[3px] border-wiki-blue dark:border-wiki-linkdark rounded-r-sm shadow-sm">
           <p className="text-base text-gray-800 dark:text-gray-200 italic m-0 font-serif leading-relaxed">
             "Welcome to my digital garden. Use the navigation menu to explore my professional background, key projects, and writings. 
             This site is designed to reflect the utility and clarity of a wiki entry."
           </p>
      </div>

      {/* About Me Block with Last Updated Tag */}
      <div>
        <section>
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between border-b border-wiki-border dark:border-gray-600 mb-6 pb-2">
            <h2 className="text-2xl font-serif font-medium text-gray-900 dark:text-white tracking-tight">
              About Me
            </h2>
            <p className="text-xs text-gray-500 dark:text-gray-400 italic font-sans mt-1 sm:mt-0">
               Website last modified on {new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}.
            </p>
          </div>
          <div className="prose dark:prose-invert max-w-none text-gray-900 dark:text-gray-100 font-sans font-light leading-7 text-lg whitespace-pre-line">
             {PROFILE.about}
          </div>
        </section>
      </div>

      {/* Current Focus */}
      <section>
        <h2 className="text-2xl font-serif font-medium text-gray-900 dark:text-white tracking-tight border-b border-wiki-border dark:border-gray-600 mb-6 pb-2">
          Current Focus
        </h2>
        <ul className="space-y-3 text-gray-900 dark:text-gray-100 font-sans font-light text-lg">
          {PROFILE.currentFocus.map((focus, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-wiki-blue dark:bg-wiki-linkdark shrink-0"></span>
              <span>{focus}</span>
            </li>
          ))}
        </ul>
      </section>

    </div>
  </div>
);

export default Home;