import { motion } from "framer-motion";

export const CompanyProfile = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-indigo-50">
      <div className="container">
        <div className="section-heading mb-16 text-center">
          <h2 className="section-title mb-6 text-4xl md:text-5xl font-bold tracking-tight">
            Cerita Kami
          </h2>
          <p className="section-description text-lg text-black/70 max-w-3xl mx-auto">
            Perjalanan Lyge dalam menghadirkan solusi digital inovatif untuk mendukung pertumbuhan UMKM Indonesia
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-white to-indigo-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-indigo-100">
              <h3 className="text-2xl font-bold mb-4 text-indigo-900">Awal Mula</h3>
              <p className="text-black/70 leading-relaxed">
                Lyge berawal dari visi sekelompok profesional teknologi yang melihat potensi besar dalam digitalisasi UMKM Indonesia. Nama kami, "Lyge" (Live Your Greatest Envision), mencerminkan komitmen kami untuk membantu pelaku usaha mewujudkan visi terbesar mereka melalui solusi digital yang tepat guna.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-white to-indigo-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-indigo-100">
              <h3 className="text-2xl font-bold mb-4 text-indigo-900">Misi Kami</h3>
              <p className="text-black/70 leading-relaxed">
                Lyge hadir dengan misi menyediakan solusi digital komprehensif yang memenuhi kebutuhan spesifik UMKM Indonesia. Kami berkomitmen mengembangkan aplikasi yang tidak hanya canggih, tetapi juga mudah digunakan dan terjangkau, sehingga dapat meningkatkan efisiensi operasional dan mendorong pertumbuhan bisnis.
              </p>
              <p className="text-indigo-700 mt-4 font-medium">
                Dari kami. Untuk UMKM Indonesia.
              </p>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-white to-indigo-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-indigo-100">
              <h3 className="text-2xl font-bold mb-4 text-indigo-900">Visi & Misi</h3>
              <div className="mb-6">
                <h4 className="font-semibold text-lg text-indigo-800">Visi:</h4>
                <p className="text-black/70 leading-relaxed">
                  "Imagine a world where your dreams come true." Kami membayangkan dunia di mana setiap UMKM memiliki akses ke teknologi yang memungkinkan mereka berkembang tanpa batas.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-lg text-indigo-800">Misi:</h4>
                <p className="text-black/70 leading-relaxed">
                  "To create a digital solution where technology meets flexibility." Kami berkomitmen menghadirkan solusi digital yang menjembatani kecanggihan teknologi dengan fleksibilitas yang dibutuhkan oleh beragam jenis usaha.
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-white to-indigo-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-indigo-100">
              <h3 className="text-2xl font-bold mb-4 text-indigo-900">Perjalanan Kami</h3>
              
              <div className="mt-8 space-y-12">
                {/* 2023 Timeline Item */}
                <div className="flex">
                  {/* Pill-shaped timeline marker */}
                  <div className="flex-shrink-0 mr-6">
                    <div className="w-12 h-20 bg-gradient-to-b from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold shadow-md">
                      <span className="text-sm">2023</span>
                    </div>
                  </div>
                  
                  <div className="bg-white/80 p-4 rounded-lg shadow-sm flex-1">
                    <h4 className="font-semibold text-lg text-indigo-800">Pendirian</h4>
                    <p className="text-black/70 leading-relaxed mt-2">
                      Lyge didirikan di kawasan Jabodetabek dengan fokus pada pengembangan sistem POS dan manajemen bisnis untuk UMKM.
                    </p>
                  </div>
                </div>
                
                {/* Kini Timeline Item */}
                <div className="flex">
                  {/* Pill-shaped timeline marker */}
                  <div className="flex-shrink-0 mr-6">
                    <div className="w-12 h-20 bg-gradient-to-b from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold shadow-md">
                      <span className="text-sm">Kini</span>
                    </div>
                  </div>
                  
                  <div className="bg-white/80 p-4 rounded-lg shadow-sm flex-1">
                    <h4 className="font-semibold text-lg text-indigo-800">Ekspansi</h4>
                    <p className="text-black/70 leading-relaxed mt-2">
                      Kami terus mengembangkan ekosistem solusi digital terintegrasi yang mencakup manajemen inventori, pembayaran, dan analitik bisnis untuk mendukung pertumbuhan UMKM Indonesia.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};