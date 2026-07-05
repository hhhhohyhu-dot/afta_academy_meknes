/** @jsxImportSource react */
"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function CampusLife({ lang }: { lang: 'en' | 'ar' }) {
  return (
    <section className="py-20 px-6 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative rounded-[2rem] overflow-hidden shadow-2xl h-[500px] flex items-center"
        >
          {/* خلفية الفيديو */}
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/videos/hero-video.mp4" type="video/mp4" />
          </video>
          
          {/* طبقة العتمة (Overlay) */}
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px]" />
          
          {/* المحتوى */}
          <div className="relative z-10 p-10 md:p-16 text-white max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              {lang === 'ar' ? 'الحياة داخل الأكاديمية' : 'Academy Life'}
            </h2>
            <p className="text-lg text-slate-200">
              {lang === 'ar' ? 'تجربة تدريبية تحاكي الواقع لضمان أفضل تكوين.' : 'Experience real-world training environments.'}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}