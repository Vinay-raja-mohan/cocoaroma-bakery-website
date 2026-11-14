'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { getAllProducts } from '@/app/bakery-menu/data';

const POPULAR_SEARCHES = [
  'Black Forest',
  'Almond Chocolate',
  'Blueberry Cheesecake',
  'Tiramisu',
  'Red Velvet',
  'Ferrero Rocher',
  'Brownies',
  'Cupcakes',
  'Donuts',
  'Savouries'
];

const SEARCH_CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'regular-cakes', label: 'Regular Cakes' },
  { id: 'cheesecakes', label: 'Cheesecakes' },
  { id: 'unique-cakes', label: 'Unique Cakes' },
  { id: 'brownies', label: 'Brownies' },
  { id: 'pastries', label: 'Pastries' },
  { id: 'cupcakes', label: 'Cupcakes' },
  { id: 'donuts', label: 'Donuts' },
  { id: 'savouries', label: 'Savouries' },
];

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const [selectedCat, setSelectedCat] = useState('all');
  const inputRef = useRef(null);
  const router = useRouter();

  // All products cached
  const allProducts = useMemo(() => {
    try {
      return getAllProducts();
    } catch (e) {
      return [];
    }
  }, []);

  // Filter products based on query and category
  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];

    const terms = q.split(/\s+/).filter(Boolean);

    return allProducts
      .filter((p) => {
        if (selectedCat !== 'all' && p.categoryId !== selectedCat) {
          return false;
        }

        const nameLower = (p.name || '').toLowerCase();
        const descLower = (p.description || '').toLowerCase();
        const catLower = (p.categoryName || '').toLowerCase();
        const text = `${nameLower} ${descLower} ${catLower}`;

        return terms.every((term) => text.includes(term));
      })
      .sort((a, b) => {
        const aName = (a.name || '').toLowerCase();
        const bName = (b.name || '').toLowerCase();
        const exactA = aName.startsWith(q);
        const exactB = bName.startsWith(q);
        if (exactA && !exactB) return -1;
        if (!exactA && exactB) return 1;
        return aName.localeCompare(bName);
      });
  }, [allProducts, query, selectedCat]);

  // Auto-focus input on open & lock background scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
      return () => {
        clearTimeout(timer);
        document.body.style.overflow = '';
      };
    } else {
      document.body.style.overflow = '';
      setQuery('');
      setSelectedCat('all');
    }
  }, [isOpen]);

  // Handle ESC key to close & Enter key for top result
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') {
        onClose();
      }
      if (e.key === 'Enter' && results.length > 0) {
        const top = results[0];
        router.push(`/product/${top.categoryId}/${top.id}`);
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, results, onClose, router]);

  if (!isOpen) return null;

  return (
    <div 
      className="search-modal-backdrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <style>{`
        .search-modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(8, 61, 40, 0.65);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          z-index: 10000;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          padding: 80px 20px 40px;
          overflow-y: auto;
          animation: searchFadeIn 0.2s ease-out;
        }

        @keyframes searchFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .search-modal-container {
          background: #FFFFFF;
          border-radius: 16px;
          width: 100%;
          max-width: 720px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);
          border: 1px solid rgba(200, 155, 60, 0.25);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          animation: searchSlideDown 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes searchSlideDown {
          from { opacity: 0; transform: translateY(-16px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        /* Search Input Header */
        .search-input-bar {
          display: flex;
          align-items: center;
          padding: 18px 24px;
          border-bottom: 1px solid #eee;
          gap: 14px;
          position: relative;
        }

        .search-icon-svg {
          color: #0D5E3D;
          flex-shrink: 0;
        }

        .search-input-field {
          flex: 1;
          border: none;
          outline: none;
          font-family: 'Inter', sans-serif;
          font-size: 1.15rem;
          color: #222;
          background: transparent;
        }

        .search-input-field::placeholder {
          color: #999;
          font-size: 1.05rem;
        }

        .search-clear-btn {
          background: #f0f0f0;
          border: none;
          border-radius: 50%;
          width: 26px;
          height: 26px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #666;
          font-size: 0.8rem;
          transition: background 0.2s;
        }

        .search-clear-btn:hover {
          background: #e2e2e2;
          color: #222;
        }

        .search-close-badge {
          background: rgba(13, 94, 61, 0.08);
          color: #0D5E3D;
          border: 1px solid rgba(13, 94, 61, 0.2);
          border-radius: 6px;
          padding: 4px 10px;
          font-size: 0.75rem;
          font-weight: 600;
          font-family: 'Inter', sans-serif;
          cursor: pointer;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .search-close-badge:hover {
          background: #0D5E3D;
          color: #FFF;
        }

        /* Category Filter Pills */
        .search-categories-strip {
          display: flex;
          gap: 8px;
          padding: 12px 24px;
          background: #fafaf8;
          border-bottom: 1px solid #f0f0f0;
          overflow-x: auto;
          white-space: nowrap;
          scrollbar-width: none;
        }

        .search-categories-strip::-webkit-scrollbar {
          display: none;
        }

        .search-cat-pill {
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 0.82rem;
          font-family: 'Inter', sans-serif;
          font-weight: 500;
          cursor: pointer;
          border: 1px solid #e2e2e2;
          background: #FFF;
          color: #555;
          transition: all 0.2s;
        }

        .search-cat-pill:hover {
          border-color: #0D5E3D;
          color: #0D5E3D;
        }

        .search-cat-pill.active {
          background: #0D5E3D;
          color: #FFF;
          border-color: #0D5E3D;
          font-weight: 600;
        }

        /* Results / Content Area */
        .search-content-area {
          max-height: 480px;
          overflow-y: auto;
          padding: 16px 24px 24px;
          background: #FFF;
        }

        /* Popular Searches (Default View) */
        .popular-section-title {
          font-size: 0.78rem;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: #888;
          font-weight: 700;
          margin: 8px 0 14px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .popular-pills-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 24px;
        }

        .popular-pill {
          background: #FFF8E7;
          border: 1px solid rgba(200, 155, 60, 0.35);
          color: #083D28;
          padding: 8px 16px;
          border-radius: 24px;
          font-size: 0.88rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .popular-pill:hover {
          background: #0D5E3D;
          color: #FFF8E7;
          border-color: #0D5E3D;
          transform: translateY(-1px);
        }

        /* Results List */
        .results-meta-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.82rem;
          color: #777;
          margin-bottom: 12px;
          padding-bottom: 8px;
          border-bottom: 1px dashed #eee;
        }

        .results-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .search-result-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 14px;
          border-radius: 10px;
          border: 1px solid #f0f0f0;
          text-decoration: none;
          color: inherit;
          transition: all 0.2s ease;
          background: #FFF;
        }

        .search-result-item:hover {
          background: #f7fbf9;
          border-color: #0D5E3D;
          transform: translateX(4px);
        }

        .result-left {
          display: flex;
          align-items: center;
          gap: 14px;
          flex: 1;
          min-width: 0;
        }

        .result-img-box {
          width: 52px;
          height: 52px;
          border-radius: 8px;
          overflow: hidden;
          background: #FFF8E7;
          position: relative;
          flex-shrink: 0;
          border: 1px solid #eaeaea;
        }

        .result-img-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .result-info {
          display: flex;
          flex-direction: column;
          gap: 3px;
          min-width: 0;
        }

        .result-title-row {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .veg-square-icon {
          width: 14px;
          height: 14px;
          border: 1.5px solid #0D5E3D;
          border-radius: 2px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .veg-dot-inner {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #0D5E3D;
        }

        .result-title {
          font-family: 'Playfair Display', serif;
          font-weight: 600;
          font-size: 1.05rem;
          color: #083D28;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .result-subline {
          font-size: 0.82rem;
          color: #666;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .result-category-badge {
          background: #e9f5ef;
          color: #0D5E3D;
          padding: 2px 8px;
          border-radius: 4px;
          font-size: 0.75rem;
          font-weight: 600;
        }

        .result-right {
          display: flex;
          align-items: center;
          gap: 14px;
          padding-left: 12px;
          flex-shrink: 0;
        }

        .result-price {
          font-family: 'Inter', sans-serif;
          font-size: 1.05rem;
          font-weight: 700;
          color: #C89B3C;
        }

        .result-arrow {
          color: #0D5E3D;
          opacity: 0.6;
          transition: transform 0.2s, opacity 0.2s;
        }

        .search-result-item:hover .result-arrow {
          transform: translateX(3px);
          opacity: 1;
        }

        /* Empty State */
        .search-empty-box {
          text-align: center;
          padding: 40px 20px;
          color: #666;
        }

        .search-empty-icon {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: #FFF8E7;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 16px;
          color: #C89B3C;
        }

        .search-empty-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.3rem;
          color: #083D28;
          margin-bottom: 6px;
        }

        .search-empty-desc {
          font-size: 0.9rem;
          color: #777;
          max-width: 360px;
          margin: 0 auto 20px;
        }

        /* Footer Hint */
        .search-modal-footer {
          padding: 12px 24px;
          background: #fafaf8;
          border-top: 1px solid #f0f0f0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.78rem;
          color: #888;
        }

        .footer-hint-keys {
          display: flex;
          gap: 12px;
        }

        .footer-key-item kbd {
          background: #FFF;
          border: 1px solid #ddd;
          border-radius: 4px;
          padding: 2px 6px;
          font-size: 0.7rem;
          box-shadow: 0 1px 2px rgba(0,0,0,0.05);
        }

        @media (max-width: 640px) {
          .search-modal-backdrop {
            padding: 0;
            background: #FFF;
          }
          .search-modal-container {
            border-radius: 0;
            border: none;
            height: 100vh;
            max-width: 100%;
          }
          .search-content-area {
            max-height: none;
            flex: 1;
          }
          .search-modal-footer {
            display: none;
          }
        }
      `}</style>

      <div className="search-modal-container" role="dialog" aria-modal="true" aria-label="Search site products">
        
        {/* Search Input Bar */}
        <div className="search-input-bar">
          <svg className="search-icon-svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>

          <input
            ref={inputRef}
            type="text"
            className="search-input-field"
            placeholder="Search cakes, cheesecakes, brownies, savouries..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          {query && (
            <button 
              className="search-clear-btn" 
              onClick={() => {
                setQuery('');
                inputRef.current?.focus();
              }}
              title="Clear search"
            >
              ✕
            </button>
          )}

          <button 
            className="search-close-badge"
            onClick={onClose}
            title="Close search"
          >
            <span>ESC</span>
            <span style={{ fontSize: '1rem', lineHeight: '1' }}>✕</span>
          </button>
        </div>

        {/* Category Filter Pills */}
        <div className="search-categories-strip">
          {SEARCH_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              className={`search-cat-pill ${selectedCat === cat.id ? 'active' : ''}`}
              onClick={() => setSelectedCat(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="search-content-area">
          
          {/* Case 1: Results Found */}
          {query.trim() && results.length > 0 && (
            <div>
              <div className="results-meta-header">
                <span>Found <strong>{results.length}</strong> {results.length === 1 ? 'treat' : 'treats'} for &ldquo;{query}&rdquo;</span>
                {results.length > 10 && <span>Showing top 10</span>}
              </div>

              <div className="results-list">
                {results.slice(0, 10).map((product) => (
                  <Link
                    key={`${product.categoryId}-${product.id}`}
                    href={`/product/${product.categoryId}/${product.id}`}
                    className="search-result-item"
                    onClick={onClose}
                  >
                    <div className="result-left">
                      <div className="result-img-box">
                        <img 
                          src={product.image || '/images/cakes/image-coming-soon.svg'} 
                          alt={product.name}
                          onError={(e) => {
                            e.currentTarget.src = '/images/cakes/image-coming-soon.svg';
                          }}
                        />
                      </div>
                      <div className="result-info">
                        <div className="result-title-row">
                          <span className="veg-square-icon" title="100% Pure Veg / Eggless">
                            <span className="veg-dot-inner" />
                          </span>
                          <span className="result-title">{product.name}</span>
                        </div>
                        <div className="result-subline">
                          <span className="result-category-badge">{product.categoryName}</span>
                          {product.portion && <span>• {product.portion}</span>}
                          {product.weight && <span>• {product.weight}</span>}
                        </div>
                      </div>
                    </div>

                    <div className="result-right">
                      <span className="result-price">₹{product.price}</span>
                      <svg className="result-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6"></polyline>
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Case 2: No Results Found */}
          {query.trim() && results.length === 0 && (
            <div className="search-empty-box">
              <div className="search-empty-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  <line x1="8" y1="11" x2="14" y2="11"></line>
                </svg>
              </div>
              <h3 className="search-empty-title">No Treats Found</h3>
              <p className="search-empty-desc">
                We couldn&rsquo;t find anything matching &ldquo;{query}&rdquo;. Try checking the spelling or exploring our popular suggestions below.
              </p>
              <div className="popular-pills-wrap" style={{ justifyContent: 'center' }}>
                {['Black Forest', 'Almond Chocolate', 'Cheesecakes', 'Brownies'].map((s) => (
                  <button 
                    key={s} 
                    className="popular-pill"
                    onClick={() => setQuery(s)}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Case 3: Empty Query - Show Suggestions */}
          {!query.trim() && (
            <div>
              <div className="popular-section-title">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C89B3C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                Popular Searches
              </div>

              <div className="popular-pills-wrap">
                {POPULAR_SEARCHES.map((term) => (
                  <button
                    key={term}
                    className="popular-pill"
                    onClick={() => {
                      setQuery(term);
                      inputRef.current?.focus();
                    }}
                  >
                    <span>{term}</span>
                  </button>
                ))}
              </div>

              <div className="popular-section-title">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0D5E3D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                Quick Categories
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '10px' }}>
                {[
                  { name: 'Regular Cakes', id: 'regular-cakes' },
                  { name: 'Cheesecakes', id: 'cheesecakes' },
                  { name: 'Unique Cakes', id: 'unique-cakes' },
                  { name: 'Brownies & Bites', id: 'brownies' },
                  { name: 'Donuts', id: 'donuts' },
                  { name: 'Pastries', id: 'pastries' },
                ].map((c) => (
                  <Link
                    key={c.id}
                    href={`/product/${c.id}`}
                    onClick={onClose}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '12px 16px',
                      background: '#f9faf9',
                      border: '1px solid #eaeaea',
                      borderRadius: '8px',
                      textDecoration: 'none',
                      color: '#083D28',
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      transition: 'all 0.2s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#0D5E3D';
                      e.currentTarget.style.background = '#eef7f2';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = '#eaeaea';
                      e.currentTarget.style.background = '#f9faf9';
                    }}
                  >
                    <span>{c.name}</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.5 }}>
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </Link>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer Hints */}
        <div className="search-modal-footer">
          <div className="footer-hint-keys">
            <span className="footer-key-item"><kbd>Enter</kbd> to select</span>
            <span className="footer-key-item"><kbd>Esc</kbd> to close</span>
          </div>
          <span style={{ color: '#0D5E3D', fontWeight: 600 }}>Cocoaroma Bakery</span>
        </div>

      </div>
    </div>
  );
}
