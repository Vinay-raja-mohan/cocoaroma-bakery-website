'use client';
import React from 'react';



const STORES = [
  {
    id: 'vivekananda-nagar',
    name: 'Vivekananda Nagar Store',
    address: 'Vivekananda Nagar, Hyderabad, Telangana',
    phone: '+91 9491568833',
    hours: '10:00 AM - 11:00 PM',
    mapLink: 'https://maps.app.goo.gl/AvRakgYfHDuho4cL6',
  },
  {
    id: 'madhapur',
    name: 'Madhapur Store',
    address: 'Madhapur, Hyderabad, Telangana',
    phone: '+91 9491568833',
    hours: '10:00 AM - 11:00 PM',
    mapLink: 'https://maps.app.goo.gl/pRna8fQXh5CczE8e6',
  },
  {
    id: 'chintal',
    name: 'Chintal Store',
    address: 'Chintal, Hyderabad, Telangana',
    phone: '+91 9491568833',
    hours: '10:00 AM - 11:00 PM',
    mapLink: 'https://maps.app.goo.gl/26X6AbY2dhAyzvgE9',
  },
  {
    id: 'west-maredpally',
    name: 'West Maredpally Store',
    address: 'West Maredpally, Hyderabad, Telangana',
    phone: '+91 9491568833',
    hours: '10:00 AM - 11:00 PM',
    mapLink: 'https://maps.app.goo.gl/nyrDQ4YvNtBqYX3q6',
  },
  {
    id: 'moosapet',
    name: 'Moosapet Store',
    address: 'Moosapet, Hyderabad, Telangana',
    phone: '+91 9491568833',
    hours: '10:00 AM - 11:00 PM',
    mapLink: 'https://maps.app.goo.gl/g7x3B2Jo9z1S6whH9',
  }
];

export default function StoresPage() {
  return (
    <div style={{ minHeight: '80vh', backgroundColor: '#FFF8E7', color: '#083D28', padding: '80px 20px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '2px', color: '#C89B3C', marginBottom: '10px', fontWeight: '600' }}>
            Visit Us
          </p>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '4rem', marginBottom: '24px', color: '#083D28', fontWeight: '700' }}>
            Our Stores
          </h1>
          <div style={{ width: '80px', height: '2px', backgroundColor: '#C89B3C', margin: '0 auto' }}></div>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1.15rem', color: '#4A4A4A', marginTop: '30px', maxWidth: '600px', margin: '30px auto 0' }}>
            Step into a world of chocolate and charm. Find your nearest Cocoaroma patisserie and treat yourself to an everyday luxury.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px' }}>
          {STORES.map((store) => (
            <div 
              key={store.id} 
              style={{ 
                backgroundColor: '#FFF', 
                padding: '40px', 
                borderRadius: '16px', 
                boxShadow: '0 10px 40px rgba(8, 61, 40, 0.05)', 
                border: '1px solid rgba(200,155,60,0.1)',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2rem', color: '#083D28', marginBottom: '20px', minHeight: '90px' }}>
                {store.name}
              </h2>
              
              <div style={{ marginBottom: '15px', display: 'flex', gap: '12px', alignItems: 'flex-start', minHeight: '48px' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C89B3C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1rem', color: '#4A4A4A', lineHeight: '1.5', margin: 0 }}>
                  {store.address}
                </p>
              </div>

              <div style={{ marginBottom: '15px', display: 'flex', gap: '12px', alignItems: 'center' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C89B3C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1rem', color: '#4A4A4A', margin: 0 }}>
                  {store.hours}
                </p>
              </div>

              <div style={{ marginBottom: '30px', display: 'flex', gap: '12px', alignItems: 'center' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C89B3C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1rem', color: '#4A4A4A', margin: 0 }}>
                  {store.phone}
                </p>
              </div>
              
              <div style={{ marginTop: 'auto' }}>
                <a 
                  href={store.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#083D28',
                    color: '#FFF',
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.95rem',
                    fontWeight: '600',
                    padding: '12px 24px',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    width: '100%',
                    gap: '8px'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = '#0D5E3D';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 6px 16px rgba(13, 94, 61, 0.2)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = '#083D28';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  Get Directions
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
