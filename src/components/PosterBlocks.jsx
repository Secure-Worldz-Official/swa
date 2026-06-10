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
    <div className="relative mx-auto w-full max-w-[610px]">
      {/* Terminal-inspired frame keeps the original cyber image as the hero focal point. */}
      <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-[#080808] shadow-[0_32px_90px_rgba(0,0,0,0.55)]">
        <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.035] px-5 py-4">
          <span className="h-3 w-3 rounded-full bg-cyber-red shadow-[0_0_18px_rgba(212,18,18,0.8)]" />
          <span className="h-3 w-3 rounded-full bg-white/25" />
          <span className="h-3 w-3 rounded-full bg-white/12" />
          <span className="ml-auto font-mono text-[0.68rem] uppercase tracking-[0.18em] text-white/38">
            secure-worldz.exe
          </span>
        </div>

        <div className="relative aspect-[1/1] overflow-hidden sm:aspect-[1.05/1]">
          <img
            src={heroImage}
            alt="Cybersecurity terminal hacker graphic"
            className="h-full w-full object-cover transition-all duration-700 hover:scale-[1.025]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-45" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_28%,rgba(212,18,18,0.16),transparent_58%)]" />
          <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-cyber-red/25 bg-black/62 px-5 py-4 backdrop-blur-md">
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-cyber-red">
              cyber security initiated
            </p>
            <p className="mt-1 font-display text-[clamp(1.05rem,2.2vw,1.45rem)] font-black uppercase leading-tight text-white">
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
    <div className="flex items-start gap-3 sm:gap-4">
      <ShieldLockIcon className="mt-0.5 h-10 w-10 shrink-0 text-cyber-red sm:h-11 sm:w-11" />
      <p className="font-display text-[clamp(0.9rem,1.55vw,1.3rem)] leading-[1.18] font-black uppercase tracking-[0.04em] text-black">
        <span className="block">
          LEARN WITH <span className="text-cyber-red">CYBER J</span><span className="cyber-ai-glow">AI</span>
        </span>
        <span className="block">
          FROM ZERO TO <span className="text-cyber-red">CYBER HERO</span>
        </span>
      </p>
    </div>
  );
}

export function HeroPreview() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.figure
      className="relative isolate mx-auto w-full max-w-[640px] lg:ml-auto"
      initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.96, y: 18 }}
      animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      whileHover={prefersReducedMotion ? undefined : { rotate: 0.4, scale: 1.01 }}
    >
      <div className="absolute -inset-8 -z-10 rounded-[48px] bg-[radial-gradient(circle_at_62%_22%,rgba(212,18,18,0.28),transparent_42%),radial-gradient(circle_at_50%_72%,rgba(212,18,18,0.12),transparent_48%)] blur-2xl" />
      <div className="absolute -right-2 top-10 -z-10 h-28 w-28 rounded-full border border-cyber-red/25" />
      <div className="absolute -bottom-3 -left-2 -z-10 h-20 w-20 rounded-full border border-white/10" />
      <CyberHeroArtwork />
    </motion.figure>
  );
}

function MotionCard({ children, className = '', ...props }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.article
      className={className}
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
    <MotionCard className="soft-card flex h-full flex-col rounded-3xl p-6">
      <div className="flex items-start gap-4">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-cyber-red/10 border border-cyber-red/20 text-cyber-red">
          <UserOutlineIcon className="h-9 w-9" />
        </div>
        <p className="pt-0.5 font-display text-[clamp(1rem,1.55vw,1.3rem)] leading-[1.22] font-black uppercase tracking-[0.02em] text-black">
          THIS COURSE IS FOR <span className="text-cyber-red">PURE BEGINNERS</span>
          <span className="block font-sans font-extrabold text-[#1a1a1a]">TO MASTER GUIDE.</span>
        </p>
      </div>

      <div className="ribbon-cut mt-6 rounded-2xl bg-gradient-to-br from-[#1e1e1e] to-[#0d0d0d] px-5 py-4 text-white shadow-[0_10px_30px_rgba(0,0,0,0.15)] border border-white/5">
        <div className="flex items-start gap-3">
          <span className="mt-1.5 h-8 w-[3px] shrink-0 rounded-full bg-cyber-red" />
          <p className="text-[0.92rem] leading-[1.45] text-white/90">
            No prior knowledge needed.
            <br />
            We take you from scratch to success.
          </p>
        </div>
      </div>
    </MotionCard>
  );
}

