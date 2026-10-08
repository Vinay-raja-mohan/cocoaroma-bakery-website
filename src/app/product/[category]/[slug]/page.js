import React from 'react';
import Link from 'next/link';
import { getProductById, getAllProducts } from '../../../bakery-menu/data';
import Image from 'next/image';

export async function generateStaticParams() {
  const products = getAllProducts();
  return products.map((product) => ({
    category: product.categoryId,
    slug: product.id,
  }));
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = getProductById(slug);

  if (!product) {
    return (
      <div style={{ textAlign: 'center', padding: '10rem 20px', minHeight: '60vh', backgroundColor: '#F8F3E8' }}>
        <h1 style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', color: '#0E3B2E' }}>Product Not Found</h1>
        <Link href="/product" style={{ display: 'inline-block', marginTop: '1rem', color: '#C89A3A', textDecoration: 'none', fontWeight: 'bold' }}>
          &larr; Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: '#F8F3E8', minHeight: '100vh', padding: '6rem 20px 4rem', fontFamily: '"Inter", sans-serif' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        
        <Link href={`/product/${product.categoryId}`} style={{ 
          display: 'inline-block', 
          marginBottom: '2rem', 
          color: '#0E3B2E', 
          textDecoration: 'none', 
          fontWeight: '500',
          fontSize: '0.95rem'
        }}>
          &larr; Back to {product.categoryName}
        </Link>
        
        <div style={{ 
          display: 'flex', 
          flexDirection: 'row', 
          gap: '4rem', 
          backgroundColor: '#F0E8D5',
          borderRadius: '24px',
          padding: '3rem',
          flexWrap: 'wrap'
        }}>
          
          {/* Left Column - Image */}
          <div style={{ flex: '1 1 300px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{
              width: '100%',
              maxWidth: '400px',
              aspectRatio: '1',
              position: 'relative',
              borderRadius: '50%',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(14, 59, 46, 0.15)',
              border: '8px solid #F8F3E8'
            }}>
              <img 
                src={product.image} 
                alt={product.name} 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
            </div>
          </div>
          
          {/* Right Column - Details */}
          <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            
            {product.badge && (
              <span style={{ 
                alignSelf: 'flex-start',
                backgroundColor: '#C89A3A', 
                color: '#fff', 
                padding: '4px 12px', 
                borderRadius: '20px', 
                fontSize: '0.8rem', 
                fontWeight: '600', 
                letterSpacing: '0.05em',
                marginBottom: '1rem'
              }}>
                {product.badge}
              </span>
            )}
            
            <h1 style={{ 
              fontFamily: '"Cormorant Garamond", Georgia, serif', 
              fontSize: '3rem', 
              color: '#0E3B2E', 
              margin: '0 0 1rem 0',
              lineHeight: '1.1'
            }}>
              {product.name}
            </h1>
            
            <p style={{ 
              fontSize: '1.2rem', 
              color: '#3A4A40', 
              marginBottom: '2rem',
              lineHeight: '1.6'
            }}>
              {product.description || 'Handcrafted to perfection with premium ingredients. Every bite is a delightful experience.'}
            </p>
            
            <div style={{ 
              fontSize: '2.2rem', 
              color: '#0E3B2E', 
              fontWeight: '700',
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              marginBottom: '2rem'
            }}>
              ₹{product.price}
            </div>
            
            <div style={{ borderTop: '1.5px dashed rgba(200, 154, 58, 0.5)', paddingTop: '2rem', marginTop: 'auto' }}>
              <button 
                className="pl-order-btn"
                style={{
                  backgroundColor: '#0E3B2E',
                  color: '#F8F3E8',
                  border: 'none',
                  padding: '16px 32px',
                  borderRadius: '30px',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 15px rgba(14, 59, 46, 0.2)'
                }}
              >
                Order Now
              </button>
            </div>
            
          </div>
        </div>
        
      </div>
    </div>
  );
}
