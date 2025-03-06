'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export const DetailedContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#7f6ee6,#EAEEFE_100%)] opacity-80"></div>
      
      {/* Hero section */}
      <div className="relative pt-16 pb-10 md:pt-24 md:pb-16">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
                      <div className="h-1 w-32 bg-gradient-to-r from-[#7f6ee6] to-[#5a23a5] mx-auto mb-10 rounded-full"></div>
            <h1 className="text-4xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mb-4">Hubungi Kami</h1>
            <p className="text-lg text-[#010D3E] mb-8">
              Kami siap membantu Anda. Hubungi kami melalui formulir atau kunjungi kantor kami.
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* Main content */}
      <div className="relative pb-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            
            {/* Contact information card */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full lg:w-1/3 bg-white rounded-3xl shadow-[0_7px_14px_#EAEAEA] overflow-hidden"
            >
              <div className="bg-gradient-to-r from-[#7f6ee6] to-[#5e4fc1] px-6 py-8 text-white">
                <h2 className="text-2xl font-bold mb-4">Informasi Kontak</h2>
                <p className="opacity-90">Hubungi kami melalui informasi di bawah ini atau kirim pesan melalui formulir.</p>
              </div>
              
              <div className="p-6">
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <div className="w-8 h-8 bg-[#7f6ee6]/10 rounded-full flex items-center justify-center flex-shrink-0 mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#7f6ee6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    Alamat
                  </h3>
                  <p className="text-[#010D3E]/70 ml-10">
                    Jl. Regensi Melati Mas C-D<br />
                    Blok 5 No. 17<br />
                    Tangerang Selatan, 15323<br />
                    Indonesia
                  </p>
                </div>
                
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <div className="w-8 h-8 bg-[#7f6ee6]/10 rounded-full flex items-center justify-center flex-shrink-0 mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#7f6ee6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    Telepon
                  </h3>
                  <p className="text-[#010D3E]/70 ml-10">
                    -
                  </p>
                </div>
                
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <div className="w-8 h-8 bg-[#7f6ee6]/10 rounded-full flex items-center justify-center flex-shrink-0 mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#7f6ee6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    Email
                  </h3>
                  <p className="text-[#010D3E]/70 ml-10">
                    hi@lyge.id
                  </p>
                </div>
                
                <div className="mb-8">
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <div className="w-8 h-8 bg-[#7f6ee6]/10 rounded-full flex items-center justify-center flex-shrink-0 mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#7f6ee6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    Jam Operasional
                  </h3>
                  <div className="text-[#010D3E]/70 ml-10">
                    <div className="flex justify-between mb-1">
                      <span>Senin - Jumat:</span>
                      <span>09:00 - 17:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Minggu & Hari Libur:</span>
                      <span>Tutup</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Ikuti Kami</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="w-10 h-10 rounded-full bg-[#7f6ee6]/10 flex items-center justify-center text-[#7f6ee6] hover:bg-[#7f6ee6] hover:text-white transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-[#7f6ee6]/10 flex items-center justify-center text-[#7f6ee6] hover:bg-[#7f6ee6] hover:text-white transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-[#7f6ee6]/10 flex items-center justify-center text-[#7f6ee6] hover:bg-[#7f6ee6] hover:text-white transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-[#7f6ee6]/10 flex items-center justify-center text-[#7f6ee6] hover:bg-[#7f6ee6] hover:text-white transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Contact form */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="w-full lg:w-2/3 bg-white rounded-3xl shadow-[0_7px_14px_#EAEAEA] p-8"
            >
              {submitSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16"
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Terima Kasih!</h3>
                  <p className="text-[#010D3E]/70 mb-6">Pesan Anda telah berhasil dikirim. Tim kami akan segera menghubungi Anda.</p>
                  <button 
                    onClick={() => setSubmitSuccess(false)}
                    className="px-6 py-3 bg-gradient-to-r from-[#7f6ee6] to-[#5e4fc1] text-white rounded-lg hover:opacity-90 transition-opacity"
                  >
                    Kirim Pesan Lain
                  </button>
                </motion.div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-[#7f6ee6] to-[#5e4fc1] text-transparent bg-clip-text">Kirim Pesan</h2>
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-[#010D3E]/70 mb-1">Nama Lengkap</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-[#222]/10 focus:outline-none focus:ring-2 focus:ring-[#7f6ee6]/50 focus:border-transparent"
                          placeholder="Masukkan nama lengkap Anda"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-[#010D3E]/70 mb-1">Email</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-[#222]/10 focus:outline-none focus:ring-2 focus:ring-[#7f6ee6]/50 focus:border-transparent"
                          placeholder="Masukkan alamat email Anda"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-[#010D3E]/70 mb-1">Nomor Telepon</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-[#222]/10 focus:outline-none focus:ring-2 focus:ring-[#7f6ee6]/50 focus:border-transparent"
                          placeholder="Masukkan nomor telepon Anda"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-[#010D3E]/70 mb-1">Perusahaan (Opsional)</label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-[#222]/10 focus:outline-none focus:ring-2 focus:ring-[#7f6ee6]/50 focus:border-transparent"
                          placeholder="Masukkan nama perusahaan Anda"
                        />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="subject" className="block text-sm font-medium text-[#010D3E]/70 mb-1">Subjek</label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-[#222]/10 focus:outline-none focus:ring-2 focus:ring-[#7f6ee6]/50 focus:border-transparent"
                        required
                      >
                        <option value="">Pilih subjek</option>
                        <option value="Informasi Produk">Informasi Produk</option>
                        <option value="Demo Produk">Demo Produk</option>
                        <option value="Dukungan Teknis">Dukungan Teknis</option>
                        <option value="Kerjasama Bisnis">Kerjasama Bisnis</option>
                        <option value="Lainnya">Lainnya</option>
                      </select>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium text-[#010D3E]/70 mb-1">Pesan</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg border border-[#222]/10 focus:outline-none focus:ring-2 focus:ring-[#7f6ee6]/50 focus:border-transparent"
                        placeholder="Tuliskan pesan Anda di sini..."
                        required
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full py-3 px-6 rounded-lg text-white font-medium transition-all ${
                        isSubmitting 
                          ? 'bg-[#7f6ee6]/60 cursor-not-allowed' 
                          : 'bg-gradient-to-r from-[#7f6ee6] to-[#5e4fc1] hover:shadow-lg hover:shadow-[#7f6ee6]/30'
                      }`}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Mengirim...
                        </span>
                      ) : 'Kirim Pesan'}
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </div>
          
          {/* Map section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-[#7f6ee6] to-[#5e4fc1] text-transparent bg-clip-text">Lokasi Kami</h2>
            <div className="bg-white p-2 rounded-3xl shadow-[0_7px_14px_#EAEAEA] overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.4!2d106.6636056!3d-6.26127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTUnNDAuNiJTIDEwNsKwMzknNDkuMCJF!5e0!3m2!1sen!2sid!4v1655969661000!5m2!1sen!2sid" 
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-2xl"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}; 