export function PriceCard({ label, amount, amountClassName = 'text-black', labelClassName = 'bg-cyber-red text-white' }) {
  return (
    <MotionCard className="soft-card flex h-full flex-col overflow-hidden rounded-3xl">
      <div
        className={`px-4 py-2.5 text-center text-[0.72rem] font-black uppercase tracking-[0.1em] border-b border-gray-100 ${labelClassName}`}
      >
        {label}
      </div>
      <div className="flex flex-1 items-center justify-center px-4 py-6 text-center">
        <div className={`font-display text-[clamp(2.5rem,5.5vw,4.2rem)] leading-none font-black tracking-tight ${amountClassName}`}>
          &#8377;{amount}
        </div>
      </div>
    </MotionCard>
  );
}

export function StudentsCard() {
  return (
    <MotionCard className="h-full rounded-3xl bg-gradient-to-br from-[#1e1e1e] to-[#0d0d0d] px-5 py-6 text-center text-white border border-white/10 shadow-[0_15px_35px_rgba(0,0,0,0.18)] hover:border-cyber-red/20 transition-all duration-300">
      <div className="flex h-full flex-col justify-between">
        <div className="h-12 w-12 rounded-xl bg-white/5 flex items-center justify-center text-cyber-red mx-auto mb-2">
          <GroupIcon className="h-6 w-6" />
        </div>
        <div className="font-display text-[clamp(2.95rem,5.8vw,4.4rem)] leading-none font-black text-white">
          60
        </div>
        <div className="mt-2 text-[0.72rem] font-black uppercase leading-[1.3] tracking-[0.1em] text-white/60">
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
    <MotionCard className="mx-auto inline-flex items-center gap-2.5 rounded-full border border-gray-100 bg-white px-6 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:border-cyber-red/25 hover:shadow-[0_12px_35px_rgba(212,18,18,0.06)] transition-all duration-300">
      <ClockIcon className="h-5 w-5 text-cyber-red" />
      <p className="text-[0.8rem] font-black uppercase tracking-[0.1em] text-black">
        LIMITED SEATS. <span className="text-cyber-red">MAXIMUM IMPACT.</span>
      </p>
    </MotionCard>
  );
}

export function SectionRuleHeading() {
  return (
    <div className="flex flex-col items-stretch gap-4 pt-2 sm:flex-row sm:items-center">
      <span className="hidden h-px flex-1 bg-[#cfcfcf] sm:block" />
      <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-2 text-center font-display text-[clamp(1.1rem,2vw,1.7rem)] leading-[1.22] font-black uppercase tracking-[0.1em] text-black">
        <span className="h-1.5 w-1.5 rotate-45 bg-cyber-red" />
        <span className="max-w-full">
          WHY <span className="text-cyber-red">YOU</span> SHOULD JOIN?
        </span>
        <span className="h-1.5 w-1.5 rotate-45 bg-cyber-red" />
      </div>
      <span className="hidden h-px flex-1 bg-[#cfcfcf] sm:block" />
    </div>
  );
}

