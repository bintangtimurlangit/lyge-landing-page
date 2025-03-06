'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, Variants } from 'framer-motion';

export const SplashScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    // Mark that we're past the first render
    setIsFirstRender(false);
    
    // Set a minimum display time for the splash screen
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    // Block scrolling while splash screen is visible
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      clearTimeout(timer);
      // Restore scrolling when splash screen is removed
      if (typeof document !== 'undefined') {
        document.body.style.overflow = '';
      }
    };
  }, []);

  // Logo animation variants
  const logoVariants: Variants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    float: {
      y: [0, -10, 0],
      transition: { 
        duration: 3,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
      }
    }
  };

  // Text animation variants
  const textVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        delay: 0.8,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }
    }
  };

  // Liquid background animation variants
  const liquidVariants: Variants = {
    hidden: { 
      scale: 0, 
      opacity: 0,
      borderRadius: "50% 50% 50% 50% / 50% 50% 50% 50%"
    },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      }
    },
    animate: {
      scale: [1, 1.05, 0.98, 1.02, 1],
      borderRadius: [
        "60% 40% 30% 70% / 60% 30% 70% 40%",
        "30% 60% 70% 40% / 50% 60% 30% 60%",
        "60% 40% 30% 70% / 60% 30% 70% 40%",
        "40% 60% 70% 30% / 40% 50% 60% 50%",
        "60% 40% 30% 70% / 60% 30% 70% 40%"
      ],
      transition: { 
        duration: 8,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
      }
    }
  };

  // Smaller blob variants
  const blobVariants: Variants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i: number) => ({ 
      scale: 1, 
      opacity: 0.7,
      transition: { 
        delay: 0.2 * i,
        duration: 1,
        ease: "easeOut"
      }
    }),
    animate: (i: number) => ({
      x: i % 2 === 0 ? [0, 15, -10, 0] : [0, -15, 10, 0],
      y: i % 2 === 0 ? [0, -10, 15, 0] : [0, 10, -15, 0],
      scale: [1, 1.1, 0.9, 1],
      borderRadius: [
        "60% 40% 30% 70% / 60% 30% 70% 40%",
        "40% 60% 70% 30% / 40% 50% 60% 50%",
        "30% 60% 70% 40% / 50% 60% 30% 60%",
        "60% 40% 30% 70% / 60% 30% 70% 40%"
      ],
      transition: { 
        duration: 6 + i,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
      }
    })
  };

  // Gradient overlay animation
  const gradientOverlayVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 0.8,
      transition: { 
        duration: 1.2,
        ease: "easeOut"
      }
    },
    animate: {
      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
      transition: { 
        duration: 15,
        repeat: Infinity,
        ease: "easeInOut",
      }
    }
  };

  // If we're on the first render, show a static version of the splash screen
  // This ensures something is shown immediately during SSR
  if (isFirstRender) {
    return (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#EAEEFE] overflow-hidden">
        <div className="relative z-10 flex flex-col items-center">
          <div className="relative w-40 h-40 mb-6">
            <Image
              src="/logosaas.png"
              alt="Lyge Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="overflow-visible py-4">
            <h1 
              className="text-5xl font-bold text-transparent"
              style={{ 
                background: 'linear-gradient(to right, #4f46e5, #9333ea, #3b82f6)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                textShadow: '0 4px 12px rgba(104, 109, 224, 0.5)',
                paddingBottom: '8px',
                letterSpacing: '-0.05em'
              }}
            >
              Lyge
            </h1>
          </div>
        </div>
      </div>
    );
  }

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#EAEEFE] overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
          }}
        >
          {/* Animated gradient overlay */}
          <motion.div 
            className="absolute inset-0 z-0"
            style={{
              background: 'linear-gradient(-45deg, rgba(88, 28, 230, 0.2), rgba(123, 97, 255, 0.2), rgba(56, 189, 248, 0.2), rgba(167, 139, 250, 0.2))',
              backgroundSize: '400% 400%',
            }}
            variants={gradientOverlayVariants}
            initial="hidden"
            animate={["visible", "animate"]}
          />
          
          {/* Main liquid background */}
          <motion.div
            className="absolute w-[450px] h-[450px] bg-gradient-to-br from-indigo-600/30 via-purple-500/30 to-blue-400/30 rounded-full filter blur-xl"
            variants={liquidVariants}
            initial="hidden"
            animate={["visible", "animate"]}
          />
          
          {/* Additional liquid blobs for more dynamic effect */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full filter blur-lg"
              style={{
                top: `${35 + (i * 12)}%`,
                left: `${30 + (i * 8)}%`,
                width: `${80 + i * 30}px`,
                height: `${80 + i * 30}px`,
                background: i % 3 === 0 
                  ? 'linear-gradient(135deg, rgba(79, 70, 229, 0.4) 0%, rgba(147, 51, 234, 0.4) 100%)' 
                  : i % 3 === 1
                    ? 'linear-gradient(135deg, rgba(56, 189, 248, 0.4) 0%, rgba(99, 102, 241, 0.4) 100%)'
                    : 'linear-gradient(135deg, rgba(139, 92, 246, 0.4) 0%, rgba(59, 130, 246, 0.4) 100%)',
                opacity: 0.7 - (i * 0.05)
              }}
              variants={blobVariants}
              initial="hidden"
              animate={["visible", "animate"]}
              custom={i}
            />
          ))}
          
          {/* Shimmering effect */}
          <motion.div
            className="absolute inset-0 z-0"
            style={{
              background: 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 80%)',
              opacity: 0.6
            }}
            animate={{
              opacity: [0.4, 0.6, 0.4],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <div className="relative z-10 flex flex-col items-center">
            {/* Logo */}
            <motion.div
              className="relative w-40 h-40 mb-6"
              variants={logoVariants}
              initial="hidden"
              animate={["visible", "float"]}
            >
              <Image
                src="/logosaas.png"
                alt="Lyge Logo"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
            
            {/* Text with normal spacing and proper shadow */}
            <motion.div
              className="overflow-visible py-4" 
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              <h1 
                className="text-5xl font-bold text-transparent"
                style={{ 
                  background: 'linear-gradient(to right, #4f46e5, #9333ea, #3b82f6)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  textShadow: '0 4px 12px rgba(104, 109, 224, 0.5)',
                  paddingBottom: '8px',
                  letterSpacing: '-0.05em'
                }}
              >
                Lyge
              </h1>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}; 