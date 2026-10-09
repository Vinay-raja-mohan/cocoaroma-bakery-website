'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: "Srinivas Reddy",
    initial: "S",
    color: "#E53935",
    quote: "The chocolate truffle cake I ordered for my son's birthday was fantastic! The quality of ingredients is top-notch and the delivery was perfectly on time.",
    rating: 5
  },
  {
    id: 2,
    name: "Kavya Rao",
    initial: "K",
    color: "#43A047",
    quote: "Really good cakes one can get here in Hyderabad. I have tried many variations like black forest, red velvet, and their seasonal mango cakes. Always fresh and delicious!",
    rating: 5
  },
  {
    id: 3,
    name: "Venkatesh Goud",
    initial: "V",
    color: "#1E88E5",
    quote: "Cocoaroma is a great shop for desserts with high-quality and beautifully presented pastries. The attention to detail they put into their custom cakes is simply impressive.",
    rating: 5
  },
  {
    id: 4,
    name: "Anitha Naidu",
    initial: "A",
    color: "#FDD835",
    quote: "I love all Cocoaroma products but the butterscotch pastry has been my all-time favorite. It truly justifies its name with its rich creamy goodness.",
    rating: 5
  },
  {
    id: 5,
    name: "Prashanth Kumar",
    initial: "P",
    color: "#8E24AA",
    quote: "Best bakery in the city! Ordered a photo cake for our anniversary and it turned out exactly how we wanted. The taste and texture were out of this world.",
    rating: 5
  }
];

export default function Testimonials() {
  // Duplicate the reviews array to create a "fake infinite" loop.
  // 30 sets * 5 reviews = 150 review cards.
  // This allows the user to click next/prev dozens of times seamlessly without ever rewinding.
  const MULTIPLIER = 30;
  const infiniteReviews = Array(MULTIPLIER).fill(reviews).flat();
  
  // Start right in the middle of the duplicated array
  const [currentIndex, setCurrentIndex] = useState(Math.floor(MULTIPLIER / 2) * reviews.length);

  const nextSlide = () => {
    setCurrentIndex(prev => prev + 1);
  };

  const prevSlide = () => {
    setCurrentIndex(prev => prev - 1);
  };

  return (
    <div className="reviews-carousel-wrapper" style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto', padding: '1rem 40px' }}>
      <style>{`
        .reviews-viewport {
          overflow: hidden;
          width: 100%;
          padding: 1rem 0;
        }
        .reviews-track {
          display: flex;
          transition: transform 0.5s ease-in-out;
          width: ${(infiniteReviews.length / 3) * 100}%;
        }
        .review-card-container {
          width: ${100 / infiniteReviews.length}%;
          padding: 0 10px;
        }
        .review-card {
          background: #fff;
          border: 1px solid #eaeaea;
          border-radius: 12px;
          padding: 24px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.03);
          display: flex;
          flex-direction: column;
          position: relative;
          height: 100%;
        }
        .review-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }
        .review-avatar {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: bold;
          font-size: 1.2rem;
        }
        .review-info {
          display: flex;
          flex-direction: column;
        }
        .review-name {
          font-weight: 700;
          font-size: 0.95rem;
          color: #111;
          margin-bottom: 2px;
        }
        .review-stars {
          display: flex;
          gap: 2px;
        }
        .review-quote {
          color: #555;
          font-size: 0.9rem;
          line-height: 1.6;
        }
        .google-icon {
          position: absolute;
          top: 24px;
          right: 24px;
          width: 24px;
          height: 24px;
          opacity: 0.8;
        }
        .carousel-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #fff;
          border: 1px solid #eaeaea;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          color: #666;
          transition: all 0.2s;
        }
        .carousel-btn:hover {
          background: #0D5E3D;
          color: white;
          border-color: #0D5E3D;
        }
        .carousel-btn.left {
          left: 0px;
        }
        .carousel-btn.right {
          right: 0px;
        }
        
        @media (max-width: 992px) {
          .reviews-track {
            width: ${(infiniteReviews.length / 2) * 100}%;
          }
        }
        
        @media (max-width: 768px) {
          .reviews-carousel-wrapper {
            padding: 1rem 20px !important;
          }
          .carousel-btn.left {
            left: -10px;
          }
          .carousel-btn.right {
            right: -10px;
          }
        }
        
        @media (max-width: 600px) {
          .reviews-track {
            width: ${infiniteReviews.length * 100}%;
          }
        }

        @media (max-width: 480px) {
          .review-card {
            padding: 16px;
          }
        }
      `}</style>

      {/* Navigation Buttons */}
      <button className="carousel-btn left" onClick={prevSlide} aria-label="Previous Review">
        <ChevronLeft size={24} />
      </button>
      
      <button className="carousel-btn right" onClick={nextSlide} aria-label="Next Review">
        <ChevronRight size={24} />
      </button>

      {/* Carousel Track */}
      <div className="reviews-viewport">
        <div 
          className="reviews-track"
          style={{ transform: `translateX(-${currentIndex * (100 / infiniteReviews.length)}%)` }}
        >
          {infiniteReviews.map((review, idx) => (
            <div key={idx} className="review-card-container">
              <div className="review-card">
                {/* Google Icon SVG Placeholder */}
                <svg className="google-icon" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>

              <div className="review-header">
                <div className="review-avatar" style={{ backgroundColor: review.color }}>
                  {review.initial}
                </div>
                <div className="review-info">
                  <div className="review-name">{review.name}</div>
                  <div className="review-stars">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={14} fill="#FFB300" color="#FFB300" />
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="review-quote">
                {review.quote}
              </div>
            </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
