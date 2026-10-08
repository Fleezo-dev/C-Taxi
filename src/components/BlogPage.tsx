import React from 'react';
import { 
  BookOpen, 
  Clock, 
  Calendar, 
  ArrowRight, 
  Phone, 
  MessageSquare, 
  ChevronRight,
  Sparkles,
  MapPin
} from 'lucide-react';
import { BLOG_POSTS, BlogPost } from '../data/blogData';
import { PHONE_NUMBER, DISPLAY_PHONE, WHATSAPP_URL } from '../data/taxiData';

interface BlogPageProps {
  onNavigateToBlog: (slug: string) => void;
  onBackToHome: () => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({
  onNavigateToBlog,
  onBackToHome
}) => {
  return (
    <div className="min-h-screen bg-[#0d0f12] text-neutral-100 pb-28 pt-6 sm:pt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-neutral-400 mb-6">
          <button 
            type="button" 
            onClick={onBackToHome}
            className="hover:text-amber-400 transition-colors"
          >
            Home
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-600" />
          <span className="text-amber-400 font-semibold">Travel Guides & Tips</span>
        </nav>

        {/* Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
            <BookOpen className="w-4 h-4" />
            Coimbatore Taxi & Travel Intelligence
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight leading-tight">
            Coimbatore Travel Guides & Taxi Tips
          </h1>
          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
            Insider route guides, mountain driving safety tips, airport transfer insights, and transparent fare breakdowns from our 24/7 Coimbatore dispatch team.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.slug}
              className="bg-[#151922] border border-[#272f3d] hover:border-amber-400/50 rounded-2xl overflow-hidden transition-all duration-200 flex flex-col justify-between shadow-xl group"
            >
              <div className="p-6 space-y-4">
                
                {/* Meta Header */}
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-bold text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded-md border border-amber-400/20">
                    {post.category}
                  </span>
                  <span className="text-[11px] text-neutral-400 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-emerald-400" />
                    {post.readTime}
                  </span>
                </div>

                <h2 className="text-lg sm:text-xl font-bold text-white font-heading group-hover:text-amber-400 transition-colors leading-snug">
                  {post.title}
                </h2>

                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Key takeaways pill preview */}
                <div className="pt-2 border-t border-[#232936] space-y-1.5">
                  <div className="text-[11px] text-neutral-400 font-medium">Inside this guide:</div>
                  <ul className="space-y-1 text-[11px] text-neutral-300">
                    {post.keyTakeaways.slice(0, 2).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-1.5 line-clamp-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 mt-1.5" />
                        <span className="truncate">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Action */}
              <div className="p-6 pt-0">
                <div className="pt-4 border-t border-[#232936] flex items-center justify-between">
                  <span className="text-[11px] text-neutral-400">
                    By {post.author}
                  </span>

                  <button
                    type="button"
                    onClick={() => onNavigateToBlog(post.slug)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 group-hover:translate-x-0.5 transition-all"
                  >
                    <span>Read Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </article>
          ))}
        </div>

        {/* Quick Help Banner */}
        <div className="mt-16 bg-[#161a24] border border-[#293140] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-bold text-white font-heading">
              Have Questions About a Specific Route or Taxi Tariff?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400">
              Speak directly with our Coimbatore dispatch desk for instant route advice and guaranteed quotes.
            </p>
          </div>

          <a
            href={`tel:${PHONE_NUMBER}`}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm text-neutral-950 bg-amber-400 hover:bg-amber-300 transition-all shrink-0 shadow-lg shadow-amber-400/20"
          >
            <Phone className="w-4 h-4 fill-neutral-950" />
            <span>Call {DISPLAY_PHONE}</span>
          </a>
        </div>

      </div>
    </div>
  );
};
