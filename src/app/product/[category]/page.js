import { CATEGORIES } from '../../bakery-menu/data';
import CategoryLayout from './CategoryLayout';
import './product-layout.css';

export async function generateStaticParams() {
  return CATEGORIES.map((cat) => ({
    category: cat.id,
  }));
}

export async function generateMetadata({ params }) {
  const { category } = await params;
  const currentCategory = CATEGORIES.find(c => c.id === category);
  if (!currentCategory) {
    return { title: 'Category — Cocoaroma Bakery' };
  }
  return {
    title: `${currentCategory.name} — Cocoaroma Bakery`,
    description: currentCategory.subtitle || `Explore fresh ${currentCategory.name} handcrafted at Cocoaroma Bakery.`,
  };
}

export default async function ProductCategoryPage({ params }) {
  const { category } = await params;
  return <CategoryLayout categoryId={category} />;
}
