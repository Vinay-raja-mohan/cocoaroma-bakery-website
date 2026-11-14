import { CATEGORIES, getAllProducts } from './bakery-menu/data';

export default function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://cocoaroma.in';
  const lastModified = new Date();

  // Core Pages
  const coreRoutes = [
    { url: `${baseUrl}`, lastModified, changeFrequency: 'daily', priority: 1.0 },
    { url: `${baseUrl}/bakery-menu`, lastModified, changeFrequency: 'daily', priority: 0.95 },
    { url: `${baseUrl}/stores`, lastModified, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${baseUrl}/contact`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/about`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
  ];

  // Category Pages
  const categoryRoutes = CATEGORIES.map((cat) => ({
    url: `${baseUrl}/product/${cat.id}`,
    lastModified,
    changeFrequency: 'weekly',
    priority: 0.85,
  }));

  // Product Pages
  const allProducts = getAllProducts();
  const productRoutes = allProducts.map((p) => ({
    url: `${baseUrl}/product/${p.categoryId}/${p.id}`,
    lastModified,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  return [...coreRoutes, ...categoryRoutes, ...productRoutes];
}
