import { useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate, useParams } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { CheckIcon, ShieldLockIcon } from './components/Icons';
import { HeroPreview, FooterBanner } from './components/PosterBlocks';
import Reveal from './components/Reveal';
import brandLogo from './assets/brand_logo.jpg';
import { courses, courseMap } from './data/courses';
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
        <p className="font-display text-[0.9rem] font-black uppercase leading-[1.18] tracking-[0.12em] text-white">
          LEARN WITH <span className="text-cyber-red">CYBER J</span><span className="cyber-ai-glow">AI</span>
        </p>
        <p className="text-[0.66rem] font-semibold uppercase leading-[1.35] tracking-[0.22em] text-white/52">
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
      <h2 className="mt-4 font-display text-[clamp(1.8rem,4vw,3.4rem)] font-black uppercase leading-[1.2] tracking-[-0.035em] text-[#111]">
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
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.a href={href} onClick={handleClick} whileHover={{ y: -2 }} className={`${base} ${styles}`}>
      {children}
    </motion.a>
  );
}

function CourseDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handlePointerDown = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div
      ref={dropdownRef}
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <motion.button
        type="button"
        onClick={() => setIsOpen((value) => !value)}
        aria-haspopup="menu"
        aria-expanded={isOpen}
        whileHover={{ scale: 1.03, boxShadow: '0 0 28px rgba(212, 18, 18, 0.38)' }}
        whileTap={{ scale: 0.98 }}
        className="inline-flex cursor-pointer items-center justify-center gap-3 rounded-full border border-cyber-red/50 bg-cyber-red px-6 py-3 text-xs font-black uppercase tracking-widest text-white transition-all duration-300"
      >
        Explore Courses
        <svg className={`h-4 w-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path d="M5 8l5 5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.button>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 top-[calc(100%+14px)] z-50 w-[min(88vw,430px)] overflow-hidden rounded-[28px] border border-white/12 bg-[#111111]/88 p-3 shadow-[0_28px_90px_rgba(0,0,0,0.55)] backdrop-blur-2xl"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,18,18,0.18),transparent_38%)]" />
            <div className="relative space-y-2">
              {courses.map((course) => (
                <Link
                  key={course.id}
                  to={`/courses/${course.id}`}
                  onClick={() => setIsOpen(false)}
                  className="group block rounded-3xl border border-white/8 bg-white/[0.035] p-4 transition-all duration-300 hover:border-cyber-red/40 hover:bg-white/[0.07]"
                >
                  <p className="text-[0.68rem] font-black uppercase tracking-[0.18em] text-cyber-red">
                    {course.eyebrow}
                  </p>
                  <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="font-display text-lg font-black uppercase leading-tight text-white">
                        {course.title}
                      </h3>
                      <p className="mt-2 line-clamp-2 text-sm leading-6 text-white/58">
                        {course.hook}
                      </p>
                    </div>
                    <span className="shrink-0 rounded-full border border-cyber-red/30 px-3 py-1 text-[0.62rem] font-black uppercase tracking-[0.12em] text-white/70 transition-colors group-hover:bg-cyber-red group-hover:text-white">
                      View Course Details
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

function SiteNavbar() {
  const navLinks = [
    { label: 'About Us', href: '#why' },
    { label: 'Contact', href: '#footer' },
    { label: 'Certificate Verification', href: '#why' },
  ];

  const scrollToSection = (href) => {
    if (window.location.pathname !== '/') {
      window.location.href = `/${href}`;
      return;
    }
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-4 z-50 rounded-[28px] border border-white/10 bg-[#151515]/88 px-4 py-3 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-all duration-300 sm:px-6 lg:rounded-full lg:px-8">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <BrandLockup />

        <nav className="flex flex-wrap items-center gap-x-5 gap-y-3 lg:ml-auto lg:justify-end lg:gap-x-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              type="button"
              onClick={() => scrollToSection(link.href)}
              className="relative py-1 text-left text-[0.78rem] font-bold uppercase tracking-[0.14em] text-white/58 transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-cyber-red after:transition-all after:duration-300 hover:text-white hover:after:w-full"
            >
              {link.label}
            </button>
          ))}
          <CourseDropdown />
        </nav>
      </div>
    </header>
  );
}

function LandingPage() {
  const prefersReducedMotion = useReducedMotion();
  const stagger = prefersReducedMotion
    ? {}
    : { transition: { staggerChildren: 0.09, delayChildren: 0.05 } };

  return (
    <div className="relative overflow-hidden bg-[#050505] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_8%_34%,rgba(212,18,18,0.18),transparent_29%),radial-gradient(circle_at_82%_15%,rgba(212,18,18,0.11),transparent_28%),linear-gradient(180deg,#171717_0%,#070707_46%,#050505_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:68px_68px] opacity-35" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/70 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 pb-0 pt-5 sm:px-6 lg:px-8 lg:pt-7">
        <SiteNavbar />

        <section className="grid min-h-[calc(100vh-118px)] gap-12 py-16 sm:py-20 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16 lg:py-24">
          <motion.div className="mx-auto max-w-2xl space-y-8 text-center lg:mx-0 lg:text-left" initial="hidden" animate="visible" variants={stagger}>
            <Reveal>
              <div className="inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-cyber-red/25 bg-cyber-red/10 px-4 py-3 shadow-[0_12px_36px_rgba(212,18,18,0.12)] backdrop-blur">
                <ShieldLockIcon className="h-5 w-5 text-cyber-red" />
                <span className="max-w-full text-[0.76rem] font-bold uppercase leading-[1.35] tracking-[0.16em] text-white/74">
                  Beginner friendly cybersecurity training
                </span>
              </div>
            </Reveal>

            <Reveal>
              <h1 className="font-display text-[clamp(2.65rem,6vw,5.9rem)] font-black uppercase leading-[1.02] tracking-[-0.035em] text-white">
                <span className="block">Master</span>
                <span className="block text-cyber-red">Cybersecurity</span>
                <span className="block">With AI</span>
              </h1>
            </Reveal>

            <Reveal>
              <p className="mx-auto max-w-xl text-[1.02rem] leading-8 text-white/68 sm:text-[1.14rem] lg:mx-0">
                Build real defensive skills, understand attack patterns, and move from zero to cyber hero with a sharp practical roadmap.
              </p>
            </Reveal>

            <Reveal>
              <div className="flex flex-col items-center gap-4 sm:flex-row lg:items-start">
                <CTAButton to="/courses/cybersecurity" variant="solid">
                  <span>GET STARTED</span>
                </CTAButton>
                <p className="max-w-[18rem] text-center text-[0.82rem] font-semibold uppercase tracking-[0.16em] text-white/42 sm:text-left">
                  Limited seats for the next live cohort
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div className="grid gap-3 pt-2 text-left sm:grid-cols-3">
                {['Hands on labs', 'AI security tools', 'Career ready basics'].map((item) => (
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

          <section id="pricing" className="border-t border-gray-100 bg-gray-50/20 py-24">
            <Reveal>
              <SectionHeading
                center
                eyebrow="Explore every learning path"
                title={<>Choose the course that matches <span className="text-cyber-red">your next move</span></>}
                description="Each course is built with clear guidance, practical assignments, and portfolio friendly outcomes."
              />
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-16 grid gap-6 lg:grid-cols-3">
                {courses.map((course) => (
                  <article key={course.id} className="group relative overflow-hidden rounded-[28px] border border-gray-100 bg-white p-7 shadow-[0_15px_50px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-cyber-red/25 hover:shadow-[0_22px_65px_rgba(0,0,0,0.08)]">
                    <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-cyber-red/5 transition-transform duration-500 group-hover:scale-110" />
                    <p className="text-[0.65rem] font-black uppercase tracking-widest text-cyber-red">
                      {course.eyebrow}
                    </p>
                    <h3 className="mt-5 font-display text-2xl font-black uppercase leading-tight text-black">
                      {course.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-gray-500">
                      {course.summary}
                    </p>
                    <div className="my-6 rounded-2xl border border-cyber-red/10 bg-cyber-red/5 px-4 py-3">
                      <p className="text-sm font-black leading-7 text-cyber-red">
                        {course.pricing}
                      </p>
                    </div>
                    <Link
                      to={`/courses/${course.id}`}
                      className="inline-flex w-full items-center justify-center rounded-2xl bg-black px-5 py-4 text-sm font-black uppercase tracking-widest text-white shadow-lg transition-all duration-300 hover:bg-cyber-red"
                    >
                      View Course Details
                    </Link>
                  </article>
                ))}
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

function CourseDetailPage() {
  const { courseId } = useParams();
  const course = courseMap[courseId];

  if (!course) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050505] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(212,18,18,0.18),transparent_28%),radial-gradient(circle_at_88%_12%,rgba(212,18,18,0.11),transparent_30%),linear-gradient(180deg,#151515_0%,#070707_52%,#050505_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:68px_68px] opacity-30" />

      <main className="relative mx-auto max-w-7xl px-4 pb-20 pt-5 sm:px-6 lg:px-8 lg:pt-7">
        <SiteNavbar />

        <section className="grid gap-10 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-14 lg:py-20">
          <div>
            <Link
              to="/"
              className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-[0.72rem] font-black uppercase tracking-[0.16em] text-white/64 transition-all duration-300 hover:border-cyber-red/50 hover:text-white"
            >
              Back to Home
            </Link>

            <p className="mt-10 text-[0.75rem] font-black uppercase tracking-[0.22em] text-cyber-red">
              {course.eyebrow}
            </p>
            <h1 className="mt-4 font-display text-[clamp(2.6rem,6vw,5.7rem)] font-black uppercase leading-[1.02] text-white">
              {course.title}
            </h1>
            <p className="mt-7 max-w-3xl text-[1.1rem] leading-9 text-white/68">
              {course.hook}
            </p>

            <div className="mt-8 rounded-[28px] border border-white/10 bg-white/[0.04] p-6">
              <p className="text-[0.68rem] font-black uppercase tracking-[0.2em] text-cyber-red">
                Overview
              </p>
              <p className="mt-3 text-sm leading-8 text-white/68 sm:text-[1rem]">
                {course.summary}
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[24px] border border-cyber-red/25 bg-cyber-red/10 p-5">
                <p className="text-[0.68rem] font-black uppercase tracking-[0.18em] text-white/48">
                  Pricing
                </p>
                <p className="mt-3 text-lg font-black leading-8 text-white">
                  {course.pricing}
                </p>
              </div>
              <div className="rounded-[24px] border border-white/10 bg-white/[0.045] p-5">
                <p className="text-[0.68rem] font-black uppercase tracking-[0.18em] text-white/48">
                  Duration
                </p>
                <p className="mt-3 text-lg font-black leading-8 text-white">
                  {course.duration}
                </p>
                <p className="mt-2 text-sm leading-6 text-white/58">
                  {course.schedule}
                </p>
              </div>
            </div>
          </div>

          <aside className="rounded-[34px] border border-white/10 bg-white/[0.045] p-6 shadow-[0_32px_90px_rgba(0,0,0,0.35)] backdrop-blur-xl lg:sticky lg:top-28">
            <p className="text-[0.7rem] font-black uppercase tracking-[0.2em] text-cyber-red">
              What you will walk away with
            </p>
            <ul className="mt-6 space-y-4">
              {course.outcomes.map((outcome) => (
                <li key={outcome} className="flex gap-3 rounded-2xl border border-white/8 bg-black/24 p-4">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyber-red text-white">
                    <CheckIcon className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm font-semibold leading-7 text-white/72">
                    {outcome}
                  </span>
                </li>
              ))}
            </ul>
            <Link
              to="/enroll"
              className="mt-7 inline-flex w-full items-center justify-center rounded-2xl bg-cyber-red px-6 py-4 text-sm font-black uppercase tracking-widest text-white shadow-[0_18px_42px_rgba(212,18,18,0.28)] transition-all duration-300 hover:bg-cyber-redDark"
            >
              Get Started
            </Link>
          </aside>
        </section>

        <section className="grid gap-6 pb-16 lg:grid-cols-3">
          {course.highlights.map((highlight) => (
            <article key={highlight.title} className="rounded-[30px] border border-white/10 bg-white/[0.045] p-7 backdrop-blur transition-all duration-300 hover:border-cyber-red/35 hover:bg-white/[0.065]">
              <p className="text-[0.68rem] font-black uppercase tracking-[0.18em] text-cyber-red">
                Detail
              </p>
              <h2 className="mt-4 font-display text-2xl font-black uppercase leading-tight text-white">
                {highlight.title}
              </h2>
              <p className="mt-5 text-sm leading-7 text-white/62">
                {highlight.body}
              </p>
            </article>
          ))}
        </section>
      </main>
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
        <Route path="/courses/:courseId" element={<CourseDetailPage />} />
      </Routes>
    </Router>
  );
}
