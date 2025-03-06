import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import { ProductShowcase } from "@/sections/ProductShowcase";
import { Pricing } from "@/sections/Pricing";
import { Testimonials } from "@/sections/Testimonials";
import { CallToAction } from "@/sections/CallToAction";
import { Footer } from "@/sections/Footer";
import Script from "next/script";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lyge • Live Your Greatest Envision",
  description: "Solusi digital terbaik untuk UMKM di Indonesia. Kami membantu bisnis Anda berkembang dengan teknologi yang inovatif dan terjangkau.",
  alternates: {
    canonical: 'https://www.lyge.dev',
  },
};

export default function Home() {
  return (
    <>
      <Script id="schema-org" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Lyge Digital",
            "url": "https://www.lyge.dev",
            "logo": "https://www.lyge.dev/logosaas.png",
            "description": "Lyge Digital hadir untuk membantu UMKM mengembangkan solusi digital yang mumpuni dan fleksibel.",
            "address": {
              "@type": "PostalAddress",
              "addressRegion": "Jakarta",
              "addressCountry": "ID"
            },
            "sameAs": [
              "https://www.instagram.com/lyge.dev/",
              "https://www.linkedin.com/company/lyge-digital/"
            ],
            "offers": {
              "@type": "AggregateOffer",
              "offers": [
                {
                  "@type": "Offer",
                  "name": "Digital Solutions for SMEs",
                  "description": "Custom digital solutions for small and medium enterprises"
                }
              ]
            }
          }
        `}
      </Script>
      <Script id="local-business" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Lyge Digital",
            "image": "https://www.lyge.dev/logosaas.png",
            "url": "https://www.lyge.dev",
            "telephone": "+6281234567890",
            "email": "hello@lyge.dev",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Jakarta",
              "addressRegion": "DKI Jakarta",
              "addressCountry": "ID"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "-6.2088",
              "longitude": "106.8456"
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
              ],
              "opens": "09:00",
              "closes": "17:00"
            },
            "priceRange": "$$"
          }
        `}
      </Script>
      <Header />
      <Hero />
      <LogoTicker />
      <ProductShowcase />
      <Pricing />
      <Testimonials />
      <CallToAction />
      <Footer />
    </>
  );
}
