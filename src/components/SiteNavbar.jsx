import { Link } from 'react-router-dom';
import brandLogo from '../assets/brand_logo.jpg';

export default function SiteNavbar() {
  return (
    <header className="sticky top-4 z-50 rounded-[28px] border border-white/10 bg-[#151515]/88 px-4 py-3 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-all duration-300 sm:px-6 lg:rounded-full lg:px-8">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={brandLogo}
            alt="Secure Worldz Brand Logo"
            className="h-11 w-11 shrink-0 rounded-xl border border-white/10 object-contain shadow-[0_10px_28px_rgba(0,0,0,0.35)]"
          />
          <div className="space-y-0.5 text-left">
            <p className="font-display text-[0.9rem] font-black uppercase leading-[1.18] tracking-[0.12em] text-white">
              LEARN WITH <span className="text-cyber-red">CYBER J</span><span className="cyber-ai-glow">AI</span>
            </p>
            <p className="text-[0.66rem] font-semibold uppercase leading-[1.35] tracking-[0.22em] text-white/52">
              FROM ZERO TO CYBER HERO
            </p>
          </div>
        </Link>

        <nav className="flex flex-wrap items-center gap-x-5 gap-y-3 lg:ml-auto lg:justify-end lg:gap-x-8">
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
        </nav>
      </div>
    </header>
  );
}
