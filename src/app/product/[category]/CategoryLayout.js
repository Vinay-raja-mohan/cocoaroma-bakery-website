'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CATEGORIES } from '../../bakery-menu/data';

export default function CategoryLayout({ categoryId }) {
  const currentCategory = CATEGORIES.find(c => c.id === categoryId);

  if (!currentCategory) {
    return (
      <div style={{ textAlign: 'center', padding: '10rem 20px' }}>
        <h1>Category Not Found</h1>
        <Link href="/bakery-menu">Back to Menu</Link>
      </div>
    );
  }

  return (
    <div className="pl-root-sidebar">
      
      {/* LEFT SIDEBAR - CATEGORIES (Desktop Only) */}
      <aside className="pl-sidebar">
        <h2 className="pl-sidebar-title">Categories</h2>
        <div className="pl-sidebar-menu">
          {CATEGORIES.map(cat => (
            <Link 
              key={cat.id} 
              href={`/product/${cat.id}`} 
              className={`pl-sidebar-item ${currentCategory.id === cat.id ? 'active' : ''}`}
            >
              <div className="pl-sidebar-img-wrap" style={{ position: 'relative', width: '42px', height: '42px', overflow: 'hidden' }}>
                <Image 
                  src={cat.image || '/images/cakes/image-coming-soon.svg'} 
                  alt={cat.name}
                  width={42}
                  height={42}
                  style={{ objectFit: 'contain' }}
                  className="pl-sidebar-img" 
                  onError={(e) => { e.currentTarget.srcset = ''; e.currentTarget.src = '/images/cakes/image-coming-soon.svg'; }} 
                />
              </div>
              <span className="pl-sidebar-name">{cat.name}</span>
            </Link>
          ))}
        </div>
      </aside>

      {/* RIGHT MAIN CONTENT - GRID */}
      <main className="pl-main-content">
        <h1 className="pl-main-title">{currentCategory.name}</h1>
        {currentCategory.subtitle && (
          <p className="pl-main-subtitle">{currentCategory.subtitle}</p>
        )}
        <div className="pl-grid">
          {currentCategory.items.map((product, index) => (
            <Link href={`/product/${currentCategory.id}/${product.id}`} key={product.id} className="pl-card">
              <div className="pl-card-img-wrap" style={{ position: 'relative', aspectRatio: '1/1', overflow: 'hidden' }}>
                <Image 
                  src={product.image || product.imageFallback || '/images/cakes/image-coming-soon.svg'} 
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  style={{ objectFit: 'cover', transform: product.imageScale ? `scale(${product.imageScale})` : 'none' }}
                  className="pl-card-img" 
                  priority={index < 6}
                  onError={(e) => { e.currentTarget.srcset = ''; e.currentTarget.src = product.imageFallback || '/images/cakes/image-coming-soon.svg'; }} 
                />
                <div className="pl-veg-badge" title="100% Pure Vegetarian / Eggless">
                  <span className="pl-veg-dot" />
                </div>
              </div>
              <div className="pl-card-body">
                <h3 className="pl-card-title">{product.name}</h3>
                <div className="pl-card-bottom">
                  <span className="pl-card-price">
                    ₹{Number(product.price).toLocaleString('en-IN')}
                    {product.isCake && (
                      <span className="pl-card-unit"> (0.5 Kg)</span>
                    )}
                    {product.portion && (
                      <span className="pl-card-unit"> ({product.portion})</span>
                    )}
                    {product.weight && (
                      <span className="pl-card-unit"> ({product.weight})</span>
                    )}
                  </span>
                  <span className="pl-card-arrow">View &rarr;</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="pl-bottom-nav">
          <Link href="/bakery-menu" className="pl-bottom-menu-link">
            ← Browse Full Bakery Menu
          </Link>
        </div>
      </main>
      
    </div>
  );
}
