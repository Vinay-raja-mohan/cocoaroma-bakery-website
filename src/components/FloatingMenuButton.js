'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function FloatingMenuButton() {
  const pathname = usePathname();

  if (pathname === '/bakery-menu' || pathname?.startsWith('/product')) {
    return null;
  }

  return (
    <>
      <Link href="/bakery-menu" className="floating-menu-btn" aria-label="Open Menu">
        <div className="floating-menu-icon">
          {/* Beautiful SVG icon for menu (book/list style) */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>
        <span className="floating-menu-text">Menu</span>
      </Link>

      <style>{`
        .floating-menu-btn {
          position: fixed;
          bottom: 30px;
          right: 30px;
          z-index: 9999;
          display: flex;
          align-items: center;
          gap: 10px;
          background: #0D5E3D;
          color: #FFF;
          padding: 12px 24px;
          border-radius: 50px;
          text-decoration: none;
          box-shadow: 0 4px 15px rgba(13, 94, 61, 0.4);
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          font-family: 'Inter', sans-serif;
          font-weight: 600;
          font-size: 1.05rem;
          overflow: hidden;
        }

        .floating-menu-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 50%;
          height: 100%;
          background: linear-gradient(
            to right,
            rgba(255, 255, 255, 0) 0%,
            rgba(200, 155, 60, 0.4) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          transform: skewX(-25deg);
          transition: left 0.6s ease;
        }

        .floating-menu-btn:hover::before {
          left: 150%;
        }

        .floating-menu-btn:hover {
          transform: translateY(-5px) scale(1.05);
          box-shadow: 0 8px 25px rgba(13, 94, 61, 0.5);
          background: #11784e;
        }

        .floating-menu-icon {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        /* Mobile adjustments */
        @media (max-width: 768px) {
          .floating-menu-btn {
            bottom: 20px;
            right: 20px;
            padding: 10px 20px;
            font-size: 0.95rem;
          }
          .floating-menu-icon svg {
            width: 20px;
            height: 20px;
          }
        }
      `}</style>
    </>
  );
}
