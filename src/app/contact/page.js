'use client';

import React from 'react';
import Link from 'next/link';

const STORES_CONTACT = [
  {
    id: 'vv-nagar',
    name: 'VV Nagar',
    area: 'Vivekananda Nagar',
    phone: '+91 9281038393',
    rawPhone: '+919281038393',
    address: 'Beside Pure O Natural, Vivekananda Nagar, Hyderabad, Telangana',
    hours: '10:00 AM - 11:00 PM',
    mapLink: 'https://maps.app.goo.gl/AvRakgYfHDuho4cL6',
  },
  {
    id: 'ayyappa-society',
    name: 'Ayyappa Society',
    area: 'Madhapur',
    phone: '+91 9281038392',
    rawPhone: '+919281038392',
    address: 'Ayyappa Society, Madhapur, Hyderabad, Telangana',
    hours: '10:00 AM - 11:00 PM',
    mapLink: 'https://maps.app.goo.gl/pRna8fQXh5CczE8e6',
  },
  {
    id: 'chintal',
    name: 'Chintal',
    area: 'Near ST Martins School',
    phone: '+91 9281038391',
    rawPhone: '+919281038391',
    address: 'Near ST Martins School, Chintal, Hyderabad, Telangana',
    hours: '10:00 AM - 11:00 PM',
    mapLink: 'https://maps.app.goo.gl/26X6AbY2dhAyzvgE9',
  },
  {
    id: 'west-maredpally',
    name: 'West Maredpally',
    area: 'Sheshachalam Colony',
    phone: '+91 9281038389',
    rawPhone: '+919281038389',
    address: 'Sheshachalam Colony, West Maredpally, Hyderabad, Telangana',
    hours: '10:00 AM - 11:00 PM',
    mapLink: 'https://maps.app.goo.gl/nyrDQ4YvNtBqYX3q6',
  },
  {
    id: 'moosapet',
    name: 'Moosapet',
    area: 'Kukatpally / Moosapet',
    phone: '+91 9281439530',
    rawPhone: '+919281439530',
    address: 'Near Metro Station, Kukatpally / Moosapet, Hyderabad, Telangana',
    hours: '10:00 AM - 11:00 PM',
    mapLink: 'https://maps.app.goo.gl/g7x3B2Jo9z1S6whH9',
  },
];

