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
        <>
          <line x1="2" y1="2" x2="16" y2="16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" />
          <line x1="16" y1="2" x2="2" y2="16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" />
        </>
      ) : (
        <>
          <line x1="2" y1="4.5"  x2="16" y2="4.5"  stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" />
          <line x1="2" y1="9"    x2="16" y2="9"    stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" />
          <line x1="2" y1="13.5" x2="16" y2="13.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" />
        </>
      )}
    </svg>
  );
}

/* ─── Nav Link ──────────────────────────────────────────────────────────── */
function NavLink({ href, to, children, light }) {
  const cls = `relative py-1 text-[clamp(0.68rem,1.1vw,0.78rem)] font-bold uppercase tracking-[0.14em] transition-all duration-150 ${
    light ? 'text-[#000]' : 'text-[#000]'
  } hover:underline decoration-4 underline-offset-4`;
  if (to) return <Link to={to} className={cls}>{children}</Link>;
  return <a href={href} className={cls}>{children}</a>;
}

/* ─── Main Navbar ────────────────────────────────────────────────────────── */
export default function SiteNavbar({ theme = 'dark' }) {
  const light = theme === 'light';
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      style={{
        position: 'sticky',
        top: '1rem',
        zIndex: 50,
        background: '#ffffff',
        border: '4px solid #000000',
        boxShadow: '8px 8px 0px 0px rgba(0,0,0,1)',
        transition: 'box-shadow 0.15s ease',
      }}
    >
      <div className="fluid-navbar-inner px-4 py-3 sm:px-6">
        {/* ── Brand logo + wordmark ── */}
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <img
            src={brandLogo}
            alt="Cyber Jai Brand Logo"
            style={{
              height: '2.75rem',
              width: '2.75rem',
              objectFit: 'contain',
              border: '4px solid #000000',
              flexShrink: 0,
            }}
          />
          <div style={{ textAlign: 'left' }}>
            <p
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(0.78rem,1.5vw,0.95rem)',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                lineHeight: 1.18,
                color: '#000000',
              }}
            >
              CYBER JAI
            </p>
            <p
              style={{
                fontSize: 'clamp(0.55rem,1.1vw,0.66rem)',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.22em',
                lineHeight: 1.35,
                color: '#555555',
              }}
            >
              CYBER SECURITY TRAINING
            </p>
          </div>
        </Link>

        {/* ── Desktop navigation ── */}
        <nav className="desktop-nav flex items-center gap-3 sm:gap-4" aria-label="Primary navigation">
          {light ? (
            <>
              <NavLink href="#why" light>About</NavLink>
              <NavLink href="#footer" light>Contact</NavLink>
            </>
          ) : (
            <>
              <NavLink to="/">Home</NavLink>
              <NavLink href="/#why">About Us</NavLink>
              <NavLink href="/#footer">Contact</NavLink>
              <Link
                to="/courses"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: '#000000',
                  color: '#ffffff',
                  border: '4px solid #000000',
                  boxShadow: '4px 4px 0px 0px rgba(0,0,0,1)',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 800,
                  fontSize: 'clamp(0.65rem,1.05vw,0.75rem)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  padding: '0.5rem 1.25rem',
                  transition: 'box-shadow 0.12s ease, transform 0.12s ease',
                  textDecoration: 'none',
                }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translate(4px,4px)'; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = '4px 4px 0px 0px rgba(0,0,0,1)'; e.currentTarget.style.transform = 'none'; }}
              >
                Explore Courses
              </Link>
            </>
          )}
        </nav>

        {/* ── Hamburger toggle ── */}
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
            style={{ display: 'block', border: '4px solid #000', padding: '0.65rem 1rem', textAlign: 'center', fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.14em', color: '#000', textDecoration: 'none', marginBottom: '0.5rem' }}
          >
            Home
          </Link>
          <a
            href="/#why"
            onClick={() => setMenuOpen(false)}
            style={{ display: 'block', border: '4px solid #000', padding: '0.65rem 1rem', textAlign: 'center', fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.14em', color: '#000', textDecoration: 'none', marginBottom: '0.5rem' }}
          >
            About Us
          </a>
          <a
            href="/#footer"
            onClick={() => setMenuOpen(false)}
            style={{ display: 'block', border: '4px solid #000', padding: '0.65rem 1rem', textAlign: 'center', fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.14em', color: '#000', textDecoration: 'none', marginBottom: '0.5rem' }}
          >
            Contact
          </a>
          <Link
            to="/courses"
            onClick={() => setMenuOpen(false)}
            style={{ display: 'block', background: '#000', color: '#fff', border: '4px solid #000', padding: '0.65rem 1rem', textAlign: 'center', fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.14em', textDecoration: 'none' }}
          >
            Explore Courses
          </Link>
        </div>
      )}

      {light && (
        <div className={`mobile-nav-panel light${menuOpen ? ' open' : ''} px-4 pb-3 sm:hidden`}>
          <a href="#why" onClick={() => setMenuOpen(false)} style={{ display: 'block', border: '4px solid #000', padding: '0.65rem 1rem', textAlign: 'center', fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.14em', color: '#000', textDecoration: 'none', marginBottom: '0.5rem' }}>About</a>
          <a href="#footer" onClick={() => setMenuOpen(false)} style={{ display: 'block', border: '4px solid #000', padding: '0.65rem 1rem', textAlign: 'center', fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.14em', color: '#000', textDecoration: 'none' }}>Contact</a>
        </div>
      )}
    </header>
  );
}
