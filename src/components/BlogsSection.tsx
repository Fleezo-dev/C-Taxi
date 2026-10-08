import React from 'react';
import { BLOG_DATA } from '../data/getcabsData';

interface BlogsSectionProps {
  onSelectBlog: (blogKey: string) => void;
}

export const BlogsSection: React.FC<BlogsSectionProps> = ({ onSelectBlog }) => {
  const blogKeys = Object.keys(BLOG_DATA);

  return (
    <section className="blogs-section" id="blogs">
      <div className="container">
        <div className="section-title-wrap">
          <span className="badge">Coimbatore Travel Guides</span>
          <h2 className="section-title">
            C Taxi <span>Blogs & Travel Tips</span>
          </h2>
          <p className="section-desc">
            Expert travel advice, route breakdowns, and smart taxi booking tips for Coimbatore & Tamil Nadu.
          </p>
        </div>

        <div className="blogs-grid">
          {blogKeys.map((key) => {
            const blog = BLOG_DATA[key];
            return (
              <div key={key} className="blog-card">
                <div className="blog-img-box" style={{ height: '180px', overflow: 'hidden', position: 'relative' }}>
                  <img
                    src={blog.img}
                    alt={blog.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    loading="lazy"
                  />
                  <span
                    className="blog-tag-badge"
                    style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      background: 'var(--brand-red)',
                      color: '#ffffff',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      padding: '4px 8px',
                      borderRadius: '4px'
                    }}
                  >
                    {blog.badge || blog.category || 'Travel Guide'}
                  </span>
                </div>

                <div className="blog-content-box" style={{ padding: '20px' }}>
                  <div
                    className="blog-meta-info"
                    style={{ fontSize: '0.8rem', color: '#64748b', marginBottom: '8px', display: 'flex', gap: '12px' }}
                  >
                    <span>📅 {blog.date}</span>
                    <span>⏱️ {blog.readTime}</span>
                  </div>

                  <h3
                    className="blog-card-title"
                    style={{ fontSize: '1.15rem', fontWeight: 850, color: 'var(--brand-dark)', marginBottom: '10px', minHeight: '52px' }}
                  >
                    {blog.title}
                  </h3>

                  <p
                    className="blog-excerpt"
                    style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '16px' }}
                  >
                    {blog.intro || 'Discover essential route insights and travel advice from our expert local Kovai chauffeurs.'}
                  </p>

                  <button
                    type="button"
                    onClick={() => onSelectBlog(key)}
                    className="blog-read-btn"
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'var(--brand-red)',
                      fontWeight: 800,
                      fontSize: '0.9rem',
                      cursor: 'pointer',
                      padding: 0,
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                  >
                    Read Complete Guide →
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
