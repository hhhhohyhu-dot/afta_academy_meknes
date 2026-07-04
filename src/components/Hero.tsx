"use client";
import { translations } from "./translations";

export default function Hero({ lang }: { lang: 'en' | 'ar' }) {
  const t = (translations as any)[lang];

  return (
    <section className="py-12 flex flex-col gap-12 text-slate-900">
      
      {/* القسم 1: اللوغو والمعلومات الرئيسية */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
        {/* صورة اللوغو - بالسمية الكاملة لي حطيتي */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <img 
            src="/641438773_18305866186274799_357006243705264644_n.jpg" 
            alt="AFTA Academy Logo" 
            className="w-full max-w-[400px] object-contain drop-shadow-md"
          />
        </div>
        
        {/* النصوص والأزرار */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-start gap-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-slate-800">
            {t.heroMainTitle}
          </h1>
          <p className="text-lg md:text-xl text-slate-600 font-medium">
            {t.heroMainDesc}
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start mt-2">
            <button className="bg-[#1e293b] text-white px-8 py-3.5 rounded-lg font-bold hover:bg-slate-700 transition-colors shadow-lg">
              {t.btnAviation}
            </button>
            <button className="bg-[#1e293b] text-white px-8 py-3.5 rounded-lg font-bold hover:bg-slate-700 transition-colors shadow-lg">
              {t.btnMaritime}
            </button>
          </div>
        </div>
      </div>

      {/* القسم 2: مسار الطيران (صورة + نص) */}
      <div className="flex flex-col md:flex-row bg-slate-50/80 rounded-[2rem] overflow-hidden shadow-sm border border-slate-100">
        <div className="w-full md:w-1/2 relative min-h-[300px]">
          <img 
            src="/aviation.jpg" 
            alt="Aviation Track" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            {t.aviationTitle}
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed font-medium">
            {t.aviationDesc}
          </p>
        </div>
      </div>

      {/* القسم 3: مسار الملاحة البحرية (صورة + نص) */}
      <div className="flex flex-col md:flex-row-reverse bg-slate-50/80 rounded-[2rem] overflow-hidden shadow-sm border border-slate-100">
        <div className="w-full md:w-1/2 relative min-h-[300px]">
          <img 
            src="/maritime.jpg" 
            alt="Maritime Track" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            {t.maritimeTitle}
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed font-medium">
            {t.maritimeDesc}
          </p>
        </div>
      </div>

    </section>
  );
}