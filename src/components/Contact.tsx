"use client";
import { LangType } from "../types";

export default function Contact({ lang }: { lang: LangType }) {
  return (
    <section className="py-12 bg-white text-center border-t border-gray-200">
      <h2 className="text-2xl font-bold mb-6">
        {lang === 'ar' ? 'تواصل معنا' : 'Contact Us'}
      </h2>
      <div className="flex flex-col md:flex-row justify-center gap-8 text-gray-700">
        
        {/* رابط الإيميل */}
        <a href="mailto:contact@afta-academy.com" className="hover:text-blue-600 transition">
          📧 Email: contact@afta-academy.com
        </a>

        {/* رابط الواتساب - غيري الرقم ديالك هنا */}
        <a href="https://wa.me/2126XXXXXXXX" target="_blank" className="hover:text-green-600 transition">
          📞 WhatsApp: +212 6 XX-XXXXXX
        </a>

        {/* رابط الانستغرام - غيري الرابط ديالك هنا */}
        <a href="https://instagram.com/afta_academy" target="_blank" className="hover:text-pink-600 transition">
          📸 Instagram: @afta_academy
        </a>

      </div>
    </section>
  );
}