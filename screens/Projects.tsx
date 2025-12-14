import React from 'react';
import { ExternalLink, Globe, Gamepad2, ShieldCheck, GraduationCap, Car, Megaphone, Scale, Wrench, Target, Palette, Film, LayoutTemplate, Clapperboard } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface ProjectsProps {
  lang: Language;
}

const projectUrls = [
  "https://egiv.vercel.app/home",
  "http://www.mazad-line.com",
  "https://mostafa-kamel-academy.com",
  "https://crystal-guard-sa.com",
  "https://www.code-cut.com",
  "https://www.ke-lawyer.com",
  "https://www.raslansmart.com",
  "https://www.7ps-marketing.online",
  "https://www.belal-yasser.online",
  "https://www.mohamed-amin.online",
  "https://www.hazemashrafsayed.com",
  "https://mention.studio/"
];

export const Projects: React.FC<ProjectsProps> = ({ lang }) => {
  const t = translations[lang].projects;

  const projectIcons = [
    Gamepad2,       // EGIV
    ShieldCheck,    // Mazad Line
    GraduationCap,  // Academy
    Car,            // Crystal Guard
    Megaphone,      // Code Cut
    Scale,          // Lawyer
    Wrench,         // Raslan
    Target,         // 7PS
    Palette,        // Belal
    Film,           // Mohamed Amin
    LayoutTemplate, // Hazem
    Clapperboard    // Mention Studio
  ];

  // Merge translations with static data
  const projects = t.items.map((item, index) => ({
    id: index + 1,
    title: item.title,
    category: item.category,
    Icon: projectIcons[index],
    url: projectUrls[index]
  }));

  return (
    <div className="flex flex-col justify-center items-center w-full max-w-7xl mx-auto animate-slide-up pb-10">
      <div className="w-full flex flex-col items-center justify-center mb-8 md:mb-12 gap-4 px-2 text-center">
        <div className="w-full md:w-auto text-center">
          <div className="flex flex-col items-center">
            <div className="mb-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 whitespace-nowrap">
                {t.title}
              </h2>
            </div>
          </div>
          <p className="text-slate-600 text-sm md:text-base lg:text-lg px-4 mt-6 max-w-2xl mx-auto whitespace-pre-line">{t.subtitle}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-2">
        {projects.map((project) => (
          <div key={project.id} className="group relative bg-white border border-slate-200 rounded-3xl overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 flex flex-col h-full shadow-md">
            <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
              <project.Icon size={100} className="text-indigo-600 rotate-12" />
            </div>

            <div className="p-6 md:p-8 flex flex-col h-full relative z-10">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-indigo-100 rounded-2xl text-indigo-600 group-hover:text-white group-hover:bg-indigo-600 transition-colors">
                  <project.Icon size={24} />
                </div>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-slate-400 hover:text-indigo-600 transition-colors"
                >
                  <ExternalLink size={20} />
                </a>
              </div>

              <div className="mb-auto">
                <span className="text-indigo-600 text-xs font-bold uppercase tracking-wider mb-2 block">{project.category}</span>
                <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">{project.title}</h3>
                <a href={project.url} target="_blank" rel="noreferrer" className="text-sm text-slate-500 hover:text-indigo-600 transition-colors truncate block">
                  {project.url.replace('https://', '')}
                </a>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-200 flex justify-end items-center">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-indigo-600 group-hover:text-indigo-800 flex items-center gap-1 transition-colors"
                >
                  {t.visit} <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-slate-500 text-sm">
        {t.rights}
      </div>
    </div>
  );
};