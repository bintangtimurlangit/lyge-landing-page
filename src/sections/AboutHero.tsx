"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export const AboutHero = () => {
  const heroRef = useRef(null);
  // Use useState to track if component is mounted (client-side only)
  const [isMounted, setIsMounted] = useState(false);

  // Set isMounted to true when component mounts (client-side only)
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section 
      ref={heroRef}
      className="min-h-[calc(100vh-120px)] flex items-center pt-8 pb-16 md:pt-12 md:pb-20 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#7f6ee6,#EAEEFE_100%)] overflow-hidden relative"
    >
      <div className="container px-4 sm:px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="w-full md:w-[550px] md:max-w-full">
            <div className="tag bg-white/50 inline-block px-3 py-1 rounded-full text-sm font-medium">
              Tentang Kami
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#5a23a5] text-transparent bg-clip-text mt-6">
              Membangun Masa Depan Digital UMKM Indonesia
            </h1>
            <p className="text-lg sm:text-xl text-[#010D3E] tracking-tight mt-6 max-w-xl">
              Lyge hadir untuk membantu UMKM Indonesia menghidupkan mimpi terbesar mereka melalui solusi digital yang fleksibel, efisien, dan terjangkau.
            </p>
            <div className="flex flex-wrap gap-3 items-center mt-8">
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
          
          {/* Decorative elements container - hidden on small screens, visible from md up */}
          {isMounted && (
            <div className="hidden md:block md:h-[400px] lg:h-[500px] md:flex-1 relative mt-12 md:mt-0">
              <motion.div 
                className="w-48 h-48 lg:w-64 lg:h-64 bg-gradient-to-br from-[#7f6ee6] to-[#5a23a5] rounded-full absolute top-0 right-20 opacity-70"
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
                className="w-32 h-32 lg:w-40 lg:h-40 bg-gradient-to-tr from-[#5a23a5] to-[#7f6ee6] rounded-full absolute bottom-20 right-40 opacity-60"
                style={{
                  translateY: translateY,
                }}
              />
              <motion.div 
                className="w-20 h-20 lg:w-24 lg:h-24 bg-white/30 backdrop-blur-md rounded-xl absolute top-40 right-10 rotate-12"
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
          )}
        </div>
      </div>
      
      {/* Mobile decorative elements - only visible on small screens */}
      {isMounted && (
        <>
          <div className="absolute right-0 bottom-0 md:hidden">
            <motion.div 
              className="w-40 h-40 bg-gradient-to-br from-[#7f6ee6] to-[#5a23a5] rounded-full opacity-30"
              animate={{
                translateY: [-10, 10],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 8,
                ease: "easeInOut",
              }}
            />
          </div>
          <div className="absolute left-0 top-1/2 md:hidden">
            <motion.div 
              className="w-24 h-24 bg-gradient-to-tr from-[#5a23a5] to-[#7f6ee6] rounded-full opacity-20"
              animate={{
                translateX: [-10, 10],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 6,
                ease: "easeInOut",
              }}
            />
          </div>
        </>
      )}
    </section>
  );
}; 