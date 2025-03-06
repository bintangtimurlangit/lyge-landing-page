'use client';

import { useEffect, useState } from 'react';

export const AndroidScrollFix = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Set mounted state
    setIsMounted(true);
    
    // Function to detect Android devices
    const isAndroid = () => {
      if (typeof window === 'undefined') return false;
      return /Android/i.test(navigator.userAgent);
    };

    if (isAndroid()) {
      // Create and inject Android-specific styles
      const style = document.createElement('style');
      style.innerHTML = `
        html, body {
          position: relative;
          height: 100%;
          width: 100%;
          overflow-x: hidden;
        }
        body {
          overflow-y: auto !important;
          overscroll-behavior-y: none;
          touch-action: pan-y;
        }
        * {
          -webkit-tap-highlight-color: transparent;
        }
        /* Fix for Android Chrome overscroll glow effect */
        body {
          overscroll-behavior: none;
        }
        /* Fix for Android momentum scrolling issues */
        .overflow-scroll {
          -webkit-overflow-scrolling: touch;
        }
        /* Fix for Android pull-to-refresh */
        html {
          overscroll-behavior-y: none;
        }
      `;
      document.head.appendChild(style);
      
      // Add a class to the body for potential CSS targeting
      document.body.classList.add('android-device');
      
      // Add a data attribute that can be checked
      document.documentElement.setAttribute('data-android-fix', 'true');
      
      return () => {
        // Clean up
        document.head.removeChild(style);
        document.body.classList.remove('android-device');
        document.documentElement.removeAttribute('data-android-fix');
      };
    }
    
    return () => {};
  }, []);

  return null;
}; 