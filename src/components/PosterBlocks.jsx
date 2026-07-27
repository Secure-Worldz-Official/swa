import { motion, useReducedMotion } from 'framer-motion';
import {
  BrainIcon,
  CertificateIcon,
  ClockIcon,
  GlobeIcon,
  GroupIcon,
  HeadsetIcon,
  LockSealIcon,
  ShieldLockIcon,
  UserOutlineIcon,
} from './Icons';
import heroImage from '../assets/hero-hacker.png';


function CyberHeroArtwork() {
  return (
    <div style={{ position: 'relative', margin: '0 auto', width: '100%', maxWidth: 'clamp(300px, 90vw, 640px)' }}>
      {/* Retro terminal chrome frame */}
      <div style={{
        position: 'relative',
        overflow: 'hidden',
        border: '4px solid #000000',
        background: '#000000',
        boxShadow: '12px 12px 0px 0px rgba(0,0,0,1)',
      }}>
        {/* Title bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          borderBottom: '4px solid #000000',
          background: '#ffffff',
          padding: '0.75rem 1.25rem',
        }}>
          <span style={{ height: '12px', width: '12px', background: '#000000', display: 'inline-block', border: '2px solid #000' }} />
          <span style={{ height: '12px', width: '12px', background: '#888888', display: 'inline-block', border: '2px solid #000' }} />
          <span style={{ height: '12px', width: '12px', background: '#cccccc', display: 'inline-block', border: '2px solid #000' }} />
          <span style={{ marginLeft: 'auto', fontFamily: 'var(--font-heading)', fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.18em', color: '#000000', fontWeight: 700 }}>
            cyber jai exe
          </span>
        </div>

        {/* Image container */}
        <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: '1 / 1' }}>
          <img
            src={heroImage}
            alt="Cybersecurity terminal hacker graphic"
            style={{ height: '100%', width: '100%', objectFit: 'cover', objectPosition: 'center top', transition: 'transform 0.7s', display: 'block' }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.025)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.55), transparent 55%)' }} />
          {/* Overlay text badge */}
          <div style={{
            position: 'absolute',
            bottom: '1.25rem',
            left: '1.25rem',
            right: '1.25rem',
            border: '4px solid #000000',
            background: 'rgba(255,255,255,0.92)',
            padding: '0.75rem 1.25rem',
            boxShadow: '6px 6px 0px 0px rgba(0,0,0,1)',
          }}>
            <p style={{ fontFamily: 'var(--font-heading)', textTransform: 'uppercase', letterSpacing: '0.16em', color: '#000000', fontSize: 'var(--text-xs)', fontWeight: 800 }}>
              cyber security initiated
            </p>
            <p style={{ marginTop: '0.25rem', fontFamily: 'var(--font-heading)', fontWeight: 800, textTransform: 'uppercase', lineHeight: 1.2, color: '#000000', fontSize: 'clamp(1.05rem, 2.2vw, 1.45rem)' }}>
              Learn. Defend. Dominate.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function BrandHeader() {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
      <ShieldLockIcon style={{ marginTop: '0.125rem', height: '2.5rem', width: '2.5rem', flexShrink: 0, color: '#000000' }} />
      <p style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(0.9rem,1.55vw,1.3rem)', lineHeight: 1.18, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.04em', color: '#000000' }}>
        <span style={{ display: 'block' }}>
          LEARN WITH <span style={{ background: '#000', color: '#fff', padding: '0 0.1em' }}>CYBER J</span><span className="cyber-ai-glow">AI</span>
        </span>
        <span style={{ display: 'block' }}>
          FROM ZERO TO <span style={{ background: '#000', color: '#fff', padding: '0 0.1em' }}>CYBER HERO</span>
        </span>
      </p>
    </div>
  );
}

export function HeroPreview() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.figure
      style={{ position: 'relative', margin: '0 auto', width: '100%', maxWidth: 'clamp(300px, 88vw, 640px)' }}
      className="lg:ml-auto"
      initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.96, y: 18 }}
      animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      whileHover={prefersReducedMotion ? undefined : { rotate: 0.4, scale: 1.01 }}
    >
      {/* Decorative elements */}
      <div style={{ position: 'absolute', right: '-0.5rem', top: '2.5rem', zIndex: -1, height: '2rem', width: '2rem', border: '4px solid #000', background: '#ffffff' }} />
      <div style={{ position: 'absolute', bottom: '-0.75rem', left: '-0.5rem', zIndex: -1, height: '1.5rem', width: '1.5rem', border: '4px solid #000', background: '#ffffff' }} />
      <CyberHeroArtwork />
    </motion.figure>
  );
}

