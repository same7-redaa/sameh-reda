import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Globe } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import vodafoneImg from '../assets/vodafone.png';
import wepayImg from '../assets/wepay.png';
import teldaImg from '../assets/telda.png';

interface ContactProps {
    lang: Language;
}

export const Contact: React.FC<ContactProps> = ({ lang }) => {
    const [sent, setSent] = useState(false);
    const t = translations[lang].contact;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSent(true);
        setTimeout(() => setSent(false), 3000);
    };

    return (
        <div className="flex flex-col justify-center items-center w-full max-w-6xl mx-auto animate-slide-up pb-10">
            <div className="text-center mb-8 md:mb-10">
                <div className="flex flex-col items-center">
                    <div className="mb-4">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 whitespace-nowrap">
                            {t.title}
                        </h2>
                    </div>
                </div>
                <p className="text-slate-600 mt-6 text-sm md:text-base px-4">{t.subtitle}</p>
            </div>

            <div className="w-full max-w-4xl mx-auto">
                {/* Contact Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    {/* Call Direct */}
                    <a href="tel:+201023160657" className="block bg-white border border-slate-200 rounded-3xl p-6 shadow-md hover:shadow-xl hover:scale-105 transition-all group">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center text-cyan-600 group-hover:scale-110 transition-transform">
                                <Phone />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-slate-900">{t.info.contact.title}</h4>
                                <p className="text-slate-500 font-sans" dir="ltr">+20 102 316 0657</p>
                            </div>
                        </div>
                    </a>

                    {/* WhatsApp */}
                    <a href="https://wa.me/201023160657" target="_blank" rel="noopener noreferrer" className="block bg-white border border-slate-200 rounded-3xl p-6 shadow-md hover:shadow-xl hover:scale-105 transition-all group">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 group-hover:scale-110 transition-transform">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-slate-900">WhatsApp</h4>
                                <p className="text-slate-500 font-sans" dir="ltr">+20 102 316 0657</p>
                            </div>
                        </div>
                    </a>

                    {/* Facebook */}
                    <a href="https://www.facebook.com/SAME7.REDAA" target="_blank" rel="noopener noreferrer" className="block bg-white border border-slate-200 rounded-3xl p-6 shadow-md hover:shadow-xl hover:scale-105 transition-all group">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                                <Globe />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-slate-900">Facebook</h4>
                                <p className="text-slate-500">SAME<span style={{ fontFamily: 'Arial' }}>7</span>.REDAA</p>
                            </div>
                        </div>
                    </a>

                    {/* Email */}
                    <a href="mailto:contact@samehreda.com" className="block bg-white border border-slate-200 rounded-3xl p-6 shadow-md hover:shadow-xl hover:scale-105 transition-all group">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 group-hover:scale-110 transition-transform">
                                <Mail />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-slate-900">Email</h4>
                                <p className="text-slate-500">contact@samehreda.com</p>
                            </div>
                        </div>
                    </a>

                    {/* Location */}
                    <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-md md:col-span-2">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center text-cyan-600">
                                <MapPin />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-slate-900">{t.info.location.title}</h4>
                                <p className="text-slate-500">{t.info.location.val}</p>
                            </div>
                        </div>
                    </div>

                    {/* Payment Methods */}
                    <div className="md:col-span-2 mt-4 pt-4 border-t border-slate-200">
                        <h4 className="text-slate-900 font-bold mb-4 text-center text-sm uppercase tracking-wider">{t.payment?.title || "Payment Methods"}</h4>
                        <div className="grid grid-cols-1 gap-3">
                            <div className="bg-white border border-slate-200 rounded-2xl p-3 flex items-center gap-4 hover:shadow-md transition-all group shadow-sm">
                                <div className="relative">
                                    <img src={vodafoneImg} alt="Vodafone Cash" className="relative h-14 w-14 object-contain rounded-[5px] shadow-sm z-10 bg-white" />
                                </div>
                                <span className="text-slate-900 font-bold text-lg group-hover:text-red-600 transition-colors">Vodafone Cash</span>
                            </div>
                            <div className="bg-white border border-slate-200 rounded-2xl p-3 flex items-center gap-4 hover:shadow-md transition-all group shadow-sm">
                                <div className="relative">
                                    <img src={wepayImg} alt="WePay" className="relative h-14 w-14 object-contain rounded-[5px] shadow-sm z-10 bg-white" />
                                </div>
                                <span className="text-slate-900 font-bold text-lg group-hover:text-purple-600 transition-colors">WePay</span>
                            </div>
                            <div className="bg-white border border-slate-200 rounded-2xl p-3 flex items-center gap-4 hover:shadow-md transition-all group shadow-sm">
                                <div className="relative">
                                    <img src={teldaImg} alt="Telda" className="relative h-14 w-14 object-contain rounded-[5px] shadow-sm z-10 bg-white" />
                                </div>
                                <span className="text-slate-900 font-bold text-lg group-hover:text-indigo-600 transition-colors">Telda</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-12 text-slate-500 text-sm">
                {translations[lang].projects.rights}
            </div>
        </div>
    );
};