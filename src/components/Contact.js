'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Phone, Mail, Home, CheckCircle, MessageSquare, Send } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate swift submission & save
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const resetForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: ''
    });
    setIsSubmitted(false);
  };

  const whatsappMessage = encodeURIComponent(
    `Hi Cocoaroma! My name is ${formData.firstName} ${formData.lastName}.\n` +
    `Email: ${formData.email || 'N/A'}\n` +
    (formData.phone ? `Phone: ${formData.phone}\n` : '') +
    `Enquiry: ${formData.message}`
  );
  const whatsappUrl = `https://wa.me/919491568833?text=${whatsappMessage}`;

  return (
    <section className="contact-section" id="contact" style={{ padding: '5rem 20px', backgroundColor: '#FFF8E7' }}>
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
          border-radius: 10px;
          padding: 16px 20px;
          margin-bottom: 1rem;
          box-shadow: 0 2px 10px rgba(0,0,0,0.02);
          transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s;
          text-decoration: none;
          color: inherit;
        }
        
        .contact-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(13, 94, 61, 0.08);
          border-color: #0D5E3D;
        }

        .contact-icon-wrapper {
          background-color: #e8f3ef;
          color: #0D5E3D;
          width: 44px;
          height: 44px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 18px;
          flex-shrink: 0;
          transition: background-color 0.2s, color 0.2s;
        }

        .contact-card:hover .contact-icon-wrapper {
          background-color: #0D5E3D;
          color: #FFF;
        }

        .contact-icon-wrapper.whatsapp {
          background-color: #E8F8EE;
          color: #25D366;
        }

        .contact-card:hover .contact-icon-wrapper.whatsapp {
          background-color: #25D366;
          color: #FFF;
        }

        .contact-card-content {
          display: flex;
          flex-direction: column;
        }

        .contact-card-label {
          font-family: 'Inter', sans-serif;
          font-size: 0.78rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #888;
          font-weight: 600;
        }

        .contact-text {
          font-family: 'Inter', sans-serif;
          font-weight: 600;
          color: #083D28;
          font-size: 0.98rem;
          margin-top: 2px;
        }

        .enquiry-form-card {
          background: #fff;
          border-radius: 16px;
          padding: 32px;
          box-shadow: 0 6px 24px rgba(8, 61, 40, 0.06);
          border: 1px solid #eaeaea;
        }

        .form-row-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        @media (max-width: 600px) {
          .form-row-2 {
            grid-template-columns: 1fr;
          }
        }

        .form-group {
          margin-bottom: 1.1rem;
        }

        .form-label {
          display: block;
          font-family: 'Inter', sans-serif;
          font-size: 0.82rem;
          font-weight: 600;
          color: #083D28;
          margin-bottom: 6px;
        }

        .form-input {
          width: 100%;
          background: #fbfbfa;
          border: 1px solid #e2e2e2;
          border-radius: 8px;
          padding: 12px 14px;
          font-family: 'Inter', sans-serif;
          font-size: 0.92rem;
          color: #222;
          transition: border-color 0.2s, background 0.2s, box-shadow 0.2s;
          box-sizing: border-box;
        }

        .form-input:focus {
          outline: none;
          background: #fff;
          border-color: #0D5E3D;
          box-shadow: 0 0 0 3px rgba(13, 94, 61, 0.1);
        }

        textarea.form-input {
          min-height: 110px;
          resize: vertical;
        }

        .submit-btn {
          width: 100%;
          background: #0D5E3D;
          color: white;
          border: none;
          border-radius: 8px;
          padding: 14px;
          font-family: 'Inter', sans-serif;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .submit-btn:hover {
          background: #083D28;
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(8, 61, 40, 0.2);
        }

        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
          transform: none;
        }

        /* Success Card */
        .enquiry-success-box {
          text-align: center;
          padding: 20px 10px;
          animation: fadeInScale 0.3s ease-out;
        }

        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(0.96); }
          to { opacity: 1; transform: scale(1); }
        }

        .success-icon-wrap {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: #E8F8EE;
          color: #166534;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 16px;
        }

        .success-title {
          font-family: 'Playfair Display', serif;
          color: #083D28;
          font-size: 1.6rem;
          font-weight: 700;
          margin-bottom: 8px;
        }

        .success-desc {
          font-family: 'Inter', sans-serif;
          color: #555;
          font-size: 0.95rem;
          line-height: 1.5;
          margin-bottom: 24px;
        }

        .forward-wa-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          background: #25D366;
          color: #FFF;
          font-family: 'Inter', sans-serif;
          font-weight: 600;
          font-size: 0.95rem;
          padding: 12px 24px;
          border-radius: 8px;
          text-decoration: none;
          width: 100%;
          box-sizing: border-box;
          transition: background 0.2s, transform 0.2s;
          margin-bottom: 12px;
        }

        .forward-wa-btn:hover {
          background: #1EBE5D;
          transform: translateY(-1px);
        }

        .reset-form-link {
          background: transparent;
          border: none;
          color: #666;
          font-family: 'Inter', sans-serif;
          font-size: 0.88rem;
          text-decoration: underline;
          cursor: pointer;
          padding: 6px;
        }

        .reset-form-link:hover {
          color: #083D28;
        }

        @media (max-width: 768px) {
          .contact-section {
            padding: 3rem 16px 5rem !important;
          }
          .contact-container {
            gap: 2rem;
          }
          .contact-heading {
            font-size: 1.8rem;
            margin-bottom: 1.5rem;
          }
          .enquiry-form-card {
            padding: 20px 16px;
            border-radius: 12px;
          }
        }
      `}</style>

      <div className="contact-container">
        {/* Left Side: Contact Info */}
        <div className="contact-left">
          <h3 className="contact-heading">Contact Us</h3>
          
          {/* WhatsApp Direct */}
          <a 
            href="https://wa.me/919491568833?text=Hi%20Cocoaroma!%20I%20have%20an%20enquiry." 
            target="_blank" 
            rel="noopener noreferrer" 
            className="contact-card"
          >
            <div className="contact-icon-wrapper whatsapp">
              <MessageSquare size={22} />
            </div>
            <div className="contact-card-content">
              <span className="contact-card-label">Instant Chat</span>
              <span className="contact-text">Chat with Us on WhatsApp</span>
            </div>
          </a>

          {/* Central Call */}
          <a href="tel:+919491568833" className="contact-card">
            <div className="contact-icon-wrapper">
              <Phone size={20} />
            </div>
            <div className="contact-card-content">
              <span className="contact-card-label">Direct Phone</span>
              <span className="contact-text">+91 94915 68833</span>
            </div>
          </a>

          {/* Email Support */}
          <a href="mailto:customersupport@cocoaroma.in" className="contact-card">
            <div className="contact-icon-wrapper">
              <Mail size={20} />
            </div>
            <div className="contact-card-content">
              <span className="contact-card-label">Email Support</span>
              <span className="contact-text">customersupport@cocoaroma.in</span>
            </div>
          </a>

          {/* Store Locations */}
          <Link href="/stores" className="contact-card">
            <div className="contact-icon-wrapper">
              <Home size={20} />
            </div>
            <div className="contact-card-content">
              <span className="contact-card-label">Store Network</span>
              <span className="contact-text">5 Stores across Hyderabad</span>
            </div>
          </Link>
        </div>

        {/* Right Side: Enquiry Form */}
        <div className="contact-right">
          <h3 className="contact-heading">Send an Enquiry</h3>
          
          <div className="enquiry-form-card">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit}>
                <div className="form-row-2">
                  <div className="form-group">
                    <label className="form-label" htmlFor="firstName">First Name *</label>
                    <input 
                      id="firstName"
                      name="firstName"
                      type="text" 
                      className="form-input" 
                      placeholder="e.g. Rahul" 
                      required 
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="lastName">Last Name *</label>
                    <input 
                      id="lastName"
                      name="lastName"
                      type="text" 
                      className="form-input" 
                      placeholder="e.g. Sharma" 
                      required 
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-row-2">
                  <div className="form-group">
                    <label className="form-label" htmlFor="phone">Phone Number</label>
                    <input 
                      id="phone"
                      name="phone"
                      type="tel" 
                      className="form-input" 
                      placeholder="e.g. +91 98765 43210" 
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="email">Email Address *</label>
                    <input 
                      id="email"
                      name="email"
                      type="email" 
                      className="form-input" 
                      placeholder="e.g. rahul@example.com" 
                      required 
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="message">Message / Custom Cake Details *</label>
                  <textarea 
                    id="message"
                    name="message"
                    className="form-input" 
                    placeholder="Tell us about the cake, occasion, date, or any specific questions..." 
                    required
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <button type="submit" className="submit-btn" disabled={isSubmitting}>
                  <Send size={18} />
                  <span>{isSubmitting ? 'Sending Enquiry...' : 'Submit Enquiry'}</span>
                </button>
              </form>
            ) : (
              <div className="enquiry-success-box">
                <div className="success-icon-wrap">
                  <CheckCircle size={36} />
                </div>
                <h4 className="success-title">Thank You{formData.firstName ? `, ${formData.firstName}` : ''}!</h4>
                <p className="success-desc">
                  We have received your enquiry. Our cake artisans and customer care team typically respond within 30 minutes.
                </p>

                <a 
                  href={whatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="forward-wa-btn"
                >
                  <MessageSquare size={18} />
                  <span>Forward Details to WhatsApp</span>
                </a>

                <div>
                  <button type="button" className="reset-form-link" onClick={resetForm}>
                    Send another message
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
