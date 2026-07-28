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
      <p
        style={{ fontSize: 'var(--text-xs)', fontFamily: 'var(--font-heading)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.22em', color: '#000000' }}
      >
        {eyebrow}
      </p>
      <h2
        style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, textTransform: 'uppercase', lineHeight: 1.15, letterSpacing: '-0.04em', color: '#000000', marginTop: '1rem', fontSize: 'var(--text-4xl)' }}
      >
        {title}
      </h2>
      {description ? (
        <p
          style={{ marginTop: '1.25rem', lineHeight: 1.8, color: '#444444', fontSize: 'var(--text-base)' }}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

function CTAButton({ children, variant = 'solid', to }) {
  const solidStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    background: '#16a34a',
    color: '#ffffff',
    border: '4px solid #000000',
    boxShadow: '6px 6px 0px 0px rgba(0,0,0,1)',
    fontFamily: 'var(--font-heading)',
    fontWeight: 800,
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    padding: 'clamp(0.65rem,1.5vw,0.9rem) clamp(1.25rem,3vw,2rem)',
    fontSize: 'var(--text-sm)',
    textDecoration: 'none',
    transition: 'box-shadow 0.12s ease, transform 0.12s ease, background 0.12s ease',
  };
  const outlineStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    background: '#ffffff',
    color: '#16a34a',
    border: '4px solid #16a34a',
    boxShadow: '6px 6px 0px 0px rgba(0,0,0,1)',
    fontFamily: 'var(--font-heading)',
    fontWeight: 800,
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    padding: 'clamp(0.65rem,1.5vw,0.9rem) clamp(1.25rem,3vw,2rem)',
    fontSize: 'var(--text-sm)',
    textDecoration: 'none',
    transition: 'box-shadow 0.12s ease, transform 0.12s ease, background 0.12s ease, color 0.12s ease',
  };

  return (
    <motion.div whileHover={{ y: -2 }} className="inline-block">
      <Link
        to={to}
        style={variant === 'solid' ? solidStyle : outlineStyle}
        onMouseEnter={e => {
          e.currentTarget.style.boxShadow = 'none';
          e.currentTarget.style.transform = 'translate(4px,4px)';
          if (variant === 'outline') {
            e.currentTarget.style.background = '#16a34a';
            e.currentTarget.style.color = '#ffffff';
          } else {
            e.currentTarget.style.background = '#15803d';
          }
        }}
        onMouseLeave={e => {
          e.currentTarget.style.boxShadow = '6px 6px 0px 0px rgba(0,0,0,1)';
          e.currentTarget.style.transform = 'none';
          if (variant === 'outline') {
            e.currentTarget.style.background = '#ffffff';
            e.currentTarget.style.color = '#16a34a';
          } else {
            e.currentTarget.style.background = '#16a34a';
          }
        }}
      >
        {children}
      </Link>
    </motion.div>
  );
}

function GetStartedButton() {
  return (
    <Link
      to="/courses"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.75rem',
        background: '#16a34a',
        color: '#ffffff',
        border: '4px solid #000000',
        boxShadow: '8px 8px 0px 0px rgba(0,0,0,1)',
        fontFamily: 'var(--font-heading)',
        fontWeight: 800,
        textTransform: 'uppercase',
        letterSpacing: '0.18em',
        fontSize: 'var(--text-sm)',
        padding: 'clamp(0.75rem,1.5vw,1rem) clamp(1.25rem,3vw,2rem)',
        textDecoration: 'none',
        transition: 'box-shadow 0.12s ease, transform 0.12s ease, background 0.12s ease',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.boxShadow = 'none';
        e.currentTarget.style.transform = 'translate(8px,8px)';
        e.currentTarget.style.background = '#15803d';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.boxShadow = '8px 8px 0px 0px rgba(0,0,0,1)';
        e.currentTarget.style.transform = 'none';
        e.currentTarget.style.background = '#16a34a';
      }}
      aria-label="Redirect to Courses page"
    >
      <span>GET STARTED</span>
      <span style={{ display: 'inline-block', transition: 'transform 0.3s' }}>→</span>
    </Link>
  );
}

