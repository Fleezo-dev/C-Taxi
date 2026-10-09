import React, { useState, useEffect } from 'react';

interface HeaderProps {
  onOpenPage: (pageKey: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenPage }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
      setMobileMenuOpen(false);
    }
  };

  // Close drawer on ESC key and prevent body scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    if (mobileMenuOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header className={`header-nav ${isScrolled ? 'is-scrolled' : ''}`}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          {/* Brand Logo */}
          <a href="/" className="brand-logo" aria-label="C Taxi" style={{ textDecoration: 'none' }}>
            <div className="logo-svg-wrap">
              <svg width="44" height="44" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="ctaxi_logo_grad" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#D90429" />
                    <stop offset="1" stopColor="#8D0801" />
                  </linearGradient>
                </defs>
                <rect width="100" height="100" rx="22" fill="url(#ctaxi_logo_grad)" />
                {/* Cab Roof & Body */}
                <path d="M22 62C22 58 25 55 29 55H71C75 55 78 58 78 62V68C78 70 76.5 72 74.5 72H25.5C23.5 72 22 70 22 68V62Z" fill="#FFB703" />
                <path d="M30 55L37 38C38.2 35 41 33 44.5 33H55.5C59 33 61.8 35 63 38L70 55H30Z" fill="#FFC837" />
                {/* Windshield */}
                <path d="M34 52L39.5 40C40.2 38.5 41.8 37.5 43.5 37.5H56.5C58.2 37.5 59.8 38.5 60.5 40L66 52H34Z" fill="#111827" />
                {/* Headlights */}
                <circle cx="28" cy="63" r="3.5" fill="#FFFFFF" />
                <circle cx="72" cy="63" r="3.5" fill="#FFFFFF" />
                {/* TAXI Roof Light */}
                <rect x="42" y="28" width="16" height="6" rx="2" fill="#FFFFFF" />
                <text x="50" y="32.5" fill="#D90429" fontSize="4.2" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">TAXI</text>
              </svg>
            </div>
            <div className="brand-text-wrap">
              <span className="brand-name">
                C <span style={{ color: 'var(--brand-yellow)' }}>TAXI</span>
              </span>
              <span className="brand-tagline">24/7 Call Taxi Coimbatore</span>
            </div>
          </a>

          {/* Desktop Navigation (Hidden on mobile/tablet <= 1100px) */}
          <nav className="desktop-nav-wrap">
            <ul className="main-menu">
              <li>
                <a href="#booking-form-section" onClick={(e) => handleNavClick(e, '#booking-form-section')} className="active">
                  Book Ride
                </a>
              </li>
              <li>
                <button
                  type="button"
                  className="nav-link-btn"
                  onClick={() => onOpenPage('tour-packages')}
                >
                  Tour Packages
                </button>
              </li>
              <li>
                <a href="#blogs" onClick={(e) => handleNavClick(e, '#blogs')}>
                  Blogs
                </a>
              </li>
              <li>
                <a href="#routes" onClick={(e) => handleNavClick(e, '#routes')}>
                  Routes
                </a>
              </li>
              <li>
                <button
                  type="button"
                  className="nav-link-btn"
                  onClick={() => onOpenPage('tariff')}
                >
                  Tariff Card
                </button>
              </li>
              <li>
                <a href="#why-choose" onClick={(e) => handleNavClick(e, '#why-choose')}>
                  Why Us
                </a>
              </li>
              <li>
                <a href="#faq" onClick={(e) => handleNavClick(e, '#faq')}>
                  FAQ
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          {/* Header Action Buttons (Call + Hamburger Menu on Mobile) */}
          <div className="header-actions">
            <a
              href="tel:+919089223344"
              className="btn btn-red call-btn-head"
              style={{
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                borderRadius: '12px',
                padding: '10px 18px',
                fontWeight: 800,
                fontSize: '0.92rem',
                letterSpacing: '0.02em',
                boxShadow: '0 4px 14px rgba(217, 4, 41, 0.35)'
              }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              <span>9089223344</span>
            </a>

            {/* Mobile Hamburger Toggle Button */}
            <button
              type="button"
              className="mobile-toggle"
              onClick={toggleMobileMenu}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              ) : (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="mobile-drawer-backdrop" onClick={() => setMobileMenuOpen(false)}>
          <div className="mobile-drawer-content" onClick={(e) => e.stopPropagation()}>
            <div className="drawer-header">
              <div className="drawer-brand">
                <span className="drawer-brand-name">
                  C <span style={{ color: 'var(--brand-yellow)' }}>TAXI</span>
                </span>
                <span className="drawer-brand-domain">Ctaxi.co.in • 24/7 Service</span>
              </div>
              <button
                type="button"
                className="drawer-close-btn"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            <div className="drawer-body">
              <div className="drawer-section-label">MAIN NAVIGATION</div>
              <ul className="drawer-nav-list">
                <li>
                  <a
                    href="#booking-form-section"
                    onClick={(e) => handleNavClick(e, '#booking-form-section')}
                    className="drawer-nav-item"
                  >
                    <span className="drawer-item-icon">🚖</span>
                    <span className="drawer-item-text">Book a Ride / Estimate</span>
                    <span className="drawer-item-badge">Instant</span>
                  </a>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => { onOpenPage('tour-packages'); setMobileMenuOpen(false); }}
                    className="drawer-nav-item"
                  >
                    <span className="drawer-item-icon">🏖️</span>
                    <span className="drawer-item-text">Tour Packages</span>
                    <span className="drawer-item-badge">10 Tours</span>
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => { onOpenPage('tariff'); setMobileMenuOpen(false); }}
                    className="drawer-nav-item"
                  >
                    <span className="drawer-item-icon">📑</span>
                    <span className="drawer-item-text">Official Tariff Card</span>
                    <span className="drawer-item-badge">Zero Surge</span>
                  </button>
                </li>
                <li>
                  <a
                    href="#routes"
                    onClick={(e) => handleNavClick(e, '#routes')}
                    className="drawer-nav-item"
                  >
                    <span className="drawer-item-icon">🛣️</span>
                    <span className="drawer-item-text">Intercity Routes</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#blogs"
                    onClick={(e) => handleNavClick(e, '#blogs')}
                    className="drawer-nav-item"
                  >
                    <span className="drawer-item-icon">📰</span>
                    <span className="drawer-item-text">Travel Guides & Blogs</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#why-choose"
                    onClick={(e) => handleNavClick(e, '#why-choose')}
                    className="drawer-nav-item"
                  >
                    <span className="drawer-item-icon">⭐</span>
                    <span className="drawer-item-text">Why Choose C Taxi</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    onClick={(e) => handleNavClick(e, '#services')}
                    className="drawer-nav-item"
                  >
                    <span className="drawer-item-icon">🚗</span>
                    <span className="drawer-item-text">Our Taxi Services</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#coimbatore-info"
                    onClick={(e) => handleNavClick(e, '#coimbatore-info')}
                    className="drawer-nav-item"
                  >
                    <span className="drawer-item-icon">📍</span>
                    <span className="drawer-item-text">Coimbatore City Hubs</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#faq"
                    onClick={(e) => handleNavClick(e, '#faq')}
                    className="drawer-nav-item"
                  >
                    <span className="drawer-item-icon">❓</span>
                    <span className="drawer-item-text">Frequently Asked Questions</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    onClick={(e) => handleNavClick(e, '#contact')}
                    className="drawer-nav-item"
                  >
                    <span className="drawer-item-icon">📞</span>
                    <span className="drawer-item-text">Contact C Taxi</span>
                  </a>
                </li>
              </ul>

              <div className="drawer-cta-wrap">
                <a
                  href="tel:+919089223344"
                  className="btn btn-red drawer-call-btn"
                >
                  📞 Call Now: 9089223344
                </a>
                <a
                  href="https://wa.me/919089223344?text=Hello%20C%20Taxi%2C%20I%20would%20like%20to%20book%20a%20cab%20in%20Coimbatore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn drawer-whatsapp-btn"
                >
                  💬 Chat on WhatsApp
                </a>
                <div className="drawer-trust-note">
                  ⚡ 24/7 Dispatch across Gandhipuram, Peelamedu & CJB Airport
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
