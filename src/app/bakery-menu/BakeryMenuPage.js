'use client';
import React, { useState, useCallback, useEffect } from 'react';
import './bakery-menu.css';
import Link from 'next/link';
import {
  regularCakes, cheesecakes, brownies, desserts, cupcakes,
  uniqueCakes, kidsCakes, savouries, Cookies, breads,
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

  useEffect(() => {
    setImgSrc(src);
    setFailed(false);
  }, [src]);

  const handleError = useCallback(() => {
    if (!failed && fallback && imgSrc !== fallback) {
      setImgSrc(fallback);
      setFailed(true);
    }
  }, [failed, fallback, imgSrc]);

  if (failed && imgSrc === fallback) {
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

function ViewMoreButton({ href, label = 'Explore Full Range' }) {
  return (
    <div className="bm-view-more-wrap">
      <Link href={href} className="bm-view-more-btn">
        {label} &rarr;
      </Link>
    </div>
  );
}

function Divider() {
  return <hr className="bm-divider-h" />;
}

// ─── Unified Luxury Menu Card ──────────────────────────────
function MenuCard({ product }) {
  return (
    <Link href={getCategoryPath(product.id)} className="bm-card-link">
      <article className="bm-card">
        <div className="bm-card-img-wrap">
          <ImgWithFallback 
            src={product.image} 
            fallback={product.imageFallback} 
            alt={product.name}
            className="bm-card-img"
            style={{ transform: product.imageScale ? `scale(${product.imageScale})` : 'none' }}
          />
          {product.badge && <Badge type={product.badge} />}
          {product.extraBadge && <Badge type={product.extraBadge} />}
          <div className="bm-veg-badge" title="100% Pure Vegetarian / Eggless">
            <span className="bm-veg-dot" />
          </div>
        </div>
        <div className="bm-card-body">
          <h3 className="bm-card-name">{product.name}</h3>
          {product.description && <p className="bm-card-desc">{product.description}</p>}
          <div className="bm-card-bottom">
            <span className="bm-card-price">
              ₹{Number(product.price).toLocaleString('en-IN')}
              {product.isCake && <span className="bm-card-unit"> (0.5 Kg)</span>}
              {product.portion && <span className="bm-card-unit"> ({product.portion})</span>}
              {product.weight && <span className="bm-card-unit"> ({product.weight})</span>}
            </span>
            <span className="bm-card-view-btn">View &rarr;</span>
          </div>
        </div>
      </article>
    </Link>
  );
}

// Backwards-compatible aliases
function FeaturedProduct({ product }) {
  return <MenuCard product={product} />;
}

function CompactProduct({ product }) {
  return <MenuCard product={product} />;
}

function CircularProduct({ product }) {
  return <MenuCard product={product} />;
}

// ─── MAIN PAGE ────────────────────────────────────────────
export default function BakeryMenuPage() {
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
                <div id="regular-cakes" style={{ scrollMarginTop: "120px" }}><SectionHeading featured={true}>Regular Cakes</SectionHeading></div>
              </div>
              <div className="bm-featured-grid">
                {regularCakes.map(p => (
                  <MenuCard key={p.id} product={p} />
                ))}
              </div>
              <ViewMoreButton href="/product/regular-cakes" label="Explore Regular Cakes" />
            </div>
          </div>

          {/* VERTICAL DIVIDER */}
          <div className="bm-divider-v" />

          {/* RIGHT: Cheesecakes + Brownies */}
          <div className="bm-col bm-col-right bm-stacked" style={{ gap: '24px', padding: '0 0 0 15px' }}>
            {/* Cheesecakes */}
            <div>
              <div style={{ marginBottom: '-4px' }}>
                <div id="cheesecakes" style={{ scrollMarginTop: "120px" }}><SectionHeading>Cheesecakes</SectionHeading></div>
              </div>
              <div className="bm-featured-grid">
                {cheesecakes.map(p => (
                  <MenuCard key={p.id} product={p} />
                ))}
              </div>
              <ViewMoreButton href="/product/cheesecakes" label="Explore Cheesecakes" />
            </div>

            <div style={{ margin: '4px 0' }}>
              <Divider />
            </div>

            {/* Brownies & Bites */}
            <div>
              <div style={{ marginBottom: '-4px' }}>
                <div id="brownies" style={{ scrollMarginTop: "120px" }}><SectionHeading>Brownies &amp; Bites</SectionHeading></div>
              </div>
              <div className="bm-featured-grid">
                {brownies.map(p => (
                  <MenuCard key={p.id} product={p} />
                ))}
              </div>
              <ViewMoreButton href="/product/brownies" label="Explore Brownies" />
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════
            ROW 2: Desserts + Cupcakes | Unique Cakes
        ═══════════════════════════════════════════════ */}
        <div className="bm-row bm-animate" style={{ marginBottom: '30px' }}>
          {/* LEFT: Desserts + Cupcakes */}
          <div className="bm-col bm-col-left bm-stacked" style={{ gap: '24px', padding: '0 15px 0 0' }}>
            <div>
              <SectionHeading>Desserts</SectionHeading>
              <div className="bm-featured-grid">
                {desserts.map(p => (
                  <MenuCard key={p.id} product={p} />
                ))}
              </div>
              <ViewMoreButton href="/product/desserts" label="Explore Desserts" />
            </div>
            <div style={{ margin: '4px 0' }}>
              <Divider />
            </div>
            <div>
              <div id="cupcakes" style={{ scrollMarginTop: "120px" }}><SectionHeading>Cupcakes</SectionHeading></div>
              <div className="bm-featured-grid">
                {cupcakes.map(p => (
                  <MenuCard key={p.id} product={p} />
                ))}
              </div>
              <ViewMoreButton href="/product/cupcakes" label="Explore Cupcakes" />
            </div>
          </div>

          <div className="bm-divider-v" />

          {/* RIGHT: Unique Cakes */}
          <div className="bm-col bm-col-right" style={{ padding: '0 0 0 15px' }}>
            <div className="bm-organic-box bm-organic-box-alt" style={{ padding: '24px 20px', minHeight: 'auto' }}>
              <SectionHeading featured={true}>Unique Cakes</SectionHeading>
              <div className="bm-featured-grid">
                {uniqueCakes.map(p => (
                  <MenuCard key={p.id} product={p} />
                ))}
              </div>
              <ViewMoreButton href="/product/unique-cakes" label="Explore Unique Cakes" />
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════
            ROW 3: Kids Cakes | Savouries + Cookies
        ═══════════════════════════════════════════════ */}
        <div className="bm-row bm-animate" style={{ marginBottom: '30px' }}>
          {/* LEFT: Kids Cakes */}
          <div className="bm-col bm-col-left" style={{ padding: '0 15px 0 0' }}>
            <div className="bm-organic-box" style={{ padding: '24px 20px', minHeight: 'auto' }}>
              <SectionHeading featured={true}>KIDS Cakes</SectionHeading>
              <div className="bm-featured-grid">
                {kidsCakes.map(p => (
                  <MenuCard key={p.id} product={p} />
                ))}
              </div>
              <ViewMoreButton href="/product/kids-cakes" label="Explore Kids Cakes" />
            </div>
          </div>

          <div className="bm-divider-v" />

          {/* RIGHT: Savouries + Cookies */}
          <div className="bm-col bm-col-right bm-stacked" style={{ gap: '24px', padding: '0 0 0 15px' }}>
            <div>
              <div id="savouries" style={{ scrollMarginTop: "120px" }}><SectionHeading>Savouries</SectionHeading></div>
              <div className="bm-featured-grid">
                {savouries.map(p => (
                  <MenuCard key={p.id} product={p} />
                ))}
              </div>
              <ViewMoreButton href="/product/savouries" label="Explore Savouries" />
            </div>
            <div style={{ margin: '4px 0' }}>
              <Divider />
            </div>
            <div>
              <SectionHeading>Cookies</SectionHeading>
              <div className="bm-featured-grid">
                {Cookies.map(p => (
                  <MenuCard key={p.id} product={p} />
                ))}
              </div>
              <ViewMoreButton href="/product/Cookies" label="Explore Cookies" />
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════
            ROW 4: Breads, Tid Bits, Tea Time | Love Cake
        ═══════════════════════════════════════════════ */}
        <div className="bm-row bm-animate" style={{ marginBottom: '30px' }}>
          {/* LEFT: Breads & Tea Time Cakes */}
          <div className="bm-col bm-col-left bm-stacked" style={{ gap: '24px', padding: '0 15px 0 0' }}>
            <div>
              <SectionHeading>Breads &amp; Tid Bits</SectionHeading>
              <div className="bm-featured-grid">
                {breads.map(p => (
                  <MenuCard key={p.id} product={p} />
                ))}
              </div>
              <ViewMoreButton href="/product/breads" label="Explore Breads" />
            </div>
            
            <div style={{ margin: '4px 0' }}>
              <Divider />
            </div>
            
            <div>
              <div id="tea-time-cakes" style={{ scrollMarginTop: "120px" }}><SectionHeading>Tea Time Cakes</SectionHeading></div>
              <div className="bm-featured-grid">
                {teaTimeCakes.map(p => (
                  <MenuCard key={p.id} product={p} />
                ))}
              </div>
              <ViewMoreButton href="/product/tea-time-cakes" label="Explore Tea Time Cakes" />
            </div>
          </div>

          <div className="bm-divider-v" />

          {/* RIGHT: Love Cake */}
          <div className="bm-col bm-col-right" style={{ padding: '0 0 0 15px' }}>
            <div className="bm-organic-box" style={{ padding: '24px 20px', minHeight: 'auto' }}>
              <SectionHeading featured={true}>Love Cake</SectionHeading>
              <div className="bm-featured-grid">
                {loveCakes.map(p => (
                  <MenuCard key={p.id} product={p} />
                ))}
              </div>
              <ViewMoreButton href="/product/love-cakes" label="Explore Love Cakes" />
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════
            ROW 5: Corporate Cakes (Full Width)
        ═══════════════════════════════════════════════ */}
        <div className="bm-row-full bm-animate" style={{ marginBottom: '25px' }}>
          <div className="bm-organic-box" style={{ borderRadius: '40px 8px 40px 8px', padding: '24px 24px', minHeight: 'auto', maxWidth: '850px', margin: '0 auto' }}>
            <SectionHeading center={true} featured={true}>Corporate Cakes</SectionHeading>
            <div className="bm-featured-grid">
              {corporateCakes.map(p => (
                <MenuCard key={p.id} product={p} />
              ))}
            </div>
            <ViewMoreButton href="/product/corporate-cakes" label="Explore Corporate Cakes" />
          </div>
        </div>

      </div>{/* /bm-page */}
    </div>
  );
}
