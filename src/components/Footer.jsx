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
    <h3 className="mb-5 flex items-center gap-2 text-[0.68rem] font-black uppercase tracking-[0.22em] text-black">
      <span className="h-3 w-[2px] rounded-full bg-cyber-red" />
      {children}
    </h3>
  );
}

function FooterLink({ href, to, children }) {
  const cls =
    'group flex items-center gap-2 text-[0.88rem] text-gray-500 transition-all duration-200 hover:text-cyber-red';
  const dot = (
    <span className="h-1 w-1 shrink-0 rounded-full bg-gray-300 transition-colors duration-200 group-hover:bg-cyber-red" />
  );
  if (to)
    return (
      <li>
        <Link to={to} className={cls}>
          {dot}
          {children}
        </Link>
      </li>
    );
  return (
    <li>
      <a href={href} className={cls}>
        {dot}
        {children}
      </a>
    </li>
  );
}

export default function Footer() {
  return (
    <footer className="relative mt-20 overflow-hidden bg-white text-gray-600">
      {/* Red top accent */}
      <div className="h-[3px] w-full bg-gradient-to-r from-transparent via-cyber-red/60 to-transparent" />

      {/* ── Main content area ── */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[2.2fr_1fr_1fr_1fr]">

          {/* ── Brand column ── */}
          <div className="flex flex-col gap-6">
            {/* Logo + name */}
            <Link to="/" className="flex items-center gap-3 w-fit">
              <img
                src={brandLogo}
                alt="Secure Worldz Logo"
                className="h-11 w-11 shrink-0 rounded-xl border border-gray-100 object-contain shadow-sm"
              />
              <div>
                <p className="font-display text-base font-black uppercase tracking-[0.1em] text-black leading-none">
                  SECURE WORLDZ
                </p>
                <p className="mt-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-gray-400">
                  Cyber Security Training
                </p>
              </div>
            </Link>

            {/* Tagline */}
            <p className="max-w-[260px] text-sm leading-7 text-gray-500">
              Smart solutions for a smarter digital world. Train with the best, defend with confidence.
            </p>

            {/* Social icons */}
            <div className="flex gap-2.5">
              {socialLinks.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-gray-100 bg-gray-50 text-gray-500 transition-all duration-300 hover:border-cyber-red/30 hover:bg-cyber-red/5 hover:text-cyber-red active:scale-95"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* ── Quick Links ── */}
          <div>
            <FooterHeading>Quick Links</FooterHeading>
            <ul className="space-y-3">
              <FooterLink to="/">Home</FooterLink>
              <FooterLink href="#features">Services Overview</FooterLink>
              <FooterLink to="/enroll">Proworldz Academy</FooterLink>
              <FooterLink href="#pricing">Contact Us</FooterLink>
            </ul>
          </div>

          {/* ── Services ── */}
          <div>
            <FooterHeading>Services</FooterHeading>
            <ul className="space-y-3">
              <FooterLink href="#features">Cyber Security Services</FooterLink>
              <FooterLink href="#features">Website Development</FooterLink>
              <FooterLink href="#features">AI Development</FooterLink>
              <FooterLink href="#features">Training &amp; Certification</FooterLink>
            </ul>
          </div>

          {/* ── Legal ── */}
          <div>
            <FooterHeading>Legal</FooterHeading>
            <ul className="space-y-3">
              <FooterLink href="#privacy">Privacy Policy</FooterLink>
              <FooterLink href="#terms">Terms of Service</FooterLink>
              <FooterLink href="#cookies">Cookie Policy</FooterLink>
              <FooterLink href="#acceptable-use">Acceptable Use Policy</FooterLink>
            </ul>
          </div>

        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-gray-100 bg-gray-50/60">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-5 text-xs text-gray-400 sm:flex-row lg:px-8">
          <p className="font-medium">© 2026 Secure Worldz. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            <a href="#privacy" className="transition-colors duration-200 hover:text-cyber-red">Privacy Policy</a>
            <span className="hidden text-gray-200 sm:inline">·</span>
            <a href="#terms" className="transition-colors duration-200 hover:text-cyber-red">Terms of Service</a>
            <span className="hidden text-gray-200 sm:inline">·</span>
            <a href="#cookies" className="transition-colors duration-200 hover:text-cyber-red">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
