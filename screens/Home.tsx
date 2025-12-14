import React from 'react';
import { ArrowRight, Github, Linkedin, Twitter, ArrowLeft, Code2, Layout, Database, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Language } from '../types';
import { translations } from '../data/translations';

interface HomeProps {
  lang: Language;
}

export const Home: React.FC<HomeProps> = ({ lang }) => {
  const navigate = useNavigate();
  const t = translations[lang].home;
  const ArrowIcon = lang === 'ar' ? ArrowLeft : ArrowRight;

  return (
    <div className="flex flex-col justify-center items-start w-full max-w-4xl mx-auto animate-slide-up py-4 md:py-0 pb-10">


      <h1 className="text-4xl md:text-7xl font-extrabold text-slate-900 leading-tight mb-6 tracking-tight">
        {t.name}
      </h1>

      <div className="space-y-3 mb-8 md:mb-10">
        {t.descriptionLines.map((line: any, idx: number) => {
          const icons = [Code2, Layout, Database, Zap];
          const Icon = icons[idx];
          return (
            <div key={idx} className="flex items-center gap-3 text-slate-600 font-medium">
              <Icon className="w-5 h-5 text-blue-600 flex-shrink-0" />
              <span className="text-sm md:text-base">{line}</span>
            </div>
          );
        })}
      </div>

      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
        <button
          onClick={() => navigate('/projects')}
          className="group flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-200 hover:scale-105 transition-all duration-300 active:scale-95"
        >
          {t.viewWork}
          <ArrowIcon className={`transition-transform ${lang === 'ar' ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
        </button>

        <button
          onClick={() => navigate('/contact')}
          className="flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-700 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-slate-50 hover:text-blue-600 hover:border-blue-200 transition-all duration-300 active:scale-95 shadow-sm"
        >
          {t.contactMe}
        </button>
      </div>


    </div>
  );
};