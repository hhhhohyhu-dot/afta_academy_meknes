export default function Footer({ lang }: { lang: 'ar' | 'fr' | 'en' }) {
  const content = {
    ar: { copy: "جميع الحقوق محفوظة © 2026 أكاديمية AFTA" },
    fr: { copy: "Tous droits réservés © 2026 Académie AFTA" },
    en: { copy: "All rights reserved © 2026 AFTA Academy" }
  };

  return (
    <footer className="bg-gray-900 text-white p-8 text-center mt-10">
      <div className="max-w-4xl mx-auto border-t border-gray-700 pt-6">
        <p>{content[lang].copy}</p>
      </div>
    </footer>
  );
}