'use client';

import React from 'react';

export default function FloatingWhatsApp() {
  return (
    <>
      <a
        href="https://wa.me/919491568833?text=Hi%20Cocoaroma!%20I%20have%20an%20enquiry."
        target="_blank"
        rel="noopener noreferrer"
        className="floating-wa-btn"
        aria-label="Chat with Cocoaroma Bakery on WhatsApp"
      >
        <span className="floating-wa-ping"></span>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="#FFFFFF">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
        </svg>
        <span className="floating-wa-tooltip">Order & Chat on WhatsApp</span>
      </a>

      <style>{`
        .floating-wa-btn {
          position: fixed;
          bottom: 30px;
          left: 30px;
          z-index: 9999;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: #25D366;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 6px 20px rgba(37, 211, 102, 0.45);
          transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.3s ease;
          text-decoration: none;
        }

        .floating-wa-btn:hover {
          transform: translateY(-4px) scale(1.08);
          box-shadow: 0 10px 25px rgba(37, 211, 102, 0.6);
          background: #20BA5A;
        }

        .floating-wa-ping {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: rgba(37, 211, 102, 0.5);
          animation: waPulse 2.5s infinite;
          z-index: -1;
          pointer-events: none;
        }

        @keyframes waPulse {
          0% {
            transform: scale(0.95);
            opacity: 0.8;
          }
          70% {
            transform: scale(1.4);
            opacity: 0;
          }
          100% {
            transform: scale(1.4);
            opacity: 0;
          }
        }

        .floating-wa-tooltip {
          position: absolute;
          left: 68px;
          background: #083D28;
          color: #FFF8E7;
          font-family: 'Inter', sans-serif;
          font-size: 0.82rem;
          font-weight: 600;
          padding: 6px 12px;
          border-radius: 20px;
          white-space: nowrap;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
          opacity: 0;
          pointer-events: none;
          transform: translateX(-8px);
          transition: opacity 0.25s ease, transform 0.25s ease;
        }

        .floating-wa-btn:hover .floating-wa-tooltip {
          opacity: 1;
          transform: translateX(0);
        }

        @media (max-width: 768px) {
          .floating-wa-btn {
            bottom: 20px;
            left: 20px;
            width: 48px;
            height: 48px;
          }
          .floating-wa-btn svg {
            width: 24px;
            height: 24px;
          }
          .floating-wa-tooltip {
            display: none;
          }
        }
      `}</style>
    </>
  );
}
