'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Star, Heart, Clock, Phone, MapPin, X, Package, Check } from 'lucide-react';
import './product-detail.css';

export default function ProductDetailClient({ product, galleryImages = [], relatedProducts = [] }) {
  const isCake = Boolean(product.isCake);

  // Small and Large prices directly from the official Cocoa Aroma Menu
  const smallRate = Number(product.smallPrice) || Number(product.price) || 600;
  const largeRate = Number(product.largePrice) || Math.round(smallRate * 1.8);

  // Formula as instructed by user:
  // - 0.5 Kg = small rate (1/2 kg)
  // - 1 Kg = large rate (1 kg)
  // - 1.5 Kg = 1kg rate + half of the 1kg cake cost
  // - 2 Kg = 1kg rate * 2
  // - 4 Kg = 1kg rate * 4
  const rate1_5Kg = largeRate + Math.round(largeRate / 2);
  const rate2Kg = largeRate * 2;
  const rate4Kg = largeRate * 4;

  const cakeWeights = [
    { label: '0.5 Kg', weight: '0.5 Kg', price: smallRate, serves: '4 - 5 People', occasion: 'Intimate gatherings & tea-time' },
    { label: '1 Kg', weight: '1 Kg', price: largeRate, serves: '8 - 10 People', occasion: 'Birthday celebrations' },
    { label: '1.5 Kg', weight: '1.5 Kg', price: rate1_5Kg, serves: '12 - 14 People', occasion: 'Family parties & get-togethers' },
    { label: '2 Kg', weight: '2 Kg', price: rate2Kg, serves: '16 - 20 People', occasion: 'Office & house parties' },
    { label: '4 Kg', weight: '4 Kg', price: rate4Kg, serves: '30 - 35 People', occasion: 'Grand celebrations & events' },
  ];

  const [selectedWeight, setSelectedWeight] = useState('0.5 Kg');
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isServingModalOpen, setIsServingModalOpen] = useState(false);

  // Fallback image list
  const images = galleryImages && galleryImages.length > 0
    ? galleryImages
    : [product.image || product.imageFallback || '/images/cakes/image-coming-soon.svg'];

  const activeImage = images[activeImageIndex] || images[0];

  // Dynamic price calculation
  const activeCakeOption = cakeWeights.find(opt => opt.weight === selectedWeight) || cakeWeights[0];
  const displayPrice = isCake ? activeCakeOption.price : Number(product.price);

  // WhatsApp Order URL
  const itemDetailText = isCake 
    ? `"${product.name}" in ${selectedWeight} weight (Price: ₹${displayPrice.toLocaleString('en-IN')})`
    : `"${product.name}"${product.weight ? ` (${product.weight})` : ''} (Price: ₹${displayPrice.toLocaleString('en-IN')})`;

  const whatsappMessage = encodeURIComponent(
    `Hi Cocoaroma! I would like to order ${itemDetailText}. Please share availability and delivery options.`
  );
  const whatsappUrl = `https://wa.me/919491568833?text=${whatsappMessage}`;

  return (
    <div className="pdp-page">
      <div className="pdp-container">
        
        {/* --- Breadcrumbs --- */}
        <nav className="pdp-breadcrumbs" aria-label="Breadcrumb">
          <Link href="/" className="pdp-breadcrumb-link">Home</Link>
          <span className="pdp-breadcrumb-separator">&gt;</span>
          <Link href={`/product/${product.categoryId}`} className="pdp-breadcrumb-link">
            {product.categoryName || 'Products'}
          </Link>
          <span className="pdp-breadcrumb-separator">&gt;</span>
          <span className="pdp-breadcrumb-current">{product.name}</span>
        </nav>

        {/* --- Main Product Card --- */}
        <main className="pdp-card">
          
          {/* Left: Gallery */}
          <section className="pdp-gallery-wrap" aria-label="Product Image Gallery">
            {images.length > 1 && (
              <div className="pdp-thumbnails-list">
                {images.map((imgSrc, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className={`pdp-thumbnail-btn ${idx === activeImageIndex ? 'active' : ''}`}
                    onClick={() => setActiveImageIndex(idx)}
                    aria-label={`View photo ${idx + 1} of ${product.name}`}
                  >
                    <img
                      src={imgSrc}
                      alt={`${product.name} thumbnail ${idx + 1}`}
                      className="pdp-thumbnail-img"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = product.imageFallback || '/images/cakes/image-coming-soon.svg';
                      }}
                    />
                  </button>
                ))}
              </div>
            )}

            <div className="pdp-main-image-frame">
              {/* Veg / Eggless Badge */}
              <div className="pdp-veg-badge" title="100% Pure Veg & Eggless">
                <div className="pdp-veg-symbol">
                  <div className="pdp-veg-dot" />
                </div>
                <span className="pdp-veg-text">EGGLESS</span>
              </div>

              <img
                src={activeImage}
                alt={product.name}
                className="pdp-main-img"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = product.imageFallback || '/images/cakes/image-coming-soon.svg';
                }}
              />
            </div>
          </section>

          {/* Right: Details & Options */}
          <section className="pdp-details-wrap">
            
            {/* Title */}
            <h1 className="pdp-title">{product.name}</h1>

            {/* Ratings & Reviews */}
            <div className="pdp-rating-row">
              <span className="pdp-rating-pill">
                4.9 <Star className="pdp-rating-star" size={12} fill="#FFFFFF" stroke="#FFFFFF" />
              </span>
              <span className="pdp-reviews-count">
                (9.0K Reviews)
              </span>
            </div>

            {/* Price & GST & Wishlist */}
            <div className="pdp-price-row">
              <div className="pdp-price-box">
                <span className="pdp-price-amount">
                  ₹{displayPrice.toLocaleString('en-IN')}
                </span>
                <span className="pdp-gst-tag">(Inclusive of GST)</span>
              </div>

              <button
                type="button"
                className={`pdp-wishlist-btn ${isWishlisted ? 'active' : ''}`}
                onClick={() => setIsWishlisted(!isWishlisted)}
                aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
              >
                <Heart
                  size={20}
                  fill={isWishlisted ? '#EF4444' : 'none'}
                  stroke={isWishlisted ? '#EF4444' : 'currentColor'}
                />
              </button>
            </div>

            {/* Description */}
            <p className="pdp-description">
              {product.description}
            </p>

            {/* CAKES ONLY: Select Weight (0.5 Kg, 1 Kg, 1.5 Kg, 2 Kg, 4 Kg) */}
            {isCake ? (
              <div className="pdp-weight-section">
                <div className="pdp-weight-header">
                  <span className="pdp-weight-title">Select Weight</span>
                  <button
                    type="button"
                    className="pdp-serving-link"
                    onClick={() => setIsServingModalOpen(true)}
                  >
                    Serving info
                  </button>
                </div>

                <div className="pdp-weights-row">
                  {cakeWeights.map((opt) => {
                    const isSelected = selectedWeight === opt.weight;
                    return (
                      <div key={opt.weight} className="pdp-weight-item">
                        <button
                          type="button"
                          className={`pdp-weight-btn ${isSelected ? 'active' : ''}`}
                          onClick={() => setSelectedWeight(opt.weight)}
                        >
                          {opt.label}
                        </button>
                        {isSelected && (
                          <span className="pdp-weight-serving-text">
                            {opt.serves}
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : (
              /* NON-CAKES: Show pack weight / portion from menu card */
              (product.weight || product.portion || product.unit) && (
                <div className="pdp-portion-badge">
                  <Package size={16} color="#0E3B2E" />
                  <span>
                    {product.weight && <>Net Weight: <strong>{product.weight}</strong></>}
                    {product.portion && <>Portion: <strong>{product.portion}</strong></>}
                    {product.unit && <>Pack Size: <strong>{product.unit}</strong></>}
                  </span>
                </div>
              )
            )}

            {/* Earliest Delivery Badge */}
            <div className="pdp-delivery-row">
              <Clock size={16} color="#166534" />
              <span>
                Earliest Delivery & Store Pickup: <span className="pdp-delivery-highlight">Today</span>
              </span>
            </div>

            {/* Ordering Actions (NO Cake Message, NO Buy Now) */}
            <div className="pdp-actions-container">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="pdp-whatsapp-btn"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                Order via WhatsApp • ₹{displayPrice.toLocaleString('en-IN')}
              </a>

              <div className="pdp-sub-actions-row">
                <a href="tel:+919491568833" className="pdp-call-btn">
                  <Phone size={15} /> Call: 9491568833
                </a>
                <Link href="/#stores" className="pdp-stores-btn">
                  <MapPin size={15} /> 5 Stores in Hyderabad
                </Link>
              </div>
            </div>

            {/* Store Outlets Availability */}
            <div className="pdp-store-banner">
              <strong>Available for Instant Store Pickup at:</strong><br />
              VV Nagar • Chintal • West Maredpally • Ayyappa (Madhapur) • Moosapet
            </div>

          </section>

        </main>

        {/* --- Related Products Section --- */}
        {relatedProducts && relatedProducts.length > 0 && (
          <section className="pdp-related-section" aria-label="Related Products">
            <h2 className="pdp-related-heading">More from {product.categoryName || 'Our Bakery'}</h2>
            <div className="pdp-related-grid">
              {relatedProducts.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/product/${product.categoryId}/${rel.id}`}
                  className="pdp-related-card"
                >
                  <div className="pdp-related-img-frame">
                    <img
                      src={rel.image || rel.imageFallback || '/images/cakes/image-coming-soon.svg'}
                      alt={rel.name}
                      className="pdp-related-img"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = rel.imageFallback || '/images/cakes/image-coming-soon.svg';
                      }}
                    />
                  </div>
                  <div className="pdp-related-info">
                    <h3 className="pdp-related-title">{rel.name}</h3>
                    <div className="pdp-related-price">
                      ₹{Number(rel.price).toLocaleString('en-IN')}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

      </div>

      {/* --- Serving Info Modal (CAKES ONLY) --- */}
      {isCake && isServingModalOpen && (
        <div
          className="pdp-modal-overlay"
          onClick={() => setIsServingModalOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="pdp-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="pdp-modal-close-btn"
              onClick={() => setIsServingModalOpen(false)}
              aria-label="Close serving info"
            >
              <X size={18} />
            </button>

            <h3 className="pdp-modal-title">Serving Size & Price Guide</h3>
            <p className="pdp-modal-subtitle">
              Official Cocoaroma rates calculated as per portion and weight.
            </p>

            <table className="pdp-modal-table">
              <thead>
                <tr>
                  <th>Weight</th>
                  <th>Serves</th>
                  <th>Price</th>
                  <th>Occasion</th>
                </tr>
              </thead>
              <tbody>
                {cakeWeights.map((opt) => (
                  <tr
                    key={opt.weight}
                    className={opt.weight === selectedWeight ? 'highlight' : ''}
                  >
                    <td><strong>{opt.label}</strong></td>
                    <td>{opt.serves}</td>
                    <td><strong>₹{opt.price.toLocaleString('en-IN')}</strong></td>
                    <td>{opt.occasion}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <p className="pdp-modal-note">
              * Small rate corresponds to 0.5 Kg and Large rate to 1 Kg. 1.5 Kg is calculated as 1 Kg rate + half of 1 Kg rate. All cakes are 100% vegetarian & eggless.
            </p>
          </div>
        </div>
      )}

    </div>
  );
}
