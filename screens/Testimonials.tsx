import React from 'react';
import { Quote, Star } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface TestimonialsProps {
    lang: Language;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ lang }) => {
    const t = translations[lang].testimonials;

    return (
        <div className="flex flex-col justify-center items-center w-full max-w-7xl mx-auto animate-slide-up pb-10">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 whitespace-nowrap mb-4">
                    {t.title}
                </h2>
                <p className="text-slate-600 text-sm md:text-base lg:text-lg max-w-2xl mx-auto px-4">
                    {t.subtitle}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full px-4">
                {t.items.map((item, index) => (
                    <div key={index} className="bg-white border border-slate-200 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative group">
                        <div className="absolute top-6 right-6 text-blue-100 group-hover:text-blue-200 transition-colors">
                            <Quote size={40} className="transform rotate-180" />
                        </div>

                        <div className="flex gap-1 mb-6 text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={18} fill="currentColor" />
                            ))}
                        </div>

                        <p className="text-slate-600 text-lg leading-relaxed mb-8 relative z-10 italic">
                            "{item.text}"
                        </p>

                        <div className="flex items-center gap-4 border-t border-slate-100 pt-6">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-black text-xl shadow-md">
                                {item.name.charAt(0)}
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900">{item.name}</h4>
                                <p className="text-sm text-slate-500">{item.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
