import React, { useState } from 'react';
import { Mail, Github, Linkedin, MapPin, ExternalLink, Check, Copy } from 'lucide-react';
import Section from '../components/Section';
import Tooltip from '../components/Tooltip';
import { PROFILE } from '../constants';

const Contact: React.FC = () => {
  const [emailCopied, setEmailCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  return (
    <Section id="contact" title="External Links">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
        <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Get in touch</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-gray-500 dark:text-gray-400" />
                <div className="flex items-center gap-2">
                    <a href={`mailto:${PROFILE.email}`} className="text-wiki-blue dark:text-wiki-linkdark hover:underline font-medium">
                      {PROFILE.email}
                    </a>
                    <Tooltip text={emailCopied ? "Copied!" : "Copy email"} position="top">
                    <button 
                      onClick={handleCopyEmail}
                      className="p-1 text-gray-400 hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-300 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                      aria-label="Copy email address"
                    >
                      {emailCopied ? <Check size={14} className="text-green-600 dark:text-green-400" /> : <Copy size={14} />}
                    </button>
                    </Tooltip>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={16} className="text-gray-500 dark:text-gray-400" />
                <span className="text-gray-700 dark:text-gray-300 font-light">{PROFILE.location}</span>
              </li>
            </ul>
        </div>
        
        <div>
          <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Social Profiles</h4>
          <ul className="space-y-3">
            <li>
              <a href="#" className="inline-flex items-center gap-2 text-wiki-blue dark:text-wiki-linkdark hover:underline font-medium">
                <Github size={16} className="text-gray-500 dark:text-gray-400" />
                <span>GitHub</span>
                <ExternalLink size={12} className="opacity-50" />
              </a>
            </li>
            <li>
              <a href="#" className="inline-flex items-center gap-2 text-wiki-blue dark:text-wiki-linkdark hover:underline font-medium">
                  <Linkedin size={16} className="text-gray-500 dark:text-gray-400" />
                  <span>LinkedIn</span>
                  <ExternalLink size={12} className="opacity-50" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="mt-8 text-xs text-gray-400 dark:text-gray-500 italic">
        This page was last modified on {new Date().toLocaleDateString()}, at {new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}.
      </p>
    </Section>
  );
};

export default Contact;