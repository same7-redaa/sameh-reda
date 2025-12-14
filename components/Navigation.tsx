import React, { useState } from 'react';
import { Home, User, Briefcase, Layers, Mail, Languages, BookOpenText, MessageSquareQuote, ChevronUp, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { NavItem, Language } from '../types';
import { translations } from '../data/translations';

interface NavigationProps {
  lang: Language;
  toggleLanguage: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ lang, toggleLanguage }) => {
  const t = translations[lang].nav;
  const location = useLocation();
  const [isExpanded, setIsExpanded] = useState(false);

  // Full list of Nav Items
  const navItems: NavItem[] = [
    { id: 'home', label: t.home, icon: <Home size={20} />, path: '/' },
    { id: 'about', label: t.about, icon: <User size={20} />, path: '/about' },
    { id: 'services', label: t.services, icon: <Briefcase size={20} />, path: '/services' },
    { id: 'projects', label: t.projects, icon: <Layers size={20} />, path: '/projects' },
    { id: 'blog', label: t.blog, icon: <BookOpenText size={20} />, path: '/blog' },
    { id: 'contact', label: t.contact, icon: <Mail size={20} />, path: '/contact' },
  ];

  const sidebarPosition = lang === 'ar' ? 'right-8' : 'left-8';
  const tooltipPosition = lang === 'ar' ? 'right-full mr-4' : 'left-full ml-4';

  const isActive = (itemPath: string) => {
    if (itemPath === '/' && location.pathname === '/') return true;
    if (itemPath !== '/' && location.pathname.startsWith(itemPath)) return true;
    return false;
  };

  // Mobile Items Logic
  // Collapsed: Show specific highlight items + Expand Button
  // Expanded: Show ALL items in a grid
  const collapsedItems = [
    navItems[0], // Home
    navItems[3], // Projects
    navItems[2], // Services
    navItems[5], // Contact
  ];

  return (
    <>
      {/* Desktop/Tablet Sidebar Navigation */}
      <nav className={`hidden md:flex flex-col fixed ${sidebarPosition} top-1/2 -translate-y-1/2 z-50 bg-white/50 backdrop-blur-xl border border-slate-200 rounded-full py-6 px-2 shadow-xl space-y-6`}>
        {navItems.map((item) => (
          <Link
            key={item.id}
            to={item.path || '/'}
            className={`group relative p-3 rounded-full transition-all duration-300 flex items-center justify-center ${isActive(item.path || '/')
              ? 'bg-blue-600 text-white shadow-lg shadow-blue-200 scale-110'
              : 'text-slate-500 hover:bg-slate-200 hover:text-slate-900'
              }`}
          >
            {item.icon}
            {/* Tooltip */}
            <span className={`absolute ${tooltipPosition} px-2 py-1 bg-slate-900 text-white text-xs font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-xl z-50`}>
              {item.label}
            </span>
          </Link>
        ))}

        <div className="w-8 h-[1px] bg-slate-300 mx-auto my-2"></div>

        {/* Language Switcher */}
        <button
          onClick={toggleLanguage}
          className="group relative p-3 rounded-full transition-all duration-300 flex items-center justify-center text-slate-500 hover:bg-blue-100 hover:text-blue-600"
        >
          <Languages size={20} />
          <span className={`absolute ${tooltipPosition} px-2 py-1 bg-slate-900 text-white text-xs font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-xl z-50`}>
            {lang === 'en' ? 'عربي' : 'English'}
          </span>
        </button>
      </nav>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-6 left-4 right-4 z-50 flex flex-col items-end gap-2">

        {/* Main Nav Bar (Expandable) */}
        <nav className={`w-full bg-white/90 backdrop-blur-xl border border-slate-200 rounded-3xl shadow-xl transition-all duration-300 ease-in-out overflow-hidden ${isExpanded ? 'p-4' : 'p-2'}`}>

          {isExpanded ? (
            // EXPANDED VIEW: Grid of all items
            <div className="grid grid-cols-4 gap-4 animate-in fade-in slide-in-from-bottom-4 duration-300">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.path || '/'}
                  onClick={() => setIsExpanded(false)}
                  className={`flex flex-col items-center justify-center gap-2 ${isActive(item.path || '/') ? 'text-blue-600' : 'text-slate-500'}`}
                >
                  <div className={`p-3 rounded-2xl ${isActive(item.path || '/') ? 'bg-blue-100' : 'bg-slate-50'}`}>
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-bold text-center leading-tight">{item.label}</span>
                </Link>
              ))}
            </div>
          ) : (
            // COLLAPSED VIEW: Row of key items
            <div className="flex justify-around items-center">
              {collapsedItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.path || '/'}
                  className={`flex flex-col items-center justify-center w-full py-1 transition-all duration-300 ${isActive(item.path || '/')
                    ? 'text-blue-600 -translate-y-1'
                    : 'text-slate-400 hover:text-slate-600'
                    }`}
                >
                  <div className={`p-1.5 rounded-xl transition-all ${isActive(item.path || '/') ? 'bg-blue-100' : ''}`}>
                    {item.icon}
                  </div>
                  <span className={`text-[10px] mt-1 font-medium transition-all ${isActive(item.path || '/') ? 'opacity-100' : 'opacity-70'}`}>
                    {item.label}
                  </span>
                </Link>
              ))}

              {/* Expand Trigger Button (Inside the bar for seamless look) */}
              <button
                onClick={() => setIsExpanded(true)}
                className="flex flex-col items-center justify-center w-full py-1 text-slate-400 hover:text-blue-600 transition-colors"
              >
                <div className="p-1.5 rounded-xl bg-slate-50">
                  <ChevronUp size={20} />
                </div>
                <span className="text-[10px] mt-1 font-medium opacity-70">
                  More
                </span>
              </button>
            </div>
          )}

          {/* Collapse Button (Only visible when expanded) */}
          {isExpanded && (
            <div className="w-full flex justify-center mt-4 pt-4 border-t border-slate-100">
              <button
                onClick={() => setIsExpanded(false)}
                className="flex items-center gap-2 text-slate-400 hover:text-slate-600 px-4 py-2"
              >
                <ChevronDown size={16} />
                <span className="text-xs font-bold uppercase tracking-wider">Close Menu</span>
              </button>
            </div>
          )}
        </nav>

      </div>

      {/* Mobile Language Switcher - Fixed at Top */}
      <button
        onClick={toggleLanguage}
        className={`md:hidden fixed top-6 ${lang === 'ar' ? 'left-6' : 'right-6'} z-[60] p-3 bg-white/80 backdrop-blur-xl border border-slate-200 rounded-full text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-all shadow-lg active:scale-95`}
        aria-label="Toggle Language"
      >
        <Languages size={24} />
      </button>
    </>
  );
};