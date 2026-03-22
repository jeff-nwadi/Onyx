import Image from "next/image";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Ads from "@/components/sections/Ads";
import TechnicalPage from "@/components/sections/TechnicalPage";
import PreOrderSection from "@/components/sections/PreOrderSection";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <Hero />
        <Ads />
      </div> 
      <TechnicalPage />
      <PreOrderSection />
    </div>
  );
}
