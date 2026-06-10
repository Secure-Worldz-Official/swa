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
import Footer from './components/Footer';

function BrandLockup() {
  return (
    <Link to="/" className="flex items-center gap-3">
      <img
        src={brandLogo}
        alt="Secure Worldz Brand Logo"
        className="h-11 w-11 shrink-0 rounded-xl border border-white/10 object-contain shadow-[0_10px_28px_rgba(0,0,0,0.35)]"
      />
      <div className="space-y-0.5 text-left">
        <p className="font-display text-[0.9rem] leading-[1.18] font-black uppercase tracking-[0.12em] text-white">
          LEARN WITH <span className="text-cyber-red">CYBER J</span><span className="cyber-ai-glow">AI</span>
        </p>
        <p className="text-[0.66rem] font-semibold leading-[1.35] uppercase tracking-[0.22em] text-white/52">
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
  const navLinks = [
    { label: 'Courses', href: '#pricing' },
    { label: 'About Us', href: '#why' },
    { label: 'Contact', href: '#footer' },
    { label: 'Certificate Verification', href: '#why' },
  ];

  return (
    <div className="relative overflow-hidden bg-[#050505] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_8%_34%,rgba(212,18,18,0.18),transparent_29%),radial-gradient(circle_at_82%_15%,rgba(212,18,18,0.11),transparent_28%),linear-gradient(180deg,#171717_0%,#070707_46%,#050505_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:68px_68px] opacity-35" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/70 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 pb-0 pt-5 sm:px-6 lg:px-8 lg:pt-7">
        <header className="sticky top-4 z-50 rounded-[28px] border border-white/10 bg-[#151515]/88 px-4 py-3 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-all duration-300 sm:px-6 lg:rounded-full lg:px-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <BrandLockup />

            <nav className="flex flex-wrap items-center gap-x-5 gap-y-3 lg:ml-auto lg:justify-end lg:gap-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="relative py-1 text-[0.78rem] font-bold uppercase tracking-[0.14em] text-white/58 transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-cyber-red after:transition-all after:duration-300 hover:text-white hover:after:w-full"
                >
                  {link.label}
                </a>
              ))}
              <Link to="/enroll" className="no-underline">
                <motion.span
                  whileHover={{ scale: 1.04, boxShadow: '0 0 28px rgba(212, 18, 18, 0.42)', backgroundColor: '#d41212' }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex cursor-pointer items-center justify-center rounded-full border border-cyber-red/50 bg-cyber-red px-6 py-3 text-xs font-black uppercase tracking-widest text-white transition-all duration-300"
                >
                  Sign in
                </motion.span>
              </Link>
            </nav>
          </div>
        </header>

        <section className="grid min-h-[calc(100vh-118px)] gap-12 py-16 sm:py-20 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16 lg:py-24">
          <motion.div
            className="mx-auto max-w-2xl space-y-8 text-center lg:mx-0 lg:text-left"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <Reveal>
              <div className="inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-cyber-red/25 bg-cyber-red/10 px-4 py-3 shadow-[0_12px_36px_rgba(212,18,18,0.12)] backdrop-blur">
                <ShieldLockIcon className="h-5 w-5 text-cyber-red" />
                <span className="max-w-full text-[0.76rem] font-bold leading-[1.35] uppercase tracking-[0.16em] text-white/74">
                  Beginner-friendly cybersecurity training
                </span>
              </div>
            </Reveal>

            <Reveal>
              <div>
                <h1 className="font-display text-[clamp(2.65rem,6vw,5.9rem)] font-black uppercase leading-[1.02] tracking-[-0.035em] text-white">
                  <span className="block">Master</span>
                  <span className="block text-cyber-red">Cybersecurity</span>
                  <span className="block">With AI</span>
                </h1>
              </div>
            </Reveal>

            <Reveal>
              <p className="mx-auto max-w-xl text-[1.02rem] leading-8 text-white/68 sm:text-[1.14rem] lg:mx-0">
                Build real defensive skills, understand attack patterns, and move from zero to cyber hero with a sharp practical roadmap.
              </p>
            </Reveal>

            <Reveal>
              <div className="flex flex-col items-center gap-4 sm:flex-row lg:items-start">
                <CTAButton to="/enroll" variant="solid">
                  <span>GET STARTED</span>
                </CTAButton>
                <p className="max-w-[18rem] text-center text-[0.82rem] font-semibold uppercase tracking-[0.16em] text-white/42 sm:text-left">
                  Limited seats for the next live cohort
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div className="grid gap-3 pt-2 text-left sm:grid-cols-3">
                {['Hands-on labs', 'AI security tools', 'Career-ready basics'].map((item) => (
                  <div key={item} className="border-l-2 border-cyber-red bg-white/[0.035] px-4 py-3">
                    <p className="text-[0.76rem] font-black uppercase tracking-[0.14em] text-white/76">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </motion.div>

          <Reveal delay={0.08} className="lg:pl-2">
            <HeroPreview />
          </Reveal>
        </section>
      </div>

      <div className="relative bg-[linear-gradient(180deg,#ffffff_0%,#fbfbfb_100%)] text-[#111]">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(17,17,17,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(17,17,17,0.03)_1px,transparent_1px)] bg-[size:64px_64px] opacity-40" />

        <div className="relative mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
        <section id="why" className="border-t border-[#eee] bg-[#fafafa]/30 py-24">
          <Reveal>
            <SectionHeading
              center
              eyebrow="Why you should join?"
              title={<>A practical path to <span className="text-cyber-red">job ready</span> cyber skills</>}
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
        <div id="footer">
          <Footer />
        </div>
        </div>
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

