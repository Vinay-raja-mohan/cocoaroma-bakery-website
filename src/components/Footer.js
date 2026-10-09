'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail } from 'lucide-react';

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const TwitterIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

const YoutubeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
  </svg>
);

export default function Footer() {
  return (
    <footer className="footer-section" style={{ backgroundColor: '#083D28', color: '#FFF8E7', position: 'relative', margin: 0 }}>
      <style>{`
        .footer-container {
          width: 80%;
          margin: 0 auto;
          padding: 4rem 40px 2rem 40px;
          display: flex;
          flex-wrap: wrap;
          gap: 3rem;
          justify-content: space-between;
        }

        .footer-col-left {
          flex: 2;
          min-width: 350px;
        }

        .footer-col-middle {
          flex: 1;
          min-width: 250px;
        }

        .footer-col-right {
          flex: 1;
          min-width: 250px;
        }

        .footer-logo-text {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.5rem, 3vw, 2rem);
          font-weight: 700;
          color: #FFF8E7;
          margin-bottom: 1rem;
          display: inline-block;
        }

        .footer-desc {
          font-family: 'Inter', sans-serif;
          font-size: 0.9rem;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 1.5rem;
        }

        .social-links {
          display: flex;
          gap: 12px;
        }

        .social-btn {
          width: 36px;
          height: 36px;
          border-radius: 6px;
          background-color: rgba(255, 255, 255, 0.1);
          color: #FFF8E7;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.2s, background-color 0.2s, color 0.2s;
        }

        .social-btn:hover {
          background-color: #FFF8E7;
          color: #083D28;
          transform: translateY(-2px);
        }

        .footer-title {
          font-family: 'Inter', sans-serif;
          font-size: 1.05rem;
          font-weight: 600;
          color: #FFF8E7;
          margin-bottom: 1.5rem;
        }

        .quick-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .quick-links li {
          margin-bottom: 12px;
          padding-bottom: 12px;
          border-bottom: 1px dashed rgba(255, 255, 255, 0.2);
        }

        .quick-links li:last-child {
          border-bottom: none;
        }

        .quick-links a {
          text-decoration: none;
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.9rem;
          transition: color 0.2s;
          font-family: 'Inter', sans-serif;
        }

        .quick-links a:hover {
          color: #FFF8E7;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
          padding-bottom: 16px;
          border-bottom: 1px dashed rgba(255, 255, 255, 0.2);
          font-size: 0.9rem;
          font-family: 'Inter', sans-serif;
          color: rgba(255, 255, 255, 0.8);
        }

        .available-box {
          display: flex;
          gap: 12px;
          margin-top: 12px;
        }

        .app-btn {
          padding: 8px 16px;
          color: white;
          font-weight: bold;
          border-radius: 4px;
          font-size: 0.8rem;
          font-family: 'Inter', sans-serif;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .app-btn.swiggy { background-color: #FC8019; }
        .app-btn.zomato { background-color: #E23744; }

        .footer-bottom-section {
          width: 100%;
          padding: 0 40px;
        }

        .payment-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          font-family: 'Inter', sans-serif;
          font-size: 0.9rem;
          margin-bottom: 2rem;
          color: rgba(255, 255, 255, 0.8);
        }

        .payment-icon {
          font-weight: bold;
          font-size: 0.9rem;
          background: #eee;
          padding: 2px 8px;
          border-radius: 4px;
          color: #333;
        }

        .copyright-row {
          border-top: 1px dashed rgba(255, 255, 255, 0.2);
          padding: 1.5rem 0;
          text-align: center;
          font-size: 0.85rem;
          font-family: 'Inter', sans-serif;
          color: rgba(255, 255, 255, 0.6);
        }

        @media (max-width: 1024px) {
          .footer-container { gap: 2rem; }
          .footer-col-left { min-width: 280px; }
          .footer-col-middle, .footer-col-right { min-width: 200px; }
        }

        @media (max-width: 768px) {
          .footer-container { 
            flex-direction: column; 
            width: 100%;
            padding: 2.5rem 20px 1rem;
          }
          .footer-col-left, .footer-col-middle, .footer-col-right { 
            min-width: 100%; 
            text-align: center;
          }
          .social-links { justify-content: center; }
          .quick-links li { text-align: center; }
          .contact-item { justify-content: center; }
          .available-box { justify-content: center; }
          .footer-bottom-section { padding: 0 20px; }
        }
      `}</style>

      <div className="footer-container">
        
        {/* Left Column */}
        <div className="footer-col-left">
          <div className="footer-logo-text">Cocoaroma</div>
          <p className="footer-desc">
            Cocoaroma, the brand name of Sai Sree Foods Private Limited, has made a presence in the Hyderabad bakery segment since November 2019. Company with rich expertise in bakery product manufacturing and innovation. Starting with 3 stores in 2019, we are now a chain of 10+ offline stores across Hyderabad, marking our presence across all online food stores for online delivery of cakes and desserts. We are Happy and pleased that we have made a success of creating a product that meets our Customers Expectations in Quality, richness, and Satisfaction, with our sales rising exponentially since inception.
          </p>
          <div className="social-links">
            <a href="#" className="social-btn"><InstagramIcon /></a>
            <a href="#" className="social-btn"><FacebookIcon /></a>
            <a href="#" className="social-btn"><TwitterIcon /></a>
            <a href="#" className="social-btn"><YoutubeIcon /></a>
          </div>
        </div>

        {/* Middle Column */}
        <div className="footer-col-middle">
          <h4 className="footer-title">Quick Links</h4>
          <ul className="quick-links">
            <li><Link href="/bakery-menu">Our Menu</Link></li>
            <li><Link href="/contact">Corporate Enquiry</Link></li>
            <li><Link href="#">Privacy Policy</Link></li>
            <li><Link href="#">Terms & Condition</Link></li>
          </ul>
        </div>

        {/* Right Column */}
        <div className="footer-col-right">
          <h4 className="footer-title">Contact Us</h4>
          
          <div className="contact-item">
            <Phone size={16} color="#FFF8E7" />
            <span>+91 94915 68833</span>
          </div>
          
          <div className="contact-item">
            <Mail size={16} color="#FFF8E7" />
            <span>customersupport@cocoaroma.in</span>
          </div>

          <div style={{ marginTop: '2rem' }}>
            <h4 className="footer-title" style={{ marginBottom: '0.5rem' }}>Also Available on</h4>
            <div className="available-box">
              <div className="app-btn swiggy">SWIGGY</div>
              <div className="app-btn zomato">ZOMATO</div>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="footer-bottom-section">
        <div className="copyright-row">
          Copyright &copy; Sai Sree Foods Private limited. All Rights Reserved | Designed & Developed by Vinay Raj
        </div>
      </div>
    </footer>
  );
}
