import React from 'react';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import { getProductById, getAllProducts, CATEGORIES } from '../../../bakery-menu/data';
import ProductDetailClient from './ProductDetailClient';

export async function generateStaticParams() {
  const products = getAllProducts();
  return products.map((product) => ({
    category: product.categoryId,
    slug: product.id,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = getProductById(slug);
  if (!product) return { title: 'Product Not Found | Cocoaroma Bakery' };

  return {
    title: `${product.name} | Cocoaroma Bakery`,
    description: `Order fresh ${product.name} online from Cocoaroma Bakery. 100% eggless, handcrafted daily with premium ingredients across 5 Hyderabad stores.`,
  };
}

// Curated descriptions for popular signature items
const SPECIAL_DESCRIPTIONS = {
  'almond-chocolate': 'Dive into the rich and nutty goodness of our Almond Chocolate Cake, where velvety layers of moist cocoa sponge are generously layered with silky Belgian chocolate truffle ganache and crowned with crunchy roasted almonds.',
  'black-forest': 'A classic indulgence featuring airy chocolate sponge layered with luscious whipped cream, sweet-tart dark cherries, and crowned with delicate curls of dark chocolate.',
  'belgium-chocolate': 'An intensely decadent treat crafted with premium imported Belgian cocoa, dark chocolate mousse filling, and a glossy hand-poured ganache glaze.',
  'royale-truffle': 'Pure luxury in every slice. Rich, slow-melt truffle cream nestled between tender chocolate sponge layers, finished with handcrafted chocolate garnishes.',
  'ferrero-rocher': 'An irresistible hazelnut and chocolate symphony featuring crunchy wafer praline, Nutella-infused cream, and rich cocoa sponge.',
  'cappuccino-chocolate': 'A sophisticated duet of freshly brewed espresso essence and velvety cocoa ganache, perfectly balanced with delicate chocolate sponge.',
  'tiramisu': 'An authentic Italian-inspired delight with espresso-infused sponge, airy mascarpone frosting, and an aromatic dusting of Dutch cocoa.',
  'red-velvet': 'Vibrant crimson cocoa sponge with a signature buttermilk tang, paired with silky smooth cream cheese frosting for an unforgettable celebration.',
  'rasmalai': 'A royal fusion of traditional Indian mithai and European bakery finesse, infused with saffron-cardamom rabdi and roasted pistachios.',
  'rabdi-pista-almond': 'Rich sponge infused with slow-simmered cardamom rabdi, layered with delicate cream and generously topped with slivered pistachios and almonds.',
  'pineapple': 'Light, fluffy vanilla sponge soaked in tropical pineapple nectar, layered with freshly whipped cream and succulent pineapple chunks.',
  'butterscotch': 'Golden caramel goodness paired with crunchy butterscotch praline and smooth vanilla whipped cream for sweet crunch in every bite.',
  'mango-super-king': 'Sun-ripened tropical Alphonso mango coulis layered with light-as-air sponge and whipped cream, bursting with pure summer flavor.',
  'strawberry': 'Fresh and fragrant vanilla sponge paired with real strawberry compote and delicate cream, topped with sweet strawberry glaze.',
  'strawberry-chocolate': 'Decadent chocolate sponge layered with juicy strawberry compote and rich cocoa cream, celebrating the beloved chocolate-berry pairing.',
  'choco-vanilla': 'The best of both worlds. Harmonious swirls of rich chocolate ganache and light vanilla sponge for a balanced sweet treat.',
  'chocolate-loaded': 'A chocoholic dream! Overloaded with dark chocolate ganache, chocolate crisps, and handcrafted chocolate curls.',
  'chocolate-loaded-butter-cream': 'Classic rich chocolate cake finished with smooth, whipped chocolate buttercream for vintage bakery charm.',
  'white-forest': 'A pristine twist on the Black Forest, featuring vanilla sponge, cherry filling, and an abundance of fine white chocolate shavings.',
  'white-chocolate': 'Delicate vanilla sponge enveloped in silky white chocolate mousse and dressed with white chocolate curls.',
  'kiwi-delight': 'Refreshing green kiwi glaze with tangy fruit compote layered into soft vanilla sponge for a vibrant, fruity celebration.',
  'sweet-heart': 'A stunning heart-shaped creation baked with velvety cocoa sponge and romantic red velvet frosting, crafted to celebrate loved ones.',
  'beloved': 'A graceful romantic celebration cake dressed in silky pink swirls and delicate white chocolate decorations.',
  'choco-praline': 'Sophisticated crunch meets velvety cocoa. Layers of rich chocolate ganache embedded with caramelized almond praline.',
  'blueberry-cheesecake': 'Velvety smooth New York-style baked cheesecake crowned with a generous swirl of tart and sweet wild blueberry compote on a buttery graham crust.',
  'biscoff-cheesecake': 'Creamy cheesecake infused with spiced Lotus Biscoff cookie spread on a crunchy caramelized biscuit crust, finished with Biscoff drizzle.',
  'nutella-cheesecake': 'Ultra-creamy cheesecake swirled with generous amounts of hazelnut Nutella spread on a crisp chocolate biscuit base.',
  'red-velvet-cheesecake': 'A striking combination of rich New York cheesecake layered over moist red velvet sponge with cream cheese frosting.',
  'choco-chip-brownie': 'Dense, fudgy artisan brownie baked with pure dark chocolate and loaded with melt-in-your-mouth chocolate chips.',
  'walnut-brownie': 'Rich, chewy chocolate brownie packed with toasted Kashmiri walnuts for the ultimate decadent crunch.',
  'nutella-brownie': 'Decadently fudgy brownie generously topped with creamy hazelnut Nutella and sea-salt flakes.'
};

function resolveDescription(product) {
  if (SPECIAL_DESCRIPTIONS[product.id]) {
    return SPECIAL_DESCRIPTIONS[product.id];
  }

  // If user-provided description is present and not just the name
  if (product.description && product.description.trim() !== product.name.trim()) {
    return product.description;
  }

  // Category based smart fallback
  const cat = (product.categoryId || '').toLowerCase();
  if (cat.includes('cheesecake')) {
    return `Indulge in our artisanal ${product.name}, baked to rich, creamy perfection on a crisp buttery crust with premium ingredients. 100% eggless.`;
  }
  if (cat.includes('brownie')) {
    return `Dense, fudgy, and intensely chocolatey artisan ${product.name}, handcrafted fresh daily with rich cocoa and a delicate crackly crust.`;
  }
  if (cat.includes('cupcake')) {
    return `Delicate personal-sized ${product.name} crowned with a luscious swirl of freshly whipped artisanal frosting and festive toppings.`;
  }
  if (cat.includes('pastr')) {
    return `An indulgent single-serve slice of our signature ${product.name}, layered with fresh cream and velvety fillings.`;
  }
  if (cat.includes('cookie') || cat.includes('tidbit')) {
    return `Traditional bakery ${product.name} slow-baked to golden perfection with wholesome ingredients for the perfect tea-time crunch.`;
  }
  if (cat.includes('bread')) {
    return `Freshly baked artisanal ${product.name} with a golden crust and soft, wholesome crumb, prepared every morning without preservatives.`;
  }
  if (cat.includes('savouri')) {
    return `Warm, flaky, and perfectly seasoned ${product.name}, baked fresh daily for a delightful savory snack.`;
  }

  // General cake fallback
  return `Handcrafted daily with local love by our master bakers. Our 100% eggless ${product.name} features moist, tender sponge layered with velvety fillings for an unforgettable celebration.`;
}

function resolveGalleryImages(product) {
  try {
    // 1. Check for directory in public/images/cakes/[slug]
    const cakeDir = path.join(process.cwd(), 'public', 'images', 'cakes', product.id);
    if (fs.existsSync(cakeDir)) {
      const files = fs.readdirSync(cakeDir).filter(f => /\.(png|jpe?g|webp)$/i.test(f)).sort();
      if (files.length > 0) {
        return files.map(f => `/images/cakes/${product.id}/${f}`);
      }
    }

    // 2. Check for directory matching cake name without dashes if rasgulla vs rasagulla
    if (product.id === 'rasgulla') {
      const altDir = path.join(process.cwd(), 'public', 'images', 'cakes', 'rasagulla');
      if (fs.existsSync(altDir)) {
        const files = fs.readdirSync(altDir).filter(f => /\.(png|jpe?g|webp)$/i.test(f)).sort();
        if (files.length > 0) {
          return files.map(f => `/images/cakes/rasagulla/${f}`);
        }
      }
    }
  } catch (err) {
    console.error('Error resolving cake directory images:', err);
  }

  // 3. Fallback to product.image
  const defaultImg = product.image || product.imageFallback || '/images/cakes/image-coming-soon.svg';
  return [defaultImg];
}

export default async function ProductPage({ params }) {
  const { category, slug } = await params;
  const product = getProductById(slug);

  if (!product) {
    return (
      <div style={{ textAlign: 'center', padding: '10rem 20px', minHeight: '60vh', backgroundColor: '#FAF7F2', fontFamily: '"Inter", sans-serif' }}>
        <h1 style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', color: '#0E3B2E', fontSize: '2.5rem', marginBottom: '1rem' }}>
          Product Not Found
        </h1>
        <p style={{ color: '#4B5563', marginBottom: '2rem' }}>
          The item you are looking for may have moved or is temporarily unavailable.
        </p>
        <Link 
          href="/bakery-menu" 
          style={{ 
            display: 'inline-block', 
            backgroundColor: '#0E3B2E', 
            color: '#F8F3E8', 
            padding: '12px 28px', 
            borderRadius: '25px', 
            textDecoration: 'none', 
            fontWeight: '600' 
          }}
        >
          &larr; Explore Bakery Menu
        </Link>
      </div>
    );
  }

  const galleryImages = resolveGalleryImages(product);
  const richDescription = resolveDescription(product);

  // Find related products in the same category (excluding current item)
  const currentCategory = CATEGORIES.find(c => c.id === (product.categoryId || category));
  const relatedProducts = currentCategory
    ? currentCategory.items.filter(item => item.id !== product.id).slice(0, 4)
    : [];

  const enhancedProduct = {
    ...product,
    description: richDescription,
    categoryName: currentCategory ? currentCategory.name : product.categoryName || 'Cakes'
  };

  return (
    <ProductDetailClient
      product={enhancedProduct}
      galleryImages={galleryImages}
      relatedProducts={relatedProducts}
    />
  );
}