function MotionCard({ children, className = '', style = {}, ...props }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.article
      className={className}
      style={style}
      whileHover={
        prefersReducedMotion
          ? undefined
          : {
            y: -4,
            scale: 1.01,
            transition: { duration: 0.2 },
          }
      }
      {...props}
    >
      {children}
    </motion.article>
  );
}

export function BeginnersCard() {
  return (
    <MotionCard
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        padding: '1.5rem',
        background: '#ffffff',
        border: '4px solid #000000',
        boxShadow: '8px 8px 0px 0px rgba(0,0,0,1)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
        <div style={{ display: 'flex', height: '4rem', width: '4rem', flexShrink: 0, alignItems: 'center', justifyContent: 'center', border: '4px solid #000000', background: '#f0f0f0', color: '#000000' }}>
          <UserOutlineIcon style={{ height: '2.25rem', width: '2.25rem' }} />
        </div>
        <p style={{ paddingTop: '0.125rem', fontFamily: 'var(--font-heading)', fontSize: 'clamp(1rem,1.55vw,1.3rem)', lineHeight: 1.22, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.02em', color: '#000000' }}>
          THIS COURSE IS FOR <span style={{ background: '#000', color: '#fff', padding: '0 0.1em' }}>PURE BEGINNERS</span>
          <span style={{ display: 'block', fontFamily: 'var(--font-main)', fontWeight: 800, color: '#000000' }}>TO MASTER GUIDE.</span>
        </p>
      </div>

      <div style={{ marginTop: '1.5rem', background: '#000000', padding: '1rem 1.25rem', color: '#ffffff', clipPath: 'polygon(0 0, 100% 0, 100% 82%, 96% 100%, 0 100%)' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
          <span style={{ marginTop: '0.375rem', height: '2rem', width: '4px', flexShrink: 0, background: '#ffffff', display: 'inline-block' }} />
          <p style={{ fontSize: '0.92rem', lineHeight: 1.45, color: 'rgba(255,255,255,0.9)' }}>
            No prior knowledge needed.
            <br />
            We take you from scratch to success.
          </p>
        </div>
      </div>
    </MotionCard>
  );
}

export function PriceCard({ label, amount, amountClassName = '', labelClassName = '' }) {
  return (
    <MotionCard
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        overflow: 'hidden',
        border: '4px solid #000000',
        boxShadow: '8px 8px 0px 0px rgba(0,0,0,1)',
        background: '#ffffff',
      }}
    >
      <div style={{ padding: '0.5rem 1rem', textAlign: 'center', fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', borderBottom: '4px solid #000', background: '#000000', color: '#ffffff', fontFamily: 'var(--font-heading)' }}>
        {label}
      </div>
      <div style={{ display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center', padding: '1.5rem 1rem', textAlign: 'center' }}>
        <div style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.5rem,5.5vw,4.2rem)', lineHeight: 1, fontWeight: 800, letterSpacing: '-0.02em', color: '#000000' }}>
          &#8377;{amount}
        </div>
      </div>
    </MotionCard>
  );
}

export function StudentsCard() {
  return (
    <MotionCard
      style={{
        height: '100%',
        padding: '1.25rem',
        textAlign: 'center',
        background: '#000000',
        color: '#ffffff',
        border: '4px solid #000000',
        boxShadow: '8px 8px 0px 0px rgba(0,0,0,1)',
      }}
    >
      <div style={{ display: 'flex', height: '100%', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div style={{ height: '3rem', width: '3rem', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', margin: '0 auto', marginBottom: '0.5rem', border: '2px solid rgba(255,255,255,0.3)' }}>
          <GroupIcon style={{ height: '1.5rem', width: '1.5rem' }} />
        </div>
        <div style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.95rem,5.8vw,4.4rem)', lineHeight: 1, fontWeight: 800, color: '#ffffff' }}>
          60
        </div>
        <div style={{ marginTop: '0.5rem', fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', lineHeight: 1.3, letterSpacing: '0.1em', color: 'rgba(255,255,255,0.6)', fontFamily: 'var(--font-heading)' }}>
          STUDENTS ONLY
          <br />
          AVAILABLE.
        </div>
      </div>
    </MotionCard>
  );
}

export function SeatsPill() {
  return (
    <MotionCard
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.625rem',
        border: '4px solid #000000',
        background: '#ffffff',
        padding: '0.75rem 1.5rem',
        boxShadow: '6px 6px 0px 0px rgba(0,0,0,1)',
        margin: '0 auto',
        transition: 'box-shadow 0.12s ease, transform 0.12s ease',
      }}
    >
      <ClockIcon style={{ height: '1.25rem', width: '1.25rem', color: '#000000' }} />
      <p style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#000000', fontFamily: 'var(--font-heading)' }}>
        LIMITED SEATS. <span style={{ background: '#000', color: '#fff', padding: '0 0.1em' }}>MAXIMUM IMPACT.</span>
      </p>
    </MotionCard>
  );
}

export function SectionRuleHeading() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch', gap: '1rem', paddingTop: '0.5rem' }} className="sm:flex-row sm:items-center">
      <span style={{ display: 'none', height: '4px', flex: 1, background: '#000000' }} className="sm:block" />
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '0.5rem 0.5rem', textAlign: 'center', fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.1rem,2vw,1.7rem)', lineHeight: 1.22, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#000000' }}>
        <span style={{ height: '0.375rem', width: '0.375rem', transform: 'rotate(45deg)', background: '#000000', display: 'inline-block' }} />
        <span style={{ maxWidth: '100%' }}>
          WHY <span style={{ background: '#000', color: '#fff', padding: '0 0.1em' }}>YOU</span> SHOULD JOIN?
        </span>
        <span style={{ height: '0.375rem', width: '0.375rem', transform: 'rotate(45deg)', background: '#000000', display: 'inline-block' }} />
      </div>
      <span style={{ display: 'none', height: '4px', flex: 1, background: '#000000' }} className="sm:block" />
    </div>
  );
}

export function ReasonCard({ number, icon: Icon, title, description }) {
  return (
    <MotionCard
      style={{
        position: 'relative',
        display: 'flex',
        height: '100%',
        padding: '2rem 1.5rem',
        background: '#ffffff',
        border: '4px solid #000000',
        boxShadow: '8px 8px 0px 0px rgba(0,0,0,1)',
      }}
    >
      <div style={{
        position: 'absolute',
        top: '-0.75rem',
        left: '1.5rem',
        display: 'flex',
        height: '2rem',
        width: '2rem',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#000000',
        color: '#ffffff',
        fontSize: '0.85rem',
        fontWeight: 800,
        border: '4px solid #ffffff',
        boxShadow: '2px 2px 0px 0px rgba(0,0,0,1)',
        fontFamily: 'var(--font-heading)',
      }}>
        {number}
      </div>

      <div style={{ display: 'flex', minHeight: '230px', flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
        <Icon style={{ height: '3rem', width: '3rem', color: '#000000' }} />
        <h3 style={{ marginTop: '1rem', fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: 800, textTransform: 'uppercase', lineHeight: 1.32, letterSpacing: '0.02em' }}>
          {title.map((part, index) => (
            <span
              key={`${part.text}-${index}`}
              style={{ display: 'block', color: part.tone === 'red' ? '#000000' : '#000000', ...(part.tone === 'red' ? { background: '#000', color: '#fff', padding: '0 0.1em' } : {}) }}
            >
              {part.text}
            </span>
          ))}
        </h3>
        <p style={{ marginTop: '1.25rem', fontSize: '0.86rem', lineHeight: 1.52, color: '#555555' }}>
          {description.map((line, index) => (
            <span key={`${line}-${index}`} style={{ display: 'block' }}>
              {line}
            </span>
          ))}
        </p>
      </div>
    </MotionCard>
  );
}

export function FooterBanner() {
  return (
    <motion.footer
      style={{
        marginTop: '3rem',
        border: '4px solid #000000',
        background: '#000000',
        padding: '2rem',
        color: '#ffffff',
        boxShadow: '12px 12px 0px 0px rgba(0,0,0,1)',
        position: 'relative',
        overflow: 'hidden',
      }}
      className="md:p-12"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* White corner decorative element */}
      <div style={{ position: 'absolute', top: 0, right: 0, width: '5rem', height: '5rem', background: '#ffffff', opacity: 0.06, zIndex: 0 }} />

      <div style={{ display: 'grid', gap: '2rem', position: 'relative', zIndex: 1 }} className="lg:grid-cols-[1.2fr_1.8fr_1.1fr] lg:items-center">
        {/* Left Branding Statement */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', borderBottom: '4px solid rgba(255,255,255,0.15)', paddingBottom: '1.5rem' }} className="lg:border-b-0 lg:border-r lg:border-white/20 lg:pb-0 lg:pr-8">
          <div style={{ height: '4rem', width: '4rem', border: '4px solid rgba(255,255,255,0.3)', background: 'rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <LockSealIcon style={{ height: '2rem', width: '2rem', color: '#ffffff' }} />
          </div>
          <div style={{ textAlign: 'left' }}>
            <p style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.6)', fontFamily: 'var(--font-heading)' }}>Cyber Jai Official</p>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.2rem,2.2vw,1.9rem)', lineHeight: 1.15, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '-0.03em', marginTop: '0.25rem' }}>
              DON&apos;T JUST LEARN.
              <span style={{ display: 'block', color: 'rgba(255,255,255,0.6)' }}>DEFEND THE DIGITAL WORLD.</span>
            </h3>
          </div>
        </div>

        {/* Middle Feature Highlights */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '1rem' }} className="sm:grid-cols-4 lg:px-4">
          {[
            { icon: BrainIcon, label: 'AI POWERED\nTOOLS' },
            { icon: GlobeIcon, label: 'REAL WORLD\nSCENARIOS' },
            { icon: CertificateIcon, label: 'CERTIFICATE\nOF COMPLETION' },
            { icon: HeadsetIcon, label: 'LIFETIME\nSUPPORT' },
          ].map(({ icon: Icon, label }) => (
            <div
              key={label}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', border: '4px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.05)', padding: '1rem', textAlign: 'center', transition: 'background 0.15s' }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.12)'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
            >
              <div style={{ height: '2.5rem', width: '2.5rem', border: '2px solid rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75rem', color: '#ffffff' }}>
                <Icon style={{ height: '1.25rem', width: '1.25rem' }} />
              </div>
              <p style={{ whiteSpace: 'pre-line', fontSize: '0.68rem', lineHeight: 1.3, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.7)', fontFamily: 'var(--font-heading)' }}>
                {label}
              </p>
            </div>
          ))}
        </div>

        {/* Right Seat Checkout Ticket */}
        <div style={{ position: 'relative', overflow: 'hidden', border: '4px solid rgba(255,255,255,0.3)', background: 'rgba(255,255,255,0.06)', padding: '1.5rem', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', boxShadow: '6px 6px 0px 0px rgba(255,255,255,0.2)' }}>
          <span style={{ display: 'inline-block', border: '2px solid rgba(255,255,255,0.4)', color: 'rgba(255,255,255,0.8)', fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', padding: '0.25rem 0.75rem', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>
            SECURE YOUR SEAT
          </span>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <span style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.4rem,4.5vw,3.2rem)', lineHeight: 1, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '-0.02em', color: '#ffffff' }}>
              NOW!
            </span>
            <div style={{ display: 'flex', height: '2.25rem', width: '2.25rem', alignItems: 'center', justifyContent: 'center', border: '4px solid rgba(255,255,255,0.4)', color: '#ffffff', background: 'rgba(255,255,255,0.1)' }}>
              <LockSealIcon style={{ height: '1.125rem', width: '1.125rem', color: '#ffffff' }} />
            </div>
          </div>
          <p style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.55)', fontFamily: 'var(--font-heading)' }}>
            YOUR CYBER JOURNEY
          </p>
          <p style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.8)', marginTop: '0.125rem', fontFamily: 'var(--font-heading)' }}>
            STARTS WITH ONE STEP.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
