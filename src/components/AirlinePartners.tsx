/** @jsxImportSource react */
"use client";
import React from 'react';
import { motion } from 'framer-motion';

const airlines = [
  { name: "Royal Air Maroc", logo: "/images/ram.png" },
  { name: "Qatar Airways", logo: "/images/qatar.png" },
  { name: "Emirates", logo: "/images/emirates.png" },
  { name: "Etihad", logo: "/images/etihad.png" },
  { name: "Air Arabia", logo: "/images/airarabia.png" },
  { name: "Ryanair", logo: "/images/ryanair.png" },
];

export default function AirlinePartners() {
  return (
    <section className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-4xl mx-auto text-center mb-16 px-6">
        {/* العنوان المعدل */}
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
          شركات في القطاع الجوي
        </h2>
        {/* الجملة التحفيزية */}
        <p className="text-slate-600 text-lg">
          نفتح لكم أبواب المستقبل للعمل مع كبرى شركات الطيران العالمية فور تخرجكم من أكاديميتنا.
        </p>
      </div>
      
      <div className="relative flex overflow-x-hidden">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, ease: "linear", repeat: Infinity }}
          className="flex whitespace-nowrap gap-20 items-center"
        >
          {[...airlines, ...airlines].map((airline, index) => (
            <div key={index} className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-500">
              <img 
                src={airline.logo} 
                alt={airline.name} 
                className="h-12 md:h-16 w-auto opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}