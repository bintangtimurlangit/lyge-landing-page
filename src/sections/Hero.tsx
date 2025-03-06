"use client";

import ArrowIcon from "@/assets/arrow-right.svg";
import cogImage from "@/assets/cog.png";
import cylinderImage from "@/assets/cylinder.png";
import noodleImage from "@/assets/noodle.png";
import Image from "next/image";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useRef } from "react";

export const Hero = () => {
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
          <div className="md:w-[478px]">
            <div className="tag">
              Terbaru dari Lyge
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#5a23a5] text-transparent bg-clip-text mt-6">
              Wujudkan Bisnis Impian Anda
            </h1>
            <p className="text-xl text-[#010D3E] tracking-tight mt-6">
              Memperkenalkan sistem kasir digital yang fleksibel, handal, dan mudah digunakan untuk UMKM Indonesia
            </p>
            <div className="flex gap-1 items-center mt-[30px]">
              <button className="btn btn-primary">Mulai Uji Coba</button>
              <button className="btn btn-text gap-1">
                <span>Pelajari Lebih Lanjut</span>
                <ArrowIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            <motion.img 
              src={cogImage.src} 
              alt="Cog Image" 
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
              animate={{
                translateY: [-15, 15],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 5,
                ease: "easeInOut",
              }}
            />
            <motion.img 
              src={cylinderImage.src} 
              width={220} 
              height={220}
              alt="Cylinder Image" 
              className="hidden md:block -top-8 -left-32 md:absolute"
              style={{
                translateY: translateY,
              }}
            />
            <motion.img 
              src={noodleImage.src} 
              width={220} 
              alt="Noodle Image"
              className="hidden lg:block absolute top-[524px] left-[448px] rotate-[30deg]"
              style={{
                rotate: 30,
                translateY: translateY,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
