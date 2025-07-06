"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface HeroSlide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  buttonText: string;
  gradient: string;
}

const heroSlides: HeroSlide[] = [
  {
    id: 1,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQthofrT_DWAMeUMJg9HWUwARLjBP7BODjAQ&s",
    title: "DISCOVER YOUR",
    subtitle: "NEXT ADVENTURE",
    buttonText: "Explore Events Now",
    gradient: "from-purple-900/80 via-pink-900/80 to-orange-900/80",
  },
  {
    id: 2,
    image:
      "https://internet2.edu/wp-content/uploads/2024/09/internet2-events-hero.jpg",
    title: "CREATE AMAZING",
    subtitle: "MEMORIES",
    buttonText: "Find Your Event",
    gradient: "from-blue-900/50 via-indigo-900/50 to-purple-900/50",
  },
  {
    id: 3,
    image:
      "https://foundryco.com/wp-content/uploads/2022/11/foundry-event-frontify-e1719433886312.jpeg?w=1200&h=787&crop=1",
    title: "CONNECT WITH",
    subtitle: "LIKE-MINDED PEOPLE",
    buttonText: "Join Community",
    gradient: "from-green-900/70 via-teal-900/70 to-blue-900/70",
  },
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const currentSlideData = heroSlides[currentSlide];

  return (
    <section className="relative h-[60vh] sm:h-[70vh] lg:h-[80vh] max-h-[600px] min-h-[400px] overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.image} // ✅ This uses the correct image URL from your data
              alt={`Hero slide ${slide.id}`}
              fill
              className="object-cover"
              priority={slide.id === 1} // ✅ Only preload the first slide
              sizes="100vw"
            />

            <div
              className={`absolute inset-0 bg-gradient-to-r ${slide.gradient}`}
            ></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="text-white max-w-3xl">
          <div className="transform transition-all duration-700 ease-out">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
              {currentSlideData.title}
              <br />
              <span className="bg-white text-transparent bg-clip-text drop-shadow-sm">
                {currentSlideData.subtitle}
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-gray-200 max-w-2xl leading-relaxed">
              Find amazing events happening around you and create unforgettable
              memories with people who share your passions
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-200 shadow-xl">
                {currentSlideData.buttonText}
              </button>
              <button className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-200">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 sm:left-6 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 sm:p-3 transition-all duration-200 group"
        aria-label="Previous slide"
      >
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:scale-110 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 sm:right-6 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 sm:p-3 transition-all duration-200 group"
        aria-label="Next slide"
      >
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:scale-110 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Carousel Dots */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/75 hover:scale-110"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
        <div
          className="h-full bg-white transition-all duration-300 ease-linear"
          style={{
            width: `${((currentSlide + 1) / heroSlides.length) * 100}%`,
          }}
        />
      </div>
    </section>
  );
}
