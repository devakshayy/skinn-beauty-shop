"use client";
import AboutSection from "@/components/sections/AboutSection";
import CategorySection from "@/components/sections/CategorySection";
import ContactSection from "@/components/sections/ContactSection";
import HeroSection from "@/components/sections/HeroSection";
import ProductSection from "@/components/sections/ProductSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection/>
      <CategorySection/>
      <ProductSection/>
      <AboutSection/>
      <ContactSection/>
    </div>
  );
}
