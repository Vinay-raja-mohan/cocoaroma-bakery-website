'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Placeholder slides for now
  const slides = [
    { id: 1, bgColor: '#E8F5E9', text: 'Slide 1 - Image will be available soon' },
    { id: 2, bgColor: '#FFF0F3', text: 'Slide 2 - Image will be available soon' },
    { id: 3, bgColor: '#F3E5F5', text: 'Slide 3 - Image will be available soon' },
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
    <section className="hero-slider" style={{ position: 'relative', width: '100%', height: 'calc(100vh - 110px)', overflow: 'hidden' }}>
      <style>{`
        .slider-arrow {
          background-color: rgba(255,255,255,0.9) !important;
          transition: all 0.3s ease !important;
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
              backgroundColor: slide.bgColor,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              opacity: currentSlide === index ? 1 : 0,
              transition: 'opacity 0.8s ease-in-out',
              zIndex: currentSlide === index ? 1 : 0
            }}
          >
            <h2 style={{ color: '#0D5E3D', fontFamily: 'Inter, sans-serif', fontSize: '2.5rem', fontWeight: 'bold' }}>
              {slide.text}
            </h2>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button 
        className="slider-arrow"
        onClick={prevSlide}
        style={{ 
          position: 'absolute', top: '50%', left: '30px', transform: 'translateY(-50%)',
          border: 'none', borderRadius: '50%',
          width: '45px', height: '45px', display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer', zIndex: 10, boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
        }}
      >
        <ChevronLeft size={24} />
      </button>
      
      <button 
        className="slider-arrow"
        onClick={nextSlide}
        style={{ 
          position: 'absolute', top: '50%', right: '30px', transform: 'translateY(-50%)',
          border: 'none', borderRadius: '50%',
          width: '45px', height: '45px', display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer', zIndex: 10, boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
        }}
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
