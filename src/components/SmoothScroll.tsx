'use client';

import { useEffect, useState } from 'react';
import Lenis from 'lenis';

export const SmoothScroll = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Set mounted state
    setIsMounted(true);

    // Function to detect iOS devices
    const isIOS = () => {
      if (typeof window === 'undefined') return false;
      
      return [
        'iPad Simulator',
        'iPhone Simulator',
        'iPod Simulator',
        'iPad',
        'iPhone',
        'iPod'
      ].includes(navigator.platform)
      // iPad on iOS 13 detection
      || (navigator.userAgent.includes("Mac") && "ontouchend" in document);
    };

    // Check if the device is touch-enabled
    const isTouchDevice = 
      typeof window !== 'undefined' && 
      ('ontouchstart' in window || 
       navigator.maxTouchPoints > 0);
    
    // Skip Lenis initialization on iOS devices
    if (isIOS()) {
      return () => {};
    }
    
    // Only apply Lenis on desktop devices
    if (!isTouchDevice) {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        wheelMultiplier: 1,
        orientation: 'vertical',
        smoothWheel: true,
      });

      // Define the animation frame callback
      const rafCallback = (time: number) => {
        lenis.raf(time);
        requestAnimationFrame(rafCallback);
      };

      // Start the animation loop
      requestAnimationFrame(rafCallback);

      // Handle resize events to recalculate scroll dimensions
      const resizeObserver = new ResizeObserver(() => {
        lenis.resize();
      });
      
      resizeObserver.observe(document.body);

      return () => {
        lenis.destroy();
        resizeObserver.disconnect();
      };
    }
    
    return () => {};
  }, []);

  return null;
}; 