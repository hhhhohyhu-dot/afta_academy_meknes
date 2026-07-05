// src/app/layout.tsx
export const metadata = {
  title: "AFTA Academy | Air Flight Training Academy in Meknes",
  description: "Join AFTA Academy in Meknes for premium cabin crew and aviation training. Start your professional career today.",
  keywords: ["Aviation training", "Meknes", "Cabin crew", "Flight operations", "AFTA Academy"],
  robots: "index, follow",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body className="antialiased text-slate-900">{children}</body>
    </html>
  );
}