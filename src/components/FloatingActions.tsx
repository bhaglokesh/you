import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import Tooltip from './Tooltip';

const FloatingActions: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!showScrollTop) {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      <Tooltip text="Scroll to top" position="left">
        <button
          onClick={scrollToTop}
          className="p-2.5 bg-wiki-gray dark:bg-wiki-darkpanel hover:bg-gray-300 dark:hover:bg-gray-600 rounded-full shadow-md transition-all duration-300 transform hover:scale-110 text-gray-700 dark:text-white border border-wiki-border dark:border-gray-600 flex items-center justify-center"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      </Tooltip>
    </div>
  );
};

export default FloatingActions;