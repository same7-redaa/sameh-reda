import React from 'react';
import {
  Code, Coffee, Globe, ArrowRight, ArrowLeft, GraduationCap, Heart, User,
  Zap, BadgeDollarSign, Award, Smartphone, Headset, Search, Gauge, ShieldCheck
} from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface AboutProps {
  lang: Language;
}

export const About: React.FC<AboutProps> = ({ lang }) => {
  const t = translations[lang].about;
  const ArrowIcon = lang === 'ar' ? ArrowLeft : ArrowRight;

  const featureIcons = [
    <Zap size={24} />,              // Fast Delivery
    <BadgeDollarSign size={24} />,  // Pricing
    <Award size={24} />,            // Quality
    <Smartphone size={24} />,       // Responsive
    <Headset size={24} />,          // Support
    <Code size={24} />,             // Clean Code
    <Search size={24} />,           // SEO
    <Gauge size={24} />,            // Performance
    <ShieldCheck size={24} />       // Security
  ];

  return (
    <div className="flex flex-col items-center w-full max-w-7xl mx-auto animate-slide-up pb-10">

      <div className="w-full flex flex-col items-center justify-center mb-8 md:mb-12 gap-4 px-2">
        <div className="space-y-8 text-center w-full">
          <div className="flex flex-col items-center">
            <div className="mb-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 whitespace-nowrap">
                {t.title}
              </h2>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-[10px] p-8 md:p-12 shadow-2xl shadow-blue-200 relative overflow-hidden text-right rtl:text-right ltr:text-left w-full max-w-4xl mx-auto">

            {/* Content */}
            <div className="relative z-10 w-full">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center leading-tight">
                {lang === 'ar' ? 'أهلاً، أنا سامح رضا 👋' : 'Hi, I\'m Sameh Reda 👋'}
              </h3>

              <div className="space-y-8">
                {/* Line 1: Intro */}
                <div className="flex items-start gap-4 md:gap-6">
                  <div className="p-3 bg-white/10 rounded-2xl shrink-0">
                    <User size={24} className="text-blue-100" />
                  </div>
                  <p className="text-blue-50 text-lg md:text-xl leading-relaxed font-medium mt-1">
                    {t.line1}
                  </p>
                </div>

                {/* Line 2: Education */}
                <div className="flex items-start gap-4 md:gap-6">
                  <div className="p-3 bg-white/10 rounded-2xl shrink-0">
                    <GraduationCap size={24} className="text-blue-100" />
                  </div>
                  <p className="text-blue-50 text-lg md:text-xl leading-relaxed font-medium mt-1">
                    {t.line2}
                  </p>
                </div>

                {/* Line 3: Principles */}
                <div className="flex items-start gap-4 md:gap-6">
                  <div className="p-3 bg-white/10 rounded-2xl shrink-0">
                    <Heart size={24} className="text-blue-100" />
                  </div>
                  <p className="text-blue-50 text-lg md:text-xl leading-relaxed font-medium mt-1">
                    {t.line3}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid - Tech Dark Style */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-5xl px-4 mt-8 [&>*:last-child]:col-span-2 md:[&>*:last-child]:col-span-1">
        {t.featuresList && t.featuresList.map((feature: string, index: number) => (
          <div
            key={index}
            className="group relative bg-slate-900 border border-slate-800 p-5 rounded-2xl shadow-lg hover:shadow-blue-500/20 hover:border-blue-500/50 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center gap-3 text-center overflow-hidden"
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className={`p-3 rounded-xl bg-slate-800 text-cyan-400 group-hover:scale-110 transition-transform duration-300 shadow-inner ring-1 ring-white/5`}>
              {featureIcons[index] || <Zap size={24} />}
            </div>

            <h4 className="font-bold text-slate-200 text-sm md:text-base tracking-wide z-10 group-hover:text-white transition-colors">
              {feature}
            </h4>
          </div>
        ))}
      </div>

      <div className="mt-16 text-slate-400 text-sm font-medium">
        {translations[lang].projects.rights}
      </div>

    </div>
  );
};