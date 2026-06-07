import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';
import {
  CalendarIcon,
  ClockIcon,
  LockSealIcon,
  ShieldLockIcon,
  LaptopCodeIcon,
  GrowthIcon,
  CheckIcon,
} from './components/Icons';
import { HeroPreview, ReasonCard, FooterBanner } from './components/PosterBlocks';
import Reveal from './components/Reveal';
import brandLogo from './assets/brand_logo.jpg';
import {
  footerFeatures,
  heroStats,
  launchDate,
  reasonCards,
  seatingLine,
} from './data/content';
import EnrollmentPage from './components/EnrollmentPage';
import AdminPanel from './components/AdminPanel';
import ExperienceCarousel from './components/ExperienceCarousel';

function BrandLockup() {
  return (
    <Link to="/" className="flex items-center gap-3">
      <img
        src={brandLogo}
        alt="Secure Worldz Brand Logo"
        className="h-10 w-10 shrink-0 object-contain rounded-lg border border-gray-100/10 shadow-sm"
      />
      <div className="space-y-0.5 text-left">
        <p className="font-display text-[0.92rem] leading-[1.18] font-black uppercase tracking-[0.12em] text-[#111]">
          LEARN WITH <span className="text-cyber-red">CYBER J</span><span className="cyber-ai-glow">AI</span>
        </p>
        <p className="text-[0.68rem] font-semibold leading-[1.35] uppercase tracking-[0.22em] text-[#5a5a5a]">
          FROM ZERO TO CYBER HERO
        </p>
      </div>
    </Link>
  );
}

function SectionHeading({ eyebrow, title, description, center = false }) {
  return (
    <div className={center ? 'mx-auto max-w-4xl text-center' : 'max-w-4xl text-left'}>
      <p className="text-[0.78rem] font-bold uppercase tracking-[0.24em] text-cyber-red">
        {eyebrow}
      </p>
      <h2 className="mt-4 font-display text-[clamp(1.8rem,4vw,3.4rem)] leading-[1.2] font-black uppercase tracking-[-0.035em] text-[#111]">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-[1rem] leading-8 text-[#4b4b4b] sm:text-[1.06rem]">
          {description}
        </p>
      ) : null}
    </div>
  );
}

function CTAButton({ children, variant = 'solid', href, to }) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-[0.95rem] font-bold uppercase tracking-widest transition-all';
  const styles =
    variant === 'solid'
      ? 'bg-cyber-red text-white shadow-[0_14px_30px_rgba(212,18,18,0.22)] hover:bg-cyber-redDark hover:shadow-[0_20px_40px_rgba(212,18,18,0.32)] active:scale-[0.98]'
      : 'border border-[#d7d7d7] bg-white text-[#111] hover:border-[#bbb] hover:bg-[#fafafa] active:scale-[0.98]';

  if (to) {
    return (
      <motion.div whileHover={{ y: -2 }} className="inline-block">
        <Link to={to} className={`${base} ${styles}`}>
          {children}
        </Link>
      </motion.div>
    );
  }

  const handleClick = (e) => {
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.a
      href={href}
      onClick={handleClick}
      whileHover={{ y: -2 }}
      className={`${base} ${styles}`}
    >
      {children}
    </motion.a>
  );
}

function StatCard({ label, value, prefix = '', struck = false, tone = 'neutral' }) {
  const styles = {
    neutral: {
      container: 'border-gray-100 bg-white text-[#111] hover:border-gray-200 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)]',
      label: 'text-gray-500',
      value: 'text-[#111]',
    },
    red: {
      container: 'border-cyber-red/20 bg-gradient-to-br from-cyber-red to-cyber-redDark text-white hover:shadow-[0_20px_40px_rgba(212,18,18,0.25)]',
      label: 'text-white/80',
      value: 'text-white',
    },
    dark: {
      container: 'border-white/5 bg-gradient-to-br from-[#1e1e1e] to-[#0d0d0d] text-white hover:border-white/10 hover:shadow-[0_20px_40px_rgba(0,0,0,0.18)]',
      label: 'text-white/70',
      value: 'text-white',
    },
  };

  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`rounded-3xl border px-6 py-6 shadow-[0_8px_30px_rgba(0,0,0,0.03)] transition-all duration-300 ${styles[tone].container}`}
    >
      <p className={`text-[0.76rem] font-bold uppercase tracking-[0.18em] ${styles[tone].label}`}>
        {label}
      </p>
      <div
        className={`mt-4 font-display text-[clamp(1.85rem,3.6vw,3rem)] leading-[1.12] font-black tracking-[-0.04em] ${styles[tone].value}`}
      >
        <span className={struck ? 'decoration-[3px] decoration-cyber-red line-through opacity-75' : ''}>
          {prefix}
          {value}
        </span>
      </div>
    </motion.div>
  );
}

