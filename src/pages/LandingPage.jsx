import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ClockIcon, CertificateIcon, GlobeIcon, ShieldLockIcon } from '../components/Icons';
import { FooterBanner, HeroPreview } from '../components/PosterBlocks';
import Reveal from '../components/Reveal';
import SiteNavbar from '../components/SiteNavbar';
import ExperienceCarousel from '../components/ExperienceCarousel';
import Footer from '../components/Footer';

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

function CTAButton({ children, variant = 'solid', to }) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-[0.95rem] font-bold uppercase tracking-[0.18em] transition-all duration-300';
  const styles =
    variant === 'solid'
      ? 'bg-cyber-red text-white shadow-[0_14px_30px_rgba(212,18,18,0.22)] hover:bg-cyber-redDark hover:shadow-[0_20px_40px_rgba(212,18,18,0.32)] active:scale-[0.98]'
      : variant === 'hero'
        ? 'border border-black/10 bg-[#1f1f1f] text-white shadow-[0_18px_40px_rgba(0,0,0,0.12)] hover:border-cyber-red hover:bg-cyber-red hover:shadow-[0_20px_42px_rgba(212,18,18,0.2)] active:scale-[0.98]'
        : 'border border-[#d7d7d7] bg-white text-[#111] hover:border-[#bbb] hover:bg-[#fafafa] active:scale-[0.98]';

  return (
    <motion.div whileHover={{ y: -2 }} className="inline-block">
      <Link to={to} className={`${base} ${styles}`}>
        {children}
      </Link>
    </motion.div>
  );
}

export default function LandingPage() {
  const prefersReducedMotion = useReducedMotion();
  const stagger = prefersReducedMotion
    ? {}
    : { transition: { staggerChildren: 0.09, delayChildren: 0.05 } };

  return (
    <div className="relative overflow-hidden bg-[#f6f6f4] text-[#111]">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(17,17,17,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(17,17,17,0.045)_1px,transparent_1px)] bg-[size:72px_72px] opacity-45" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-white/90 to-transparent" />
      <div id="top" className="relative mx-auto max-w-7xl px-4 pb-0 pt-5 sm:px-6 lg:px-8 lg:pt-7">
        <SiteNavbar theme="light" />

        <section className="grid min-h-[calc(100vh-120px)] gap-14 py-14 sm:py-16 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-10 lg:py-20">
          <motion.div
            className="mx-auto flex max-w-2xl flex-col items-center text-center lg:mx-0 lg:items-start lg:text-left"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <Reveal>
              <div className="inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-black/10 bg-white/80 px-5 py-3 shadow-[0_12px_34px_rgba(0,0,0,0.05)] backdrop-blur">
                <ShieldLockIcon className="h-5 w-5 text-cyber-red" />
                <span className="max-w-full text-[0.76rem] font-bold uppercase leading-[1.35] tracking-[0.18em] text-black/60">
                  Everything You Need
                </span>
              </div>
            </Reveal>

            <Reveal>
              <h1 className="font-display text-[clamp(3.55rem,9vw,7.8rem)] font-black uppercase leading-[0.88] tracking-[-0.07em] text-[#171717] sm:text-[clamp(3.8rem,8.6vw,8.8rem)]">
                <span className="block">Master the</span>
                <span className="block text-[#2b2b2b]">
                  Cyber Security <span className="text-cyber-red">With AI.</span>
                </span>
                <span className="block text-[0.36em] font-black uppercase leading-[1.18] tracking-[0.24em] text-[#3f3f3f] sm:text-[0.22em]">
                  Hunt threats. Automate defense. Stay one step ahead.
                </span>
              </h1>
            </Reveal>

            <Reveal>
              <p className="mx-auto mt-4 max-w-3xl text-[1.05rem] leading-8 text-black/52 sm:text-[1.18rem]">
                Build practical cybersecurity confidence with AI assisted lessons,
                live labs, and a clear route from beginner to certification ready.
              </p>
            </Reveal>

            <Reveal>
              <div className="mt-10 flex flex-col items-center gap-4">
                <CTAButton to="/courses" variant="hero">
                  <span>GET STARTED</span>
                </CTAButton>
                <p className="max-w-[24rem] text-center text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-black/42 lg:text-left">
                  Limited seats for the next live cohort
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div className="mt-10 grid w-full max-w-3xl gap-3 sm:grid-cols-4">
                {[
                  { icon: ClockIcon, text: 'Live Labs' },
                  { icon: GlobeIcon, text: 'AI Tools' },
                  { icon: CertificateIcon, text: 'Certificate' },
                  { icon: ShieldLockIcon, text: 'Mentor Led' },
                ].map(({ icon: Icon, text }) => (
                  <div
                    key={text}
                    className="flex items-center justify-center gap-2 rounded-full border border-black/10 bg-white/80 px-4 py-3 text-[0.72rem] font-black uppercase tracking-[0.18em] text-black/66 shadow-[0_10px_24px_rgba(0,0,0,0.04)]"
                  >
                    <Icon className="h-4 w-4 text-cyber-red" />
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </motion.div>

          <Reveal delay={0.08} className="mx-auto w-full max-w-[640px] lg:mx-0 lg:justify-self-end">
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

          <section className="border-t border-gray-100 bg-gray-50/20 py-24">
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
