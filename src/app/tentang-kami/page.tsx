import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { AboutHero } from "@/sections/AboutHero";
import { AboutTeam } from "@/sections/AboutTeam";
import { AboutValues } from "@/sections/AboutValues";
import { CallToAction } from "@/sections/CallToAction";
import { CompanyProfile } from "@/sections/CompanyProfile";

export default function TentangKami() {
  return (
    <>
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