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
    <div className="relative mx-auto w-full max-w-[540px]">
      <div className="relative overflow-hidden rounded-[32px] border border-[#ececec] bg-[#090909] shadow-[0_22px_54px_rgba(0,0,0,0.12)]">
        <div className="relative aspect-[1/1] overflow-hidden">
          <img
            src={heroImage}
            alt="Cyber Hacker Hero"
            className="h-full w-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-transparent to-transparent opacity-60" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,18,18,0.15),transparent_70%)]" />
        </div>
      </div>

      <div className="mt-4 flex flex-col items-center gap-2 sm:items-end sm:gap-2.5">
        <div className="rounded-[4px] bg-cyber-red px-4 py-1.5 text-[0.78rem] font-black uppercase tracking-[0.08em] text-white shadow-[0_8px_20px_rgba(212,18,18,0.28)] sm:text-[0.88rem]">
          READY TO
        </div>
        <div className="rounded-[4px] bg-cyber-red px-5 py-2 text-[clamp(2.2rem,4vw,4.2rem)] font-black uppercase leading-[1.08] tracking-[-0.04em] text-white shadow-[0_8px_22px_rgba(212,18,18,0.3)]">
          BREAK IN
        </div>
        <div className="rotate-[-1deg] rounded-[4px] bg-[#111111] px-4 py-2 text-[clamp(1rem,1.9vw,1.55rem)] font-black uppercase leading-[1.12] tracking-[0.02em] text-white shadow-[0_10px_20px_rgba(0,0,0,0.2)]">
          TO CYBER?
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
          LEARN WITH <span className="text-cyber-red">CYBER JAI</span>
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
      className="relative isolate mx-auto w-full max-w-[560px] lg:ml-auto"
      initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.96, y: 18 }}
      animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      whileHover={prefersReducedMotion ? undefined : { rotate: 0.4, scale: 1.01 }}
    >
      <div className="absolute inset-0 -z-10 rounded-[44px] bg-[radial-gradient(circle_at_70%_18%,rgba(212,18,18,0.16),transparent_42%),radial-gradient(circle_at_50%_60%,rgba(0,0,0,0.06),transparent_55%)] blur-2xl" />
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
    <MotionCard className="soft-card flex h-full flex-col rounded-[22px] p-4 sm:p-5">
      <div className="flex items-start gap-3 sm:gap-4">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-cyber-red text-cyber-red sm:h-[72px] sm:w-[72px]">
          <UserOutlineIcon className="h-10 w-10 sm:h-11 sm:w-11" />
        </div>
        <p className="pt-0.5 font-display text-[clamp(1rem,1.55vw,1.3rem)] leading-[1.22] font-black uppercase tracking-[0.02em] text-black">
          THIS COURSE IS FOR <span className="text-cyber-red">PURE BEGINNERS</span>
          <span className="block font-sans font-extrabold text-[#1a1a1a]">TO MASTER GUIDE.</span>
        </p>
      </div>

      <div className="ribbon-cut mt-4 rounded-[12px] bg-[#111111] px-4 py-3 text-white shadow-[0_10px_20px_rgba(0,0,0,0.18)]">
        <div className="flex items-start gap-3">
          <span className="mt-0.5 h-10 w-[3px] shrink-0 rounded-full bg-cyber-red" />
          <p className="text-[0.92rem] leading-[1.35] text-white/90">
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
    <MotionCard className="soft-card flex h-full flex-col overflow-hidden rounded-[16px]">
      <div
        className={`px-4 py-2 text-center text-[0.82rem] font-extrabold uppercase tracking-[0.04em] ${labelClassName}`}
      >
        {label}
      </div>
      <div className="flex flex-1 items-center justify-center px-4 py-5 text-center">
        <div className={`font-display text-[clamp(3rem,6vw,4.7rem)] leading-[1.08] font-black ${amountClassName}`}>
          &#8377;{amount}
        </div>
      </div>
    </MotionCard>
  );
}

