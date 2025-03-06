import Logo from "@/assets/logosaas.png";
import SocialX from "@/assets/social-x.svg";
import SocialInstagram from "@/assets/social-insta.svg";
import SocialLinkedIn from "@/assets/social-linkedin.svg";
import SocialPinterest from "@/assets/social-pin.svg";
import SocialYoutube from "@/assets/social-youtube.svg";

import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
      <div className="container">
        <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:w-full before:blur before:bg-[linear-gradient(to_right,#F87bFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:absolute">
          <Image src={Logo} height={40} alt="Lyge Digital Logo" className="relative"/>
        </div>
        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
          <a href="/">Layanan</a>
          <a href="#">Hardware</a>
          <a href="/tentang-kami">Tentang Kami</a>
          <a href="#">Blog</a> 
          <a href="/bantuan">Bantuan</a>
          <a href="/kontak">Kontak</a>
        </nav>
        <div className="flex justify-center gap-6 mt-6">
          <SocialX />
          <SocialInstagram />
          <SocialLinkedIn />
          <SocialPinterest />
          <SocialYoutube />
        </div>
        <p className="mt-6">
          &copy; 2023 PT Suka Kreatif Solusi Digital. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
