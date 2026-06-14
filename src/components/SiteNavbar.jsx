import { useState } from 'react';
import { Link } from 'react-router-dom';
import brandLogo from '../assets/brand_logo.jpg';

/* ─── Hamburger Icon ────────────────────────────────────────────────────── */
function HamburgerIcon({ open }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden="true"
      style={{ transition: 'transform 0.25s' }}
    >
      {open ? (
        /* X icon */
        <>
          <line x1="2" y1="2" x2="16" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="16" y1="2" x2="2" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </>
      ) : (
        /* Hamburger lines */
        <>
          <line x1="2" y1="4.5"  x2="16" y2="4.5"  stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="2" y1="9"    x2="16" y2="9"    stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="2" y1="13.5" x2="16" y2="13.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </>
      )}
    </svg>
  );
}

/* ─── Small icon-badge nav button (light variant) ───────────────────────── */
function NavIcon({ label, light }) {
  return (
    <span
      className={`inline-flex h-11 w-11 items-center justify-center rounded-full border text-[0.72rem] font-black uppercase tracking-[0.14em] transition-all duration-300 ${
        light
          ? 'border-black/10 bg-white text-[#111] shadow-[0_10px_24px_rgba(0,0,0,0.06)] hover:border-cyber-red hover:text-cyber-red'
          : 'border-white/10 bg-white/5 text-white hover:border-cyber-red hover:text-cyber-red'
      }`}
      aria-hidden="true"
    >
      {label}
    </span>
  );
}

