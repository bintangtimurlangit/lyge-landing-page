"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const AboutHero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section 
      ref={heroRef}
      className="min-h-[calc(100vh-120px)] flex items-center pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#7f6ee6,#EAEEFE_100%)] overflow-x-clip"
    >
      <div className="container">
        <div className="md:flex items-center">
          <div className="md:w-[550px]">
            <div className="tag bg-white/50 inline-block">
              Tentang Kami
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#5a23a5] text-transparent bg-clip-text mt-6">
              Membangun Masa Depan Digital UMKM Indonesia
            </h1>
            <p className="text-xl text-[#010D3E] tracking-tight mt-6">
              Lyge Digital hadir dengan visi untuk membantu UMKM Indonesia bertransformasi ke era digital. 
              Kami percaya bahwa setiap bisnis layak mendapatkan solusi teknologi yang terjangkau dan mudah digunakan.
            </p>
            <div className="flex gap-1 items-center mt-[30px]">
              <button className="btn btn-primary">Hubungi Kami</button>
              <button className="btn btn-text gap-1">
                <span>Lihat Produk Kami</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.16699 10H15.8337" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10.833 5L15.833 10L10.833 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
          <div className="mt-20 md:mt-0 md:h-[500px] md:flex-1 relative">
            <motion.div 
              className="w-64 h-64 bg-gradient-to-br from-[#7f6ee6] to-[#5a23a5] rounded-full absolute top-0 right-20 opacity-70"
              animate={{
                translateY: [-30, 30],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 10,
                ease: "easeInOut",
              }}
            />
            <motion.div 
              className="w-40 h-40 bg-gradient-to-tr from-[#5a23a5] to-[#7f6ee6] rounded-full absolute bottom-20 right-40 opacity-60"
              style={{
                translateY: translateY,
              }}
            />
            <motion.div 
              className="w-24 h-24 bg-white/30 backdrop-blur-md rounded-xl absolute top-40 right-10 rotate-12"
              animate={{
                rotate: [12, -12],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 5,
                ease: "easeInOut",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}; 