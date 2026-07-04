"use client";
import { useState } from "react";
// نستخدم المسار @ للوصول المباشر لمجلد src إذا كان مفعلاً، أو المسار النسبي الصحيح
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutAcademy from "../components/AboutAcademy";
import Stats from "../components/Stats";
import CampusLife from "../components/CampusLife";
import WhyUs from "../components/WhyUs";
import CTA from "../components/CTA";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  // تعريف حالة اللغة (lang) لضمان التزامن بين جميع المكونات
  const [lang, setLang] = useState<'en' | 'ar'>('en');

  return (
    <main 
      dir={lang === 'ar' ? 'rtl' : 'ltr'} 
      className="min-h-screen bg-white transition-all duration-300"
    >
      {/* الحاوية الرئيسية لضبط المسافات بشكل متناسق (Global Wrapper) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* تمرير الـ lang والـ setLang للتحكم في حالة اللغة عالمياً */}
        <Navbar lang={lang} setLang={setLang} />
        
        {/* المكونات الأساسية للموقع مع تمرير اللغة لها */}
        <Hero lang={lang} />
        <AboutAcademy lang={lang} />
        <Stats lang={lang} />
        <CampusLife lang={lang} />
        <WhyUs lang={lang} />
        <CTA lang={lang} />
        <Contact lang={lang} />
        
      </div>
      
      {/* Footer يوضع غالباً خارج الـ max-w-7xl إذا كان يحتاج خلفية ممتدة */}
      <Footer lang={lang} />
      
    </main>
  );
}