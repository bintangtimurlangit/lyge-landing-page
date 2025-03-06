import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { AboutHero } from "@/sections/AboutHero";
import { AboutTeam } from "@/sections/AboutTeam";
import { AboutValues } from "@/sections/AboutValues";
import { CallToAction } from "@/sections/CallToAction";

export default function TentangKami() {
  return (
    <>
      <Header />
      <AboutHero />
      <AboutValues />
      <AboutTeam />
      <CallToAction />
      <Footer />
    </>
  );
} 