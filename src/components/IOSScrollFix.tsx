'use client';

import { useEffect } from 'react';

export const IOSScrollFix = () => {
  useEffect(() => {
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

    if (isIOS()) {
      // Create and inject iOS-specific styles
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
          -webkit-overflow-scrolling: touch !important;
          overscroll-behavior-y: none;
          touch-action: pan-y;
        }
        * {
          -webkit-tap-highlight-color: transparent;
        }
      `;
      document.head.appendChild(style);
      
      // Add a class to the body for potential CSS targeting
      document.body.classList.add('ios-device');
      
      // Disable Lenis or any other scroll hijacking libraries
      // by adding a data attribute that can be checked
      document.documentElement.setAttribute('data-ios-fix', 'true');
      
      return () => {
        // Clean up
        document.head.removeChild(style);
        document.body.classList.remove('ios-device');
        document.documentElement.removeAttribute('data-ios-fix');
      };
    }
    
    return () => {};
  }, []);

  return null;
}; 