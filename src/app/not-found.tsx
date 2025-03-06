'use client';

import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <section className="flex-grow flex items-center justify-center bg-gradient-to-b from-[#EAEEFE] to-white">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center px-6 py-16 md:py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block mb-8 bg-[#7f6ee6]/10 px-6 py-3 rounded-xl">
                <h1 className="text-9xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#5a23a5] text-transparent bg-clip-text">
                  404
                </h1>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
                Halaman Tidak Ditemukan
              </h2>
              
              <div className="h-1 w-20 bg-gradient-to-r from-[#7f6ee6] to-[#5a23a5] mx-auto mb-8 rounded-full"></div>
              
              <p className="text-lg md:text-xl text-[#010D3E]/80 mb-10 max-w-xl mx-auto leading-relaxed">
                Maaf, halaman yang Anda cari tidak tersedia atau sedang dalam pengembangan. 
                Silakan kembali ke beranda atau jelajahi halaman lainnya.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/" className="btn btn-primary py-3 px-6">
                  Kembali ke Beranda
                </Link>
                <Link href="/tentang-kami" className="btn btn-text py-3 px-6 gap-2">
                  <span>Tentang Kami</span>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.16699 10H15.8337" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10.833 5L15.833 10L10.833 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
} 