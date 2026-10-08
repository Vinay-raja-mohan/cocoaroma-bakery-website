'use client';
import React, { useState, useCallback } from 'react';
import './bakery-menu.css';
import Link from 'next/link';
import {
  regularCakes, cheesecakes, brownies, desserts, cupcakes,
  uniqueCakes, kidsCakes, savouries, biscuits, breads,
  loveCakes, corporateCakes, teaTimeCakes, getAllProducts
} from './data';

function getCategoryPath(productId) {
  const all = getAllProducts();
  const p = all.find(x => x.id === productId);
  return p && p.categoryId ? `/product/${p.categoryId}/${productId}` : `/product/regular-cakes/${productId}`;
}

// ─── Helpers ──────────────────────────────────────────────
function Stars({ rating }) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  return (
    <span className="bm-stars" aria-label={`${rating} out of 5 stars`}>
      {'★'.repeat(full)}{half ? '½' : ''}{'☆'.repeat(5 - full - (half ? 1 : 0))}
    </span>
  );
}

function ImgWithFallback({ src, fallback, alt, className, style }) {
  const [imgSrc, setImgSrc] = useState(src);
  const [failed, setFailed] = useState(false);
  const handleError = useCallback(() => {
    if (!failed && fallback && imgSrc !== fallback) {
      setImgSrc(fallback);
      setFailed(true);
    }
  }, [failed, fallback, imgSrc]);
  if (failed && imgSrc === fallback) {
    // render a placeholder gradient
    return <div className={className} style={{ background: 'linear-gradient(135deg,#f0e8d5,#e0d4b8)', width: '100%', height: '100%', ...style }} />;
  }
  return <img src={imgSrc} alt={alt} onError={handleError} loading="lazy" className={className} style={style} />;
}

function Badge({ type }) {
  if (!type) return null;
  const cls = {
    'BEST SELLER': 'bm-badge bm-badge-best-seller',
    'NEW': 'bm-badge bm-badge-new',
    'VEGAN': 'bm-badge bm-badge-vegan',
  }[type] || 'bm-badge bm-badge-new';
  return <span className={cls}>{type === 'VEGAN' ? '🌿 ' : ''}{type}</span>;
}

function AddToBox({ product, onAdd }) {
  return (
    <button className="bm-atb-btn" onClick={() => onAdd(product)} aria-label={`Add ${product.name} to box`}>
      Add to Box
    </button>
  );
}

function SectionHeading({ children, center, featured }) {
  return (
    <div className={`bm-section-heading${center ? ' bm-section-heading-center' : ''}${featured ? ' bm-section-heading-featured' : ''}`}>
      <span className="bm-heading-rule" />
      <span className="bm-heading-ornament">❧</span>
      <h2 className="bm-heading-text">{children}</h2>
      <span className="bm-heading-ornament">❧</span>
      <span className="bm-heading-rule bm-heading-rule-right" />
    </div>
  );
}

function ViewMoreButton({ href }) {
  return (
    <div style={{ textAlign: 'center', marginTop: '8px', marginBottom: '4px' }}>
      <Link href={href} className="bm-view-more-btn">
        View More &rarr;
      </Link>
    </div>
  );
}

function Divider() {
  return <hr className="bm-divider-h" />;
}

// ─── Featured Product (large) ──────────────────────────────
function FeaturedProduct({ product, onAdd }) {
  return (
    <Link href={getCategoryPath(product.id)} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
      <article className="bm-featured-product">
        <div className="bm-featured-img-wrap">
          <ImgWithFallback src={product.image} fallback={product.imageFallback} alt={product.name} />
          {product.badge && <Badge type={product.badge} />}
          {product.extraBadge && <Badge type={product.extraBadge} />}
        </div>
        <div className="bm-featured-info">
          <div className="bm-product-name">{product.name}</div>
          {product.description && <div className="bm-product-desc">{product.description}</div>}
          <div className="bm-product-price">₹{product.price}</div>
        </div>
      </article>
    </Link>
  );
}

// ─── Compact Product (cheesecakes) ────────────────────────
function CompactProduct({ product, onAdd }) {
  return (
    <Link href={getCategoryPath(product.id)} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
      <article className="bm-compact-product" style={{ textAlign: 'center' }}>
        <div className="bm-circle-img" style={{ margin: '0 auto', overflow: 'hidden' }}>
          <ImgWithFallback 
            src={product.image} 
            fallback={product.imageFallback} 
            alt={product.name} 
            style={{ transform: product.imageScale ? `scale(${product.imageScale})` : 'none' }} 
          />
        </div>
        <div className="bm-product-name" style={{ fontSize: '0.92rem', marginTop: '4px' }}>{product.name}</div>
        {product.description && <div className="bm-product-desc">{product.description}</div>}
        <div className="bm-product-price" style={{ fontSize: '1rem' }}>₹{product.price}</div>
      </article>
    </Link>
  );
}

