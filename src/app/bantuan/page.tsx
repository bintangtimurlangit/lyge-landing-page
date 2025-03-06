import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { FAQ } from "@/sections/FAQ";
import { ContactForm } from "@/sections/ContactForm";

export default function BantuanPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
} 