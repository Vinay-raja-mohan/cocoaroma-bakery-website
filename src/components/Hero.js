'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { id: 1, image: '/images/Hero-Section/1.png', alt: 'Customized and Special Cakes - Cocoaroma Bakery' },
    { id: 2, image: '/images/Hero-Section/2.png', alt: 'Puddings: Creamy, Indulgent, Irresistible - Cocoaroma Bakery' },
    { id: 3, image: '/images/Hero-Section/3.png', alt: 'Garlic Bread: Soft, Cheesy, Irresistible - Cocoaroma Bakery' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section className="hero-slider" style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
      <style>{`
        .hero-slider {
          height: calc(100vh - 76px);
          min-height: 500px;
        }

        /* 15.6" Full HD (1920 x 1080) laptop responsive screen */
        @media screen and (min-width: 1280px) and (max-width: 1920px) {
          .hero-slider {
            height: calc(100vh - 76px);
          }
        }
        
        .slider-arrow {
          background-color: rgba(255,255,255,0.9) !important;
          transition: all 0.3s ease !important;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          border: none;
          border-radius: 50%;
          width: 45px;
          height: 45px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        }
        
        .slider-arrow.left {
          left: 30px;
        }
        
        .slider-arrow.right {
          right: 30px;
        }
        
        .slider-arrow:hover {
          background-color: #0D5E3D !important;
        }
        .slider-arrow svg {
          stroke: #333;
          transition: stroke 0.3s ease;
        }
        .slider-arrow:hover svg {
          stroke: #FFFFFF;
        }
        
        .slide-title {
          color: #0D5E3D;
          font-family: 'Inter', sans-serif;
          font-weight: bold;
          font-size: clamp(1rem, 4vw, 2.5rem);
        }

        @media (max-width: 767px) {
          .hero-slider {
            height: 50vw !important;
            min-height: 250px !important;
            max-height: 500px !important;
          }
        }
        
        @media (max-width: 480px) {
          .slider-arrow.left {
            left: 10px !important;
            width: 36px !important;
            height: 36px !important;
          }
          .slider-arrow.right {
            right: 10px !important;
            width: 36px !important;
            height: 36px !important;
          }
        }
      `}</style>
      
      {/* Slides Container - Fade Effect */}
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        {slides.map((slide, index) => (
          <div 
            key={slide.id} 
            style={{ 
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%', 
              height: '100%', 
              opacity: currentSlide === index ? 1 : 0,
              transition: 'opacity 0.8s ease-in-out',
              zIndex: currentSlide === index ? 1 : 0
            }}
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              priority={index === 0}
              sizes="100vw"
              style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button 
        className="slider-arrow left"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button 
        className="slider-arrow right"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Pagination Dots */}
      <div style={{ position: 'absolute', bottom: '25px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '10px', zIndex: 10 }}>
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            style={{
              width: currentSlide === index ? '30px' : '10px',
              height: '10px',
              borderRadius: '5px',
              backgroundColor: currentSlide === index ? '#0D5E3D' : 'rgba(0,0,0,0.2)', // Updated to Green Theme
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s'
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
