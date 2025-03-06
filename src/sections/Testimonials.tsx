"use client";

import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import React from "react";

const testimonials = [
  {
    text: "Sistem POS ini sangat membantu bisnis resto saya. Integrasi dengan GoFood dan GrabFood membuat pesanan online jadi lebih mudah dikelola.",
    imageSrc: avatar1.src,
    name: "Budi Santoso",
    username: "@budisantoso.resto",
  },
  {
    text: "Fitur manajemen stok dan laporan penjualan sangat membantu saya memantau bisnis. Support tim teknisnya juga responsif.",
    imageSrc: avatar2.src,
    name: "Dewi Lestari",
    username: "@dewi.cafe",
  },
  {
    text: "Awalnya ragu pakai sistem digital, tapi ternyata mudah digunakan. Sekarang semua transaksi jadi lebih rapi dan terkontrol.",
    imageSrc: avatar3.src,
    name: "Ahmad Ridwan",
    username: "@ridwanwarung",
  },
  {
    text: "Yang saya suka adalah bisa tetap beroperasi meski internet mati. Cocok untuk kondisi di Indonesia.",
    imageSrc: avatar4.src,
    name: "Sari Mulyani",
    username: "@sarikuliner",
  },
  {
    text: "Dengan 3 cabang resto, POS ini memudahkan saya memantau semuanya dari satu aplikasi. Laporan konsolidasi sangat membantu.",
    imageSrc: avatar5.src,
    name: "Hendro Wibowo",
    username: "@hendrofnb",
  },
  {
    text: "Fitur manajemen dapur dan tracking bahan baku membantu kami mengontrol food cost dengan lebih baik.",
    imageSrc: avatar6.src,
    name: "Linda Kusuma",
    username: "@lindakitchen",
  },
  {
    text: "Proses training karyawan jadi lebih cepat karena sistemnya user-friendly. Sangat cocok untuk UMKM seperti kami.",
    imageSrc: avatar7.src,
    name: "Rudi Hartono",
    username: "@rudicatering",
  },
  {
    text: "Setelah pakai POS ini, masalah salah input pesanan berkurang drastis. Operasional jadi lebih efisien.",
    imageSrc: avatar8.src,
    name: "Maya Wijaya",
    username: "@mayacafe",
  },
  {
    text: "Sistem pembayaran yang lengkap dan laporan keuangan yang detail sangat membantu bisnis kami berkembang.",
    imageSrc: avatar9.src,
    name: "Irfan Hakim",
    username: "@irfanresto",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonalsColumn = (props: { 
  className?: string; 
  testimonials: typeof testimonials 
  duration?: number
}) => {
  return (
    <div className={props.className}>
      <motion.div 
        animate={{ 
          translateY: "-50%" 
        }} 
        transition={{ 
          repeat: Infinity, 
          repeatType: "loop", 
          ease: "linear", 
          duration: props.duration || 10 
        }} 
        className="flex flex-col gap-6 pb-6">
        {[...new Array(2)].fill(0).map((_, index) => (
          <React.Fragment key={index}>
            {props.testimonials.map(({ text, imageSrc, name, username }, idx) => (
              <div className="card" key={`${name}-${idx}`}>
                <div>{text}</div>
                <div className="flex items-center gap-2 mt-5">
                  <Image 
                    src={imageSrc} 
                    alt={name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div className="flex flex-col">
                    <div className="font-medium tracking-tight leading-5">
                      {name}
                    </div>
                    <div className="leading-5 tracking-tight">{username}</div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

export const Testimonials = () => {
  return (
    <section className="bg-white">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Testimonials</div>
          </div>
          <h2 className="section-title mt-5">
            Dipercaya oleh UMKM
          </h2>
          <p className="section-description mt-5">
            Dengarkan langsung dari para pemilik bisnis yang telah merasakan kemudahan mengelola usaha dengan sistem POS kami.
          </p>
        </div>
        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden">
          <TestimonalsColumn 
            testimonials={firstColumn} 
            duration={15} 
          />
          <TestimonalsColumn 
            testimonials={secondColumn} 
            className="hidden md:block" 
            duration={19} 
          />
          <TestimonalsColumn 
            testimonials={thirdColumn} 
            className="hidden lg:block"
            duration={17} 
          />
        </div>
      </div>
    </section>
  );
};
