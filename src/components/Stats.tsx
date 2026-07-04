"use client";

// هاد "interface" هو اللي كايحل مشكلة الخطأ ديال TypeScript
interface ComponentProps {
  lang: 'ar' | 'fr' | 'en';
}

export default function Stats({ lang }: ComponentProps) {
  // هاد السطر كيضمن بلي المكون ما يطيحش الموقع
  if (!lang) return null;

  return (
    <section>
      {/* هنا كتحطي الكود ديالك القديم ديال الـ Stats */}
    </section>
  );
}