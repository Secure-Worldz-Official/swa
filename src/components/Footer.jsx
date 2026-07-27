import React from 'react';
import { Link } from 'react-router-dom';
import brandLogo from '../assets/brand_logo.jpg';

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/thecyberjai?igsh=MXVwN3h0cjZ0Zjh2dg==',
    icon: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me',
    icon: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: 'https://youtube.com/@thecyberjai?si=pJ2sEXElismjSABn',
    icon: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

function FooterHeading({ children }) {
  return (
    <h3 style={{
      marginBottom: '1.25rem',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      fontSize: '0.68rem',
      fontWeight: 800,
      textTransform: 'uppercase',
      letterSpacing: '0.22em',
      color: '#000000',
      fontFamily: 'var(--font-heading)',
    }}>
      <span style={{ height: '0.75rem', width: '4px', background: '#000000', display: 'inline-block' }} />
      {children}
    </h3>
  );
}

function FooterLink({ href, to, children }) {
  const baseStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontSize: '0.88rem',
    color: '#555555',
    textDecoration: 'none',
    transition: 'color 0.15s',
    fontFamily: 'var(--font-main)',
  };
  const dot = (
    <span style={{ height: '4px', width: '4px', background: '#000000', display: 'inline-block', flexShrink: 0 }} />
  );
  if (to)
    return (
      <li>
        <Link to={to} style={baseStyle}
          onMouseEnter={e => e.currentTarget.style.color = '#000'}
          onMouseLeave={e => e.currentTarget.style.color = '#555555'}
        >
          {dot}{children}
        </Link>
      </li>
    );
  return (
    <li>
      <a href={href} style={baseStyle}
        onMouseEnter={e => e.currentTarget.style.color = '#000'}
        onMouseLeave={e => e.currentTarget.style.color = '#555555'}
      >
        {dot}{children}
      </a>
    </li>
  );
}

export default function Footer() {
  return (
    <footer style={{ position: 'relative', marginTop: '5rem', overflow: 'hidden', background: '#ffffff', color: '#555555', borderTop: '4px solid #000000' }}>
      {/* ── Main content area ── */}
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '4rem 2rem', paddingBottom: '4rem' }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2.2fr_1fr_1fr_1fr] gap-12">

          {/* ── Brand column ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
              <img
                src={brandLogo}
                alt="Cyber Jai Logo"
                style={{ height: '2.75rem', width: '2.75rem', flexShrink: 0, objectFit: 'contain', border: '4px solid #000' }}
              />
              <div>
                <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#000000', lineHeight: 1 }}>
                  CYBER JAI
                </p>
                <p style={{ marginTop: '0.25rem', fontSize: '0.62rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.18em', color: '#888888' }}>
                  Cyber Security Training
                </p>
              </div>
            </Link>

            {/* Tagline */}
            <p style={{ maxWidth: '260px', fontSize: '0.88rem', lineHeight: 1.75, color: '#555555' }}>
              Smart solutions for a smarter digital world. Train with the best, defend with confidence.
            </p>

            {/* Social icons */}
            <div style={{ display: 'flex', gap: '0.625rem' }}>
              {socialLinks.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{
                    display: 'flex',
                    height: '2.25rem',
                    width: '2.25rem',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '4px solid #000000',
                    background: '#ffffff',
                    color: '#000000',
                    boxShadow: '4px 4px 0px 0px rgba(0,0,0,1)',
                    transition: 'box-shadow 0.12s ease, transform 0.12s ease',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#000'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translate(4px,4px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#000'; e.currentTarget.style.boxShadow = '4px 4px 0px 0px rgba(0,0,0,1)'; e.currentTarget.style.transform = 'none'; }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* ── Quick Links ── */}
          <div>
            <FooterHeading>Quick Links</FooterHeading>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <FooterLink to="/">Home</FooterLink>
              <FooterLink href="#features">Services Overview</FooterLink>
              <FooterLink to="/enroll">Proworldz Academy</FooterLink>
              <FooterLink href="#pricing">Contact Us</FooterLink>
            </ul>
          </div>

          {/* ── Services ── */}
          <div>
            <FooterHeading>Services</FooterHeading>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <FooterLink href="#features">Cyber Security Services</FooterLink>
              <FooterLink href="#features">Website Development</FooterLink>
              <FooterLink href="#features">AI Development</FooterLink>
              <FooterLink href="#features">Training &amp; Certification</FooterLink>
            </ul>
          </div>

          {/* ── Legal ── */}
          <div>
            <FooterHeading>Legal</FooterHeading>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <FooterLink href="#privacy">Privacy Policy</FooterLink>
              <FooterLink href="#terms">Terms of Service</FooterLink>
              <FooterLink href="#cookies">Cookie Policy</FooterLink>
              <FooterLink href="#acceptable-use">Acceptable Use Policy</FooterLink>
            </ul>
          </div>

        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div style={{ borderTop: '4px solid #000000', background: '#f8f8f8' }}>
        <div style={{
          maxWidth: '80rem',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          padding: '1.25rem 2rem',
          fontSize: '0.75rem',
          color: '#666666',
        }} className="sm:flex-row">
          <p style={{ fontWeight: 600 }}>© 2026 Cyber Jai. All rights reserved.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '1rem 1.25rem' }}>
            <a href="#privacy" style={{ color: '#666', textDecoration: 'none', fontWeight: 600, transition: 'color 0.15s' }}
              onMouseEnter={e => e.currentTarget.style.color = '#000'}
              onMouseLeave={e => e.currentTarget.style.color = '#666'}
            >Privacy Policy</a>
            <span style={{ color: '#ccc' }}>·</span>
            <a href="#terms" style={{ color: '#666', textDecoration: 'none', fontWeight: 600, transition: 'color 0.15s' }}
              onMouseEnter={e => e.currentTarget.style.color = '#000'}
              onMouseLeave={e => e.currentTarget.style.color = '#666'}
            >Terms of Service</a>
            <span style={{ color: '#ccc' }}>·</span>
            <a href="#cookies" style={{ color: '#666', textDecoration: 'none', fontWeight: 600, transition: 'color 0.15s' }}
              onMouseEnter={e => e.currentTarget.style.color = '#000'}
              onMouseLeave={e => e.currentTarget.style.color = '#666'}
            >Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
