"use client";

export default function CTA() {
  return (
    <section className="bg-blue-900 py-16 px-4">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
          Ready to Start Your Career in Aviation or Maritime?
        </h2>
        <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto">
          Join AFTA Academy today and get professional training that opens the doors to your future.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
          <a 
            href="/register" 
            className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-full shadow-lg transition-all transform hover:scale-105"
          >
            Apply Now
          </a>
          <a 
            href="/programs" 
            className="w-full sm:w-auto bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 font-bold py-4 px-8 rounded-full transition-all"
          >
            Explore Our Programs
          </a>
        </div>
      </div>
    </section>
  );
}