// ─── Circular Product ─────────────────────────────────────
function CircularProduct({ product }) {
  return (
    <Link href={getCategoryPath(product.id)} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
      <article className="bm-circular-product">
        <div className="bm-circle-img">
          <ImgWithFallback src={product.image} fallback={product.imageFallback} alt={product.name} />
        </div>
        <div className="bm-circ-name">{product.name}</div>
        {product.description && <div className="bm-circ-desc">{product.description}</div>}
        <div className="bm-circ-price">₹{product.price}</div>
      </article>
    </Link>
  );
}



// ─── Header ───────────────────────────────────────────────
function Header() {
  return (
    <header className="bm-header">
      <div className="bm-header-line">
        <div className="bm-header-rule" />
        <span className="bm-header-icon">✦</span>
        <div className="bm-header-rule" />
      </div>
      <div className="bm-header-flourish-row">
        <svg width="60" height="18" viewBox="0 0 60 18" fill="none" aria-hidden="true">
          <path d="M0 9 Q15 0 30 9 Q45 18 60 9" stroke="#C89A3A" strokeWidth="1" fill="none"/>
        </svg>
        <span style={{ color: '#C89A3A', fontSize: '1.3rem' }}>🎂</span>
        <svg width="60" height="18" viewBox="0 0 60 18" fill="none" aria-hidden="true">
          <path d="M0 9 Q15 18 30 9 Q45 0 60 9" stroke="#C89A3A" strokeWidth="1" fill="none"/>
        </svg>
      </div>
      <h1 className="bm-logo-brand">Cocoa Aroma</h1>
      <div className="bm-logo-sub">Bakery</div>
      <div className="bm-logo-tagline">Pure Veg. Pure Delight.</div>
      <div style={{ marginTop: 12 }}>
        <div className="bm-header-rule" style={{ maxWidth: '200px', margin: '0 auto' }} />
      </div>
    </header>
  );
}



