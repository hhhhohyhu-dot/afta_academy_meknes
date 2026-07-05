/** @jsxImportSource react */
"use client";
import React from 'react';

export default function AdmissionInfo() {
  return (
    <section className="py-24 bg-white w-full" dir="rtl">
      {/* max-w-5xl و mx-auto هما اللي غيجمعو الكتيبة للوسط وميخليوهاش لاصقة فالحاشية */}
      <div className="max-w-5xl mx-auto px-6">
        
        {/* البطاقة اللي غتجمع المعلومات */}
        <div className="bg-slate-50 p-8 md:p-14 rounded-3xl shadow-sm border border-slate-200">
          
          {/* العنوان الرئيسي - كبرناه لـ text-4xl */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 inline-block border-b-4 border-blue-600 pb-4">
              شروط التسجيل والمصاريف
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            
            {/* قسم شروط الولوج */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                <span className="w-6 h-1 bg-blue-600 rounded-full"></span>
                شروط الولوج:
              </h3>
              {/* كبرنا الخط لـ text-xl */}
              <ul className="space-y-6 text-xl text-slate-700 font-medium">
                <li className="flex items-center gap-3">
                  <span className="w-3 h-3 bg-blue-500 rounded-full shrink-0"></span>
                  <span><strong className="text-slate-900">العمر:</strong> بين 17 و 29 سنة</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-3 h-3 bg-blue-500 rounded-full shrink-0"></span>
                  <span><strong className="text-slate-900">المستوى:</strong> Niveau Bac أو Bac</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-3 h-3 bg-blue-500 rounded-full shrink-0"></span>
                  <span><strong className="text-slate-900">الطول:</strong> 1.57م (إناث) و 1.60م (ذكور)</span>
                </li>
              </ul>
            </div>

            {/* قسم المصاريف */}
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                <span className="w-6 h-1 bg-blue-600 rounded-full"></span>
                المصاريف:
              </h3>
              <ul className="space-y-6 text-xl text-slate-700">
                <li className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-slate-100 pb-4 gap-2">
                  <span className="font-medium">التسجيل والتأمين:</span> 
                  <span className="font-black text-blue-700 bg-blue-50 px-4 py-1 rounded-lg">3000 - 4000 درهم</span>
                </li>
                <li className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-slate-100 pb-4 gap-2">
                  <span className="font-medium">مضيف طيران:</span> 
                  <span className="font-black text-slate-900">2200 درهم/شهرياً</span>
                </li>
                <li className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                  <span className="font-medium">وكلاء الأسفار:</span> 
                  <span className="font-black text-slate-900">1700 درهم/شهرياً</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}