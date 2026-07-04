"use client";
import { LangType } from "../types"; 

export default function Hero({ lang }: { lang: LangType }) {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* الفيديو في الخلفية (كياخد الشاشة كاملة) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        {/* هاهو المسار بالسمية الصحيحة ديال الفيديو ديالك */}
        <source src="/videos/new-video.mp4" type="video/mp4" />
      </video>

    </section>
  );
}