export function ReasonCard({ number, icon: Icon, title, description }) {
  return (
    <MotionCard className="soft-card relative flex h-full px-6 py-8">
      <div className="absolute -top-3 left-6 flex h-8 w-8 items-center justify-center rounded-full bg-cyber-red text-[0.85rem] font-black text-white shadow-[0_8px_20px_rgba(212,18,18,0.3)] border-2 border-white">
        {number}
      </div>

      <div className="flex min-h-[230px] flex-1 flex-col items-center justify-center text-center">
        <Icon className="h-12 w-12 text-cyber-red" />
        <h3 className="mt-4 font-display text-[1.05rem] font-black uppercase leading-[1.32] tracking-[0.02em]">
          {title.map((part, index) => (
            <span
              key={`${part.text}-${index}`}
              className={`block ${part.tone === 'red' ? 'text-cyber-red' : 'text-black'}`}
            >
              {part.text}
            </span>
          ))}
        </h3>
        <p className="mt-5 text-[0.86rem] leading-[1.52] text-gray-500">
          {description.map((line, index) => (
            <span key={`${line}-${index}`} className="block">
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
      className="mt-12 rounded-[36px] border border-white/5 bg-gradient-to-br from-[#0F111A] to-[#07080d] p-8 md:p-12 text-white shadow-[0_30px_70px_rgba(0,0,0,0.4)] relative overflow-hidden"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Background Accent Grid or Glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-cyber-red/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="grid gap-8 lg:grid-cols-[1.2fr_1.8fr_1.1fr] lg:items-center">
        {/* Left Branding Statement */}
        <div className="flex items-center gap-4 border-b border-white/5 pb-6 lg:border-b-0 lg:border-r lg:border-white/5 lg:pb-0 lg:pr-8">
          <div className="h-16 w-16 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
            <LockSealIcon className="h-8 w-8 text-white" />
          </div>
          <div className="text-left space-y-1">
            <p className="text-[0.7rem] font-black uppercase tracking-[0.2em] text-cyber-red">Secure Worldz Official</p>
            <h3 className="font-display text-[clamp(1.2rem,2.2vw,1.9rem)] leading-[1.15] font-black uppercase tracking-tight">
              DON&apos;T JUST LEARN.
              <span className="block text-cyber-red">DEFEND THE DIGITAL WORLD.</span>
            </h3>
          </div>
        </div>

        {/* Middle Feature Highlights */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:px-4">
          {[
            { icon: BrainIcon, label: 'AI-POWERED\nTOOLS' },
            { icon: GlobeIcon, label: 'REAL-WORLD\nSCENARIOS' },
            { icon: CertificateIcon, label: 'CERTIFICATE\nOF COMPLETION' },
            { icon: HeadsetIcon, label: 'LIFETIME\nSUPPORT' },
          ].map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center justify-center rounded-2xl border border-white/5 bg-white/[0.02] p-4 text-center hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300"
            >
              <div className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center mb-3 text-white">
                <Icon className="h-5 w-5" />
              </div>
              <p className="whitespace-pre-line text-[0.68rem] leading-[1.3] font-bold uppercase tracking-wider text-white/70">
                {label}
              </p>
            </div>
          ))}
        </div>

        {/* Right Seat Checkout Ticket */}
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#151722] to-[#0c0d14] p-6 text-center shadow-2xl flex flex-col justify-center items-center">
          <span className="inline-block bg-cyber-red/10 border border-cyber-red/35 text-cyber-red text-[0.65rem] font-black uppercase tracking-[0.15em] px-3 py-1 rounded-md mb-4">
            SECURE YOUR SEAT
          </span>
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="font-display text-[clamp(2.4rem,4.5vw,3.2rem)] leading-none font-black uppercase tracking-tight text-white">
              NOW!
            </span>
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-cyber-red/40 text-cyber-red bg-cyber-red/10 shadow-[0_0_15px_rgba(212,18,18,0.25)]">
              <LockSealIcon className="h-4.5 w-4.5 text-cyber-red" />
            </div>
          </div>
          <p className="text-[0.75rem] font-bold uppercase tracking-[0.1em] text-white/55">
            YOUR CYBER JOURNEY
          </p>
          <p className="text-[0.75rem] font-bold uppercase tracking-[0.1em] text-cyber-red mt-0.5">
            STARTS WITH ONE STEP.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
