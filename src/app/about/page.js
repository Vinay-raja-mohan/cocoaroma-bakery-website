import React from 'react';

export const metadata = {
  title: 'About Us — Cocoaroma',
  description: 'Welcome to Cocoaroma, a premium, experience-driven patisserie in Hyderabad. Where chocolate meets charm, and every bite is an indulgence.',
};

export default function AboutPage() {
  return (
    <div className="about-page" style={{ minHeight: '80vh', backgroundColor: '#FFF8E7', color: '#083D28', padding: '80px 20px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
        
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '2px', color: '#C89B3C', marginBottom: '10px', fontWeight: '600' }}>
          Welcome to Cocoaroma
        </p>
        
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '4rem', marginBottom: '24px', color: '#083D28', fontWeight: '700' }}>
          Where Chocolate Meets Charm
        </h1>
        
        <div style={{ width: '80px', height: '2px', backgroundColor: '#C89B3C', margin: '0 auto 40px' }}></div>
        
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1.25rem', lineHeight: '1.8', marginBottom: '30px', color: '#4A4A4A' }}>
          Born in the heart of Hyderabad, <strong>Cocoaroma</strong> is a premium bakery and patisserie crafted to offer a deeply comforting, chocolate-forward experience. Imagine walking into a cozy European patisserie—the air is filled with the soulful aroma of warm chocolate, soft ambient music plays in the background, and you are surrounded by a sense of tasteful, everyday luxury. That is the feeling we bake into every single creation.
        </p>

        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1.15rem', lineHeight: '1.8', marginBottom: '60px', color: '#4A4A4A' }}>
          Our name is a sweet blend of <em>“Cocoa”</em> and <em>“Aroma,”</em> meant to evoke the velvety textures, wisps of steam, and pure joy of fresh chocolate in the air. From our melt-in-your-mouth artisanal pastries to our handcrafted chocolates and cocoa-infused baked delights, Cocoaroma isn’t just about food—it’s about creating an inviting, feel-good moment that you’ll want to savor.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px', marginTop: '60px' }}>
          <div style={{ backgroundColor: '#FFF', padding: '40px', borderRadius: '16px', boxShadow: '0 10px 40px rgba(8, 61, 40, 0.05)', border: '1px solid rgba(200,155,60,0.1)' }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2rem', color: '#083D28', marginBottom: '15px' }}>Soulful Indulgence</h3>
            <p style={{ fontFamily: "'Inter', sans-serif", color: '#666', lineHeight: '1.6', fontSize: '1rem' }}>
              We believe chocolate is the ultimate hero ingredient. Our curated offerings are crafted to be velvety, rich, and emotionally comforting.
            </p>
          </div>
          <div style={{ backgroundColor: '#FFF', padding: '40px', borderRadius: '16px', boxShadow: '0 10px 40px rgba(8, 61, 40, 0.05)', border: '1px solid rgba(200,155,60,0.1)' }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2rem', color: '#083D28', marginBottom: '15px' }}>Artisanal Charm</h3>
            <p style={{ fontFamily: "'Inter', sans-serif", color: '#666', lineHeight: '1.6', fontSize: '1rem' }}>
              Hand-finished with care, every pastry, cake, and confection showcases elegant craftsmanship and a commitment to premium quality.
            </p>
          </div>
          <div style={{ backgroundColor: '#FFF', padding: '40px', borderRadius: '16px', boxShadow: '0 10px 40px rgba(8, 61, 40, 0.05)', border: '1px solid rgba(200,155,60,0.1)' }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2rem', color: '#083D28', marginBottom: '15px' }}>Everyday Luxury</h3>
            <p style={{ fontFamily: "'Inter', sans-serif", color: '#666', lineHeight: '1.6', fontSize: '1rem' }}>
              We invite you to step in, treat yourself, and celebrate the beautiful, joyful moments of life in an environment that feels both luxurious and like home.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
