'use client';
import ProductCard from './ProductCard';

export default function CategorySection({ category }) {
  if (!category || !category.items || category.items.length === 0) return null;

  return (
    <section className="category-section">
      <div className="category-header">
        <h2>{category.name}</h2>
        {category.description && <p>{category.description}</p>}
      </div>
      
      <div className="products-grid">
        {category.items.map((item, index) => (
          <ProductCard key={item.slug || index} product={item} />
        ))}
      </div>

      <style>{`
        .category-header {
          margin-bottom: 2rem;
          text-align: center;
        }
        .category-header h2 {
          font-family: 'Playfair Display', serif;
          font-size: 2.5rem;
          color: #0D5E3D;
          margin-bottom: 0.5rem;
        }
        .category-header p {
          color: #666;
          font-size: 1.1rem;
        }
        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 30px;
        }
        .product-card {
          background-color: #fcfcfc;
          border-radius: 8px;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          flex-direction: column;
          border: 1px solid rgba(0,0,0,0.05);
        }
        .product-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 0 25px rgba(13, 94, 61, 0.25);
        }
        .card-image-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 1;
          background-color: #f9f9f9;
        }
        .card-content {
          padding: 20px;
          text-align: center;
        }
        .card-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.25rem;
          color: #333;
          margin-bottom: 10px;
          font-weight: 600;
        }
        .card-price {
          font-family: 'Inter', sans-serif;
          color: #0D5E3D;
          font-weight: 700;
          font-size: 1.1rem;
        }
      `}</style>
    </section>
  );
}
