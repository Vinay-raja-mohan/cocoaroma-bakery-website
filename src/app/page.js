'use client';
import Image from 'next/image';
import Link from 'next/link';
import Hero from '@/components/Hero';
import SignatureBakesSection from '@/components/SignatureBakesSection';
import ArtisansProcessSection from '@/components/ArtisansProcessSection';
import OurSpecialsSection from '@/components/OurSpecialsSection';
import OurStoresSection from '@/components/StoreLocator';
import ContactSection from '@/components/Contact';
import Testimonials from '@/components/Testimonials';
import { categories, bestsellers } from '@/data/menu';
export default function Home() {
  // Extract all items from categories to find bestsellers
  const allItems = categories.flatMap(cat => cat.items || []);
  const bestsellerProducts = bestsellers
    ? bestsellers.map(slug => allItems.find(item => item.slug === slug)).filter(Boolean)
    : [];
  
  // Just show a few featured categories as clean cards
  const featuredCategories = categories.slice(0, 4);

  return (
    <div className="home-page" style={{ backgroundColor: '#FFF8E7', minHeight: '100vh', paddingBottom: '4rem', overflowX: 'hidden', width: '100%', maxWidth: '100%' }}>
      <Hero />
      <ArtisansProcessSection />
      <SignatureBakesSection />

      <OurSpecialsSection />

      <OurStoresSection />

      <section className="testimonials-section container" style={{ padding: '4rem 0', overflow: 'hidden' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontFamily: '"Playfair Display", serif', color: '#0D5E3D', fontSize: '3rem', margin: 0 }}>
            Our Reviews
          </h2>
        </div>
        <Testimonials />
      </section>

      <ContactSection />
    </div>
  );
}