export function StudentsCard() {
  return (
    <MotionCard className="h-full rounded-[16px] bg-[#101010] px-4 py-4 text-center text-white shadow-[0_10px_20px_rgba(0,0,0,0.18)]">
      <div className="flex h-full flex-col justify-between">
        <GroupIcon className="mx-auto h-11 w-11 text-cyber-red" />
        <div className="mt-1 font-display text-[clamp(2.95rem,5.8vw,4.4rem)] leading-[1.08] font-black">
          60
        </div>
        <div className="mt-1 text-[0.78rem] font-extrabold uppercase leading-[1.08] tracking-[0.03em] text-white/96">
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
    <MotionCard className="mx-auto inline-flex items-center gap-2 rounded-[12px] border border-[#cfcfcf] bg-white px-4 py-2.5 shadow-[0_8px_16px_rgba(0,0,0,0.07)]">
      <ClockIcon className="h-5 w-5 text-cyber-red" />
      <p className="text-[0.88rem] font-semibold uppercase tracking-[0.04em] text-black">
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
    <MotionCard className="soft-card relative flex h-full rounded-[28px] px-5 py-6">
      <div className="absolute -top-3 left-4 flex h-8 w-8 items-center justify-center rounded-full bg-cyber-red text-[0.95rem] font-black text-white shadow-[0_8px_16px_rgba(212,18,18,0.22)]">
        {number}
      </div>

      <div className="flex min-h-[230px] flex-1 flex-col items-center justify-center text-center">
        <Icon className="h-12 w-12 text-cyber-red" />
        <h3 className="mt-4 font-display text-[1.02rem] font-black uppercase leading-[1.32] tracking-[0.02em]">
          {title.map((part, index) => (
            <span
              key={`${part.text}-${index}`}
              className={`block ${part.tone === 'red' ? 'text-cyber-red' : 'text-black'}`}
            >
              {part.text}
            </span>
          ))}
        </h3>
        <p className="mt-5 text-[0.86rem] leading-[1.52] text-[#151515]">
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
      className="mt-6 border-t border-[#161616] bg-[#0d0d0d] px-4 py-4 text-white sm:px-5 lg:px-6"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="grid gap-4 lg:grid-cols-[1.1fr_1.65fr_1fr] lg:items-stretch">
        <div className="flex h-full items-center gap-3 border-b border-white/10 pb-4 lg:border-b-0 lg:border-r lg:border-white/10 lg:pb-0 lg:pr-5">
          <LockSealIcon className="h-14 w-14 shrink-0 text-white" />
          <p className="font-display text-[clamp(1rem,2vw,1.8rem)] leading-[1.18] font-black uppercase tracking-[0.03em]">
            DON&apos;T JUST LEARN.
            <span className="block text-cyber-red">DEFEND THE</span>
            <span className="block text-cyber-red">DIGITAL WORLD.</span>
          </p>
        </div>

        <div className="grid h-full grid-cols-2 gap-3 sm:grid-cols-4 lg:px-2">
          {[
            { icon: BrainIcon, label: 'AI-POWERED\nTOOLS' },
            { icon: GlobeIcon, label: 'REAL-WORLD\nSCENARIOS' },
            { icon: CertificateIcon, label: 'CERTIFICATE\nOF COMPLETION' },
            { icon: HeadsetIcon, label: 'LIFETIME\nSUPPORT' },
          ].map(({ icon: Icon, label }, index) => (
            <div
              key={label}
              className="flex min-h-[92px] flex-col items-center justify-center rounded-[12px] border border-white/10 bg-white/0 px-2 py-2 text-center"
              style={{ borderLeftColor: index === 0 ? 'rgba(212,18,18,0.55)' : undefined }}
            >
              <Icon className="h-8 w-8 text-white" />
              <p className="mt-2 whitespace-pre-line text-[0.68rem] leading-[1.25] font-medium uppercase tracking-[0.04em] text-white/90">
                {label}
              </p>
            </div>
          ))}
        </div>

        <div className="h-full overflow-hidden rounded-[4px] border border-white/10">
          <div className="bg-cyber-red px-4 py-2 text-center text-[0.82rem] font-black uppercase tracking-[0.08em] text-white">
            SECURE YOUR SEAT
          </div>
          <div className="relative flex h-full flex-col justify-center bg-[#090909] px-4 pb-4 pt-3 text-center">
            <div className="flex items-center justify-center gap-2">
              <span className="font-display text-[clamp(2.6rem,5.4vw,3.8rem)] leading-[1.08] font-black uppercase tracking-[-0.03em]">
                NOW!
              </span>
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cyber-red text-cyber-red">
                <LockSealIcon className="h-6 w-6 text-cyber-red" />
              </div>
            </div>
            <p className="mt-3 text-[0.88rem] font-semibold uppercase tracking-[0.08em] text-white/92">
              YOUR CYBER JOURNEY
            </p>
            <p className="text-[0.88rem] font-semibold uppercase tracking-[0.08em] text-white/92">
              STARTS WITH ONE STEP.
            </p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
