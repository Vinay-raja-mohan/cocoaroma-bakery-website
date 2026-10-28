'use client';
import { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { categories as allMenuCategories } from '@/data/menu';

const requestedCategories = [
  { name: 'Regular Cakes', id: 'regular-cakes', image: '/images/categories/cake.jpg' },
  { name: 'Unique Cakes', id: 'unique-cakes', image: '/images/categories/cake.jpg' },
  { name: 'Kids Cakes', id: 'kids-cakes', image: '/images/categories/donut.jpg' },
  { name: 'Love Cakes', id: 'love-cakes', image: '/images/categories/cake.jpg' },
  { name: 'Corporate Cakes', id: 'corporate-cakes', image: '/images/categories/donut.jpg' },
  { name: 'Gifting Cakes', id: 'gifting-cakes', image: '/images/categories/cake.jpg' },
  { name: 'Cheesecake', id: 'cheesecakes', image: '/images/categories/cake.jpg' },
  { name: 'Brownies', id: 'brownies', image: '/images/categories/donut.jpg' },
  { name: 'Cupcakes', id: 'cupcakes', image: '/images/categories/cake.jpg' },
  { name: 'Savouries', id: 'savoury', image: '/images/categories/donut.jpg' },
  { name: 'Donuts', id: 'donuts', image: '/images/categories/donut.jpg' },
  { name: 'Desserts', id: 'desserts', image: '/images/categories/donut.jpg' },
  { name: 'Chocolates', id: 'chocolates', image: '/images/categories/donut.jpg' },
  { name: 'Cookies', id: 'Cookies', image: '/images/categories/donut.jpg' },
  { name: 'Titbits', id: 'tidbits', image: '/images/categories/donut.jpg' },
  { name: 'Breads', id: 'breads', image: '/images/categories/donut.jpg' },
  { name: 'Tea Time Cakes', id: 'tea-time-cakes', image: '/images/categories/donut.jpg' },
];

export default function SignatureBakesSection() {
  const [activeCategoryId, setActiveCategoryId] = useState('regular-cakes');
  const scrollRef = useRef(null);

  const activeCategoryData = allMenuCategories.find(c => c.id === activeCategoryId || c.name.toLowerCase().includes(activeCategoryId.replace('-', ' ')));
  const productsToShow = activeCategoryData?.items || [];
  const signatureProducts = productsToShow.slice(0, 8);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -250, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 250, behavior: 'smooth' });
    }
  };

  return (
    <section className="signature-bakes-section">
      <style>{`
        .signature-bakes-section {
          background-color: #FFFFFF;
          padding: 0 20px 100px; /* Removed top padding so bookmark touches top */
          overflow: hidden;
          box-sizing: border-box;
        }

        .signature-container {
          max-width: 1350px;
          width: 100%;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 380px 1fr;
          gap: 36px;
          align-items: start;
          box-sizing: border-box;
        }

        .signature-left {
          background-color: #0D5E3D;
          color: #FFF8E7;
          padding: 80px 40px 160px; /* Increased bottom padding to make it taller */
          border-radius: 0 0 32px 32px; /* Only round bottom corners */
          display: flex;
          flex-direction: column;
          position: sticky;
          top: 71px; /* Stick below navbar */
          box-shadow: 0 25px 35px -15px rgba(13, 94, 61, 0.4); /* Shadow only at the bottom */
          box-sizing: border-box;
        }

        .signature-left h2 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.8rem, 5vw, 2.8rem);
          line-height: 1.1;
          margin: 0 0 1.5rem 0;
          font-weight: 500;
          color: #FFF8E7 !important;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .signature-left p {
          font-family: 'Inter', sans-serif;
          font-size: 1.05rem;
          line-height: 1.6;
          opacity: 0.9;
          margin-bottom: 3rem;
          color: #FFF8E7 !important;
        }

        .signature-btn {
          display: inline-block;
          align-self: flex-start;
          padding: 12px 24px;
          background-color: #C89B3C;
          color: #FFF;
          text-decoration: none;
          font-family: 'Inter', sans-serif;
          font-weight: 600;
          font-size: 0.85rem;
          letter-spacing: 1px;
          text-transform: uppercase;
          border-radius: 50px;
          transition: all 0.3s ease;
        }

        .signature-btn:hover {
          background-color: #b08630;
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(200, 155, 60, 0.3);
        }

        /* Category Scroll Area */
        .signature-right {
          padding-top: 40px; /* Equal spacing above the slider */
          min-width: 0;
        }
        
        .category-nav-wrapper {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 40px; /* Equal spacing below the slider */
          position: relative;
        }

        .category-scroll-container {
          display: flex;
          gap: 12px;
          overflow-x: auto;
          scroll-behavior: smooth;
          padding: 10px 5px;
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .category-scroll-container::-webkit-scrollbar {
          display: none;
        }

        .category-btn {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 20px 10px 12px;
          border-radius: 50px;
          border: 1px solid #e0d8c3;
          background-color: #FFF;
          cursor: pointer;
          white-space: nowrap;
          transition: all 0.3s ease;
          font-family: 'Inter', sans-serif;
          font-weight: 500;
          font-size: 15px;
          color: #555;
        }

        .category-btn:hover {
          border-color: #0D5E3D;
          color: #0D5E3D;
        }

        .category-btn.active {
          border-color: #0D5E3D;
          color: #0D5E3D;
          background-color: #f2f9f5;
          font-weight: 600;
        }

        .nav-arrow {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 1px solid #e0d8c3;
          background-color: #fff;
          cursor: pointer;
          color: #333;
          transition: all 0.3s ease;
          flex-shrink: 0;
        }

        .nav-arrow:hover {
          border-color: #0D5E3D;
          color: #0D5E3D;
        }

        .signature-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
        }

        .signature-card {
          background-color: #FFFFFF;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(0,0,0,0.04);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          flex-direction: column;
          border: 1px solid #f0f0f0;
          box-sizing: border-box;
        }

        .signature-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 0 25px rgba(13, 94, 61, 0.25);
        }

        .card-image-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 1 / 1;
          background-color: #f9f9f9;
        }

        .card-content {
          padding: 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex: 1;
        }

        .card-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(0.9rem, 2vw, 1.1rem);
          color: #0D5E3D;
          margin: 0;
          line-height: 1.2;
          font-weight: 600;
          flex: 1;
          padding-right: 10px;
        }

        .card-price {
          font-family: 'Inter', sans-serif;
          font-size: 0.95rem;
          color: #C89B3C;
          margin: 0;
          font-weight: 700;
          flex-shrink: 0;
        }

        .view-more-container {
          display: flex;
          justify-content: center;
          margin-top: 50px;
        }

        .view-more-btn {
          display: inline-block;
          padding: 12px 30px;
          background-color: transparent;
          color: #0D5E3D;
          border: 2px solid #0D5E3D;
          text-decoration: none;
          font-family: 'Inter', sans-serif;
          font-weight: 600;
          font-size: 0.85rem;
          letter-spacing: 1px;
          text-transform: uppercase;
          border-radius: 50px;
          transition: all 0.3s ease;
        }

        .view-more-btn:hover {
          background-color: #0D5E3D;
          color: #FFF;
          box-shadow: 0 4px 15px rgba(13, 94, 61, 0.2);
        }

        @media (max-width: 1400px) {
          .signature-container {
            grid-template-columns: 320px 1fr;
            gap: 24px;
          }
          .signature-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
          }
        }

        @media (max-width: 1024px) {
          .signature-container {
            grid-template-columns: 1fr;
            margin: 0 auto;
            padding: 0 10px;
          }
          .signature-left {
            position: relative;
            top: 0;
            border-radius: 32px;
            padding: 40px 24px 60px;
            text-align: center;
            align-items: center;
          }
          .signature-bakes-section {
            padding-bottom: 60px;
          }
        }

        @media (max-width: 768px) {
          .signature-container {
            margin: 0 20px;
          }
          .signature-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 480px) {
          .signature-grid {
            grid-template-columns: 1fr;
          }
          .signature-left {
            padding: 30px 20px 40px;
          }
          .signature-bakes-section {
            padding-bottom: 40px;
          }
        }
      `}</style>

      <div className="signature-container">
        
        {/* Left Side: Bookmark Banner */}
        <div className="signature-left">
          <h2>OUR<br />SIGNATURE<br />BAKES</h2>
          <p>
            Discover our collection of handcrafted, exquisite cakes, baked with love and the finest ingredients for every celebration.
          </p>
          <Link href="/bakery-menu" className="signature-btn">
            VIEW FULL MENU &rsaquo;
          </Link>
        </div>

        {/* Right Side: Navigation & 4x2 Grid */}
        <div className="signature-right" style={{ minWidth: 0 }}>
          
          {/* Category Slider */}
          <div className="category-nav-wrapper">
            <button className="nav-arrow" onClick={scrollLeft} aria-label="Scroll left">
              <ChevronLeft size={18} />
            </button>
            
            <div className="category-scroll-container" ref={scrollRef}>
              {requestedCategories.map((cat) => (
                <button 
                  key={cat.id} 
                  className={`category-btn ${activeCategoryId === cat.id ? 'active' : ''}`}
                  onClick={() => setActiveCategoryId(cat.id)}
                >
                  <Image src={cat.image} alt={cat.name} width={32} height={32} style={{ borderRadius: '4px', objectFit: 'cover' }} />
                  {cat.name}
                </button>
              ))}
            </div>

            <button className="nav-arrow" onClick={scrollRight} aria-label="Scroll right">
              <ChevronRight size={18} />
            </button>
          </div>

          <div className="signature-grid">
            {signatureProducts.length > 0 ? (
              signatureProducts.map((product, index) => {
                // Logic for price: small (half kg) -> large (1 kg) -> price (default) -> pastry
                const displayPrice = product.small || product.large || product.price || product.pastry || 0;
                const formattedPrice = Number(displayPrice).toFixed(2);
                const targetLink = product.slug ? `/product/${activeCategoryId}/${product.slug}` : '#';

                return (
                  <Link href={targetLink} className="signature-card" key={product.id || index} style={{ textDecoration: 'none' }}>
                    <div className="card-image-wrap">
                      {(product.hasImages && product.slug) && (
                        <Image 
                          src={`/images/cakes/${product.slug}/1.png`} 
                          alt={product.name} 
                          fill 
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          style={{ objectFit: 'cover' }} 
                          onError={(e) => {
                            // Fallback to jpg if png fails, otherwise hide the image completely
                            if (e.target.src.endsWith('.png')) {
                              e.target.src = `/images/cakes/${product.slug}/1.jpg`;
                            } else {
                              e.target.style.display = 'none';
                            }
                          }}
                        />
                      )}
                    </div>
                    <div className="card-content">
                      <h3 className="card-title">{product.name}</h3>
                      <span className="card-price">₹{formattedPrice}</span>
                    </div>
                  </Link>
                );
              })
            ) : (
              <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '4rem 0', color: '#666' }}>
                <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.8rem', color: '#0D5E3D', marginBottom: '0.5rem' }}>
                  Coming Soon
                </h3>
                <p>We are currently crafting some delicious new items for this category!</p>
              </div>
            )}
          </div>
          
          <div className="view-more-container">
            <Link href={`/product/${activeCategoryId}`} className="view-more-btn">
              VIEW MORE &rsaquo;
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
