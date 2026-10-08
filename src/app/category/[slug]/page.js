import { categories } from '@/data/menu';
import CategorySection from '@/components/CategorySection';
import Link from 'next/link';

export async function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.id,
  }));
}

export default function CategoryPage({ params }) {
  const category = categories.find(c => c.id === params.slug);

  if (!category) {
    return (
      <div style={{ textAlign: 'center', padding: '10rem 20px', minHeight: '60vh', backgroundColor: '#FFF8E7' }}>
        <h1 style={{ fontFamily: '"Playfair Display", serif', color: '#0D5E3D' }}>Category Not Found</h1>
        <Link href="/bakery-menu" style={{ display: 'inline-block', marginTop: '1rem', color: '#C89B3C', textDecoration: 'none', fontWeight: 'bold' }}>
          &larr; Back to Menu
        </Link>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: '#FFF8E7', minHeight: '100vh', padding: '4rem 0' }}>
      <div className="container">
        <div style={{ marginBottom: '2rem' }}>
          <Link href="/bakery-menu" style={{ display: 'inline-block', color: '#0D5E3D', textDecoration: 'none', fontWeight: '600', fontFamily: '"Inter", sans-serif' }}>
            &larr; Back to All Categories
          </Link>
        </div>
        
        <CategorySection category={category} />
      </div>
    </div>
  );
}
