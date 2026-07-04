export default function Programs() {
  const programs = [
    {
      title: "الضيافة الجوية (Cabin Crew)",
      desc: "تكوين متخصص يشمل السلامة الجوية، الإسعافات الأولية، وتقنيات الخدمة المتميزة على متن الطائرة.",
      duration: "9 أشهر",
    },
    {
      title: "وكيل خدمات المطارات (Ground Handling)",
      desc: "تأهيل شامل لإدارة عمليات المطار، التعامل مع المسافرين، ومعالجة الأمتعة وفق المعايير الدولية.",
      duration: "6 أشهر",
    },
    {
      title: "نظم الحجز (Amadeus System)",
      desc: "تدريب تقني متقدم على نظام أماديوس العالمي لإصدار التذاكر وإدارة حجوزات الطيران.",
      duration: "3 أشهر",
    }
  ];

  return (
    <section className="py-20 bg-gray-50" dir="rtl">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">برامجنا التكوينية المعتمدة</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((prog, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 border-t-4 border-blue-600">
              <h3 className="text-2xl font-bold mb-4">{prog.title}</h3>
              <p className="text-gray-600 mb-6 min-h-[100px]">{prog.desc}</p>
              
              <div className="flex justify-between items-center mt-6">
                <span className="text-sm font-bold text-blue-600 bg-blue-50 py-2 px-4 rounded-full">
                  المدة: {prog.duration}
                </span>
                <a 
                  href="/contact" 
                  className="text-sm bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 shadow-md"
                >
                  سجل الآن
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}