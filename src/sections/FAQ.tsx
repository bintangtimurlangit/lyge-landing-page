'use client';

import { useState } from 'react';

const faqItems = [
  {
    question: "Apa itu Lyge POS?",
    answer: "Lyge POS adalah platform sistem kasir digital yang dirancang khusus untuk UMKM di Indonesia. Kami menyediakan solusi yang fleksibel, handal, dan mudah digunakan untuk membantu bisnis Anda bertransformasi ke era digital."
  },
  {
    question: "Bagaimana cara memulai dengan Lyge POS?",
    answer: "Anda dapat memulai dengan mendaftar untuk uji coba gratis di website kami. Setelah itu, tim kami akan membantu Anda dalam proses setup dan memberikan pelatihan singkat tentang cara menggunakan platform kami."
  },
  {
    question: "Apakah Lyge POS menyediakan perangkat keras?",
    answer: "Ya, kami menyediakan berbagai perangkat keras yang kompatibel dengan sistem kami, termasuk mesin kasir, printer struk, scanner barcode, dan lainnya. Anda dapat melihat pilihan hardware di halaman Hardware kami."
  },
  {
    question: "Berapa biaya berlangganan Lyge POS?",
    answer: "Kami menawarkan beberapa paket berlangganan dengan harga yang bervariasi sesuai dengan kebutuhan bisnis Anda. Untuk informasi lebih lanjut, silakan kunjungi halaman Harga kami atau hubungi tim sales kami."
  },
  {
    question: "Apakah Lyge POS menyediakan layanan integrasi dengan platform lain?",
    answer: "Ya, Lyge POS dapat diintegrasikan dengan berbagai platform lain seperti marketplace, sistem akuntansi, dan aplikasi manajemen inventaris. Hubungi tim kami untuk informasi lebih lanjut tentang integrasi yang tersedia."
  },
  {
    question: "Bagaimana jika saya membutuhkan bantuan teknis?",
    answer: "Tim dukungan pelanggan kami siap membantu Anda melalui live chat, email, atau telepon. Kami juga menyediakan dokumentasi dan video tutorial yang komprehensif untuk membantu Anda menyelesaikan masalah umum."
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[#7f6ee6]/20 to-white relative overflow-hidden">
      {/* Background gradient elements */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#7f6ee6]/30 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 -right-20 w-80 h-80 bg-[#7f6ee6]/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-[#5a23a5]/20 rounded-full blur-3xl"></div>
      
      <div className="container relative z-10">
        <div className="section-heading mb-16">
          <div className="h-1 w-32 bg-gradient-to-r from-[#7f6ee6] to-[#5a23a5] mx-auto mb-10 rounded-full"></div>
          <h1 className="text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#5a23a5] text-transparent bg-clip-text mb-6">
            Pertanyaan yang Sering Diajukan
          </h1>
          <p className="text-center text-[22px] leading-[30px] tracking-tight text-[#010D3E] max-w-2xl mx-auto">
            Temukan jawaban untuk pertanyaan umum tentang Lyge POS
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <div 
              key={index} 
              className="mb-6 border border-[#7f6ee6]/20 rounded-xl overflow-hidden shadow-[0_4px_14px_rgba(127,110,230,0.25)] backdrop-blur-sm"
            >
              <button
                className={`w-full text-left p-6 flex justify-between items-center transition-colors ${
                  openIndex === index 
                    ? 'bg-gradient-to-r from-[#7f6ee6]/30 via-[#7f6ee6]/10 to-white' 
                    : 'bg-white hover:bg-[#EAEEFE]'
                }`}
                onClick={() => toggleFAQ(index)}
              >
                <h3 className={`text-lg font-medium ${openIndex === index ? 'text-[#5a23a5]' : 'text-black'}`}>
                  {item.question}
                </h3>
                <div className={`flex items-center justify-center w-7 h-7 rounded-full transition-colors ${
                  openIndex === index ? 'bg-[#7f6ee6]/40' : 'bg-[#EAEEFE]'
                }`}>
                  <svg 
                    width="14" 
                    height="14" 
                    viewBox="0 0 20 20" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className={`transform transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                  >
                    <path d="M5 7.5L10 12.5L15 7.5" stroke={openIndex === index ? "#5a23a5" : "#7f6ee6"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 bg-white ${
                  openIndex === index ? 'max-h-96 p-6 pt-0' : 'max-h-0'
                }`}
              >
                <p className="text-black/70 pt-4 border-t border-[#7f6ee6]/10">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="h-1 w-32 bg-gradient-to-r from-[#5a23a5] to-[#7f6ee6] mx-auto mt-16 rounded-full"></div>
      </div>
    </section>
  );
}; 