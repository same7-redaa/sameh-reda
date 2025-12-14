import React from 'react';
import { PenTool, Layout, Smartphone, Database, Search, Zap } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface ServicesProps {
  lang: Language;
}

export const Services: React.FC<ServicesProps> = ({ lang }) => {
  const t = translations[lang].services;

  const icons = [
    <PenTool size={32} />,
    <Layout size={32} />,
    <Smartphone size={32} />,
    <Database size={32} />,
    <Search size={32} />,
    <Zap size={32} />
  ];

  return (
    <div className="flex flex-col justify-center items-center w-full max-w-6xl mx-auto animate-slide-up pb-10">
      <div className="text-center mb-8 md:mb-12">
        <div className="flex flex-col items-center">
          <div className="mb-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 whitespace-nowrap">
              {t.title}
            </h2>
          </div>
        </div>
        <p className="text-slate-600 text-sm md:text-base lg:text-lg max-w-2xl mx-auto px-4 mt-2 whitespace-pre-line leading-relaxed">
          {t.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {t.items.map((service, index) => (
          <div key={index} className="group bg-white rounded-3xl p-6 md:p-8 shadow-xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
            <div className={`absolute top-0 w-32 h-32 bg-indigo-50 transition-all group-hover:scale-110 ${lang === 'ar' ? 'left-0 rounded-br-[100px] -ml-8 -mt-8' : 'right-0 rounded-bl-[100px] -mr-8 -mt-8'}`}></div>

            <div className="relative z-10">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-indigo-600 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-indigo-200 group-hover:bg-cyan-500 transition-colors duration-300">
                {icons[index]}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-3">{service.title}</h3>
              <p className="text-sm md:text-base text-slate-500 leading-relaxed font-medium">
                {service.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-slate-500 text-sm">
        {translations[lang].projects.rights}
      </div>
    </div>
  );
};