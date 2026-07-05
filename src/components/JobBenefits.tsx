/** @jsxImportSource react */
"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function JobBenefits() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden shadow-2xl min-h-[500px] flex items-center"
        >
          <img 
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop"
            alt="Airport Terminal"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/80" />
          
          <div className="relative z-10 p-10 md:p-16 text-white max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-black mb-6">شروط التسجيل والمصاريف</h2>
            
            <div className="grid md:grid-cols-2 gap-8 text-slate-200">
              <div>
                <h3 className="text-orange-500 font-bold mb-2">شروط الولوج:</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>العمر: بين 17 و 29 سنة</li>
                  <li>المستوى: Bac أو Niveau Bac</li>
                  <li>الطول: 1.57م (إناث) و 1.60م (ذكور)</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-orange-500 font-bold mb-2">المصاريف:</h3>
                <ul className="space-y-1">
                  <li>التسجيل والتأمين: 3000 - 4000 درهم</li>
                  <li>مضيف طيران: 2200 درهم/شهرياً</li>
                  <li>وكلاء الأسفار: 1700 درهم/شهرياً</li>
                </ul>
              </div>
            </div>

            {/* زر التسجيل الجديد */}
            <div className="mt-10">
              <a 
                href="/register" 
                className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-lg"
              >
                سجل الآن في الأكاديمية
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}