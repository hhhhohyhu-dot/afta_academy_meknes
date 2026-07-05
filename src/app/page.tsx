/** @jsxImportSource react */
"use client";
import React, { useState } from 'react';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AnimatedStatistics from "@/components/AnimatedStatistics";
import JobBenefits from "@/components/JobBenefits";
import AboutAcademy from "@/components/AboutAcademy";
import AdmissionInfo from "@/components/AdmissionInfo";
import Programs from "@/components/Programs";
import TrainingJourney from "@/components/TrainingJourney";
import CampusLife from "@/components/CampusLife";
import AirlinePartners from "@/components/AirlinePartners";
import Gallery from "@/components/Gallery";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [lang, setLang] = useState<'en' | 'ar'>('ar'); 

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar lang={lang} setLang={setLang} />
      <Hero lang={lang} />
      <AnimatedStatistics lang={lang} />
      <JobBenefits /> 
      <AboutAcademy lang={lang} />
      
      {/* قسم شروط التسجيل والمصاريف */}
      <AdmissionInfo />
      
      <Programs lang={lang} />
      
      {/* رحلة الطالب التدريبية */}
      <TrainingJourney />
      
      {/* الحياة داخل الأكاديمية مع الفيديو */}
      <CampusLife lang={lang} />
      
      {/* شركاء الأكاديمية */}
      <AirlinePartners />
      
      {/* معرض الصور */}
      <Gallery />
      
      <CTA lang={lang} />
      <Contact lang={lang} />
      <Footer lang={lang} />
    </main>
  );
}