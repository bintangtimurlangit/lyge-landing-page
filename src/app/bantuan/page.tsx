import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { FAQ } from "@/sections/FAQ";
import { ContactForm } from "@/sections/ContactForm";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Bantuan | Lyge Digital",
  description: "Temukan jawaban atas pertanyaan umum tentang layanan Lyge Digital. Kami siap membantu Anda dengan solusi digital terbaik untuk bisnis Anda.",
  alternates: {
    canonical: 'https://www.lyge.dev/bantuan',
  },
  openGraph: {
    title: "Bantuan | Lyge Digital",
    description: "Temukan jawaban atas pertanyaan umum tentang layanan Lyge Digital.",
    url: 'https://www.lyge.dev/bantuan',
  },
};

export default function BantuanPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Script id="faq-schema" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Apa saja layanan yang ditawarkan Lyge Digital?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Lyge Digital menawarkan berbagai layanan digital untuk UMKM, termasuk pengembangan website, aplikasi mobile, sistem manajemen, dan konsultasi digital."
                }
              },
              {
                "@type": "Question",
                "name": "Berapa biaya untuk menggunakan layanan Lyge Digital?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Biaya layanan Lyge Digital bervariasi tergantung kebutuhan dan skala proyek Anda. Kami menawarkan paket yang fleksibel dan terjangkau untuk UMKM."
                }
              }
            ]
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
                "name": "Bantuan",
                "item": "https://www.lyge.dev/bantuan"
              }
            ]
          }
        `}
      </Script>
      <Header />
      <main className="flex-grow">
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
} 