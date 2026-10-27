'use client';

import React from 'react';
import Link from 'next/link';
import { Store, MapPin } from 'lucide-react';

const stores = [
  { name: 'VV Nagar', loc: 'Beside Pure O Natural', mapLink: 'https://maps.app.goo.gl/AvRakgYfHDuho4cL6' },
  { name: 'Chintal', loc: 'Near ST Martins School', mapLink: 'https://maps.app.goo.gl/26X6AbY2dhAyzvgE9' },
  { name: 'West Maredpally', loc: 'Sheshachalam Colony', mapLink: 'https://maps.app.goo.gl/nyrDQ4YvNtBqYX3q6' },
  { name: 'Ayyappa', loc: 'Ayyappa Society, Madhapur', mapLink: 'https://maps.app.goo.gl/pRna8fQXh5CczE8e6' },
  { name: 'Moosapet', loc: 'Kukatpally', mapLink: 'https://maps.app.goo.gl/g7x3B2Jo9z1S6whH9' },
];

export default function OurStoresSection() {
  // Duplicate array for seamless infinite scrolling
  const scrollingStores = [...stores, ...stores];

  return (
    <section className="stores-section">
      <style>{`
        .stores-section {
          padding: clamp(2rem, 5vw, 5rem) 0;
          background-color: #fff;
          overflow: hidden;
        }

        .stores-heading {
          font-family: 'Playfair Display', serif;
          color: #0D5E3D;
          font-size: clamp(1.8rem, 5vw, 3rem);
          margin: 0;
        }

        .marquee-wrapper {
          width: 100%;
          overflow: hidden;
          position: relative;
          display: flex;
          align-items: center;
          padding: 2rem 0;
        }
        
        .marquee-wrapper::before,
        .marquee-wrapper::after {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          width: 100px;
          z-index: 2;
          pointer-events: none;
        }
        .marquee-wrapper::before {
          left: 0;
          background: linear-gradient(to right, rgba(255,255,255,1), rgba(255,255,255,0));
        }
        .marquee-wrapper::after {
          right: 0;
          background: linear-gradient(to left, rgba(255,255,255,1), rgba(255,255,255,0));
        }

        .marquee-track {
          display: flex;
          gap: 1rem;
          width: max-content;
          animation: marquee 35s linear infinite;
        }

        .marquee-wrapper:hover .marquee-track {
          animation-play-state: paused;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-50% - 0.5rem));
          }
        }

        .store-card {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          background-color: #FFF8E7;
          border: 1px solid #F5E6C8;
          padding: 16px 22px;
          border-radius: 12px;
          min-width: 320px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.03);
          transition: transform 0.3s, box-shadow 0.3s, border-color 0.3s;
        }

        .store-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(13, 94, 61, 0.1);
          border-color: #0D5E3D;
        }

        .store-icon-wrapper {
          background-color: #0D5E3D;
          color: white;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .store-info {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .store-name {
          font-family: 'Inter', sans-serif;
          font-weight: 700;
          color: #111;
          font-size: 0.95rem;
        }

        .store-loc {
          font-family: 'Inter', sans-serif;
          font-size: 0.82rem;
          color: #555;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .store-hours {
          font-family: 'Inter', sans-serif;
          font-size: 0.78rem;
          color: #777;
        }

        .store-directions-link {
          font-family: 'Inter', sans-serif;
          font-size: 0.82rem;
          font-weight: 600;
          color: #0D5E3D;
          text-decoration: none;
          margin-top: 4px;
          display: inline-flex;
          align-items: center;
          gap: 3px;
          transition: color 0.2s;
        }

        .store-directions-link:hover {
          color: #083D28;
          text-decoration: underline;
        }

        .find-stores-btn {
          background: #0D5E3D;
          color: white;
          padding: 14px 40px;
          border-radius: 30px;
          font-weight: 600;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-top: 3rem;
          transition: all 0.3s;
          box-shadow: 0 4px 15px rgba(13, 94, 61, 0.2);
          font-size: 1.05rem;
        }

        .find-stores-btn:hover {
          background: #083D28;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(13, 94, 61, 0.3);
        }

        @media (max-width: 768px) {
          .store-card {
            min-width: 260px;
          }
          
          .marquee-wrapper::before,
          .marquee-wrapper::after {
            width: 60px;
          }

          .find-stores-btn {
            padding: 12px 30px;
            font-size: 0.95rem;
          }
        }
      `}</style>

      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h2 className="stores-heading">
          Our Stores
        </h2>
      </div>

      {/* Marquee Wrapper */}
      <div className="marquee-wrapper">
        <div className="marquee-track">
          {scrollingStores.map((store, idx) => (
            <div className="store-card" key={idx}>
              <div className="store-icon-wrapper">
                <Store size={22} />
              </div>
              <div className="store-info">
                <span className="store-name">{store.name}</span>
                <span className="store-loc">
                  <MapPin size={13} color="#0D5E3D" /> {store.loc}
                </span>
                {store.mapLink && (
                  <a
                    href={store.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="store-directions-link"
                  >
                    Get Directions →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Button */}
      <div style={{ textAlign: 'center' }}>
        <Link href="/stores" className="find-stores-btn">
          View All Stores
        </Link>
      </div>
    </section>
  );
}
