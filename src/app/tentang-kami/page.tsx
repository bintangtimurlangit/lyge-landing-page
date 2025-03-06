import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { AboutHero } from "@/sections/AboutHero";
import { AboutTeam } from "@/sections/AboutTeam";
import { AboutValues } from "@/sections/AboutValues";
import { CallToAction } from "@/sections/CallToAction";
import { CompanyProfile } from "@/sections/CompanyProfile";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Tentang Kami | Lyge Digital",
  description: "Kenali lebih dekat Lyge Digital, tim muda yang berdedikasi untuk membantu UMKM di Indonesia dengan solusi digital yang inovatif dan terjangkau.",
  alternates: {
    canonical: 'https://www.lyge.dev/tentang-kami',
  },
  openGraph: {
    title: "Tentang Kami | Lyge Digital",
    description: "Kenali lebih dekat Lyge Digital, tim muda yang berdedikasi untuk membantu UMKM di Indonesia.",
    url: 'https://www.lyge.dev/tentang-kami',
  },
};

export default function TentangKami() {
  return (
    <>
      <Script id="about-schema" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "Tentang Lyge Digital",
            "description": "Kenali lebih dekat Lyge Digital, tim muda yang berdedikasi untuk membantu UMKM di Indonesia dengan solusi digital yang inovatif dan terjangkau.",
            "url": "https://www.lyge.dev/tentang-kami",
            "mainEntity": {
              "@type": "Organization",
              "name": "Lyge Digital",
              "description": "Lyge Digital hadir untuk membantu UMKM mengembangkan solusi digital yang mumpuni dan fleksibel.",
              "url": "https://www.lyge.dev"
            }
          }
        `}
      </Script>
      <Script id="breadcrumb-schema" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Beranda",
                "item": "https://www.lyge.dev"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Tentang Kami",
                "item": "https://www.lyge.dev/tentang-kami"
              }
            ]
          }
        `}
      </Script>
      <Header />
      <AboutHero />
      <CompanyProfile />
      <AboutValues />
      <AboutTeam />
      <CallToAction />
      <Footer />
    </>
  );
} 