import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { DetailedContactForm } from "@/sections/DetailedContactForm";

export default function KontakPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <DetailedContactForm />
      </main>
      <Footer />
    </div>
  );
} 