'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const specials = [
  {
    subtitle: 'PREMIUM CAKES',
    title: 'Forever Collection',
    description: 'Discover our Forever Collection - a timeless selection of cakes designed to capture the essence of love and celebration. Each bite is a memory in the making.',
    image: '/images/cakes/red-velvet/1.png',
    link: '/menu?category=regular-cakes'
  },
  {
    subtitle: 'SIGNATURE DESSERTS',
    title: 'Premium Rocher',
    description: 'Indulge in the ultimate hazelnut and chocolate experience. Rich, crunchy, and absolutely irresistible for any celebration.',
    image: '/images/cakes/ferrero-rocher/1.png',
    link: '/menu?category=regular-cakes'
  },
  {
    subtitle: 'SEASONAL DELIGHTS',
    title: 'Classic Tiramisu',
    description: 'A sophisticated coffee-flavored Italian dessert. Layers of light mascarpone cheese and rich cocoa for a perfect balance.',
    image: '/images/cakes/tiramisu/1.png',
    link: '/menu?category=regular-cakes'
  }
];

export default function OurSpecialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);

  const nextSlide = useCallback(() => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === specials.length - 1 ? 0 : prev + 1));
      setFade(false);
    }, 400); // 400ms fade transition
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const currentSpecial = specials[currentIndex];

  return (
    <section className="specials-editorial-section">
      <style>{`
        .specials-editorial-section {
          background-color: #FFF8E7;
          padding: 40px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          min-height: 500px;
        }

        .section-header {
          font-family: 'Playfair Display', serif;
          font-size: 2.5rem;
          color: #0D5E3D;
          text-align: center;
          margin: 0 0 30px 0;
          font-weight: 500;
        }

        .editorial-container {
          width: 100%;
          max-width: 1100px;
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          align-items: center;
          position: relative;
        }

        /* Image on the Left (Spans 8 columns) */
        .editorial-image-wrapper {
          grid-column: 1 / 9;
          grid-row: 1;
          height: 400px;
          position: relative;
          border-radius: 4px;
          overflow: hidden;
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
          transition: opacity 0.4s ease;
        }
        
        .editorial-image-wrapper.fade {
          opacity: 0.3;
        }

        /* Text Box on the Right (Overlaps less of the image, starts at col 8) */
        .editorial-text-box {
          grid-column: 8 / 13;
          grid-row: 1;
          background-color: #0D5E3D;
          color: #FFF8E7;
          padding: 40px 30px;
          z-index: 10;
          border-radius: 4px;
          box-shadow: -10px 10px 25px rgba(13, 94, 61, 0.2);
          transition: opacity 0.4s ease, transform 0.4s ease;
        }

        .editorial-text-box.fade {
          opacity: 0;
          transform: translateY(10px);
        }

        .ed-subtitle {
          font-family: 'Inter', sans-serif;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: #C89B3C;
          display: block;
          margin-bottom: 10px;
          font-weight: 600;
        }

        .ed-title {
          font-family: 'Playfair Display', serif;
          font-size: 2.2rem;
          line-height: 1.1;
          margin: 0 0 15px 0;
          font-weight: 500;
          color: #FFF8E7;
        }

        .ed-desc {
          font-family: 'Inter', sans-serif;
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 25px;
          color: rgba(255, 248, 231, 0.9);
        }

        .ed-btn {
          display: inline-block;
          padding: 10px 24px;
          background: linear-gradient(135deg, #C89B3C, #a87b2c);
          color: #FFF;
          text-decoration: none;
          font-family: 'Inter', sans-serif;
          font-weight: 600;
          font-size: 0.8rem;
          letter-spacing: 1px;
          text-transform: uppercase;
          border-radius: 4px;
          transition: all 0.3s ease;
          border: none;
        }

        .ed-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 15px rgba(200, 155, 60, 0.3);
        }

        .slider-indicators {
          position: absolute;
          bottom: -30px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 10px;
          z-index: 20;
        }

        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: #ccc;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .dot.active {
          background-color: #0D5E3D;
          width: 24px;
          border-radius: 4px;
        }

        @media (max-width: 992px) {
          .editorial-container {
            grid-template-columns: 1fr;
            padding: 0 20px;
          }
          .editorial-image-wrapper {
            grid-column: 1;
            grid-row: 1;
            height: 300px;
          }
          .editorial-text-box {
            grid-column: 1;
            grid-row: 2;
            margin-top: -40px; /* Overlap upwards on mobile */
            margin-left: 15px;
            margin-right: 15px;
            padding: 30px 20px;
          }
        }
      `}</style>

      <h2 className="section-header">Our Specials</h2>

      <div className="editorial-container">
        
        {/* Left Side: Image */}
        <div className={`editorial-image-wrapper ${fade ? 'fade' : ''}`} style={{ backgroundColor: '#FFF' }}>
          <Image 
            src={currentSpecial.image} 
            alt={currentSpecial.title} 
            fill 
            style={{ objectFit: 'contain', padding: '20px' }}
            priority
          />
        </div>

        {/* Right Side: Text Box (Overlapping) */}
        <div className={`editorial-text-box ${fade ? 'fade' : ''}`}>
          <span className="ed-subtitle">{currentSpecial.subtitle}</span>
          <h2 className="ed-title">{currentSpecial.title}</h2>
          <p className="ed-desc">
            {currentSpecial.description}
          </p>
          <Link href={currentSpecial.link} className="ed-btn">
            VIEW FULL MENU
          </Link>
        </div>

        {/* Carousel Indicators */}
        <div className="slider-indicators">
          {specials.map((_, idx) => (
            <div 
              key={idx} 
              className={`dot ${idx === currentIndex ? 'active' : ''}`}
              onClick={() => {
                setFade(true);
                setTimeout(() => {
                  setCurrentIndex(idx);
                  setFade(false);
                }, 400);
              }}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
