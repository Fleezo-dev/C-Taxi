import React from 'react';
import { 
  ArrowLeft, 
  Clock, 
  Calendar, 
  Phone, 
  MessageSquare, 
  Check, 
  ChevronRight, 
  Sparkles, 
  MapPin, 
  HelpCircle,
  ArrowRight,
  BookOpen
} from 'lucide-react';
import { BlogPost, BLOG_POSTS } from '../data/blogData';
import { TOUR_PACKAGES, findTourBySlug } from '../data/toursData';
import { PHONE_NUMBER, DISPLAY_PHONE, WHATSAPP_URL } from '../data/taxiData';

interface BlogDetailPageProps {
  post: BlogPost;
  onBackToBlog: () => void;
  onBackToHome: () => void;
  onNavigateToTour: (slug: string) => void;
  onNavigateToBlog: (slug: string) => void;
  onOpenBookingModal: (details: any) => void;
}

export const BlogDetailPage: React.FC<BlogDetailPageProps> = ({
  post,
  onBackToBlog,
  onBackToHome,
  onNavigateToTour,
  onNavigateToBlog,
  onOpenBookingModal
}) => {
  const relatedTours = post.relatedTourSlugs
    .map(slug => findTourBySlug(slug))
    .filter(Boolean);

  const handleQuickBook = () => {
    onOpenBookingModal({
      serviceType: 'outstation',
      pickup: 'Coimbatore City (Doorstep)',
      drop: post.title.split(':')[0] || 'Outstation Trip',
      vehicle: 'Prime AC Sedan',
      estimatedPrice: null,
      breakdownNote: `Inquiry originated from article: ${post.title}`
    });
  };

  const formattedWhatsApp = encodeURIComponent(
    `Hello C Taxi,\nI was reading your travel guide: "${post.title}"\nI would like to inquire about taxi availability and rates for this route.`
  );

  return (
    <article className="min-h-screen bg-[#0d0f12] text-neutral-100 pb-28 pt-6 sm:pt-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-neutral-400 mb-6 flex-wrap">
          <button 
            type="button" 
            onClick={onBackToHome}
            className="hover:text-amber-400 transition-colors"
          >
            Home
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-600" />
          <button 
            type="button" 
            onClick={onBackToBlog}
            className="hover:text-amber-400 transition-colors"
          >
            Travel Guides
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-600" />
          <span className="text-amber-400 font-semibold truncate max-w-[200px] sm:max-w-none">
            {post.coverBadge}
          </span>
        </nav>

        {/* Back Button */}
        <button
          type="button"
          onClick={onBackToBlog}
          className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-400 hover:text-white transition-colors mb-6 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to All Travel Guides</span>
        </button>

        {/* Article Header */}
        <header className="space-y-4 mb-8 pb-8 border-b border-[#242b38]">
          <div className="flex items-center gap-2.5 flex-wrap">
            <span className="text-xs font-bold text-amber-400 bg-amber-400/10 px-3 py-1 rounded-md border border-amber-400/20">
              {post.category}
            </span>
            <span className="text-neutral-500">·</span>
            <span className="text-xs text-neutral-400 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-emerald-400" />
              {post.readTime}
            </span>
            <span className="text-neutral-500">·</span>
            <span className="text-xs text-neutral-400">
              Published {post.publishDate}
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading tracking-tight leading-tight">
            {post.title}
          </h1>

          <p className="text-sm sm:text-lg text-neutral-300 leading-relaxed">
            {post.excerpt}
          </p>

          <div className="flex items-center gap-3 pt-2 text-xs text-neutral-400">
            <span className="font-semibold text-white">By {post.author}</span>
            <span>·</span>
            <span>24/7 Verified Dispatch Advice</span>
          </div>
        </header>

        {/* Key Takeaways Bento */}
        <div className="bg-[#151922] border border-[#2b3342] rounded-2xl p-6 mb-10 space-y-3">
          <h2 className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            Quick Summary & Key Trip Facts
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
            {post.keyTakeaways.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-neutral-200">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Article Body Sections */}
        <div className="space-y-10 text-neutral-300 text-sm sm:text-base leading-relaxed">
          {post.sections.map((sec, idx) => (
            <section key={idx} className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white font-heading tracking-tight">
                {sec.heading}
              </h2>
              {sec.content.map((p, pIdx) => (
                <p key={pIdx} className="text-neutral-300 leading-relaxed whitespace-pre-line">
                  {p}
                </p>
              ))}
            </section>
          ))}
        </div>

        {/* FAQs */}
        {post.faqs && post.faqs.length > 0 && (
          <section className="mt-12 pt-8 border-t border-[#242b38] space-y-6">
            <h3 className="text-xl font-bold text-white font-heading flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-amber-400" />
              Frequently Asked Questions
            </h3>
            <div className="space-y-4">
              {post.faqs.map((faq, idx) => (
                <div key={idx} className="bg-[#151922] border border-[#272f3d] rounded-xl p-5 space-y-2">
                  <h4 className="text-sm sm:text-base font-bold text-white">
                    {faq.q}
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Related Tour Packages */}
        {relatedTours.length > 0 && (
          <section className="mt-12 pt-8 border-t border-[#242b38] space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-white font-heading">
                Recommended Taxi Packages for this Route
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedTours.map((tour: any) => (
                <div
                  key={tour.slug}
                  className="bg-[#151922] border border-[#272f3d] hover:border-amber-400/40 rounded-xl p-5 flex flex-col justify-between transition-all"
                >
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider">
                      {tour.badge}
                    </span>
                    <h4 className="text-sm font-bold text-white font-heading">
                      {tour.title}
                    </h4>
                    <p className="text-xs text-neutral-400 line-clamp-2">
                      {tour.shortDescription}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-[#222834] flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-neutral-400 block">From</span>
                      <span className="text-base font-extrabold text-amber-400 font-heading">
                        ₹{tour.startingPrice.toLocaleString('en-IN')}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => onNavigateToTour(tour.slug)}
                      className="inline-flex items-center gap-1 text-xs font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 px-3 py-1.5 rounded-lg transition-colors"
                    >
                      <span>View Tour</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Bottom Booking & Call Action Bar */}
        <div className="mt-14 bg-[#181c26] border border-[#2d3648] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-1.5 text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-bold text-white font-heading">
              Ready to Book Your Ride with C Taxi?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300">
              Clean AC cabs, 15-minute doorstep dispatch, and zero surge pricing across Coimbatore.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0 flex-wrap justify-center">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm text-neutral-950 bg-amber-400 hover:bg-amber-300 transition-all shadow-md shadow-amber-400/20"
            >
              <Phone className="w-4 h-4 fill-neutral-950" />
              <span>Call {DISPLAY_PHONE}</span>
            </a>

            <a
              href={`${WHATSAPP_URL}?text=${formattedWhatsApp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl font-bold text-xs sm:text-sm text-neutral-950 bg-emerald-400 hover:bg-emerald-300 transition-all shadow-md shadow-emerald-400/20"
            >
              <MessageSquare className="w-4 h-4 fill-neutral-950" />
              <span>WhatsApp</span>
            </a>

            <button
              type="button"
              onClick={handleQuickBook}
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl font-bold text-xs sm:text-sm text-neutral-200 bg-[#242b3a] hover:bg-[#2e374a] border border-[#374256] transition-all"
            >
              <span>Book Online</span>
            </button>
          </div>
        </div>

      </div>
    </article>
  );
};
