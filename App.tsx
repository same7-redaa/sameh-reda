import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Home } from './screens/Home';
import { About } from './screens/About';
import { Services } from './screens/Services';
import { Projects } from './screens/Projects';
import { Contact } from './screens/Contact';
import { BlogPost } from './screens/BlogPost';
import { BlogList } from './screens/BlogList';
import { Language } from './types';
import { SEO } from './components/SEO';
import StarryBackground from './components/StarryBackground';

function App() {
  const [lang, setLang] = useState<Language>('ar');
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    const scrollContainer = document.querySelector('.overflow-y-auto');
    if (scrollContainer) {
      scrollContainer.scrollTop = 0;
    }
  }, [location.pathname]);

  const toggleLanguage = () => {
    setLang(prev => prev === 'en' ? 'ar' : 'en');
  };

  return (
    <div
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
      className={`relative h-[100dvh] w-full bg-slate-50 text-slate-900 overflow-hidden selection:bg-blue-500 selection:text-white ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}
    >
      <StarryBackground />

      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-500/10 rounded-full blur-[120px]"></div>
      </div>

      <Navigation
        lang={lang}
        toggleLanguage={toggleLanguage}
      />

      {/* Main Content Area */}
      <main className={`relative z-10 w-full h-full flex flex-col ${lang === 'ar' ? 'md:pr-28' : 'md:pl-28'}`}>
        {/* Scrollable Container */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden scrollbar-hide w-full">
          <div className="min-h-full w-full max-w-[1600px] mx-auto flex flex-col justify-center px-4 pb-24 md:px-8 md:pb-8 pt-8">
            <Routes>
              <Route path="/" element={
                <>
                  <SEO
                    title="Home"
                    description="Professional portfolio of Sameh Reda, a specialized Web Developer building modern, high-performance websites."
                    lang={lang}
                  />
                  <Home lang={lang} />
                </>
              } />
              <Route path="/about" element={
                <>
                  <SEO
                    title="About Me"
                    description="Learn more about Sameh Reda, a passionate Full Stack Developer from Egypt."
                    lang={lang}
                  />
                  <About lang={lang} />
                </>
              } />
              <Route path="/services" element={
                <>
                  <SEO
                    title="Services"
                    description="Web development services provided by Sameh Reda including Full Stack solutions, SEO, and performance optimization."
                    lang={lang}
                  />
                  <Services lang={lang} />
                </>
              } />
              <Route path="/projects" element={
                <>
                  <SEO
                    title="Projects"
                    description="Showcase of recent web projects and applications developed by Sameh Reda."
                    lang={lang}
                  />
                  <Projects lang={lang} />
                </>
              } />
              <Route path="/contact" element={
                <>
                  <SEO
                    title="Contact"
                    description="Get in touch with Sameh Reda for your next web project."
                    lang={lang}
                  />
                  <Contact lang={lang} />
                </>
              } />
              <Route path="/blog" element={
                <>
                  <SEO
                    title="Blog"
                    description="Read the latest insights on web development and technology."
                    lang={lang}
                  />
                  <BlogList lang={lang} />
                </>
              } />
              <Route path="/blog/:slug" element={
                <>
                  <SEO
                    title="Blog"
                    description="Read the latest insights on web development and technology."
                    lang={lang}
                  />
                  <BlogPost lang={lang} />
                </>
              } />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;