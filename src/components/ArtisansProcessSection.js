'use client';
import Image from 'next/image';

const BranchSVG = ({ className }) => (
  <svg 
    className={className}
    width="120" 
    height="180" 
    viewBox="0 0 120 180" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M10 180 C 0 120, 40 60, 30 0" stroke="#0D5E3D" strokeWidth="1.5" fill="none"/>
    <path d="M12 140 C 30 130, 60 110, 50 80 C 40 90, 25 110, 12 140" fill="#0D5E3D" opacity="0.6" />
    <path d="M18 90 C 40 80, 80 60, 70 20 C 55 35, 35 60, 18 90" fill="#0D5E3D" opacity="0.6" />
    <path d="M26 40 C 50 30, 100 10, 90 -30 C 70 -10, 45 15, 26 40" fill="#0D5E3D" opacity="0.6" />
    <path d="M8 110 C -10 100, -30 80, -20 50 C -10 65, 0 85, 8 110" fill="#0D5E3D" opacity="0.4" />
    <path d="M14 60 C -10 50, -40 30, -30 -10 C -15 10, -5 35, 14 60" fill="#0D5E3D" opacity="0.4" />
  </svg>
);

export default function ArtisansProcessSection() {
  return (
    <section className="artisan-section">
      <style>{`
        .artisan-section {
          background-color: #FFF8E7;
          padding: 80px 20px 120px;
          overflow: hidden;
          box-sizing: border-box;
        }

        .artisan-container {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
          box-sizing: border-box;
        }

        .masonry-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          grid-template-rows: 300px 300px;
          gap: 20px;
          position: relative;
        }

        .masonry-item {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 15px 35px rgba(0,0,0,0.08);
        }

        .masonry-item img {
          transition: transform 0.8s ease;
        }

        .masonry-item:hover img {
          transform: scale(1.05);
        }

        .item-tall {
          grid-column: 1;
          grid-row: 1 / 3;
        }

        .item-top-right {
          grid-column: 2;
          grid-row: 1;
        }

        .item-bottom-right {
          grid-column: 2;
          grid-row: 2;
        }

        .story-content {
          position: relative;
          padding-right: 40px;
        }

        .story-subtitle {
          font-family: 'Inter', sans-serif;
          color: #C89B3C;
          font-size: 0.9rem;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          margin-bottom: 20px;
          display: block;
        }

        .story-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2rem, 5vw, 4rem);
          line-height: 1.1;
          color: #0D5E3D;
          margin: 0 0 30px 0;
          font-weight: 500;
        }

        .story-title i {
          font-family: 'Playfair Display', serif;
          font-style: italic;
          color: #1a7a52;
        }

        .story-text {
          font-family: 'Inter', sans-serif;
          font-size: clamp(0.95rem, 2vw, 1.15rem);
          line-height: 1.8;
          color: #444;
          margin-bottom: 40px;
          max-width: 500px;
        }

        .story-stats {
          display: flex;
          gap: clamp(16px, 3vw, 40px);
          border-top: 1px solid rgba(13, 94, 61, 0.1);
          padding-top: 30px;
        }

        .stat-item h4 {
          font-family: 'Playfair Display', serif;
          font-size: 2.2rem;
          color: #C89B3C;
          margin: 0 0 5px 0;
        }

        .stat-item p {
          font-family: 'Inter', sans-serif;
          font-size: 0.85rem;
          color: #666;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: 600;
          margin: 0;
        }

        .branch-decor-1 {
          position: absolute;
          top: -60px;
          right: -20px;
          opacity: 0.15;
          transform: rotate(15deg) scale(1.5);
          pointer-events: none;
        }

        .branch-decor-2 {
          position: absolute;
          bottom: -40px;
          left: -80px;
          opacity: 0.1;
          transform: rotate(-140deg) scale(1.2);
          pointer-events: none;
        }

        @media (max-width: 1100px) {
          .artisan-container {
            gap: 40px;
          }
          .masonry-grid {
            grid-template-rows: 250px 250px;
          }
        }

        @media (max-width: 768px) {
          .artisan-section {
            padding: 40px 20px 60px;
          }
          .artisan-container {
            grid-template-columns: 1fr;
            gap: 30px;
          }
          .story-content {
            padding-right: 0;
            order: -1;
            text-align: center;
          }
          .story-text {
            margin: 0 auto 40px;
          }
          .story-stats {
            justify-content: center;
          }
          .branch-decor-1 {
            right: 0;
          }
          .masonry-grid {
            grid-template-rows: 220px 220px;
          }
        }

        @media (max-width: 480px) {
          .artisan-section {
            padding: 24px 16px 40px;
          }
          .masonry-grid {
            display: flex;
            flex-direction: column;
          }
          .masonry-item {
            height: 300px;
          }
        }
      `}</style>

      <div className="artisan-container">
        
        {/* Left Side: Masonry Gallery */}
        <div className="masonry-grid">
          <BranchSVG className="branch-decor-2" />
          
          <div className="masonry-item item-tall">
            <Image 
              src="/images/categories/cake.jpg" 
              alt="Artisan cake preparation" 
              fill 
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </div>
          
          <div className="masonry-item item-top-right">
            <Image 
              src="/images/categories/donut.jpg" 
              alt="Freshly baked pastries" 
              fill 
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 900px) 100vw, 25vw"
            />
          </div>
          
          <div className="masonry-item item-bottom-right">
            <Image 
              src="/images/categories/cake.jpg" 
              alt="Fine ingredients" 
              fill 
              style={{ objectFit: 'cover', objectPosition: 'bottom' }}
              sizes="(max-width: 900px) 100vw, 25vw"
            />
          </div>
        </div>

        {/* Right Side: Story Content */}
        <div className="story-content">
          <BranchSVG className="branch-decor-1" />
          
          <span className="story-subtitle">The Artisan's Process</span>
          <h2 className="story-title">Handcrafted <i>Daily</i><br/>with Local Love.</h2>
          
          <p className="story-text">
            Every morning before the sun rises, our master bakers are already hard at work. We believe that true luxury lies in the details—from sourcing the finest organic flour to hand-picking seasonal berries for our signature frostings.
          </p>
          <p className="story-text">
            There are no shortcuts in our kitchen. Just time-honored techniques, pure ingredients, and an unwavering commitment to making your celebrations unforgettable.
          </p>

          <div className="story-stats">
            <div className="stat-item">
              <h4>100%</h4>
              <p>Organic Flour</p>
            </div>
            <div className="stat-item">
              <h4>0</h4>
              <p>Preservatives</p>
            </div>
            <div className="stat-item">
              <h4>Daily</h4>
              <p>Freshly Baked</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
