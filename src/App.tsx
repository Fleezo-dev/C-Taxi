/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroBookingSection, BookingSubmission } from './components/HeroBookingSection';
import { QuickTrustStrip } from './components/QuickTrustStrip';
import { RoutesSection } from './components/RoutesSection';
import { FeaturesSection } from './components/FeaturesSection';
import { TaxiComparisonSection } from './components/TaxiComparisonSection';
import { ServicesSection } from './components/ServicesSection';
import { CoimbatoreInfoSection } from './components/CoimbatoreInfoSection';
import { ReviewsSection } from './components/ReviewsSection';
import { TourPackagesSection } from './components/TourPackagesSection';
import { BlogsSection } from './components/BlogsSection';
import { FaqSection } from './components/FaqSection';
import { CallBanner } from './components/CallBanner';
import { Footer } from './components/Footer';
import { DedicatedModal } from './components/DedicatedModal';
import { ReservationModal } from './components/ReservationModal';
import { DiscountModal } from './components/DiscountModal';
import { BottomDock } from './components/BottomDock';

export default function App() {
  // Modal states
  const [activePageKey, setActivePageKey] = useState<string | null>(null);
  const [activePackageKey, setActivePackageKey] = useState<string | null>(null);
  const [activeBlogKey, setActiveBlogKey] = useState<string | null>(null);

  // Booking Reservation Modal
  const [activeBookingData, setActiveBookingData] = useState<BookingSubmission | null>(null);

  // Spin & Win Discount Modal
  const [isDiscountOpen, setIsDiscountOpen] = useState(false);

  // Deep-link handling via search params
  useEffect(() => {
    const handleUrl = () => {
      try {
        const params = new URLSearchParams(window.location.search);
        const pkgParam = params.get('package') || params.get('tour');
        const blogParam = params.get('blog') || params.get('article');
        const pageParam = params.get('page');

        if (pkgParam) {
          setActivePackageKey(pkgParam);
          setActiveBlogKey(null);
          setActivePageKey(null);
        } else if (blogParam) {
          setActiveBlogKey(blogParam);
          setActivePackageKey(null);
          setActivePageKey(null);
        } else if (pageParam) {
          setActivePageKey(pageParam);
          setActivePackageKey(null);
          setActiveBlogKey(null);
        }
      } catch {
        // safe fallback
      }
    };

    handleUrl();
    window.addEventListener('popstate', handleUrl);
    return () => window.removeEventListener('popstate', handleUrl);
  }, []);

  const handleOpenPage = (pageKey: string) => {
    setActivePageKey(pageKey);
    setActivePackageKey(null);
    setActiveBlogKey(null);
    window.history.pushState({}, '', `?page=${pageKey}`);
  };

  const handleSelectPackage = (packageKey: string) => {
    setActivePackageKey(packageKey);
    setActivePageKey(null);
    setActiveBlogKey(null);
    window.history.pushState({}, '', `?package=${packageKey}`);
  };

  const handleSelectBlog = (blogKey: string) => {
    setActiveBlogKey(blogKey);
    setActivePageKey(null);
    setActivePackageKey(null);
    window.history.pushState({}, '', `?blog=${blogKey}`);
  };

  const handleCloseModal = () => {
    setActivePageKey(null);
    setActivePackageKey(null);
    setActiveBlogKey(null);
    window.history.pushState({}, '', window.location.pathname);
  };

  const handleBookFromHero = (data: BookingSubmission) => {
    setActiveBookingData(data);
  };

  const handleBookFromTour = (title: string, price: string) => {
    handleCloseModal();
    const el = document.getElementById('booking-form-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setActiveBookingData({
      serviceType: 'outstation',
      pickup: 'Coimbatore City (Doorstep)',
      drop: title,
      dateTime: new Date(Date.now() + 86400000).toISOString().slice(0, 16),
      phone: '',
      vehicle: 'Sedan (Dzire / Etios)',
      fareEstimate: price,
      extraInfo: `Tour Package: ${title}`
    });
  };

  return (
    <div className="ctaxi-app-root">
      {/* 1. Header Navigation */}
      <Header
        onOpenPage={handleOpenPage}
        onOpenDiscount={() => setIsDiscountOpen(true)}
      />

      {/* 2. Hero Section with Live Highway Canvas & 4-Tab Booking Form */}
      <HeroBookingSection onBook={handleBookFromHero} />

      {/* 3. Quick Trust Strip */}
      <QuickTrustStrip />

      {/* 4. Popular Intercity Routes Grid */}
      <RoutesSection
        onOpenTariff={() => handleOpenPage('tariff')}
      />

      {/* 5. Why C Taxi / Features Grid */}
      <FeaturesSection />

      {/* 6. Transparency Comparison Table */}
      <TaxiComparisonSection />

      {/* 7. Complete Taxi Solutions / Services */}
      <ServicesSection />

      {/* 8. Coimbatore Coverage & Local Hubs */}
      <CoimbatoreInfoSection />

      {/* 9. Rider Testimonials */}
      <ReviewsSection />

      {/* 10. Popular Tour Packages from Coimbatore */}
      <TourPackagesSection
        onSelectPackage={handleSelectPackage}
      />

      {/* 11. Travel Guides & Blogs */}
      <BlogsSection
        onSelectBlog={handleSelectBlog}
      />

      {/* 12. FAQ Accordion */}
      <FaqSection />

      {/* 13. Call & WhatsApp Instant Action Banner */}
      <CallBanner />

      {/* 14. 4-Column Footer */}
      <Footer onOpenPage={handleOpenPage} />

      {/* 15. Mobile Sticky Bottom App Dock */}
      <BottomDock />

      {/* 16. Dedicated Sub-Page Modal (Tours / Blogs / Tariffs / Policies) */}
      <DedicatedModal
        pageKey={activePageKey}
        packageKey={activePackageKey}
        blogKey={activeBlogKey}
        onClose={handleCloseModal}
        onBookPackage={handleBookFromTour}
      />

      {/* 17. Booking Reservation Received Modal */}
      <ReservationModal
        bookingData={activeBookingData}
        onClose={() => setActiveBookingData(null)}
      />

      {/* 18. Spin & Win Discount Modal */}
      <DiscountModal
        isOpen={isDiscountOpen}
        onClose={() => setIsDiscountOpen(false)}
      />
    </div>
  );
}
