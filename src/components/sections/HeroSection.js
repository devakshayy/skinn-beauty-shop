import React, { useEffect, useState } from "react";
import { heroSlides } from "@/lib/data";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className={`absolute inset-0 ${heroSlides[currentSlide].bg} transition-all duration-1000`}
      >
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          {heroSlides[currentSlide].title}
        </h2>
        <p className="text-xl md:text-2xl mb-8 opacity-90">
          {heroSlides[currentSlide].subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#categories" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto bg-white text-gray-800 px-6 py-4 sm:px-8 sm:py-4 rounded-full font-semibold hover:bg-gray-100 active:bg-gray-100 transition-all duration-300 transform hover:scale-105 active:scale-105 shadow-lg text-sm sm:text-base">
              Explore Collection
            </button>
          </a>

          <a href="#gallery" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto border border-white text-white px-6 py-4 sm:px-8 sm:py-4 rounded-full font-semibold hover:bg-white active:bg-white hover:text-gray-800 active:text-gray-800 transition-all duration-300 text-sm sm:text-base">
              View Gallery
            </button>
          </a>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