export default function ContactPage() {
  return (
    <div className="contact-page-wrapper">
      <style>{`
        .contact-page-wrapper {
          background-color: #FFF8E7;
          min-height: 80vh;
          padding: 40px 20px 80px;
          color: #2d3748;
          font-family: 'Inter', sans-serif;
        }

        .contact-inner {
          max-width: 1200px;
          margin: 0 auto;
        }

        /* Hero Header */
        .contact-header {
          text-align: center;
          margin-bottom: 50px;
        }

        .contact-eyebrow {
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 2.5px;
          color: #C89B3C;
          font-weight: 700;
          margin-bottom: 8px;
          display: block;
        }

        .contact-main-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.4rem, 5vw, 3.8rem);
          color: #083D28;
          font-weight: 700;
          margin: 0 0 16px 0;
          line-height: 1.15;
        }

        .contact-title-rule {
          width: 70px;
          height: 3px;
          background-color: #C89B3C;
          margin: 0 auto 20px;
          border-radius: 2px;
        }

        .contact-subtitle {
          font-size: 1.05rem;
          color: #555;
          max-width: 680px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* Central Care Strip */
        .central-care-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 20px;
          margin-bottom: 60px;
        }

        .care-card {
          background: #FFFFFF;
          border-radius: 12px;
          padding: 24px;
          border: 1px solid rgba(13, 94, 61, 0.12);
          box-shadow: 0 4px 20px rgba(8, 61, 40, 0.04);
          display: flex;
          align-items: center;
          gap: 16px;
          text-decoration: none;
          color: inherit;
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
          /* FIX #1: Prevent card from overflowing viewport */
          min-width: 0;
          max-width: 100%;
          box-sizing: border-box;
        }

        .care-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(13, 94, 61, 0.12);
          border-color: #0D5E3D;
        }

        .care-icon-box {
          width: 52px;
          height: 52px;
          border-radius: 10px;
          background-color: #0D5E3D;
          color: #FFF;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .care-icon-box.gold {
          background-color: #C89B3C;
        }

        .care-icon-box.whatsapp {
          background-color: #25D366;
        }

        .care-label {
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #888;
          font-weight: 600;
          margin-bottom: 4px;
        }

        .care-val {
          font-size: 1.05rem;
          font-weight: 700;
          color: #083D28;
          line-height: 1.3;
          /* FIX #1: Allow long email/phone strings to wrap */
          overflow-wrap: anywhere;
          word-break: break-word;
          min-width: 0;
        }

        .care-subval {
          font-size: 0.8rem;
          color: #666;
          margin-top: 2px;
        }

        /* Section Titles */
        .section-label-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 24px;
        }

        .section-block-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.85rem;
          color: #083D28;
          margin: 0;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .badge-count {
          font-family: 'Inter', sans-serif;
          background: #0D5E3D;
          color: #FFF8E7;
          font-size: 0.8rem;
          padding: 2px 10px;
          border-radius: 20px;
          font-weight: 600;
        }

        /* Stores Grid */
        .stores-cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 24px;
        }

        .store-contact-card {
          background: #FFFFFF;
          border-radius: 14px;
          padding: 28px;
          border: 1px solid rgba(13, 94, 61, 0.12);
          box-shadow: 0 4px 18px rgba(8, 61, 40, 0.04);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
          position: relative;
          overflow: hidden;
        }

        .store-contact-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 30px rgba(8, 61, 40, 0.1);
          border-color: #0D5E3D;
        }

        .store-card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 14px;
        }

        .store-badge {
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #0D5E3D;
          background: #e9f5ef;
          padding: 4px 10px;
          border-radius: 4px;
        }

        .store-name {
          font-family: 'Playfair Display', serif;
          font-size: 1.45rem;
          color: #083D28;
          margin: 6px 0 0 0;
          font-weight: 600;
        }

        .store-info-row {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          margin-bottom: 12px;
          font-size: 0.92rem;
          color: #4A4A4A;
          line-height: 1.45;
        }

        .store-info-icon {
          color: #C89B3C;
          flex-shrink: 0;
          margin-top: 3px;
        }

        .store-phone-highlight {
          margin: 16px 0;
          padding: 12px 16px;
          background: #f7faf8;
          border-left: 3px solid #0D5E3D;
          border-radius: 0 8px 8px 0;
        }

        .store-phone-label {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #666;
          margin-bottom: 2px;
          font-weight: 600;
        }

        .store-phone-num {
          font-size: 1.15rem;
          font-weight: 700;
          color: #0D5E3D;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .store-phone-num:hover {
          color: #083D28;
          text-decoration: underline;
        }

        .store-actions {
          display: flex;
          gap: 12px;
          margin-top: 16px;
        }

        .store-call-btn {
          flex: 1;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: #0D5E3D;
          color: #FFF;
          padding: 10px 14px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.9rem;
          transition: background 0.2s ease, transform 0.2s ease;
        }

        .store-call-btn:hover {
          background: #083D28;
          transform: translateY(-2px);
        }

        .store-map-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          background: #fdf6e7;
          color: #9c7320;
          border: 1px solid #e8d2a0;
          padding: 10px 14px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.9rem;
          transition: background 0.2s ease, border-color 0.2s ease;
        }

        .store-map-btn:hover {
          background: #f7e6c0;
          border-color: #C89B3C;
        }

        /* Responsive Breakpoints */
        @media (max-width: 640px) {
          .contact-page-wrapper {
            padding: 24px 14px 60px;
          }
          .stores-cards-grid {
            grid-template-columns: 1fr;
          }
          .central-care-grid {
            grid-template-columns: 1fr;
          }
        }

        /* FIX #1: Small mobile — care cards overflow fix */
        @media (max-width: 480px) {
          .central-care-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }
          .care-card {
            padding: 16px 14px;
            gap: 12px;
          }
          .care-icon-box {
            width: 44px;
            height: 44px;
            flex-shrink: 0;
          }
          .care-val {
            font-size: 0.95rem;
          }
        }
      `}</style>

      <div className="contact-inner">
        
        {/* Header */}
        <header className="contact-header">
          <span className="contact-eyebrow">Get In Touch</span>
          <h1 className="contact-main-title">Contact Us</h1>
          <div className="contact-title-rule"></div>
          <p className="contact-subtitle">
            Have a question about our eggless artisan cakes, custom celebration designs, or orders? 
            Reach our central customer care or call your local Cocoaroma store directly below.
          </p>
        </header>

        {/* Central Direct Support Strip */}
        <div className="central-care-grid">
          {/* Main Call */}
          <a href="tel:+919491568833" className="care-card">
            <div className="care-icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <div>
              <div className="care-label">Customer Support</div>
              <div className="care-val">+91 94915 68833</div>
              <div className="care-subval">Direct Inquiries & Assistance</div>
            </div>
          </a>

          {/* WhatsApp Direct */}
          <a 
            href="https://wa.me/919491568833?text=Hi%20Cocoaroma!%20I%20have%20an%20enquiry." 
            target="_blank" 
            rel="noopener noreferrer" 
            className="care-card"
          >
            <div className="care-icon-box whatsapp">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
            </div>
            <div>
              <div className="care-label">WhatsApp Quick Order</div>
              <div className="care-val">Chat on WhatsApp</div>
              <div className="care-subval">Instant replies & custom orders</div>
            </div>
          </a>

          {/* Email Support */}
          <a href="mailto:customersupport@cocoaroma.in" className="care-card">
            <div className="care-icon-box gold">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <div>
              <div className="care-label">Email Support</div>
              <div className="care-val" style={{ fontSize: '0.95rem' }}>customersupport@cocoaroma.in</div>
              <div className="care-subval">Corporate & wholesale orders</div>
            </div>
          </a>
        </div>

        {/* Store Contacts Directory */}
        <section className="stores-contact-section">
          <div className="section-label-row">
            <h2 className="section-block-title">
              Our Stores in Hyderabad
              <span className="badge-count">5 Locations</span>
            </h2>
            <Link 
              href="/stores" 
              style={{ color: '#0D5E3D', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
            >
              View Full Store Guide &rarr;
            </Link>
          </div>

          <div className="stores-cards-grid">
            {STORES_CONTACT.map((store) => (
              <div key={store.id} className="store-contact-card">
                <div>
                  <div className="store-card-header">
                    <div>
                      <span className="store-badge">{store.area}</span>
                      <h3 className="store-name">{store.name}</h3>
                    </div>
                  </div>

                  <div className="store-info-row">
                    <svg className="store-info-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <span>{store.address}</span>
                  </div>

                  <div className="store-info-row">
                    <svg className="store-info-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    <span>{store.hours}</span>
                  </div>

                  <div className="store-phone-highlight">
                    <div className="store-phone-label">Store Number / Direct Line</div>
                    <a href={`tel:${store.rawPhone}`} className="store-phone-num">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                      {store.phone}
                    </a>
                  </div>
                </div>

                <div className="store-actions">
                  <a href={`tel:${store.rawPhone}`} className="store-call-btn">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    Call Store
                  </a>
                  <a 
                    href={store.mapLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="store-map-btn" 
                    title="View Directions on Google Maps"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
                    </svg>
                    Map
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
