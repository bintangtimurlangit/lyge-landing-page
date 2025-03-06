import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import { SmoothScroll } from "@/components/SmoothScroll";
import { SplashScreen } from "@/components/SplashScreen";
import { IOSScrollFix } from "@/components/IOSScrollFix";
import { AndroidScrollFix } from "@/components/AndroidScrollFix";
import Script from "next/script";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.lyge.dev'),
  title: {
    default: "Lyge • Live Your Greatest Envision",
    template: "%s | Lyge Digital"
  },
  description: "Lyge Digital hadir untuk membantu UMKM mengembangkan solusi digital yang mumpuni dan fleksibel. Kami berkomitmen mewujudkan efisiensi kinerja bisnis Anda melalui teknologi digital yang inovatif. Bermula dari mimpi para pemuda, kini kami siap melayani kebutuhan digital Anda di seluruh Indonesia.",
  keywords: ["UMKM", "digital solution", "web development", "mobile app", "Indonesia", "digital agency", "teknologi digital", "efisiensi bisnis"],
  authors: [{ name: "Lyge Digital Team" }],
  creator: "Lyge Digital",
  publisher: "Lyge Digital",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
    languages: {
      'id-ID': 'https://www.lyge.dev',
    },
  },
  openGraph: {
    title: "Lyge • Live Your Greatest Envision",
    description: "Lyge Digital hadir untuk membantu UMKM mengembangkan solusi digital yang mumpuni dan fleksibel. Kami berkomitmen mewujudkan efisiensi kinerja bisnis Anda melalui teknologi digital yang inovatif.",
    url: 'https://www.lyge.dev',
    siteName: 'Lyge Digital',
    locale: 'id_ID',
    type: 'website',
    images: [
      {
        url: 'https://www.lyge.dev/logosaas.png',
        width: 1200,
        height: 630,
        alt: 'Lyge Digital Logo',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Lyge • Live Your Greatest Envision",
    description: "Solusi digital terbaik untuk UMKM di Indonesia",
    images: ['https://www.lyge.dev/logosaas.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'cMrfRZwoxpvH3QRf1qWx7dzu_OEzGAQx7Irs268XEEw',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="relative scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.lyge.dev" />
        <meta name="geo.region" content="ID-JK" />
        <meta name="geo.placename" content="Jakarta" />
        <meta name="geo.position" content="-6.2088;106.8456" />
        <meta name="ICBM" content="-6.2088, 106.8456" />
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
        <AndroidScrollFix />
        <SplashScreen />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
