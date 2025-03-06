import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { DetailedContactForm } from "@/sections/DetailedContactForm";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Kontak Kami | Lyge Digital",
  description: "Hubungi Lyge Digital untuk konsultasi dan informasi lebih lanjut tentang solusi digital untuk bisnis Anda. Kami siap membantu UMKM di Indonesia.",
  alternates: {
    canonical: 'https://www.lyge.dev/kontak',
  },
  openGraph: {
    title: "Kontak Kami | Lyge Digital",
    description: "Hubungi Lyge Digital untuk konsultasi dan informasi lebih lanjut tentang solusi digital untuk bisnis Anda.",
    url: 'https://www.lyge.dev/kontak',
  },
};

export default function KontakPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Script id="contact-schema" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Kontak Lyge Digital",
            "description": "Hubungi Lyge Digital untuk konsultasi dan informasi lebih lanjut tentang solusi digital untuk bisnis Anda.",
            "url": "https://www.lyge.dev/kontak",
            "mainEntity": {
              "@type": "Organization",
              "name": "Lyge Digital",
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "email": "hello@lyge.dev"
              }
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
                "name": "Kontak",
                "item": "https://www.lyge.dev/kontak"
              }
            ]
          }
        `}
      </Script>
      <Header />
      <main className="flex-grow">
        <DetailedContactForm />
      </main>
      <Footer />
    </div>
  );
} 