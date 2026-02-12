import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, X, Download } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import FloatingActions from './FloatingActions';
import Tooltip from './Tooltip';
import { NAV_ITEMS, PROFILE } from '../constants';

const Layout: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Helper to determine if a nav item is active based on URL
  const isLinkActive = (id: string) => {
    if (id === 'about') return location.pathname === '/';
    return location.pathname.startsWith(`/${id}`);
  };

  // Helper to get the correct path
  const getLinkPath = (id: string) => {
    return id === 'about' ? '/' : `/${id}`;
  };

  return (
    <div className="min-h-screen font-sans text-base leading-relaxed bg-white dark:bg-wiki-darkbg text-gray-900 dark:text-wiki-darktext flex flex-col">
      {/* Header / Navbar */}
      <header className="sticky top-0 z-40 w-full bg-white/95 dark:bg-wiki-darkbg/95 border-b border-wiki-border dark:border-gray-600 backdrop-blur-md shadow-sm transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          
          {/* Logo / Brand */}
          <Link to="/" className="flex items-center gap-3.5 group select-none" onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}>
             <div className="w-10 h-10 shrink-0 flex items-center justify-center font-serif text-xl border border-gray-800 dark:border-gray-200 rounded-sm transition-all duration-300 group-hover:bg-gray-900 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black">
               <span className="pb-1">{PROFILE.name.charAt(0)}</span>
             </div>
             <div className="flex flex-col justify-center">
               <span className="font-serif font-bold text-lg text-gray-900 dark:text-white leading-tight group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
                 {PROFILE.name}
               </span>
               <span className="font-sans font-medium text-[10px] uppercase tracking-[0.15em] text-gray-500 dark:text-gray-400 leading-tight mt-0.5">
                 The Personal Portfolio
               </span>
             </div>
          </Link>

          {/* Controls */}
          <div className="flex items-center gap-3 md:gap-4">
            <a 
              href="/resume.pdf" 
              download
              className="hidden md:flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-gray-600 dark:text-gray-300 hover:text-wiki-blue dark:hover:text-wiki-linkdark border border-gray-300 dark:border-gray-600 rounded px-3 py-1.5 hover:border-wiki-blue dark:hover:border-wiki-linkdark transition-colors"
              aria-label="Download Resume"
            >
              <Download size={14} />
              <span>Resume</span>
            </a>

            <ThemeToggle />
            <Tooltip text={mobileMenuOpen ? "Close Menu" : "Open Menu"} position="bottom">
              <button 
                className="md:hidden p-2 text-gray-700 dark:text-gray-200"
                onClick={toggleMobileMenu}
                aria-label="Menu"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </Tooltip>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm md:hidden" onClick={() => setMobileMenuOpen(false)}>
          <div 
            className="absolute left-0 top-0 h-full w-[80%] max-w-[280px] bg-white dark:bg-wiki-darkpanel shadow-2xl flex flex-col border-r border-wiki-border dark:border-gray-600"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-5 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-black/20">
              <h2 className="font-serif font-bold text-xl text-gray-900 dark:text-white">Contents</h2>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 -mr-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto py-2">
              <ul className="flex flex-col">
                {NAV_ITEMS.map((item, idx) => {
                  const isActive = isLinkActive(item.id);
                  return (
                    <li key={item.id}>
                      <Link
                        to={getLinkPath(item.id)}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`
                          w-full text-left py-3 px-5 flex items-center gap-3 transition-colors border-l-4
                          ${isActive 
                            ? 'bg-blue-50 dark:bg-blue-900/20 text-wiki-blue dark:text-wiki-linkdark border-wiki-blue dark:border-wiki-linkdark font-medium' 
                            : 'text-gray-700 dark:text-gray-300 border-transparent hover:bg-gray-100 dark:hover:bg-gray-700/50 font-normal'}
                        `}
                      >
                        <span className={`text-xs font-mono w-4 ${isActive ? 'opacity-100 font-bold' : 'opacity-50'}`}>
                          {idx + 1}.
                        </span>
                        <span className="text-sm">
                          {item.label}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="p-5 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-black/20 space-y-4">
               <a
                  href="/resume.pdf"
                  download
                  className="flex items-center justify-center gap-2 w-full py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 font-medium rounded-lg border border-gray-300 dark:border-gray-600 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-all active:scale-[0.98]"
                >
                  <Download size={18} />
                  <span>Download Resume</span>
                </a>
            </div>
          </div>
        </div>
      )}

      {/* Main Content Layout */}
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:flex md:gap-12 lg:gap-16 flex-grow w-full">
        
        {/* Left Sidebar (Desktop) */}
        <aside className="hidden md:block w-48 lg:w-56 flex-shrink-0 sticky top-24 h-[calc(100vh-8rem)] overflow-y-auto pr-4 custom-scrollbar">
          <div className="py-2">
            <h4 className="font-semibold text-[11px] uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4 pl-3">
              Contents
            </h4>
            <ul className="space-y-1 relative border-l border-gray-200 dark:border-gray-700 ml-1.5">
              {NAV_ITEMS.map((item) => {
                const isActive = isLinkActive(item.id);
                return (
                  <li key={item.id} className="relative">
                    <Link 
                      to={getLinkPath(item.id)}
                      className={`
                        text-sm text-left w-full py-1.5 pl-4 pr-2 border-l-2 -ml-[1px] transition-all duration-200 block
                        ${isActive 
                          ? 'border-wiki-blue dark:border-wiki-linkdark text-wiki-blue dark:text-wiki-linkdark bg-blue-50/50 dark:bg-blue-900/10 font-medium' 
                          : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:border-gray-300 dark:hover:border-gray-600 font-normal'}
                      `}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </aside>

        {/* Content Area */}
        <div className="flex-1 min-w-0">
          <Outlet />
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-auto py-10 bg-gray-100 dark:bg-wiki-darkpanel border-t border-gray-300 dark:border-gray-600 text-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center sm:text-left">
           <div className="flex flex-col md:flex-row justify-between items-center gap-6">
             <div className="max-w-2xl">
               <p className="mb-2 text-gray-700 dark:text-gray-300 leading-relaxed font-light">
                 Designed and developed by <strong className="font-medium text-gray-900 dark:text-white">{PROFILE.name}</strong>.
               </p>
               <div className="flex flex-wrap justify-center sm:justify-start gap-x-4 gap-y-2 text-gray-500 dark:text-gray-400 text-xs mt-3 uppercase tracking-wider font-medium">
                 {NAV_ITEMS.map((item) => (
                   <Link 
                     key={item.id} 
                     to={getLinkPath(item.id)}
                     className="hover:text-wiki-blue dark:hover:text-wiki-linkdark hover:underline transition-colors"
                   >
                     {item.label}
                   </Link>
                 ))}
               </div>
             </div>
           </div>
        </div>
      </footer>

      <FloatingActions />
    </div>
  );
};

export default Layout;  