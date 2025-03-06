"use client";
import bowboLogo from "@/assets/logo-bowboxpress.png";
import hygieLogo from "@/assets/logo-hygiefreshmart.png";
import mknLogo from "@/assets/logo-marokulinernusantara.png";
import majLogo from "@/assets/logo-maroanugrahjaya.png";
import wbnjLogo from "@/assets/logo-wadahberkahnusantarajaya.png";
import Image from "next/image";
import { motion } from "framer-motion";

export const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div 
            className="flex gap-14 flex-none pr-14" 
            animate={{
              translateX: "-50%",
            }} 
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            <Image src={bowboLogo} alt="Bowbo Xpress Logo" width={180} height={60} className="h-[60px] w-auto object-contain" />
            <Image src={hygieLogo} alt="Hygie Freshmart Logo" width={180} height={60} className="h-[60px] w-auto object-contain" />
            <Image src={mknLogo} alt="Maro Kuliner Nusantara Logo" width={180} height={60} className="h-[60px] w-auto object-contain" />
            <Image src={majLogo} alt="Maro Anugrah Jaya Logo" width={180} height={60} className="h-[60px] w-auto object-contain" />
            <Image src={wbnjLogo} alt="Wadah Berkah Nusantara Logo" width={180} height={60} className="h-[60px] w-auto object-contain" />
            
            <Image src={bowboLogo} alt="Bowbo Xpress Logo" width={180} height={60} className="h-[60px] w-auto object-contain" />
            <Image src={hygieLogo} alt="Hygie Freshmart Logo" width={180} height={60} className="h-[60px] w-auto object-contain" />
            <Image src={mknLogo} alt="Maro Kuliner Nusantara Logo" width={180} height={60} className="h-[60px] w-auto object-contain" />
            <Image src={majLogo} alt="Maro Anugrah Jaya Logo" width={180} height={60} className="h-[60px] w-auto object-contain" />
            <Image src={wbnjLogo} alt="Wadah Berkah Nusantara Logo" width={180} height={60} className="h-[60px] w-auto object-contain" />
            
          </motion.div>
        </div>
      </div>
    </div>
  );
};
