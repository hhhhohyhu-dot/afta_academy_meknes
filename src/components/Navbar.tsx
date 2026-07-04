"use client";
import React from 'react';
import Link from 'next/link';

interface NavbarProps {
  lang: 'en' | 'ar';
  setLang: (lang: 'en' | 'ar') => void;
}

export default function Navbar({ lang, setLang }: NavbarProps) {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-sm shadow-md py-4 px-6 md:px-12 flex justify-between items-center transition-all">
      
      {/* اسم الأكاديمية (اللوغو) */}
      <Link href="/" className="text-2xl md:text-4xl font-extrabold tracking-tight">
        <span className="text-blue-900">AFTA</span>{" "}
        <span className="text-orange-500">Academy</span>
      </Link>

      {/* الأزرار (تغيير اللغة + التسجيل) */}
      <div className="flex items-center gap-3 md:gap-6">
        
        {/* زر تغيير اللغة */}
        <button 
          onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
          className="text-base md:text-lg font-bold text-slate-700 hover:text-blue-700 hover:bg-blue-50 px-4 py-2 rounded-lg border-2 border-slate-200 transition-all flex items-center gap-2"
        >
          {/* أيقونة صغيرة للغة */}
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          {lang === 'en' ? 'العربية' : 'English'}
        </button>

        {/* زر التسجيل (JOIN NOW) */}
        <Link 
          href="/register" 
          className="bg-orange-500 hover:bg-orange-600 text-white text-base md:text-lg font-bold py-2 md:py-3 px-6 md:px-8 rounded-full shadow-lg hover:shadow-orange-500/30 transition-all transform hover:-translate-y-1"
        >
          {lang === 'en' ? 'JOIN NOW »' : '« سجل الآن'}
        </Link>

      </div>
    </nav>
  );
}