'use client';

import { useForm } from 'react-hook-form';
import { useState } from 'react';

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [responseMessage, setResponseMessage] = useState<string | null>(null);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormData>();
  
  const onSubmit = async (formData: FormData) => {
    console.log('Form data to be sent:', formData);
    
    setIsSubmitting(true);
    setSubmitError(null);
    setResponseMessage(null);
    
    try {
      const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyktSYLSU5XMw6TNyzPhFDSJi92iemE4aq1WplcEJTEE7NIiD1dZd9PSxkyb2qVsxbL/exec';
      
      const formDataToSend = new URLSearchParams();
      formDataToSend.append('formType', 'contact');
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });
      
      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept': 'application/json',
        },
        body: formDataToSend.toString()
      });

      console.log('Response:', response);
      setResponseMessage(`Status: ${response.status} ${response.statusText}`);
      setIsSubmitting(false);
      setSubmitSuccess(true);
      reset();
      
      setTimeout(() => {
        setSubmitSuccess(false);
        setResponseMessage(null);
      }, 5000);
      
    } catch (error) {
      console.error('Error details:', error);
      setIsSubmitting(false);
      setSubmitError('Terjadi kesalahan saat mengirim pesan. Silakan coba lagi.');
    }
  };
  
  return (
    <section className="py-20 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#7f6ee6,#EAEEFE_100%)]">
      <div className="container">
        <div className="section-heading mb-16">
          <h2 className="text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mb-6">
            Perlu bantuan lebih lanjut?
          </h2>
          <p className="text-center text-[22px] leading-[30px] tracking-tight text-[#010D3E] max-w-2xl mx-auto">
            Jangan ragu untuk menghubungi tim dukungan kami
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-3xl shadow-[0_7px_14px_#EAEAEA] p-8 md:p-10">
            {submitSuccess ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12L10 17L19 8" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">Pesan Terkirim!</h3>
                <p className="text-black/60">Terima kasih telah menghubungi kami. Tim kami akan segera merespons pesan Anda.</p>
                {responseMessage && (
                  <p className="mt-4 text-sm text-gray-600">{responseMessage}</p>
                )}
              </div>
            ) : (
              <div>
                {submitError && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-600">{submitError}</p>
                  </div>
                )}
                {responseMessage && (
                  <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <p className="text-blue-600">{responseMessage}</p>
                  </div>
                )}
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-black/70 mb-2">
                        Nama Lengkap
                      </label>
                      <input
                        {...register("name", { 
                          required: "Nama lengkap wajib diisi",
                          minLength: { value: 3, message: "Nama minimal 3 karakter" }
                        })}
                        type="text"
                        id="name"
                        className={`w-full px-4 py-3 rounded-lg border border-[#222]/10 focus:outline-none focus:ring-2 focus:ring-[#7f6ee6]/50 ${errors.name ? 'border-red-500' : ''}`}
                        placeholder="Masukkan nama lengkap Anda"
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-black/70 mb-2">
                        Email
                      </label>
                      <input
                        {...register("email", {
                          required: "Email wajib diisi",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Format email tidak valid"
                          }
                        })}
                        type="email"
                        id="email"
                        className={`w-full px-4 py-3 rounded-lg border border-[#222]/10 focus:outline-none focus:ring-2 focus:ring-[#7f6ee6]/50 ${errors.email ? 'border-red-500' : ''}`}
                        placeholder="Masukkan alamat email Anda"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-sm font-medium text-black/70 mb-2">
                      Subjek
                    </label>
                    <select
                      {...register("subject", { required: "Subjek wajib dipilih" })}
                      id="subject"
                      className={`w-full px-4 py-3 rounded-lg border border-[#222]/10 focus:outline-none focus:ring-2 focus:ring-[#7f6ee6]/50 ${errors.subject ? 'border-red-500' : ''}`}
                    >
                      <option value="">Pilih subjek</option>
                      <option value="Pertanyaan Umum">Pertanyaan Umum</option>
                      <option value="Dukungan Teknis">Dukungan Teknis</option>
                      <option value="Penawaran Harga">Penawaran Harga</option>
                      <option value="Kerjasama">Kerjasama</option>
                      <option value="Lainnya">Lainnya</option>
                    </select>
                    {errors.subject && (
                      <p className="mt-1 text-sm text-red-500">{errors.subject.message}</p>
                    )}
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-black/70 mb-2">
                      Pesan
                    </label>
                    <textarea
                      {...register("message", {
                        required: "Pesan wajib diisi",
                        minLength: { value: 10, message: "Pesan minimal 10 karakter" }
                      })}
                      id="message"
                      rows={5}
                      className={`w-full px-4 py-3 rounded-lg border border-[#222]/10 focus:outline-none focus:ring-2 focus:ring-[#7f6ee6]/50 ${errors.message ? 'border-red-500' : ''}`}
                      placeholder="Tuliskan pesan Anda di sini..."
                    ></textarea>
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                    )}
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto px-8 py-3 bg-black text-white rounded-lg font-medium inline-flex items-center justify-center tracking-tight transition-colors hover:bg-black/80 disabled:bg-black/50"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Mengirim...
                      </>
                    ) : (
                      'Kirim Pesan'
                    )}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}; 