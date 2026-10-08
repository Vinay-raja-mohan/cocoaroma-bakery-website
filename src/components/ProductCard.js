'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductCard({ product }) {
  // Logic for price: small (half kg) -> large (1 kg) -> price (default) -> pastry
  const displayPrice = product.small || product.large || product.price || product.pastry || 0;
  const formattedPrice = Number(displayPrice).toFixed(2);
  const targetLink = product.slug ? `/product/${product.slug}` : '#';

  return (
    <Link href={targetLink} className="product-card" style={{ textDecoration: 'none' }}>
      <div className="card-image-wrap">
        {(product.hasImages && product.slug) && (
          <Image 
            src={`/images/cakes/${product.slug}/1.png`} 
            alt={product.name} 
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: 'cover' }} 
            onError={(e) => {
              if (e.target.src.endsWith('.png')) {
                e.target.src = `/images/cakes/${product.slug}/1.jpg`;
              } else {
                e.target.style.display = 'none';
              }
            }}
          />
        )}
      </div>
      <div className="card-content">
        <h3 className="card-title">{product.name}</h3>
        <span className="card-price">₹{formattedPrice}</span>
      </div>
    </Link>
  );
}
