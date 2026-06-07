import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';
import {
  CalendarIcon,
  ClockIcon,
  LockSealIcon,
  ShieldLockIcon,
} from './components/Icons';
import { HeroPreview, ReasonCard, FooterBanner } from './components/PosterBlocks';
import Reveal from './components/Reveal';
import {
  footerFeatures,
  heroStats,
  launchDate,
  reasonCards,
  seatingLine,
} from './data/content';
import RegistrationForm from './components/RegistrationForm';
import AdminPanel from './components/AdminPanel';

function BrandLockup() {
  return (
    <Link to="/" className="flex items-start gap-3">
      <ShieldLockIcon className="mt-0.5 h-11 w-11 shrink-0 text-cyber-red" />
      <div className="space-y-1.5 text-left">
        <p className="font-display text-[0.92rem] leading-[1.18] font-black uppercase tracking-[0.12em] text-[#111]">
          LEARN WITH <span className="text-cyber-red">CYBER JAI</span>
        </p>
        <p className="text-[0.78rem] font-semibold leading-[1.35] uppercase tracking-[0.22em] text-[#5a5a5a]">
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

function CTAButton({ children, variant = 'solid', href = '#' }) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-[0.95rem] font-bold uppercase tracking-widest transition-all';
  const styles =
    variant === 'solid'
      ? 'bg-cyber-red text-white shadow-[0_14px_30px_rgba(212,18,18,0.22)] hover:bg-cyber-redDark hover:shadow-[0_20px_40px_rgba(212,18,18,0.32)] active:scale-[0.98]'
      : 'border border-[#d7d7d7] bg-white text-[#111] hover:border-[#bbb] hover:bg-[#fafafa] active:scale-[0.98]';

  const handleClick = (e) => {
    if (href.startsWith('#')) {
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
      container: 'border-[#e3e3e3] bg-white text-[#111]',
      label: 'text-[#6f6f6f]',
      value: 'text-[#111]',
    },
    red: {
      container: 'border-cyber-red bg-cyber-red text-white',
      label: 'text-white/80',
      value: 'text-white',
    },
    dark: {
      container: 'border-[#101010] bg-[#101010] text-white',
      label: 'text-white/70',
      value: 'text-white',
    },
  };

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className={`rounded-[24px] border px-5 py-5 shadow-[0_12px_28px_rgba(0,0,0,0.06)] ${styles[tone].container}`}
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
        <header className="rounded-[30px] border border-[#e8e8e8] bg-white/90 px-5 py-4 shadow-[0_12px_34px_rgba(0,0,0,0.05)] backdrop-blur-sm sticky top-6 z-50">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <BrandLockup />

            <div className="flex flex-wrap items-center gap-2">
              <a
                href="#why"
                className="rounded-full border border-[#e0e0e0] bg-white px-4 py-2 text-[0.85rem] font-semibold text-[#333] transition hover:border-[#cfcfcf] hover:bg-[#fafafa]"
              >
                Why join?
              </a>
              <a
                href="#pricing"
                className="rounded-full border border-[#e0e0e0] bg-white px-4 py-2 text-[0.85rem] font-semibold text-[#333] transition hover:border-[#cfcfcf] hover:bg-[#fafafa]"
              >
                Offer & pricing
              </a>
              <CTAButton href="#registration" variant="solid">
                Enroll Now
              </CTAButton>
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
                  LEARN WITH <span className="text-cyber-red">CYBER JAI</span> / FROM ZERO TO{' '}
                  <span className="text-cyber-red">CYBER HERO</span>
                </span>
              </div>
            </Reveal>

            <Reveal>
              <div className="max-w-4xl text-left">
                <h1 className="font-display text-[clamp(2.85rem,6vw,5.6rem)] leading-[1.14] font-black uppercase tracking-[-0.045em] text-[#101010]">
                  <span className="block">C Y B E R S E C U R I T Y</span>
                  <span className="block text-cyber-red">W I T H&nbsp;&nbsp;&nbsp; A I</span>
                  <span className="block">D E F E N D, D E T E C T</span>
                  <span className="block">
                    &amp; <span className="text-cyber-red">D O M I N A T E</span>
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
                <CTAButton href="#registration" variant="solid">
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

        <section id="why" className="py-20 border-t border-[#eee]">
          <Reveal>
            <SectionHeading
              center
              eyebrow="Why you should join?"
              title={<>A practical path to <span className="text-cyber-red">job-ready</span> cyber skills</>}
              description={reasonCards.map(r => r.description).join(' ')}
            />
          </Reveal>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {reasonCards.map((card, index) => (
              <Reveal key={card.number} delay={index * 0.1}>
                <ReasonCard {...card} />
              </Reveal>
            ))}
          </div>
        </section>

        <section id="pricing" className="py-20 border-t border-[#eee]">
          <Reveal>
            <SectionHeading
              center
              eyebrow="Exclusive Summer Offer"
              title={<>Enroll today and <span className="text-cyber-red">save 60%</span></>}
              description="Limited seats available for the upcoming cohort. Scan, pay, and start your journey."
            />
          </Reveal>
          <div className="mt-16">
            <RegistrationForm />
          </div>
        </section>

        <FooterBanner />

        <div className="mt-20 text-center pb-10">
          <Link to="/admin" className="text-[0.65rem] font-black uppercase tracking-[0.3em] text-gray-300 hover:text-cyber-red transition-colors">
            Security Infrastructure Management Access
          </Link>
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
      </Routes>
    </Router>
  );
}