export default function LandingPage() {
  const prefersReducedMotion = useReducedMotion();
  const stagger = prefersReducedMotion
    ? {}
    : { transition: { staggerChildren: 0.09, delayChildren: 0.05 } };

  return (
    <div style={{ position: 'relative', width: '100%', overflowX: 'hidden', background: '#ffffff', color: '#000000' }}>
      <div className="fluid-container pb-0 pt-5 lg:pt-7">
        <SiteNavbar />

        {/* ── HERO ── */}
        <section
          className="grid grid-cols-1 gap-[clamp(2rem,5vw,4rem)] py-[clamp(3rem,7vh,7rem)] lg:grid-cols-[0.95fr_1.05fr] lg:items-center"
          style={{ minHeight: 'calc(100dvh - 118px)' }}
        >
          <motion.div
            className="mx-auto w-full max-w-2xl lg:mx-0 text-left"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            {/* ── Badge ── */}
            <Reveal>
              <div style={{
                display: 'inline-flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '0.5rem',
                border: '4px solid #000000',
                background: '#ffffff',
                padding: '0.5rem 1rem',
                boxShadow: '4px 4px 0px 0px rgba(0,0,0,1)',
                marginBottom: '0.5rem',
              }}>
                <ShieldLockIcon style={{ height: '1.25rem', width: '1.25rem', color: '#000000', flexShrink: 0 }} />
                <span style={{ fontSize: 'var(--text-xs)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.16em', color: '#000000', fontFamily: 'var(--font-heading)' }}>
                  Beginner friendly cybersecurity training
                </span>
              </div>
            </Reveal>

            {/* ── Headline ── */}
            <Reveal>
              <h1 className="hero-title" style={{ color: '#000000', textAlign: 'left', marginTop: '1.5rem', marginBottom: '1.5rem' }}>
                <span style={{ display: 'block' }}>Master</span>
                <span style={{ display: 'inline-block', background: '#000000', color: '#ffffff', padding: '0 0.2em' }}>Cybersecurity</span>
                <span style={{ display: 'block' }}>With AI</span>
              </h1>
            </Reveal>

            <Reveal>
              <p
                className="max-w-xl"
                style={{ lineHeight: 1.8, color: '#444444', fontSize: 'var(--text-base)', textAlign: 'left' }}
              >
                Build real defensive skills, understand attack patterns, and move from zero to cyber hero with a sharp practical roadmap.
              </p>
            </Reveal>

            <Reveal>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '1rem', marginTop: '2rem' }}>
                <GetStartedButton />
                <p
                  style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: 'var(--text-xs)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.18em', color: '#888888', fontFamily: 'var(--font-heading)' }}
                >
                  <span style={{ display: 'inline-block', height: '1px', width: '1.5rem', background: '#cccccc' }} />
                  Limited seats · Next live cohort
                  <span style={{ display: 'inline-block', height: '1px', width: '1.5rem', background: '#cccccc' }} />
                </p>
              </div>
            </Reveal>
          </motion.div>

          <Reveal delay={0.08} className="w-full lg:pl-2">
            <HeroPreview />
          </Reveal>
        </section>
      </div>

      {/* ── Light sections ── */}
      <div style={{ background: '#ffffff', color: '#000000' }}>
        <div className="fluid-container pb-[clamp(4rem,8vh,7rem)]">
          {/* Why section */}
          <section id="why" style={{ borderTop: '4px solid #000000', padding: 'clamp(3.5rem,7vw,6rem) 0' }}>
            <Reveal>
              <SectionHeading
                center
                eyebrow="Why you should join?"
                title={<>A practical path to <span style={{ background: '#000', color: '#fff', padding: '0 0.1em' }}>job ready</span> cyber skills</>}
                description="Gain the elite skillsets required to defend, detect, and dominate in the digital age."
              />
            </Reveal>

            <ExperienceCarousel />
          </section>

          {/* Courses section */}
          <section style={{ borderTop: '4px solid #000000', padding: 'clamp(3.5rem,7vw,6rem) 0' }}>
            <Reveal>
              <SectionHeading
                center
                eyebrow="Courses"
                title={<>Browse the full <span style={{ background: '#000', color: '#fff', padding: '0 0.1em' }}>course catalog</span></>}
                description="Choose a track, then open its dedicated page for pricing, schedule, certificate, and hands on specifics."
              />
            </Reveal>

            <div style={{ marginTop: '3rem', display: 'flex', justifyContent: 'center' }}>
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
