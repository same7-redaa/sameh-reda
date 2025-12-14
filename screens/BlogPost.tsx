import React from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Calendar, Clock, ArrowLeftCircle, ArrowRightCircle } from 'lucide-react';
import { blogPosts } from '../data/blog';
import { Language } from '../types';
import { translations } from '../data/translations';

interface BlogPostProps {
    lang: Language;
}

export const BlogPost: React.FC<BlogPostProps> = ({ lang }) => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const post = blogPosts.find(p => p.slug === slug);
    const t = translations[lang];

    if (!post) {
        return <Navigate to="/" replace />;
    }

    return (
        <div className="w-full max-w-4xl mx-auto animate-slide-up pb-10 pt-8 px-4">

            {/* Header / Hero Section */}
            <div className="w-full mb-10 relative overflow-hidden rounded-3xl h-64 md:h-96">
                {/* Determine gradient based on tag or random */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-800"></div>
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white/20 text-6xl md:text-9xl font-black select-none uppercase tracking-widest">{post.tags[0]}</span>
                </div>
            </div>

            <div className="px-2 md:px-0">
                <div className="flex flex-wrap items-center gap-6 text-sm md:text-base text-slate-500 mb-8 font-medium">
                    <div className="flex items-center gap-2">
                        <Clock size={18} className="text-indigo-600" />
                        <span>{post.readTime} {lang === 'ar' ? 'قراءة' : 'read'}</span>
                    </div>
                    <div className="flex gap-2">
                        {post.tags.map(tag => (
                            <span key={tag} className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 font-bold text-xs uppercase tracking-wider">
                                #{tag}
                            </span>
                        ))}
                    </div>
                </div>

                <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-10 leading-tight">
                    {post.title[lang]}
                </h1>

                {/* Blog Content */}
                <div className="relative">
                    <div
                        className={`
                            prose prose-lg md:prose-xl max-w-none 
                            prose-headings:text-slate-900 prose-headings:font-bold prose-headings:mb-6 prose-headings:mt-12
                            prose-p:text-slate-600 prose-p:leading-relaxed prose-p:mb-8
                            prose-strong:text-blue-700 prose-strong:font-bold
                            prose-ul:text-slate-600 prose-ul:list-disc prose-ul:pl-6 rtl:prose-ul:pr-6 rtl:prose-ul:pl-0
                            prose-li:marker:text-blue-500 prose-li:mb-3
                            prose-code:text-indigo-600 prose-code:bg-slate-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:font-mono prose-code:text-sm md:prose-code:text-base before:prose-code:content-[''] after:prose-code:content-['']
                            prose-pre:bg-slate-900 prose-pre:border prose-pre:border-slate-800 prose-pre:rounded-2xl prose-pre:shadow-xl prose-pre:p-6
                            prose-a:text-blue-600 prose-a:no-underline hover:prose-a:text-blue-800 hover:prose-a:underline transition-colors
                            font-normal
                        `}
                        dir={lang === 'ar' ? 'rtl' : 'ltr'}
                        dangerouslySetInnerHTML={{ __html: post.content[lang] }}
                    >
                    </div>
                </div>
            </div>
        </div>
    );
};
