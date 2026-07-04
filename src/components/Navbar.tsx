"use client";
import { useState } from "react";

// تأكدي من استيراد النوع الصحيح إذا كان عندك في ملف types.ts
// وإلا استعملي 'en' | 'ar' مباشرة كما فعلنا هنا
export default function Navbar({ 
  lang, 
  setLang 
}: { 
  lang: 'en' | 'ar', 
  setLang: (val: 'en' | 'ar') => void 
}) {

  const toggleLanguage = () => {
    setLang(lang === 'en' ? 'ar' : 'en');
  };

  return (
    <nav className="flex justify-between items-center py-6">
      <div className="text-2xl font-bold text-blue-900">
        AFTA Academy
      </div>
      
      <div className="flex items-center gap-4">
        {/* زر تبديل اللغة */}
        <button 
          onClick={toggleLanguage}
          className="px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
        >
          {lang === 'en' ? 'العربية' : 'English'}
        </button>
      </div>
    </nav>
  );
}