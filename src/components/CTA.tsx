"use client";

// 1. كنعرفو النوع ديال البيانات اللي غادي يدخل للمكون
interface CTAProps {
  lang: 'en' | 'ar';
}

// 2. كنزيدو 'lang' هنا باش React و TypeScript يعرفوه
export default function CTA({ lang }: CTAProps) {
  return (
    <section className="bg-blue-900 py-16 px-4">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
          {/* هنا كنبدلو النص حسب اللغة */}
          {lang === 'en' 
            ? "Ready to Start Your Career in Aviation or Maritime?" 
            : "هل أنت مستعد لبدء مسيرتك المهنية في الطيران أو الملاحة؟"}
        </h2>
        
        <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto">
          {lang === 'en' 
            ? "Join AFTA Academy today and get professional training that opens the doors to your future."
            : "انضم إلى أكاديمية AFTA اليوم واحصل على تدريب احترافي يفتح لك أبواب المستقبل."}
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
          <a 
            href="/register" 
            className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-full shadow-lg transition-all transform hover:scale-105"
          >
            {lang === 'en' ? "Apply Now" : "سجل الآن"}
          </a>
          <a 
            href="/programs" 
            className="w-full sm:w-auto bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 font-bold py-4 px-8 rounded-full transition-all"
          >
            {lang === 'en' ? "Explore Our Programs" : "استكشف برامجنا"}
          </a>
        </div>
      </div>
    </section>
  );
}