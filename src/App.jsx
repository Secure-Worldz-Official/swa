import { motion, useReducedMotion } from 'framer-motion';
import {
  CalendarIcon,
  ClockIcon,
  LockSealIcon,
  ShieldLockIcon,
} from './components/Icons';
import { HeroPreview, ReasonCard } from './components/PosterBlocks';
import Reveal from './components/Reveal';
import {
  footerFeatures,
  heroStats,
  launchDate,
  reasonCards,
  seatingLine,
} from './data/content';

function BrandLockup() {
  return (
    <div className="flex items-start gap-3">
      <ShieldLockIcon className="mt-0.5 h-11 w-11 shrink-0 text-cyber-red" />
      <div className="space-y-1.5">
        <p className="font-display text-[0.92rem] leading-[1.18] font-black uppercase tracking-[0.12em] text-[#111]">
          LEARN WITH <span className="text-cyber-red">CYBER JAI</span>
        </p>
        <p className="text-[0.78rem] font-semibold leading-[1.35] uppercase tracking-[0.22em] text-[#5a5a5a]">
          FROM ZERO TO CYBER HERO
        </p>
      </div>
    </div>
  );
}

function SectionHeading({ eyebrow, title, description, center = false }) {
  return (
    <div className={center ? 'mx-auto max-w-4xl text-center' : 'max-w-4xl'}>
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
    'inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-[0.95rem] font-semibold transition';
  const styles =
    variant === 'solid'
      ? 'bg-cyber-red text-white shadow-[0_14px_30px_rgba(212,18,18,0.22)] hover:bg-cyber-redDark'
      : 'border border-[#d7d7d7] bg-white text-[#111] hover:border-[#bbb] hover:bg-[#fafafa]';

  return (
    <motion.a
      href={href}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
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

function FeatureCard({ icon: Icon, label }) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ duration: 0.2 }}
      className="flex h-full flex-col rounded-[24px] border border-[#e6e6e6] bg-white p-6 shadow-[0_12px_28px_rgba(0,0,0,0.05)]"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#111] text-white">
        <Icon className="h-7 w-7" />
      </div>
      <p className="mt-5 whitespace-pre-line font-display text-[0.98rem] leading-[1.34] font-black uppercase tracking-[0.01em] text-[#111]">
        {label}
      </p>
    </motion.div>
  );
}

function ScheduleCard() {
  return (
    <div className="rounded-[28px] border border-[#e6e6e6] bg-white p-7 shadow-[0_14px_28px_rgba(0,0,0,0.06)]">
      <div className="flex items-center gap-3 rounded-full border border-[#e7e7e7] bg-[#fafafa] px-4 py-2 text-[0.8rem] font-bold uppercase tracking-[0.18em] text-[#3a3a3a]">
        <CalendarIcon className="h-4 w-4 text-cyber-red" />
        <span>Launch window</span>
      </div>

      <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-[0.78rem] font-bold uppercase tracking-[0.2em] text-cyber-red">
            ONE THING
          </p>
          <p className="mt-3 max-w-xl font-display text-[clamp(1.65rem,3.2vw,2.6rem)] leading-[1.22] font-black uppercase tracking-[-0.03em] text-[#111]">
            THE CLASS STARTS <span className="text-cyber-red">JULY 2</span>
          </p>
        </div>

        <div className="inline-flex items-center gap-2 rounded-full bg-[#111] px-4 py-2 text-sm font-semibold uppercase tracking-[0.1em] text-white">
          <ClockIcon className="h-4 w-4 text-cyber-red" />
          <span>{seatingLine}</span>
        </div>
      </div>
    </div>
  );
}