function LandingPage() {
  const prefersReducedMotion = useReducedMotion();
  const stagger = prefersReducedMotion
    ? {}
    : { transition: { staggerChildren: 0.09, delayChildren: 0.05 } };

  return (
    <div className="relative overflow-hidden bg-[radial-gradient(circle_at_top,rgba(212,18,18,0.06),transparent_28%),linear-gradient(180deg,#ffffff_0%,#fbfbfb_100%)] text-[#111]">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(17,17,17,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(17,17,17,0.03)_1px,transparent_1px)] bg-[size:64px_64px] opacity-40" />

      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-8 sm:px-6 lg:px-8 lg:pb-28 lg:pt-10">
        <header className="rounded-full border border-gray-150 bg-white/85 px-8 py-3.5 shadow-[0_12px_40px_rgba(0,0,0,0.04)] backdrop-blur-md sticky top-6 z-50 transition-all duration-300">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <BrandLockup />

            <div className="flex flex-wrap items-center gap-6 lg:gap-8">
              <a
                href="#why"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#why')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-[0.82rem] font-bold text-gray-500 hover:text-[#111] uppercase tracking-[0.15em] transition-all relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-cyber-red hover:after:w-full after:transition-all after:duration-300"
              >
                Why join?
              </a>
              <a
                href="#pricing"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#pricing')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-[0.82rem] font-bold text-gray-500 hover:text-[#111] uppercase tracking-[0.15em] transition-all relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-cyber-red hover:after:w-full after:transition-all after:duration-300"
              >
                Offer & pricing
              </a>
              <Link to="/enroll" className="no-underline">
                <motion.span
                  whileHover={{ scale: 1.04, boxShadow: '0 0 20px rgba(212, 18, 18, 0.35)', backgroundColor: '#d41212' }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center bg-black text-white px-7 py-3 rounded-full text-xs font-black uppercase tracking-widest border border-cyber-red/20 transition-all duration-300 cursor-pointer"
                >
                  Enroll Now
                </motion.span>
              </Link>
            </div>
          </div>
        </header>

        <section className="grid gap-16 py-14 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-20 lg:py-20">
          <motion.div
            className="space-y-10"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <Reveal>
              <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-[#e5e5e5] bg-white px-4 py-3 shadow-[0_10px_24px_rgba(0,0,0,0.04)]">
                <ShieldLockIcon className="h-5 w-5 text-cyber-red" />
                <span className="max-w-full text-[0.8rem] font-bold leading-[1.35] uppercase tracking-[0.16em] text-[#444]">
                  LEARN WITH <span className="text-cyber-red">CYBER J</span><span className="cyber-ai-glow">AI</span> / FROM ZERO TO{' '}
                  <span className="text-cyber-red">CYBER HERO</span>
                </span>
              </div>
            </Reveal>

            <Reveal>
              <div className="max-w-4xl text-left">
                <h1 className="font-display text-[clamp(2.85rem,6.2vw,5.8rem)] leading-[1.1] font-black uppercase tracking-[-0.045em] text-[#101010]">
                  <span className="block">CYBERSECURITY</span>
                  <span className="block text-cyber-red">
                    WITH <span className="cyber-ai-glow relative inline-block px-1">AI</span>
                  </span>
                </h1>
              </div>
            </Reveal>

            <Reveal>
              <p className="max-w-2xl text-[1.06rem] text-left leading-8 text-[#4a4a4a] sm:text-[1.15rem]">
                Master the skills. Build the future. <span className="font-semibold text-cyber-red">Be unstoppable.</span>
              </p>
            </Reveal>

            <Reveal>
              <div className="flex flex-col gap-4 sm:flex-row">
                <CTAButton to="/enroll" variant="solid">
                  <span>Secure your seat now!</span>
                </CTAButton>
                <CTAButton href="#why" variant="ghost">
                  <span>See why you should join</span>
                </CTAButton>
              </div>
            </Reveal>

            <Reveal>
              <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {heroStats.map((card) => (
                  <StatCard
                    key={card.label}
                    label={card.label}
                    value={card.value}
                    prefix={card.prefix}
                    struck={card.struck}
                    tone={card.tone}
                  />
                ))}
              </div>
            </Reveal>
          </motion.div>

          <Reveal delay={0.08} className="lg:pl-4">
            <HeroPreview />
          </Reveal>
        </section>

        <section id="why" className="py-24 border-t border-[#eee] bg-[#fafafa]/30">
          <Reveal>
            <SectionHeading
              center
              eyebrow="Why you should join?"
              title={<>A premium blueprint to <span className="text-cyber-red">job-ready</span> excellence</>}
              description="Gain the elite skillsets required to defend, detect, and dominate in the digital age."
            />
          </Reveal>

          <ExperienceCarousel />
        </section>

        <section id="pricing" className="py-24 border-t border-gray-100 bg-gray-50/20">
          <Reveal>
            <SectionHeading
              center
              eyebrow="Exclusive Summer Offer"
              title={<>Secure your slot for <span className="text-cyber-red">₹2,000</span></>}
              description="Master Red-Teaming, AI Security Auditing, and Cybersecurity foundations. Join the cohort today."
            />
          </Reveal>
          
          <Reveal delay={0.15}>
            <div className="mt-16 max-w-lg mx-auto bg-white rounded-3xl border border-gray-100 shadow-[0_15px_50px_rgba(0,0,0,0.03)] p-8 text-center relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-cyber-red/5 rounded-bl-full pointer-events-none transition-transform duration-500 group-hover:scale-110" />
              <span className="text-[0.65rem] font-black uppercase tracking-widest text-cyber-red bg-cyber-red/5 border border-cyber-red/10 px-3 py-1 rounded-full">
                COHORT LIMITED SPECIAL
              </span>
              <div className="my-8">
                <span className="text-[0.95rem] font-bold text-gray-400 line-through mr-3">₹5,000</span>
                <span className="text-6xl font-display font-black text-black">₹2,000</span>
                <p className="text-[0.7rem] font-black text-green-500 mt-2 uppercase tracking-wider">● Save 60% with limited coupon</p>
              </div>
              <ul className="text-left space-y-4 mb-8 text-sm text-gray-500 border-t border-b border-gray-100 py-6">
                <li className="flex items-center gap-3">
                  <div className="h-5 w-5 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center shrink-0">
                    <CheckIcon className="h-3 w-3" />
                  </div>
                  <span>15+ interactive red-teaming lab assignments</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-5 w-5 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center shrink-0">
                    <CheckIcon className="h-3 w-3" />
                  </div>
                  <span>AI threat intelligence scanning simulation tools</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-5 w-5 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center shrink-0">
                    <CheckIcon className="h-3 w-3" />
                  </div>
                  <span>Lifetime Discord network study groups access</span>
                </li>
              </ul>
              
              <Link to="/enroll" className="block">
                <motion.span
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full inline-flex items-center justify-center bg-cyber-red text-white py-4 rounded-2xl text-sm font-black uppercase tracking-widest shadow-lg hover:bg-cyber-redDark transition-colors"
                >
                  Enroll Now & Checkout
                </motion.span>
              </Link>
            </div>
          </Reveal>
        </section>

        <FooterBanner />



      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/enroll" element={<EnrollmentPage />} />
      </Routes>
    </Router>
  );
}

