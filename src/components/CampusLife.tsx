"use client";
import React from 'react';

export default function CampusLife({ lang }: { lang: 'ar' | 'fr' | 'en' }) {
  return (
    <section className="py-10 px-4 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8">
        {lang === 'ar' ? 'حياة الأكاديمية' : 'Campus Life'}
      </h2>
      
      <div className="max-w-5xl mx-auto space-y-6">
        
        {/* الفيديو مع أزرار التحكم */}
        <div className="w-full">
          <video 
            controls 
            className="w-full rounded-2xl shadow-md object-cover max-h-[500px]"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* الصور */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <img src="/classroom.jpg" alt="Classroom" className="w-full h-60 object-cover rounded-2xl" />
          <img src="/aviation.jpg" alt="Aviation" className="w-full h-60 object-cover rounded-2xl" />
        </div>
      </div>
    </section>
  );
}