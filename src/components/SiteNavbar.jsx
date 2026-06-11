import { Link } from 'react-router-dom';
import brandLogo from '../assets/brand_logo.jpg';

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

export default function SiteNavbar({ theme = 'dark' }) {
  const light = theme === 'light';

  return (
    <header
      className={`sticky top-4 z-50 px-4 py-3 backdrop-blur-xl transition-all duration-300 sm:px-6 lg:px-8 ${
        light
          ? 'rounded-[28px] border border-black/10 bg-white/90 shadow-[0_18px_60px_rgba(0,0,0,0.08)] lg:rounded-[32px]'
          : 'rounded-[28px] border border-white/10 bg-[#151515]/88 shadow-[0_18px_60px_rgba(0,0,0,0.35)] lg:rounded-full'
      }`}
    >
      <div className="flex items-center justify-between gap-5">
        <Link to="/" className="flex items-center gap-3">
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
              className={`font-display text-[0.95rem] font-black uppercase leading-[1.18] tracking-[0.12em] ${
                light ? 'text-[#111]' : 'text-white'
              }`}
            >
              SECURE <span className="text-cyber-red">WORLDZ</span>
            </p>
            <p
              className={`text-[0.66rem] font-semibold uppercase leading-[1.35] tracking-[0.22em] ${
                light ? 'text-black/55' : 'text-white/52'
              }`}
            >
              CYBER SECURITY TRAINING
            </p>
          </div>
        </Link>

        <nav className="flex items-center gap-2 sm:gap-3">
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
                to="/courses"
                className="rounded-full border border-cyber-red/50 bg-cyber-red px-6 py-3 text-xs font-black uppercase tracking-widest text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_28px_rgba(212,18,18,0.38)] active:scale-[0.98]"
              >
                Explore Courses
              </Link>
              <a
                href="/#why"
                className="relative py-1 text-[0.78rem] font-bold uppercase tracking-[0.14em] text-white/58 transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-cyber-red after:transition-all after:duration-300 hover:text-white hover:after:w-full"
              >
                About Us
              </a>
              <a
                href="/#footer"
                className="relative py-1 text-[0.78rem] font-bold uppercase tracking-[0.14em] text-white/58 transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-cyber-red after:transition-all after:duration-300 hover:text-white hover:after:w-full"
              >
                Contact
              </a>
              <a
                href="/#why"
                className="relative py-1 text-[0.78rem] font-bold uppercase tracking-[0.14em] text-white/58 transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-cyber-red after:transition-all after:duration-300 hover:text-white hover:after:w-full"
              >
                Certificate Verification
              </a>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
