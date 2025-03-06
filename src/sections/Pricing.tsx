"use client";

import CheckIcon from "@/assets/check.svg";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

const pricingTiers = [
  {
    title: "Basic",
    monthlyPrice: 99000,
    buttonText: "Mulai Gratis",
    popular: false,
    inverse: false,
    features: [
      "Basic POS features",
      "Single outlet",
      "Basic reporting",
      "1 user only",
      "Basic inventory",
      "Dokumentasi",
    ],
  },
  {
    title: "Standard",
    monthlyPrice: 249000,
    buttonText: "Coba Sekarang",
    popular: true,
    inverse: true,
    features: [
      "Semua fitur Basic",
      "GoFood & GrabFood integration",
      "Full inventory management",
      "Multi-user access",
      "24/7 staff support",
      "Adjustment methods",
      "Table order integration",
    ],
  },
  {
    title: "Premium",
    monthlyPrice: 399000,
    buttonText: "Hubungi Kami",
    popular: false,
    inverse: false,
    features: [
      "Semua fitur Standard",
      "Unlimited outlet integration",
      "Unlimited users",
      "Priority 24/7 support",
      "Advanced analytics",
      "Royalty program",
    ],
  },
];

export const Pricing = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-title">Pilih Paket Sesuai Kebutuhan Anda</h2>
          <p className="section-description mt-5">
            Mulai gratis 14 hari. Upgrade kapan saja untuk fitur lebih lengkap dan dukungan premium.
          </p>
        </div>
        <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center">
            {pricingTiers.map(({
              title,
              monthlyPrice,
              buttonText,
              popular,
              inverse,
              features
            }, index) => (
              <div 
                key={`card-${index}`}
                className={twMerge(
                  "card w-full max-w-[400px] h-full flex flex-col",
                  inverse === true && "border-black bg-black text-white"
                )}
              >
                <div className="flex justify-between items-center">
                  <h3
                    className={twMerge(
                      "text-lg font-bold",
                      inverse === true && "text-white/60"
                    )}
                  >
                    {title}
                  </h3>
                  {popular === true && (
                    <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20">
                      <motion.span 
                        animate={{
                          backgroundPositionX: "100%",
                        }}
                        transition={{
                          repeat: Infinity,
                          repeatType: "loop",
                          duration: 1,
                          ease: "linear",
                        }}
                        className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF)] [background-size:200%] text-transparent bg-clip-text font-medium"
                      >
                        Populer
                      </motion.span>
                    </div>
                  )}
                </div>
                <div className="flex flex-col mt-[30px]">
                  <span className="text-4xl font-bold tracking-tighter leading-none">
                    Rp{monthlyPrice.toLocaleString('id-ID')}
                  </span>
                  <span 
                    className={twMerge(
                      "text-sm tracking-tight font-medium text-black/50 mt-1",
                      inverse === true && "text-white/50"
                    )}
                  >
                    /bulan/outlet
                  </span>
                </div>
                <button 
                  className={twMerge(
                    "btn btn-primary w-full mt-[30px]", 
                    inverse === true && "bg-white text-black"
                  )}
                >
                  {buttonText}
                </button>
                <ul className="flex flex-col gap-5 mt-8 flex-grow">
                  {features.map((feature, featureIndex) => (
                    <li key={`feature-${featureIndex}`} className="text-sm flex items-start gap-4">
                      <CheckIcon className="w-6 h-6 flex-shrink-0 mt-0.5" />
                      <span className="flex-grow">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};
