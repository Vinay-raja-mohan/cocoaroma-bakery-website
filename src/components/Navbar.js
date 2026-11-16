'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import SearchModal from './SearchModal';

const ourProductsMenu = [
  {
    name: 'Cakes',
    subItems: [
      { name: 'Regular Cakes', id: 'regular-cakes' },
      { name: 'Unique Cakes', id: 'unique-cakes' },
      { name: 'Kids Cakes', id: 'kids-cakes' },
      { name: 'Love Cakes', id: 'love-cakes' },
      { name: 'Corporate Cakes', id: 'corporate-cakes' },
      { name: 'Cheesecakes', id: 'cheesecakes' },
      { name: 'Gifting Cakes', id: 'gifting-cakes' }
    ]
  },
  { name: 'Brownies', id: 'brownies' },
  { name: 'Cupcakes', id: 'cupcakes' },
  { name: 'Savouries', id: 'savouries' },
  { name: 'Donuts', id: 'donuts' },
  { name: 'Desserts', id: 'desserts' },
  { name: 'Chocolates', id: 'chocolates' },
  { name: 'Cookies', id: 'Cookies' },
  { name: 'Tidbits', id: 'tidbits' },
  { name: 'Breads', id: 'breads' },
  { name: 'Tea Time Cakes', id: 'tea-time-cakes' }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cakesAccordionOpen, setCakesAccordionOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setCakesAccordionOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add('nav-drawer-open');
    } else {
      document.body.classList.remove('nav-drawer-open');
    }
    return () => document.body.classList.remove('nav-drawer-open');
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (searchOpen) {
      document.body.classList.add('search-open');
    } else {
      document.body.classList.remove('search-open');
    }
    return () => document.body.classList.remove('search-open');
  }, [searchOpen]);

  return (
    <>

      <header
        className="navbar-header"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          width: '100%',
          transition: 'all 0.3s ease',
          backgroundColor: '#FFF',
          borderBottom: isScrolled ? '1px solid #eee' : '1px solid transparent',
          boxShadow: isScrolled ? '0 2px 12px rgba(0,0,0,0.08)' : 'none',
          padding: isScrolled ? '10px 0' : '14px 0',
        }}
      >
      <style>{`
        .navbar-header {
          max-width: 100%;
          box-sizing: border-box;
        }

        .top-contact-bar {
          background-color: #0D5E3D;
          color: #FFF;
          padding: 10px 0;
          font-family: 'Inter', sans-serif;
          font-size: 0.85rem;
          font-weight: 500;
        }

        .top-contact-container {
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
        }

        .top-contact-item {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .top-contact-divider {
          color: rgba(255, 255, 255, 0.4);
        }

        .nav-container {
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 clamp(20px, 3vw, 40px);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .nav-logo {
          display: flex;
          align-items: center;
          text-decoration: none;
          flex: 1;
        }

        .nav-logo-img {
          object-fit: contain;
          transition: transform 0.3s ease, width 0.3s ease;
          width: 150px;
          height: auto;
        }

        .nav-logo-img:hover {
          transform: scale(1.05);
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: clamp(24px, 2.5vw, 48px);
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .nav-links > li {
          position: relative;
        }

        .nav-link {
          text-decoration: none;
          font-family: 'Inter', sans-serif;
          font-size: 0.95rem;
          font-weight: 500;
          color: #333;
          padding: 6px 0;
          position: relative;
          transition: color 0.2s;
          display: flex;
          align-items: center;
          gap: 4px;
          cursor: pointer;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background-color: #0D5E3D;
          transition: width 0.3s ease;
        }

        .nav-link:hover {
          color: #0D5E3D;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .nav-link.active {
          color: #0D5E3D;
          font-weight: 600;
        }

        .nav-link.active::after {
          width: 100%;
          background-color: #C89B3C;
        }

        /* Primary Dropdown CSS */
        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0; /* Align left edge with parent */
          background: #FFF;
          border: 1px solid #f0f0f0;
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
          border-radius: 8px;
          min-width: 220px;
          opacity: 0;
          visibility: hidden;
          transform: translateY(10px);
          transition: all 0.2s ease-in-out;
          z-index: 100;
          padding: 8px 0;
          list-style: none;
          margin: 0;
        }

        .dropdown-wrapper:hover .dropdown-menu {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .dropdown-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 20px;
          font-family: 'Inter', sans-serif;
          font-size: 0.9rem;
          font-weight: 500;
          color: #555;
          text-decoration: none;
          transition: all 0.2s;
          cursor: pointer;
        }

        .dropdown-item:hover {
          background-color: rgba(13, 94, 61, 0.05);
          color: #0D5E3D;
        }

        /* Nested Dropdown CSS */
        .nested-dropdown-wrapper {
          position: relative;
        }

        .nested-dropdown-menu {
          position: absolute;
          top: 0;
          left: 100%;
          background: #FFF;
          border: 1px solid #f0f0f0;
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
          border-radius: 8px;
          min-width: 200px;
          opacity: 0;
          visibility: hidden;
          transform: translateX(10px);
          transition: all 0.2s ease-in-out;
          z-index: 101;
          padding: 8px 0;
          list-style: none;
          margin: 0;
        }

        /* A slightly transparent bridge so the mouse doesn't fall off when moving diagonally */
        .nested-dropdown-menu::before {
          content: '';
          position: absolute;
          top: 0;
          left: -10px;
          width: 10px;
          height: 100%;
          background: transparent;
        }

        .nested-dropdown-wrapper:hover .nested-dropdown-menu {
          opacity: 1;
          visibility: visible;
          transform: translateX(0);
        }

        /* Active styling inside dropdowns */
        .dropdown-item.active-item {
          background-color: rgba(13, 94, 61, 0.08);
          color: #0D5E3D;
          font-weight: 600;
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 16px;
          flex: 1;
          justify-content: flex-end;
        }

        .nav-action-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: none;
          background: rgba(13, 94, 61, 0.05);
          color: #0D5E3D;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .nav-action-btn:hover {
          background: #0D5E3D;
          color: #FFF;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(13, 94, 61, 0.2);
        }

        .hamburger {
          display: none;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 44px;
          height: 44px;
          border: none;
          background: rgba(13, 94, 61, 0.05);
          cursor: pointer;
          border-radius: 50%;
          transition: all 0.3s ease;
        }

        .hamburger:hover {
          background: rgba(13, 94, 61, 0.1);
        }

        .hamburger-line {
          width: 20px;
          height: 2px;
          background-color: #0D5E3D;
          border-radius: 2px;
          transition: all 0.3s ease;
        }

        .hamburger-line + .hamburger-line {
          margin-top: 4px;
        }

        .hamburger.open .hamburger-line:nth-child(1) {
          transform: rotate(45deg) translate(4px, 4px);
        }

        .hamburger.open .hamburger-line:nth-child(2) {
          opacity: 0;
        }

        .hamburger.open .hamburger-line:nth-child(3) {
          transform: rotate(-45deg) translate(4px, -4px);
        }

        .mobile-menu {
          display: none;
          position: fixed;
          top: 72px;
          left: 0;
          right: 0;
          bottom: 0;
          height: calc(100vh - 72px);
          background: #FFFFFF;
          padding: 16px 18px calc(40px + env(safe-area-inset-bottom, 0px));
          animation: slideDown 0.25s ease;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
          z-index: 1001;
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
          border-top: 1px solid #f0ece3;
        }

        .mobile-full-menu-cta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: linear-gradient(135deg, #0D5E3D 0%, #157950 100%);
          color: #FFF !important;
          padding: 14px 16px;
          border-radius: 12px;
          text-decoration: none;
          margin-bottom: 16px;
          box-shadow: 0 4px 14px rgba(13, 94, 61, 0.25);
        }

        .mobile-accordion-toggle {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #fdfbf7;
          border: 1px solid #f0e8d8;
          padding: 12px 14px;
          border-radius: 8px;
          font-family: 'Inter', sans-serif;
          font-size: 0.98rem;
          font-weight: 600;
          color: #0D5E3D;
          cursor: pointer;
          text-align: left;
          margin-bottom: 6px;
        }

        .mobile-menu.open {
          display: block;
        }

        .mobile-link {
          display: block;
          text-decoration: none;
          font-family: 'Inter', sans-serif;
          font-size: 1.05rem;
          font-weight: 500;
          color: #444;
          padding: 12px 16px;
          border-radius: 8px;
          transition: all 0.2s;
        }

        .mobile-link:hover,
        .mobile-link.active {
          color: #0D5E3D;
          background: rgba(13, 94, 61, 0.06);
          font-weight: 600;
        }

        .mobile-link.active {
          border-left: 4px solid #C89B3C;
        }

        .mobile-dropdown-title {
          font-family: 'Inter', sans-serif;
          font-size: 1.05rem;
          font-weight: 600;
          color: #0D5E3D;
          padding: 16px 16px 8px;
          border-bottom: 1px solid rgba(13, 94, 61, 0.1);
          margin-bottom: 8px;
        }

        .mobile-dropdown-items {
          padding-left: 12px;
          margin-bottom: 12px;
        }

        .mobile-link.sub-link {
          font-size: 0.95rem;
          padding: 10px 16px;
          color: #666;
        }
        
        .mobile-link.nested-sub-link {
          font-size: 0.9rem;
          padding: 8px 16px 8px 32px;
          color: #777;
          position: relative;
        }

        .mobile-link.nested-sub-link::before {
          content: '';
          position: absolute;
          left: 14px;
          top: 50%;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #C89B3C;
          transform: translateY(-50%);
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Responsive Breakpoints */
        @media (max-width: 1600px) and (min-width: 1281px) {
          /* Desktop */
        }

        @media (max-width: 1536px) and (min-width: 1025px) {
          .nav-links { gap: clamp(20px, 2vw, 32px); }
          .nav-logo-img { width: 135px; }
        }

        @media (max-width: 1024px) {
          .nav-links { display: none; }
          .hamburger { display: flex; }
          .nav-logo-img { width: 120px; }
        }

        @media (max-width: 767px) {
          .top-contact-bar {
            font-size: 0.75rem;
          }
          .top-contact-container {
            justify-content: center;
            flex-wrap: wrap;
            gap: 12px;
            padding: 0 20px;
          }
          .top-contact-divider:not(.email-divider) {
            display: none;
          }
          .nav-container { padding: 0 20px; }
          .nav-logo-img { width: 105px; }
        }

        @media (max-width: 480px) {
          .email-item, .email-divider { display: none; }
        }
      `}</style>

      <div className="nav-container">
        {/* Logo (Image Only) */}
        <Link href="/" className="nav-logo">
          <Image
            src="/images/logo/logo.jpg"
            alt="Cocoaroma Logo"
            width={150}
            height={40}
            priority
            style={{ height: 'auto' }}
            sizes="(max-width: 767px) 105px, (max-width: 1024px) 120px, 150px"
            className="nav-logo-img"
          />
        </Link>

        {/* Desktop Nav Links */}
        <nav>
          <ul className="nav-links">
            <li>
              <Link href="/" className={`nav-link ${pathname === '/' ? 'active' : ''}`}>Home</Link>
            </li>
            
            {/* Our Products with 2-level Dropdown */}
            <li className="dropdown-wrapper">
              <div className={`nav-link ${(pathname.includes('/product') || pathname.includes('/bakery-menu')) ? 'active' : ''}`}>
                Our Products
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: '2px' }}>
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
              <ul className="dropdown-menu">
                {ourProductsMenu.map((item) => {
                  if (item.subItems) {
                    return (
                      <li key={item.name} className="nested-dropdown-wrapper">
                        <div className="dropdown-item">
                          {item.name}
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="9 18 15 12 9 6"></polyline>
                          </svg>
                        </div>
                        <ul className="nested-dropdown-menu">
                          {item.subItems.map((sub) => (
                            <li key={sub.name}>
                              <Link href={`/product/${sub.id}`} className="dropdown-item">
                                {sub.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                    );
                  }
                  
                  return (
                    <li key={item.name}>
                      <Link href={`/product/${item.id}`} className="dropdown-item">
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </li>

            <li>
              <Link href="/stores" className={`nav-link ${pathname === '/stores' ? 'active' : ''}`}>Stores</Link>
            </li>
            <li>
              <Link href="/contact" className={`nav-link ${pathname === '/contact' ? 'active' : ''}`}>Contact</Link>
            </li>
            <li>
              <Link href="/about" className={`nav-link ${pathname === '/about' ? 'active' : ''}`}>About Us</Link>
            </li>
          </ul>
        </nav>

        {/* Action Icons */}
        <div className="nav-actions">
          {/* Search Button */}
          <button
            className="nav-action-btn"
            aria-label="Search"
            title="Search products (Ctrl+K)"
            onClick={() => setSearchOpen(true)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>

          {/* Hamburger (Mobile) */}
          <button
            className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        {/* Mobile Search Button */}
        <div style={{ marginBottom: '16px' }}>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              setSearchOpen(true);
            }}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '12px 16px',
              backgroundColor: '#f7faf8',
              border: '1px solid #e0eae4',
              borderRadius: '8px',
              color: '#666',
              fontSize: '0.95rem',
              cursor: 'pointer',
              textAlign: 'left'
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0D5E3D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <span>Search cakes, snacks...</span>
          </button>
        </div>
        {/* Highlighted Full Menu CTA */}
        <Link
          href="/bakery-menu"
          className="mobile-full-menu-cta"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '1.25rem' }}>🎂</span>
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.98rem', color: '#FFF' }}>Explore Full Bakery Menu</div>
              <div style={{ fontSize: '0.78rem', color: '#E8F5E9', opacity: 0.9 }}>Visual catalog with photos & prices</div>
            </div>
          </div>
          <span style={{ fontSize: '1.2rem', color: '#FFF' }}>&rarr;</span>
        </Link>

        <Link href="/" className={`mobile-link ${pathname === '/' ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>Home</Link>
        
        <div className="mobile-dropdown-title">Categories</div>
        <div className="mobile-dropdown-items">
          {ourProductsMenu.map((item) => {
            if (item.subItems) {
              return (
                <div key={item.name} style={{ marginBottom: '8px' }}>
                  <button
                    type="button"
                    className="mobile-accordion-toggle"
                    onClick={() => setCakesAccordionOpen(!cakesAccordionOpen)}
                    aria-expanded={cakesAccordionOpen}
                  >
                    <span>🎂 {item.name} <span style={{ fontSize: '0.8rem', color: '#888', fontWeight: 400 }}>({item.subItems.length} varieties)</span></span>
                    <span style={{
                      transform: cakesAccordionOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.2s ease',
                      fontSize: '0.85rem',
                      color: '#C89B3C'
                    }}>
                      ▼
                    </span>
                  </button>

                  {cakesAccordionOpen && (
                    <div style={{ paddingLeft: '12px', borderLeft: '2px solid #E8E0D0', marginLeft: '12px', marginBottom: '8px' }}>
                      {item.subItems.map((sub) => (
                        <Link key={sub.name} href={`/product/${sub.id}`} className="mobile-link nested-sub-link" onClick={() => setMobileMenuOpen(false)}>
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }
            
            return (
              <Link key={item.name} href={`/product/${item.id}`} className="mobile-link sub-link" onClick={() => setMobileMenuOpen(false)}>
                {item.name}
              </Link>
            );
          })}
        </div>

        <Link href="/stores" className={`mobile-link ${pathname === '/stores' ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>Stores</Link>
        <Link href="/contact" className={`mobile-link ${pathname === '/contact' ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>Contact</Link>
        <Link href="/about" className={`mobile-link ${pathname === '/about' ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>About Us</Link>

        {/* Quick Drawer Actions */}
        <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid #eee', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
          <a
            href="tel:+919491568833"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              backgroundColor: '#f2f8f5',
              color: '#0D5E3D',
              padding: '11px 8px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontSize: '0.86rem',
              fontWeight: 600,
              fontFamily: "'Inter', sans-serif"
            }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            Call Us
          </a>
          <Link
            href="/stores"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              backgroundColor: '#0D5E3D',
              color: '#FFF',
              padding: '11px 8px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontSize: '0.86rem',
              fontWeight: 600,
              fontFamily: "'Inter', sans-serif"
            }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            5 Stores
          </Link>
        </div>
      </div>
    </header>
      <div className="navbar-spacer" aria-hidden="true" style={{ height: '73px' }} />
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}