function BottomCTA() {
  return (
    <motion.section
      className="rounded-[36px] bg-[#0d0d0d] px-6 py-10 text-white shadow-[0_24px_60px_rgba(0,0,0,0.22)] sm:px-8 sm:py-12"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:items-center">
        <div>
          <p className="text-[0.78rem] font-bold uppercase tracking-[0.24em] text-cyber-red">
            FINAL CALL
          </p>
          <h2 className="mt-4 font-display text-[clamp(1.9rem,3.7vw,3.4rem)] leading-[1.2] font-black uppercase tracking-[-0.035em]">
            DON&apos;T JUST LEARN.
            <span className="block text-cyber-red">DEFEND THE DIGITAL WORLD.</span>
          </h2>
          <p className="mt-5 max-w-2xl text-[1rem] leading-8 text-white/78">
            Secure your seat now! Your cyber journey starts with one step.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {footerFeatures.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="rounded-[24px] border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-cyber-red text-white">
                <Icon className="h-6 w-6" />
              </div>
              <p className="mt-4 whitespace-pre-line text-[0.92rem] font-bold leading-[1.25] uppercase tracking-[0.08em] text-white">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>

        <div className="mt-10 flex flex-col gap-5 rounded-[28px] border border-white/10 bg-white/5 p-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-cyber-red bg-[#160707] text-cyber-red">
            <LockSealIcon className="h-7 w-7" />
          </div>
          <div>
            <p className="text-[0.76rem] font-bold uppercase tracking-[0.22em] text-white/60">
              Secure your seat
            </p>
              <p className="mt-2 text-[1rem] font-semibold text-white">
                {launchDate}
              </p>
          </div>
        </div>

        <CTAButton href="#top" variant="solid">
          <span>Secure your seat now!</span>
        </CTAButton>
      </div>
    </motion.section>
  );
}

export default function App() {
  const prefersReducedMotion = useReducedMotion();
  const stagger = prefersReducedMotion
    ? {}
    : { transition: { staggerChildren: 0.09, delayChildren: 0.05 } };

  return (
    <main
      id="top"
      className="relative overflow-hidden bg-[radial-gradient(circle_at_top,rgba(212,18,18,0.06),transparent_28%),linear-gradient(180deg,#ffffff_0%,#fbfbfb_100%)] text-[#111]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(17,17,17,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(17,17,17,0.03)_1px,transparent_1px)] bg-[size:64px_64px] opacity-40" />

      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-8 sm:px-6 lg:px-8 lg:pb-28 lg:pt-10">
        <header className="rounded-[30px] border border-[#e8e8e8] bg-white/90 px-5 py-4 shadow-[0_12px_34px_rgba(0,0,0,0.05)] backdrop-blur-sm">
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
              <CTAButton href="#cta" variant="solid">
                Secure your seat
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
              <div className="max-w-4xl">
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
              <p className="max-w-2xl text-[1.06rem] leading-8 text-[#4a4a4a] sm:text-[1.15rem]">
                Master the skills. Build the future. <span className="font-semibold text-cyber-red">Be unstoppable.</span>
              </p>
            </Reveal>

            <Reveal>
              <div className="flex flex-col gap-4 sm:flex-row">
                <CTAButton href="#cta" variant="solid">
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

            <Reveal>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#d9d9d9] bg-white px-4 py-2 text-[0.9rem] font-semibold uppercase tracking-[0.12em] text-[#333] shadow-[0_10px_24px_rgba(0,0,0,0.04)]">
                  <ClockIcon className="h-4 w-4 text-cyber-red" />
                  <span>{seatingLine}</span>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-[#d9d9d9] bg-white px-4 py-2 text-[0.9rem] font-semibold uppercase tracking-[0.12em] text-[#333] shadow-[0_10px_24px_rgba(0,0,0,0.04)]">
                  <CalendarIcon className="h-4 w-4 text-cyber-red" />
                  <span>{launchDate}</span>
                </div>
              </div>
            </Reveal>
          </motion.div>

          <Reveal delay={0.08} className="lg:pl-4">
            <div className="rounded-[36px] border border-[#e7e7e7] bg-white p-5 shadow-[0_18px_50px_rgba(0,0,0,0.08)] sm:p-7">
              <HeroPreview />
              <div className="mt-6 grid gap-5 rounded-[28px] bg-[#fafafa] p-6 sm:grid-cols-2">
                <div className="rounded-[22px] border border-[#e5e5e5] bg-white p-4">
                  <p className="text-[0.72rem] font-bold uppercase tracking-[0.22em] text-cyber-red">
                    READY TO BREAK IN TO CYBER?
                  </p>
                  <p className="mt-4 text-[0.96rem] leading-8 text-[#444]">
                    BREAK IN THROUGH A PRACTICAL, BEGINNER-FRIENDLY PATH.
                  </p>
                </div>
                <div className="rounded-[22px] border border-[#111] bg-[#111] p-4 text-white">
                  <p className="text-[0.72rem] font-bold uppercase tracking-[0.22em] text-cyber-red">
                    Limited access
                  </p>
                  <p className="mt-4 text-[0.96rem] leading-8 text-white/80">
                    60 students only available.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        <section className="py-14 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
            <Reveal>
              <div className="rounded-[36px] border border-[#e8e8e8] bg-white p-7 shadow-[0_16px_38px_rgba(0,0,0,0.05)] sm:p-9">
                <SectionHeading
                  eyebrow="Who this is for"
                  title={
                    <>
                      T h i s c o u r s e i s f o r <span className="text-cyber-red">pure beginners</span>
                    </>
                  }
                  description="No prior knowledge needed. We take you from scratch to success."
                />

                <div className="mt-10 rounded-[28px] bg-[#111] p-7 text-white shadow-[0_18px_40px_rgba(0,0,0,0.15)]">
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-cyber-red text-cyber-red">
                      <ShieldLockIcon className="h-8 w-8" />
                    </div>
                    <div>
                      <p className="font-display text-[1.45rem] leading-[1.25] font-black uppercase tracking-[-0.03em]">
                        TO MASTER GUIDE.
                      </p>
                      <p className="mt-4 max-w-xl text-[1rem] leading-8 text-white/75">
                        No prior knowledge needed. We take you from scratch to success.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div className="rounded-[36px] border border-[#e8e8e8] bg-[#fafafa] p-7 shadow-[0_16px_38px_rgba(0,0,0,0.04)] sm:p-9">
                <SectionHeading
                  eyebrow="What you get"
                  title={
                    <>
                      Built for <span className="text-cyber-red">real-world</span> learning
                    </>
                  }
                  description="AI-powered tools, real-world scenarios, certificate of completion, and lifetime support."
                />

                <div className="mt-10 grid gap-5 sm:grid-cols-2">
                  {footerFeatures.map(({ icon: Icon, label }) => (
                    <FeatureCard key={label} icon={Icon} label={label} />
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="why" className="py-14 lg:py-20">
          <Reveal>
            <SectionHeading
              center
              eyebrow="Why you should join?"
              title={
                <>
                  A practical path to <span className="text-cyber-red">job-ready</span> cyber skills
                </>
              }
              description="Booming career field, 100% practical learning, community-first, think like a hacker, and cyber security product development."
            />
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {reasonCards.map((card, index) => (
              <Reveal key={card.number} delay={index * 0.04}>
                <ReasonCard {...card} />
              </Reveal>
            ))}
          </div>
        </section>

        <section id="pricing" className="py-14 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <Reveal>
              <div className="rounded-[36px] border border-[#e8e8e8] bg-white p-7 shadow-[0_16px_38px_rgba(0,0,0,0.05)] sm:p-9">
                <SectionHeading
                  eyebrow="Offer & availability"
                  title={
                    <>
                      <span className="text-cyber-red">Summer offer</span> with limited seats
                    </>
                  }
                  description="Course fee, summer offer, limited seats, and the July 2 launch date."
                />

                <div className="mt-10 grid gap-5 md:grid-cols-3">
                  {heroStats.map((card) => (
                    <StatCard
                      key={`pricing-${card.label}`}
                      label={card.label}
                      value={card.value}
                      prefix={card.prefix}
                      struck={card.struck}
                      tone={card.tone}
                    />
                  ))}
                </div>

                <div className="mt-8 grid gap-5">
                  <div className="rounded-[24px] border border-[#e6e6e6] bg-[#fafafa] p-5">
                    <div className="inline-flex items-center gap-2 rounded-full border border-[#e2e2e2] bg-white px-4 py-2 text-[0.8rem] font-bold uppercase tracking-[0.2em] text-[#444]">
                      <ClockIcon className="h-4 w-4 text-cyber-red" />
                      <span>{seatingLine}</span>
                    </div>
                  </div>
                  <ScheduleCard />
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div
                id="cta"
                className="rounded-[36px] bg-[#111] p-7 text-white shadow-[0_20px_50px_rgba(0,0,0,0.18)] sm:p-9"
              >
                <p className="text-[0.78rem] font-bold uppercase tracking-[0.24em] text-cyber-red">
                  Secure your seat now
                </p>
                <h3 className="mt-5 font-display text-[clamp(2rem,3.7vw,3.4rem)] leading-[1.18] font-black uppercase tracking-[-0.035em]">
                  YOUR CYBER JOURNEY STARTS WITH ONE STEP.
                </h3>
                <p className="mt-5 text-[1rem] leading-8 text-white/72">
                  Secure your seat now! Your cyber journey starts with one step.
                </p>

                <div className="mt-10 rounded-[28px] border border-white/10 bg-white/5 p-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full border border-cyber-red bg-[#170707] text-cyber-red">
                      <LockSealIcon className="h-8 w-8" />
                    </div>
                    <div>
                      <p className="text-[0.72rem] font-bold uppercase tracking-[0.22em] text-white/55">
                        Course start
                      </p>
                      <p className="mt-1 font-display text-[1.55rem] leading-[1.15] font-black uppercase tracking-[-0.03em]">
                        JULY 2
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <CTAButton href="#top" variant="solid">
                    Secure your seat now!
                  </CTAButton>
                  <CTAButton href="#why" variant="ghost">
                    Review why it works
                  </CTAButton>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <BottomCTA />
      </div>
    </main>
  );
}
