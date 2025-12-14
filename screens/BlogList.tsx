import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { blogPosts } from '../data/blog';

interface BlogListProps {
    lang: Language;
}

export const BlogList: React.FC<BlogListProps> = ({ lang }) => {
    const navigate = useNavigate();
    const t = translations[lang].blogPage;
    const ArrowIcon = lang === 'ar' ? ArrowLeft : ArrowRight;

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
                {blogPosts.map((post) => (
                    <div
                        key={post.id}
                        onClick={() => navigate(`/blog/${post.slug}`)}
                        className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer flex flex-col group h-full"
                    >
                        {/* Image Area */}
                        <div className="h-48 w-full bg-gradient-to-br from-blue-600 to-indigo-800 relative shrink-0 overflow-hidden">
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                            <div className="absolute inset-0 flex items-center justify-center text-white/20 text-4xl font-black group-hover:scale-110 transition-transform duration-500">
                                {post.tags[0]}
                            </div>
                        </div>

                        <div className="p-6 flex-1 flex flex-col">
                            <div className="flex gap-2 mb-3">
                                <span className="px-2 py-1 rounded text-xs bg-blue-50 text-blue-600 font-bold uppercase tracking-wider">
                                    {post.tags[0]}
                                </span>
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                                {post.title[lang]}
                            </h3>

                            <p className="text-slate-500 text-sm line-clamp-3 mb-6 flex-1">
                                {post.excerpt[lang]}
                            </p>

                            <div className="flex items-center text-blue-600 font-bold text-sm mt-auto">
                                <span>{t.readMore}</span>
                                <ArrowIcon size={16} className="mx-2 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
