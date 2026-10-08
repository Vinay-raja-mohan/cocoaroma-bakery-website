import { CATEGORIES } from '../../bakery-menu/data';
import CategoryLayout from './CategoryLayout';
import './product-layout.css';

export async function generateStaticParams() {
  return CATEGORIES.map((cat) => ({
    category: cat.id,
  }));
}

export default async function ProductCategoryPage({ params }) {
  const { category } = await params;
  return <CategoryLayout categoryId={category} />;
}
