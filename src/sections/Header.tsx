'use client';

import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logosaas.png";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Header = () => {
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Set mounted state on client-side
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    if (!isMounted) return;

    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProductDropdownOpen(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node) && 
          !(event.target as Element).closest('.mobile-menu-button')) {
        setIsMobileMenuOpen(false);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMounted]);

  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        <p className="text-white/60 hidden md:block">
          Kelola bisnis Anda lebih mudah dengan sistem kasir digital
        </p>
        <div className="inline-flex gap-1 items-center">
          <p>Mulai uji coba gratis!</p>
          <ArrowRight className="w-4 h-4 inline-flex justify-center items-center" />
        </div>
      </div>
      <div className="py-5 backdrop-blur-md bg-white/5">
        <div className="container">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Image src={Logo} alt="Lyge Digital Logo" width={40} height={40} className="cursor-pointer" />
            </Link>
            
            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden mobile-menu-button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <MenuIcon className="h-5 w-5" />
            </button>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex gap-6 text-black/60 items-center">
              {/* Produk Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button 
                  className="flex items-center gap-1 text-black/60 hover:text-black transition-colors"
                  onClick={() => setIsProductDropdownOpen(!isProductDropdownOpen)}
                >
                  <span>Produk</span>
                  <svg 
                    width="12" 
                    height="12" 
                    viewBox="0 0 20 20" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className={`transform transition-transform ${isProductDropdownOpen ? 'rotate-180' : ''}`}
                  >
                    <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                
                {isMounted && (
                  <AnimatePresence>
                    {isProductDropdownOpen && (
                      <motion.div 
                        className="absolute top-full left-0 mt-2 w-48 bg-white/90 backdrop-blur-md rounded-lg shadow-lg overflow-hidden z-20 border border-[#222]/5"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="py-1">
                          <Link href="/produk/pos" className="block px-4 py-2 text-sm text-black/70 hover:bg-[#EAEEFE] hover:text-black">
                            POS (Point of Sale)
                          </Link>
                          <Link href="/produk/crm" className="block px-4 py-2 text-sm text-black/70 hover:bg-[#EAEEFE] hover:text-black">
                            CRM (Customer Relationship)
                          </Link>
                          <Link href="/produk/website" className="block px-4 py-2 text-sm text-black/70 hover:bg-[#EAEEFE] hover:text-black">
                            Website
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
              
              <a href="#" className="hover:text-black transition-colors">Hardware</a>
              <a href="/tentang-kami" className="hover:text-black transition-colors">Tentang Kami</a>
              <a href="#" className="hover:text-black transition-colors">Blog</a> 
              <a href="/bantuan" className="hover:text-black transition-colors">Bantuan</a>
              <a href="/kontak" className="hover:text-black transition-colors">Kontak</a>
              <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight hover:bg-black/80 transition-colors">
                Coba Sekarang!
              </button>
            </nav>
          </div>
          
          {/* Mobile Menu */}
          {isMounted && (
            <AnimatePresence>
              {isMobileMenuOpen && (
                <motion.div 
                  ref={mobileMenuRef}
                  className="lg:hidden mt-4 bg-white/90 backdrop-blur-md rounded-lg shadow-lg overflow-hidden border border-[#222]/5"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <motion.nav 
                    className="flex flex-col py-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    <button 
                      className="px-4 py-2 text-left text-black/70 hover:bg-[#EAEEFE] hover:text-black flex items-center justify-between"
                      onClick={() => setIsProductDropdownOpen(!isProductDropdownOpen)}
                    >
                      <span>Produk</span>
                      <motion.svg 
                        width="12" 
                        height="12" 
                        viewBox="0 0 20 20" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                        animate={{ rotate: isProductDropdownOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </motion.svg>
                    </button>
                    
                    <AnimatePresence>
                      {isProductDropdownOpen && (
                        <motion.div 
                          className="bg-[#EAEEFE]/50 pl-6"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Link href="/produk/pos" className="block px-4 py-2 text-sm text-black/70 hover:bg-[#EAEEFE] hover:text-black">
                            POS (Point of Sale)
                          </Link>
                          <Link href="/produk/crm" className="block px-4 py-2 text-sm text-black/70 hover:bg-[#EAEEFE] hover:text-black">
                            CRM (Customer Relationship)
                          </Link>
                          <Link href="/produk/website" className="block px-4 py-2 text-sm text-black/70 hover:bg-[#EAEEFE] hover:text-black">
                            Website
                          </Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    
                    <a href="#" className="px-4 py-2 text-black/70 hover:bg-[#EAEEFE] hover:text-black">
                      Hardware
                    </a>
                    <a href="/tentang-kami" className="px-4 py-2 text-black/70 hover:bg-[#EAEEFE] hover:text-black">
                      Tentang Kami
                    </a>
                    <a href="#" className="px-4 py-2 text-black/70 hover:bg-[#EAEEFE] hover:text-black">
                      Blog
                    </a>
                    <a href="/bantuan" className="px-4 py-2 text-black/70 hover:bg-[#EAEEFE] hover:text-black">
                      Bantuan
                    </a>
                    <a href="/kontak" className="px-4 py-2 text-black/70 hover:bg-[#EAEEFE] hover:text-black">
                      Kontak
                    </a>
                    <div className="px-4 py-2">
                      <button className="w-full bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight">
                        Coba Sekarang!
                      </button>
                    </div>
                  </motion.nav>
                </motion.div>
              )}
            </AnimatePresence>
          )}
        </div>
      </div>
    </header>
  );
};
