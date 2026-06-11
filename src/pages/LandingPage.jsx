import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ShieldLockIcon } from '../components/Icons';
import { FooterBanner, HeroPreview } from '../components/PosterBlocks';
import Reveal from '../components/Reveal';
import SiteNavbar from '../components/SiteNavbar';
import ExperienceCarousel from '../components/ExperienceCarousel';
import Footer from '../components/Footer';

function SectionHeading({ eyebrow, title, description, center = false }) {
  return (
    <div className={center ? 'mx-auto max-w-4xl text-center' : 'max-w-4xl text-left'}>
      <p style={{ fontSize: 'var(--text-xs)' }} className="font-bold uppercase tracking-[0.24em] text-cyber-red">
        {eyebrow}
      </p>
      <h2
        className="mt-4 font-display font-black uppercase leading-[1.2] tracking-[-0.035em] text-[#111]"
        style={{ fontSize: 'var(--text-4xl)' }}
      >
        {title}
      </h2>
      {description ? (
        <p
          className="mt-5 leading-8 text-[#4b4b4b]"
          style={{ fontSize: 'var(--text-base)' }}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

function CTAButton({ children, variant = 'solid', to }) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-full font-bold uppercase tracking-widest transition-all'
    + ' px-[clamp(1.25rem,3vw,2rem)] py-[clamp(0.75rem,1.5vw,1rem)]'
    + ' text-[length:var(--text-sm)]';
  const styles =
    variant === 'solid'
      ? 'bg-cyber-red text-white shadow-[0_14px_30px_rgba(212,18,18,0.22)] hover:bg-cyber-redDark hover:shadow-[0_20px_40px_rgba(212,18,18,0.32)] active:scale-[0.98]'
      : 'border border-[#d7d7d7] bg-white text-[#111] hover:border-[#bbb] hover:bg-[#fafafa] active:scale-[0.98]';

  return (
    <motion.div whileHover={{ y: -2 }} className="inline-block">
      <Link to={to} className={`${base} ${styles}`}>
        {children}
      </Link>
    </motion.div>
  );
}

/**
 * GET STARTED — smooth-scroll anchor.
 * Clicking scrolls to the #why section with no page navigation or overlay.
 * scroll-behavior: smooth is already set on <html> in index.css.
 */
function GetStartedButton() {
  function handleClick(e) {
    e.preventDefault();
    const target = document.getElementById('why');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      style={{ fontSize: 'var(--text-sm)' }}
      className="group inline-flex items-center gap-3 rounded-full bg-cyber-red font-black uppercase tracking-[0.18em] text-white shadow-[0_14px_30px_rgba(212,18,18,0.28)] transition-all duration-300 hover:bg-cyber-redDark hover:shadow-[0_20px_40px_rgba(212,18,18,0.36)] active:scale-[0.98] px-[clamp(1.25rem,3vw,2rem)] py-[clamp(0.75rem,1.5vw,1rem)]"
      aria-label="Scroll to Why You Should Join section"
    >
      <span>GET STARTED</span>
      <span className="inline-block translate-x-0 transition-transform duration-300 group-hover:translate-x-2">
        &darr;
      </span>
    </button>
  );
}

export default function LandingPage() {
  const prefersReducedMotion = useReducedMotion();
  const stagger = prefersReducedMotion
    ? {}
    : { transition: { staggerChildren: 0.09, delayChildren: 0.05 } };

  return (
    <div className="relative w-full overflow-x-hidden bg-[#050508] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_8%_34%,rgba(212,18,18,0.18),transparent_29%),radial-gradient(circle_at_82%_15%,rgba(212,18,18,0.11),transparent_28%),linear-gradient(180deg,#171717_0%,#070707_46%,#050508_100%)] animate-pulse" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:68px_68px] opacity-35" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/70 to-transparent" />
      <div className="pointer-events-none absolute left-[-8rem] top-24 h-[32rem] w-[32rem] rounded-full bg-red-900/10 blur-[120px]" />
      <div className="pointer-events-none absolute right-[-10rem] top-44 h-[36rem] w-[36rem] rounded-full bg-red-900/10 blur-[120px]" />

      {/* Glitch overlay removed — GET STARTED now smooth-scrolls to #why */

      {/*
       * fluid-container: max-width 90rem, clamp() horizontal padding.
       * This caps the content on 2K/4K while padding scales with viewport.
       */}
      <div className="relative fluid-container pb-0 pt-5 lg:pt-7">
        <SiteNavbar />

        {/*
         * Hero grid:
         *   • 1 column below ~900px (flex-col, centered)
         *   • 2-column split above 900px via responsive grid
         *   • min-height uses dvh (dynamic viewport height) with a rem fallback
         *     so the hero always fills the screen without fixed px values.
         * Gap scales with clamp() to stay proportional.
         */}
        <section
          className="grid grid-cols-1 gap-[clamp(2rem,5vw,4rem)] py-[clamp(3rem,7vh,7rem)] lg:grid-cols-[0.95fr_1.05fr] lg:items-center"
          style={{ minHeight: 'calc(100dvh - 118px)' }}
        >
          <motion.div
            className="mx-auto w-full max-w-2xl space-y-[clamp(1.25rem,2.5vw,2rem)] text-center lg:mx-0 lg:text-left"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <Reveal>
              <div className="inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-cyber-red/25 bg-cyber-red/10 px-4 py-3 shadow-[0_12px_36px_rgba(212,18,18,0.12)] backdrop-blur">
                <ShieldLockIcon className="h-5 w-5 text-cyber-red shrink-0" />
                <span style={{ fontSize: 'var(--text-xs)' }} className="font-bold uppercase leading-[1.35] tracking-[0.16em] text-white/74">
                  Beginner friendly cybersecurity training
                </span>
              </div>
            </Reveal>

            {/*
             * hero-title class uses --text-hero: clamp(2.8rem, 1.7rem + 4.8vw, 5.5rem)
             * That's ~45px on 320px mobile → ~88px on 2560px 4K.
             * No more sm:/md:/lg: breakpoint jumps.
             */}
            <Reveal>
              <h1 className="hero-title font-display font-black text-white">
                <span className="block">Master</span>
                <span className="block text-cyber-red">Cybersecurity</span>
                <span className="block">With AI</span>
              </h1>
            </Reveal>

            <Reveal>
              <p
                className="mx-auto max-w-xl leading-8 text-white/68 lg:mx-0"
                style={{ fontSize: 'var(--text-base)' }}
              >
                Build real defensive skills, understand attack patterns, and move from zero to cyber hero with a sharp practical roadmap.
              </p>
            </Reveal>

            <Reveal>
              {/*
               * Minimal CTA block — just the button + a single understated
               * micro-copy line. The noisy slogan pills are removed so the
               * hero breathes and the eye lands cleanly on the button.
               */}
              <div className="flex flex-col items-center gap-4 text-center">
                <GetStartedButton />

                {/* Subtle scroll hint — replaces the cluttered pill rows */}
                <p
                  style={{ fontSize: 'var(--text-xs)' }}
                  className="flex items-center gap-2 font-semibold uppercase tracking-[0.18em] text-white/35"
                >
                  <span className="inline-block h-px w-6 bg-white/20" />
                  Limited seats · Next live cohort
                  <span className="inline-block h-px w-6 bg-white/20" />
                </p>
              </div>
            </Reveal>
          </motion.div>

          {/*
           * HeroPreview right column.
           * lg:pl-2 keeps a small optical gap between text and artwork.
           * max-width on HeroPreview itself prevents the image from
           * ballooning on ultra-wide via its internal max-w-[640px].
           */}
          <Reveal delay={0.08} className="w-full lg:pl-2">
            <HeroPreview />
          </Reveal>
        </section>
      </div>

      <div className="relative bg-[linear-gradient(180deg,#ffffff_0%,#fbfbfb_100%)] text-[#111]">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(17,17,17,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(17,17,17,0.03)_1px,transparent_1px)] bg-[size:64px_64px] opacity-40" />

        {/* fluid-container also used for light content sections */}
        <div className="relative fluid-container pb-[clamp(4rem,8vh,7rem)]">
          <section id="why" className="border-t border-[#eee] bg-[#fafafa]/30 py-[clamp(3.5rem,7vw,6rem)]">
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

          <section className="border-t border-gray-100 bg-gray-50/20 py-[clamp(3.5rem,7vw,6rem)]">
            <Reveal>
              <SectionHeading
                center
                eyebrow="Courses"
                title={<>Browse the full <span className="text-cyber-red">course catalog</span></>}
                description="Choose a track, then open its dedicated page for pricing, schedule, certificate, and hands on specifics."
              />
            </Reveal>

            <div className="mt-12 flex justify-center">
              <CTAButton to="/courses" variant="solid">
                <span>View Course Catalog</span>
              </CTAButton>
            </div>
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
