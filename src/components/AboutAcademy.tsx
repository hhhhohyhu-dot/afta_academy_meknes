"use client";
import { LangType } from "../types";

export default function AboutAcademy({ lang }: { lang: LangType }) {
  return (
    <section className="py-12 bg-white px-6 text-center">
      {/* العنوان يتغير حسب اللغة */}
      <h2 className="text-3xl font-bold mb-6 text-blue-900">
        {lang === 'ar' ? 'عن أكاديمية AFTA' : 'About AFTA Academy'}
      </h2>
      
      {/* الصورة */}
      <div className="flex justify-center items-center w-full my-6">
        <img 
          src="/graduate.jpg" 
          alt="Academy" 
          className="w-full max-w-lg h-auto object-cover rounded-2xl shadow-lg"
        />
      </div>

      {/* الفقرة تتغير حسب اللغة */}
      <p className="max-w-2xl mx-auto text-gray-700 leading-relaxed">
        {lang === 'ar' 
          ? 'نحن نوفر تكوينات عالمية في مجال الطيران والبحر. انضم إلينا لتبدأ مسارك المهني.' 
          : 'We provide world-class training in aviation and maritime sectors. Join us to start your career.'}
      </p>
    </section>
  );
}