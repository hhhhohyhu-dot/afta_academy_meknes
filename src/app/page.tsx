"use client";
import React, { useState } from 'react';
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features"; // المكون الجديد
import AboutAcademy from "../components/AboutAcademy";
import Stats from "../components/Stats";
import CampusLife from "../components/CampusLife";
import WhyUs from "../components/WhyUs";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Home() {
  const [lang, setLang] = useState<'en' | 'ar'>('en');

  return (
    <main 
      dir={lang === 'ar' ? 'rtl' : 'ltr'} 
      className="min-h-screen bg-white transition-all duration-300"
    >
      <Navbar lang={lang} setLang={setLang} />
      <Hero lang={lang} />
      <Features lang={lang} /> {/* هنا كاين المكون ديال التصاور */}
      <AboutAcademy lang={lang} />
      <Stats lang={lang} />
      <CampusLife lang={lang} />
      <WhyUs lang={lang} />
      <CTA lang={lang} />
      <Footer lang={lang} />
    </main>
  );
}