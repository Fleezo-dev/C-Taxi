import React from 'react';

export const BottomDock: React.FC = () => {
  return (
    <nav
      className="bottom-app-dock"
      aria-label="Quick contact bar"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        width: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.98)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderTop: '1px solid #e2e8f0',
        boxShadow: '0 -4px 20px rgba(15, 23, 42, 0.12)',
        zIndex: 999,
        padding: '10px 14px max(10px, env(safe-area-inset-bottom, 10px)) 14px',
        boxSizing: 'border-box'
      }}
    >
      <div
        style={{
          maxWidth: '540px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '12px',
          alignItems: 'center'
        }}
      >
        {/* 1. Call Now Button - Brand Red */}
        <a
          href="tel:+919089223344"
          className="dock-cta-btn"
          aria-label="Call C Taxi at 9089223344"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            height: '46px',
            background: 'linear-gradient(135deg, #ef233c 0%, #d90429 60%, #b70020 100%)',
            color: '#ffffff',
            borderRadius: '12px',
            textDecoration: 'none',
            fontWeight: 800,
            fontSize: '0.92rem',
            letterSpacing: '0.01em',
            boxShadow: '0 4px 14px rgba(217, 4, 41, 0.35)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            transition: 'all 0.15s ease',
            cursor: 'pointer',
            userSelect: 'none'
          }}
        >
          {/* Phone SVG Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ flexShrink: 0 }}
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          <span>Call: 9089223344</span>
        </a>

        {/* 2. WhatsApp Button - Official WhatsApp Green */}
        <a
          href="https://wa.me/919089223344?text=Hello%20C%20Taxi%2C%20I%20need%20to%20book%20a%20cab%20in%20Coimbatore"
          target="_blank"
          rel="noopener noreferrer"
          className="dock-cta-btn"
          aria-label="Chat on WhatsApp at 9089223344"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            height: '46px',
            background: 'linear-gradient(135deg, #2fe675 0%, #25D366 60%, #1ea952 100%)',
            color: '#ffffff',
            borderRadius: '12px',
            textDecoration: 'none',
            fontWeight: 800,
            fontSize: '0.92rem',
            letterSpacing: '0.01em',
            boxShadow: '0 4px 14px rgba(37, 211, 102, 0.35)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            transition: 'all 0.15s ease',
            cursor: 'pointer',
            userSelect: 'none'
          }}
        >
          {/* WhatsApp SVG Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="19"
            viewBox="0 0 24 24"
            fill="currentColor"
            style={{ flexShrink: 0 }}
          >
            <path d="M12.031 2C6.496 2 2 6.496 2 12.031c0 1.954.561 3.778 1.531 5.328L2 22l4.805-1.504A9.972 9.972 0 0 0 12.031 22c5.535 0 10.031-4.496 10.031-10.031C22.062 6.496 17.566 2 12.031 2zm0 18.234c-1.637 0-3.176-.465-4.496-1.27l-.324-.199-3.344 1.047 1.066-3.262-.211-.336A8.172 8.172 0 0 1 3.844 12.03c0-4.515 3.672-8.187 8.187-8.187 4.516 0 8.188 3.672 8.188 8.187 0 4.516-3.672 8.204-8.188 8.204zm4.563-6.148c-.25-.125-1.477-.73-1.707-.812-.227-.082-.395-.125-.562.125-.164.25-.645.812-.79 1-.144.188-.293.207-.543.082-.25-.125-1.054-.387-2.008-1.238-.742-.664-1.242-1.484-1.387-1.734-.144-.25-.015-.387.11-.512.113-.113.25-.293.375-.438.125-.145.168-.25.25-.418.082-.168.043-.312-.02-.438-.063-.125-.563-1.355-.77-1.855-.203-.488-.41-.422-.563-.43-.145-.008-.313-.008-.477-.008-.168 0-.438.063-.668.313-.226.25-.875.855-.875 2.086 0 1.23 1.094 2.422 1.246 2.625.156.203 2.148 3.281 5.203 4.602.727.312 1.293.5 1.734.64.73.235 1.395.203 1.922.125.586-.086 1.477-.605 1.688-1.188.207-.586.207-1.09.144-1.188-.062-.101-.226-.164-.476-.289z" />
          </svg>
          <span>WhatsApp</span>
        </a>
      </div>
    </nav>
  );
};