// ─── MAIN PAGE ────────────────────────────────────────────
export default function BakeryMenuPage() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = useCallback((product) => {
    setCartItems(prev => [...prev, product]);
  }, []);

  const removeFromCart = useCallback((index) => {
    setCartItems(prev => prev.filter((_, i) => i !== index));
  }, []);

  return (
    <div className="bm-root" id="top">
      <div className="bm-page">
        <div style={{ textAlign: 'center', paddingTop: '40px', paddingBottom: '30px' }}>
          <div className="bm-page-title-wrap">
            <span className="bm-heading-ornament">❧</span>
            <h1 className="bm-page-title">Menu</h1>
            <span className="bm-heading-ornament">❧</span>
          </div>
        </div>
        {/* ═══════════════════════════════════════════════
            ROW 1: Regular Cakes | Cheesecakes + Brownies
        ═══════════════════════════════════════════════ */}
        <div className="bm-row bm-animate" style={{ marginBottom: '30px' }}>
          {/* LEFT: Regular Cakes */}
          <div className="bm-col bm-col-left" style={{ padding: '0 15px 0 0' }}>
            <div className="bm-organic-box" style={{ padding: '24px 20px', minHeight: 'auto' }}>
              <div style={{ marginBottom: '-12px' }}>
                <SectionHeading featured={true}>Regular Cakes</SectionHeading>
              </div>
              <div className="bm-featured-grid">
                {regularCakes.map(p => (
                  <FeaturedProduct key={p.id} product={p} onAdd={addToCart} />
                ))}
              </div>
              <ViewMoreButton href="/product/regular-cakes" />
            </div>
          </div>

          {/* VERTICAL DIVIDER */}
          <div className="bm-divider-v" />

          {/* RIGHT: Cheesecakes + Brownies */}
          <div className="bm-col bm-col-right bm-stacked" style={{ gap: '24px', padding: '0 0 0 15px' }}>
            {/* Cheesecakes */}
            <div>
              <div style={{ marginBottom: '-4px' }}>
                <SectionHeading>Cheesecakes</SectionHeading>
              </div>
              <div className="bm-compact-grid">
                {cheesecakes.map(p => (
                  <CompactProduct key={p.id} product={p} onAdd={addToCart} />
                ))}
              </div>
              <ViewMoreButton href="/product/cheesecakes" />
            </div>

            <div style={{ margin: '4px 0' }}>
              <Divider />
            </div>

            {/* Brownies & Bites */}
            <div>
              <div style={{ marginBottom: '-4px' }}>
                <SectionHeading>Brownies &amp; Bites</SectionHeading>
              </div>
              <div className="bm-circular-grid">
                {brownies.map(p => (
                  <CircularProduct key={p.id} product={p} />
                ))}
              </div>
              <ViewMoreButton href="/product/brownies" />
            </div>
          </div>
        </div>


        {/* ═══════════════════════════════════════════════
            ROW 2: Desserts + Cupcakes | Unique Cakes
        ═══════════════════════════════════════════════ */}
        <div className="bm-row bm-animate">
          {/* LEFT: Desserts + Cupcakes */}
          <div className="bm-col bm-col-left bm-stacked">
            <div>
              <SectionHeading>Desserts</SectionHeading>
              <div className="bm-circular-grid">
                {desserts.map(p => (
                  <CircularProduct key={p.id} product={p} />
                ))}
              </div>
              <ViewMoreButton href="/product/desserts" />
            </div>
            <Divider />
            <div>
              <SectionHeading>Cupcakes</SectionHeading>
              <div className="bm-circular-grid">
                {cupcakes.map(p => (
                  <CircularProduct key={p.id} product={p} />
                ))}
              </div>
              <ViewMoreButton href="/product/cupcakes" />
            </div>
          </div>

          <div className="bm-divider-v" />

          {/* RIGHT: Unique Cakes */}
          <div className="bm-col bm-col-right">
            <div className="bm-organic-box bm-organic-box-alt">
              <SectionHeading featured={true}>Unique Cakes</SectionHeading>
              <div className="bm-featured-grid">
                {uniqueCakes.map(p => (
                  <FeaturedProduct key={p.id} product={p} onAdd={addToCart} />
                ))}
              </div>
              <ViewMoreButton href="/product/unique-cakes" />
            </div>
          </div>
        </div>


        {/* ═══════════════════════════════════════════════
            ROW 3: Kids Cakes | Savouries + Biscuits
        ═══════════════════════════════════════════════ */}
        <div className="bm-row bm-animate">
          {/* LEFT: Kids Cakes */}
          <div className="bm-col bm-col-left">
            <div className="bm-organic-box">
              <SectionHeading featured={true}>KIDS Cakes</SectionHeading>
              <div className="bm-featured-grid">
                {kidsCakes.map(p => (
                  <FeaturedProduct key={p.id} product={p} onAdd={addToCart} />
                ))}
              </div>
              <ViewMoreButton href="/product/kids-cakes" />
            </div>
          </div>

          <div className="bm-divider-v" />

          {/* RIGHT: Savouries + Biscuits */}
          <div className="bm-col bm-col-right bm-stacked">
            <div>
              <SectionHeading>Savouries</SectionHeading>
              <div className="bm-circular-grid">
                {savouries.map(p => (
                  <CircularProduct key={p.id} product={p} />
                ))}
              </div>
              <ViewMoreButton href="/product/savouries" />
            </div>
            <Divider />
            <div>
              <SectionHeading>Biscuits</SectionHeading>
              <div className="bm-circular-grid">
                {biscuits.map(p => (
                  <CircularProduct key={p.id} product={p} />
                ))}
              </div>
              <ViewMoreButton href="/product/biscuits" />
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════
            ROW 4: Breads, Tid Bits, Tea Time | Love Cake
        ═══════════════════════════════════════════════ */}
        <div className="bm-row bm-animate">
          {/* LEFT: Breads & Tea Time Cakes */}
          <div className="bm-col bm-col-left bm-stacked">
            <div>
              <SectionHeading>Breads &amp; Tid Bits</SectionHeading>
              <div className="bm-circular-grid">
                {breads.map(p => (
                  <CircularProduct key={p.id} product={p} />
                ))}
              </div>
              <ViewMoreButton href="/product/breads" />
            </div>
            
            <div style={{ marginTop: '15px' }} />
            
            <div>
              <SectionHeading>Tea Time Cakes</SectionHeading>
              <div className="bm-circular-grid">
                {teaTimeCakes.map(p => (
                  <CircularProduct key={p.id} product={p} />
                ))}
              </div>
              <ViewMoreButton href="/product/tea-time-cakes" />
            </div>
          </div>

          <div className="bm-divider-v" />

          {/* RIGHT: Love Cake */}
          <div className="bm-col bm-col-right">
            <div className="bm-organic-box">
              <SectionHeading featured={true}>Love Cake</SectionHeading>
              <div className="bm-featured-grid">
                {loveCakes.map(p => (
                  <FeaturedProduct key={p.id} product={p} onAdd={addToCart} />
                ))}
              </div>
              <ViewMoreButton href="/product/love-cakes" />
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════
            ROW 5: Corporate Cakes (Full Width)
        ═══════════════════════════════════════════════ */}
        <div className="bm-row-full bm-animate" style={{ marginBottom: '25px' }}>
          <div className="bm-organic-box" style={{ borderRadius: '40px 8px 40px 8px', padding: '20px 30px', minHeight: 'auto' }}>
            <SectionHeading center={true} featured={true}>Corporate Cakes</SectionHeading>
            <div className="bm-featured-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', maxWidth: '700px', margin: '0 auto' }}>
              {corporateCakes.map(p => (
                <FeaturedProduct key={p.id} product={p} onAdd={addToCart} />
              ))}
            </div>
            <ViewMoreButton href="/product/corporate-cakes" />
          </div>
        </div>

      </div>{/* /bm-page */}


    </div>
  );
}