/* ─── Main Navbar ────────────────────────────────────────────────────────── */
export default function SiteNavbar({ theme = 'dark' }) {
  const light = theme === 'light';
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    /*
     * Outer header: sticky pill, backdrop-blur.
     * fluid-container caps the inner content at --container-max (90rem = 1440 px)
     * with clamp()-based side padding, so it looks perfect on 4K without stretching
     * wall-to-wall.
     */
    <header
      className={`sticky top-4 z-50 transition-all duration-300 ${
        light
          ? 'rounded-[28px] border border-black/10 bg-white/90 shadow-[0_18px_60px_rgba(0,0,0,0.08)] backdrop-blur-xl lg:rounded-[32px]'
          : 'rounded-[28px] border border-white/10 bg-[#151515]/88 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl lg:rounded-full'
      }`}
    >
      {/*
       * fluid-navbar-inner:  flex-wrap + justify-content: space-between
       * → logo stays left, nav stays right, items wrap gracefully if needed.
       * Gap uses clamp() so it scales with viewport width.
       */}
      <div
        className="fluid-navbar-inner px-4 py-3 sm:px-6"
      >
        {/* ── Brand logo + wordmark ── */}
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <img
            src={brandLogo}
            alt="Secure Worldz Brand Logo"
            className={`h-11 w-11 shrink-0 rounded-xl object-contain ${
              light
                ? 'border border-black/10 shadow-[0_10px_28px_rgba(0,0,0,0.08)]'
                : 'border border-white/10 shadow-[0_10px_28px_rgba(0,0,0,0.35)]'
            }`}
          />
          <div className="space-y-0.5 text-left">
            <p
              className={`font-display text-[clamp(0.78rem,1.5vw,0.95rem)] font-black uppercase leading-[1.18] tracking-[0.12em] ${
                light ? 'text-[#111]' : 'text-white'
              }`}
            >
              SECURE <span className="text-cyber-red">WORLDZ</span>
            </p>
            <p
              className={`text-[clamp(0.55rem,1.1vw,0.66rem)] font-semibold uppercase leading-[1.35] tracking-[0.22em] ${
                light ? 'text-black/55' : 'text-white/52'
              }`}
            >
              CYBER SECURITY TRAINING
            </p>
          </div>
        </Link>

        {/* ── Desktop navigation (hidden on mobile via .desktop-nav) ── */}
        <nav className="desktop-nav flex items-center gap-2 sm:gap-3" aria-label="Primary navigation">
          {light ? (
            <>
              <a href="#why" aria-label="About" className="hidden sm:inline-flex">
                <NavIcon label="G" light />
              </a>
              <a href="#footer" aria-label="Contact" className="hidden sm:inline-flex">
                <NavIcon label="X" light />
              </a>
              <a href="#top" aria-label="Theme" className="inline-flex">
                <NavIcon label="T" light />
              </a>
            </>
          ) : (
            <>
              <Link
                to="/"
                className="relative py-1 text-[clamp(0.68rem,1.1vw,0.78rem)] font-bold uppercase tracking-[0.14em] text-white/58 transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-cyber-red after:transition-all after:duration-300 hover:text-white hover:after:w-full"
              >
                Home
              </Link>
              <a
                href="/#why"
                className="relative py-1 text-[clamp(0.68rem,1.1vw,0.78rem)] font-bold uppercase tracking-[0.14em] text-white/58 transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-cyber-red after:transition-all after:duration-300 hover:text-white hover:after:w-full"
              >
                About Us
              </a>
              <a
                href="/#footer"
                className="relative py-1 text-[clamp(0.68rem,1.1vw,0.78rem)] font-bold uppercase tracking-[0.14em] text-white/58 transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-cyber-red after:transition-all after:duration-300 hover:text-white hover:after:w-full"
              >
                Contact
              </a>
              <a
                href="/#why"
                className="relative py-1 text-[clamp(0.68rem,1.1vw,0.78rem)] font-bold uppercase tracking-[0.14em] text-white/58 transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-cyber-red after:transition-all after:duration-300 hover:text-white hover:after:w-full"
              >
                Certificates
              </a>
              <Link
                to="/courses"
                className="rounded-full border border-cyber-red/50 bg-cyber-red px-[clamp(0.75rem,2vw,1.5rem)] py-3 text-[clamp(0.68rem,1.1vw,0.75rem)] font-black uppercase tracking-widest text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_28px_rgba(212,18,18,0.38)] active:scale-[0.98]"
              >
                Explore Courses
              </Link>
            </>
          )}
        </nav>

        {/* ── Hamburger toggle — only visible on mobile (≤640px via CSS) ── */}
        <button
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          className={`nav-hamburger${light ? ' light' : ''}`}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <HamburgerIcon open={menuOpen} />
        </button>
      </div>

      {/* ── Mobile dropdown panel ── */}
      {!light && (
        <div className={`mobile-nav-panel${menuOpen ? ' open' : ''} px-4 pb-3 sm:hidden`}>
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="block rounded-xl border border-white/8 px-4 py-3 text-center text-[0.78rem] font-bold uppercase tracking-[0.14em] text-white/70 hover:border-cyber-red/30 hover:text-white transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            to="/courses"
            onClick={() => setMenuOpen(false)}
            className="block rounded-xl bg-cyber-red px-4 py-3 text-center text-[0.78rem] font-black uppercase tracking-widest text-white"
          >
            Explore Courses
          </Link>
          <a
            href="/#why"
            onClick={() => setMenuOpen(false)}
            className="block rounded-xl border border-white/8 px-4 py-3 text-center text-[0.78rem] font-bold uppercase tracking-[0.14em] text-white/70 hover:border-cyber-red/30 hover:text-white transition-colors duration-200"
          >
            About Us
          </a>
          <a
            href="/#footer"
            onClick={() => setMenuOpen(false)}
            className="block rounded-xl border border-white/8 px-4 py-3 text-center text-[0.78rem] font-bold uppercase tracking-[0.14em] text-white/70 hover:border-cyber-red/30 hover:text-white transition-colors duration-200"
          >
            Contact
          </a>
          <a
            href="/#why"
            onClick={() => setMenuOpen(false)}
            className="block rounded-xl border border-white/8 px-4 py-3 text-center text-[0.78rem] font-bold uppercase tracking-[0.14em] text-white/70 hover:border-cyber-red/30 hover:text-white transition-colors duration-200"
          >
            Certificate Verification
          </a>
        </div>
      )}

      {light && (
        <div className={`mobile-nav-panel light${menuOpen ? ' open' : ''} px-4 pb-3 sm:hidden`}>
          <a href="#why"    onClick={() => setMenuOpen(false)} className="block rounded-xl border border-black/8 px-4 py-3 text-center text-[0.78rem] font-bold uppercase tracking-[0.14em] text-[#111] hover:border-cyber-red/30 hover:text-cyber-red transition-colors duration-200">About</a>
          <a href="#footer" onClick={() => setMenuOpen(false)} className="block rounded-xl border border-black/8 px-4 py-3 text-center text-[0.78rem] font-bold uppercase tracking-[0.14em] text-[#111] hover:border-cyber-red/30 hover:text-cyber-red transition-colors duration-200">Contact</a>
          <a href="#top"    onClick={() => setMenuOpen(false)} className="block rounded-xl border border-black/8 px-4 py-3 text-center text-[0.78rem] font-bold uppercase tracking-[0.14em] text-[#111] hover:border-cyber-red/30 hover:text-cyber-red transition-colors duration-200">Top</a>
        </div>
      )}
    </header>
  );
}
