import React from 'react';
import { BookOpen, Clock, ArrowRight, Sparkles } from 'lucide-react';
import { BLOG_POSTS, BlogPost } from '../data/blogData';

interface HomeBlogSectionProps {
  onNavigateToBlog: (slug: string) => void;
  onViewAllBlogs: () => void;
}

export const HomeBlogSection: React.FC<HomeBlogSectionProps> = ({
  onNavigateToBlog,
  onViewAllBlogs,
}) => {
  // Show top 3 featured guides on homepage
  const featuredArticles = BLOG_POSTS.slice(0, 3);

  return (
    <section id="travel-guides" className="py-16 sm:py-24 bg-[#101319] border-b border-[#232936]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4" />
              Travel Guides & Taxi Insights
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading tracking-tight" style={{ textWrap: 'balance' }}>
              Coimbatore Taxi Route Tips & Travel Advice
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base">
              Practical guides on airport transit, Ooty hill safety, Valparai ghats, and saving money on Coimbatore car rentals.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onViewAllBlogs}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#1c222e] border border-[#2e3748] text-white hover:text-amber-400 text-xs font-bold transition-colors"
            >
              <span>View All 5 Travel Guides</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 3 Featured Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {featuredArticles.map((post) => (
            <article
              key={post.slug}
              className="bg-[#161a24] border border-[#272f3d] hover:border-amber-400/40 rounded-2xl p-6 flex flex-col justify-between transition-all duration-200 shadow-xl group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-bold text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded-md border border-amber-400/20">
                    {post.category}
                  </span>
                  <span className="text-[11px] text-neutral-400 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-emerald-400" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white font-heading group-hover:text-amber-400 transition-colors leading-snug">
                  {post.title}
                </h3>

                <p className="text-xs text-neutral-300 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#232936] flex items-center justify-between">
                <span className="text-[11px] text-neutral-400">
                  {post.publishDate}
                </span>

                <button
                  type="button"
                  onClick={() => onNavigateToBlog(post.slug)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 group-hover:translate-x-0.5 transition-all"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center pt-2">
          <button
            type="button"
            onClick={onViewAllBlogs}
            className="inline-flex items-center gap-2 text-xs font-bold text-neutral-300 hover:text-amber-400 transition-colors"
          >
            <span>Explore all travel guides, route breakdowns & taxi tips</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
