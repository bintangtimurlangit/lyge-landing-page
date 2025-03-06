import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import { SmoothScroll } from "@/components/SmoothScroll";
import { SplashScreen } from "@/components/SplashScreen";
import { IOSScrollFix } from "@/components/IOSScrollFix";
import Script from "next/script";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lyge • Live Your Greatest Envision",
  description: "Lyge Digital hadir untuk membantu UMKM mengembangkan solusi digital yang mumpuni dan fleksibel. Kami berkomitmen mewujudkan efisiensi kinerja bisnis Anda melalui teknologi digital yang inovatif. Bermula dari mimpi para pemuda, kini kami siap melayani kebutuhan digital Anda di wilayah Jabodetabek.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative scroll-smooth">
      <head>
        <Script id="splash-screen-preload" strategy="beforeInteractive">
          {`
            // Preload the logo image
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'image';
            link.href = '/logosaas.png';
            document.head.appendChild(link);
            
            // Add a style to prevent content flash
            const style = document.createElement('style');
            style.innerHTML = \`
              body {
                overflow: hidden;
              }
              .splash-screen-initial {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: #EAEEFE;
                z-index: 9999;
              }
            \`;
            document.head.appendChild(style);
          `}
        </Script>
      </head>
      <body className={clsx(dmSans.className, "antialiased bg-[#EAEEFE]")}>
        <IOSScrollFix />
        <SplashScreen />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
