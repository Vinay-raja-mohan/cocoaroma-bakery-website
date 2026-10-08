'use client';

import React from 'react';
import { Phone, Mail, Home } from 'lucide-react';

export default function ContactSection() {
  return (
    <section className="contact-section" style={{ padding: '5rem 20px', backgroundColor: '#FFF8E7' }}>
      <style>{`
        .contact-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          gap: 4rem;
          flex-wrap: wrap;
        }
        
        .contact-left, .contact-right {
          flex: 1;
          min-width: 320px;
        }

        .contact-heading {
          font-family: 'Playfair Display', serif;
          color: #0D5E3D;
          font-size: 2.2rem;
          text-align: center;
          margin-bottom: 2rem;
        }

        .contact-card {
          display: flex;
          align-items: center;
          background: #fff;
          border: 1px solid #eaeaea;
          border-radius: 8px;
          padding: 16px 24px;
          margin-bottom: 1rem;
          box-shadow: 0 2px 10px rgba(0,0,0,0.02);
          transition: transform 0.2s, box-shadow 0.2s;
        }
        
        .contact-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(13, 94, 61, 0.08);
          border-color: #0D5E3D;
        }

        .contact-icon-wrapper {
          background-color: #e8f3ef;
          color: #0D5E3D;
          width: 40px;
          height: 40px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 20px;
          flex-shrink: 0;
        }

        .contact-text {
          font-family: 'Inter', sans-serif;
          font-weight: 600;
          color: #333;
          font-size: 0.95rem;
        }

        .enquiry-form-card {
          background: #fff;
          border-radius: 12px;
          padding: 30px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.04);
          border: 1px solid #eaeaea;
        }

        .form-group {
          margin-bottom: 1rem;
        }

        .form-input {
          width: 100%;
          background: #f8f9fa;
          border: 1px solid transparent;
          border-radius: 6px;
          padding: 14px 16px;
          font-family: 'Inter', sans-serif;
          font-size: 0.9rem;
          color: #333;
          transition: border-color 0.2s, background 0.2s;
        }

        .form-input:focus {
          outline: none;
          background: #fff;
          border-color: #0D5E3D;
        }

        textarea.form-input {
          min-height: 120px;
          resize: vertical;
        }

        .submit-btn {
          width: 100%;
          background: #0D5E3D;
          color: white;
          border: none;
          border-radius: 6px;
          padding: 14px;
          font-family: 'Inter', sans-serif;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          transition: background 0.2s, transform 0.2s;
        }

        .submit-btn:hover {
          background: #083D28;
          transform: translateY(-1px);
        }
      `}</style>

      <div className="contact-container">
        {/* Left Side: Contact Info */}
        <div className="contact-left">
          <h3 className="contact-heading">Contact us</h3>
          
          <a href="tel:+919491568833" className="contact-card" style={{ textDecoration: 'none' }}>
            <div className="contact-icon-wrapper">
              <Phone size={20} />
            </div>
            <div className="contact-text">+91 94915 68833</div>
          </a>

          <a href="mailto:customersupport@cocoaroma.in" className="contact-card" style={{ textDecoration: 'none' }}>
            <div className="contact-icon-wrapper">
              <Mail size={20} />
            </div>
            <div className="contact-text">customersupport@cocoaroma.in</div>
          </a>

          <div className="contact-card">
            <div className="contact-icon-wrapper">
              <Home size={20} />
            </div>
            <div className="contact-text">10+ Stores across Hyderabad</div>
          </div>
        </div>

        {/* Right Side: Enquiry Form */}
        <div className="contact-right">
          <h3 className="contact-heading">Enquiry</h3>
          
          <div className="enquiry-form-card">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <input type="text" className="form-input" placeholder="Enter firstname" required />
              </div>
              <div className="form-group">
                <input type="text" className="form-input" placeholder="Enter lastname" required />
              </div>
              <div className="form-group">
                <input type="email" className="form-input" placeholder="Enter email" required />
              </div>
              <div className="form-group">
                <textarea className="form-input" placeholder="Enter message" required></textarea>
              </div>
              <button type="submit" className="submit-btn">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
