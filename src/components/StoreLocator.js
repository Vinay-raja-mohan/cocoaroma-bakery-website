'use client';

import React from 'react';
import Link from 'next/link';
import { Store, MapPin } from 'lucide-react';

const stores = [
  { name: 'VV Nagar', loc: 'Beside Pure O Natural' },
  { name: 'Chintal', loc: 'Near ST Martins School' },
  { name: 'West Maredpally', loc: 'Sheshachalam Colony' },
  { name: 'Ayyappa', loc: 'Ayyappa Society, Madhapur' },
  { name: 'Moosapet', loc: 'Kukatpally' },
  { name: 'Addagutta', loc: 'JNTU Campus' },
  { name: 'SR Nagar', loc: 'Opp Sri Chaitanya Jr Clg' },
  { name: 'AS RAO Nagar', loc: 'Anupuram Kapra' },
  { name: 'Dulapally', loc: 'Dundigal Gandimaisamma' }
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
          align-items: center;
          gap: 12px;
          background-color: #FFF8E7;
          border: 1px solid #F5E6C8;
          padding: 16px 24px;
          border-radius: 12px;
          min-width: 320px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.03);
          transition: transform 0.3s, box-shadow 0.3s, border-color 0.3s;
          cursor: default;
        }

        .store-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(13, 94, 61, 0.1);
          border-color: #0D5E3D;
        }

        .store-icon-wrapper {
          background-color: #0D5E3D;
          color: white;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .store-info {
          display: flex;
          flex-direction: column;
        }

        .store-name {
          font-family: 'Inter', sans-serif;
          font-weight: 700;
          color: #111;
          font-size: 1rem;
          margin-bottom: 2px;
        }

        .store-loc {
          font-family: 'Inter', sans-serif;
          font-size: 0.85rem;
          color: #666;
          display: flex;
          align-items: center;
          gap: 4px;
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
                <Store size={24} />
              </div>
              <div className="store-info">
                <span className="store-name">{store.name}</span>
                <span className="store-loc">
                  <MapPin size={14} color="#0D5E3D" /> {store.loc}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Button */}
      <div style={{ textAlign: 'center' }}>
        <Link href="/locations" className="find-stores-btn">
          Find Stores
        </Link>
      </div>
    </section>
  );
}
