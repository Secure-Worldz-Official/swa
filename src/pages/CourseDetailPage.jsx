import { Link, Navigate, useParams } from 'react-router-dom';
import { CheckIcon, ClockIcon, ShieldLockIcon } from '../components/Icons';
import SiteNavbar from '../components/SiteNavbar';
import { courseMap } from '../data/courses';
import cyberJaiImage from '../assets/image2.png';

/* ── Checklist row ─────────────────────────────────────────────────────── */
function ChecklistItem({ text }) {
  return (
    <div className="flex items-start gap-3 py-3 border-b border-white/6 last:border-0">
      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyber-red/90">
        <CheckIcon className="h-3 w-3 text-white" />
      </span>
      <p className="text-[0.92rem] leading-7 text-white/68">{text}</p>
    </div>
  );
}

/* ── Stat pill ─────────────────────────────────────────────────────────── */
function StatPill({ label, value }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-white/8 bg-white/[0.04] p-4 text-center">
      <p className="text-[0.6rem] font-black uppercase tracking-[0.2em] text-cyber-red mb-1">{label}</p>
      <p className="text-[0.88rem] font-black text-white leading-snug">{value}</p>
    </div>
  );
}

export default function CourseDetailPage() {
  const { courseId } = useParams();
  const course = courseMap[courseId];

  if (!course) return <Navigate to="/courses" replace />;

  const timelineItems = [
    course.duration,
    course.timingTrack,
    ...(course.timelinePoints ?? []),
    course.certificate,
  ];

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden bg-[#08090f] text-white">
      {/* ── Background ── */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_10%,rgba(212,18,18,0.14),transparent_42%),radial-gradient(ellipse_at_80%_80%,rgba(212,18,18,0.08),transparent_40%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.028)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.028)_1px,transparent_1px)] bg-[size:72px_72px] opacity-25" />

      <div className="relative mx-auto w-full max-w-7xl px-4 pb-28 pt-5 sm:px-6 lg:px-8 lg:pt-7">
        <SiteNavbar />

        {/* ── Back crumb ── */}
        <div className="mt-8 mb-12">
          <Link
            to="/courses"
            className="group inline-flex items-center gap-2 text-[0.75rem] font-black uppercase tracking-[0.18em] text-white/40 transition-colors duration-200 hover:text-white"
          >
            <span className="transition-transform duration-200 group-hover:-translate-x-1">←</span>
            Back to Courses
          </Link>
        </div>

        {/* ══════════════════════════════════════════════════════════════════
            HERO BAND  — full-width eyebrow + title, then 2-col below
        ══════════════════════════════════════════════════════════════════ */}
        <div className="mb-12 space-y-3 border-b border-white/8 pb-12">
          <p className="text-[0.68rem] font-black uppercase tracking-[0.3em] text-cyber-red">
            {course.eyebrow}
          </p>
          <h1
            className="font-display font-black uppercase leading-[0.95] tracking-[-0.03em] text-white"
            style={{ fontSize: 'clamp(2.8rem, 7vw, 6rem)' }}
          >
            {course.title}
          </h1>
          <p className="max-w-3xl pt-2 text-[1.05rem] leading-8 text-white/55">
            {course.hook}
          </p>
        </div>

        {/* ══════════════════════════════════════════════════════════════════
            MAIN 2-COL  [left: content | right: mentor + action card]
        ══════════════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_360px] lg:gap-16">

          {/* ── LEFT ── */}
          <div className="space-y-12">

            {/* Course Summary */}
            <section>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-5 w-[3px] rounded-full bg-cyber-red" />
                <h2 className="text-[0.68rem] font-black uppercase tracking-[0.25em] text-white/50">
                  Course Overview
                </h2>
              </div>
              <p className="text-[1rem] leading-[1.85] text-white/65">
                {course.summary}
              </p>
            </section>

            {/* Stats row */}
            <section className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              <StatPill label="Duration" value={course.duration} />
              <StatPill label="Schedule" value={course.timingTrack} />
              <StatPill label="Format" value="Live + Recorded" />
              <StatPill label="Certificate" value="On Completion" />
            </section>

            {/* What you will get */}
            <section>
              <div className="mb-6 flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-cyber-red/30 bg-cyber-red/10 text-cyber-red">
                  <ClockIcon className="h-4 w-4" />
                </span>
                <h2 className="text-[0.68rem] font-black uppercase tracking-[0.25em] text-white/50">
                  Timeline &amp; What You Get
                </h2>
              </div>
              <div className="rounded-2xl border border-white/8 bg-white/[0.03] px-6 py-2">
                {timelineItems.map((item) => (
                  <ChecklistItem key={item} text={item} />
                ))}
              </div>
            </section>

            {/* Offer tag highlight */}
            <section className="flex items-center gap-4 rounded-2xl border border-cyber-red/20 bg-cyber-red/[0.06] px-6 py-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyber-red/15 text-cyber-red">
                <ShieldLockIcon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-[0.65rem] font-black uppercase tracking-[0.2em] text-cyber-red mb-0.5">
                  Active Offer
                </p>
                <p className="text-sm font-bold text-white/80">
                  {course.offerTag} — Enroll now at{' '}
                  <span className="text-white font-black">{course.offerPrice}</span>{' '}
                  <span className="text-white/38 line-through font-normal">{course.originalPrice}</span>
                </p>
              </div>
            </section>
          </div>

          {/* ── RIGHT: sticky panel ── */}
          <aside className="flex flex-col gap-6 lg:sticky lg:top-28">

            {/* Mentor card — image2.png full bleed */}
            <div className="group relative w-full overflow-hidden rounded-3xl shadow-[0_40px_100px_rgba(0,0,0,0.55)]"
                 style={{ aspectRatio: '4/5' }}>
              <img
                src={cyberJaiImage}
                alt="Jaiganesh Lakshmanan — Cyber Jai"
                className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/30 to-black/10" />
              {/* Red ring */}
              <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-cyber-red/20" />

              {/* Live badge */}
              <div className="absolute right-4 top-4">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-cyber-red/40 bg-black/70 px-3 py-1.5 text-[0.6rem] font-black uppercase tracking-widest text-cyber-red backdrop-blur-sm">
                  <span className="h-1.5 w-1.5 shrink-0 animate-pulse rounded-full bg-cyber-red" />
                  Live Mentor
                </span>
              </div>

              {/* Bottom info */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="mb-3 h-px w-10 bg-cyber-red/60" />
                <h3 className="font-display text-2xl font-black uppercase leading-none tracking-tight text-white">
                  Jaiganesh
                  <span className="block text-cyber-red">Lakshmanan</span>
                </h3>
                <p className="mt-2 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-white/50">
                  Cybersecurity Engineer &amp; AI Mentor
                </p>
                <p className="mt-3 text-[0.78rem] leading-6 text-white/55">
                  Founder &amp; CEO of SecureWorldz. Certified Cybersecurity
                  Specialist and AI pioneer behind{' '}
                  <span className="font-semibold text-white/80">Vibe Coding</span>{' '}
                  and the{' '}
                  <span className="font-semibold text-white/80">Drago</span>{' '}
                  industry workshop.
                </p>
              </div>
            </div>

            {/* Action card */}
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.05] backdrop-blur-xl">
              {/* Price block */}
              <div className="px-6 pt-6 pb-5 border-b border-white/8">
                <p className="text-[0.62rem] font-black uppercase tracking-[0.22em] text-cyber-red mb-3">
                  Pricing
                </p>
                <div className="flex items-end gap-4">
                  <div>
                    <p className="text-[0.6rem] text-white/35 uppercase tracking-widest font-bold mb-0.5">Was</p>
                    <p className="text-xl font-black text-white/35 line-through">{course.originalPrice}</p>
                  </div>
                  <div>
                    <p className="text-[0.6rem] text-cyber-red uppercase tracking-widest font-bold mb-0.5">{course.offerTag}</p>
                    <p className="text-4xl font-black text-white leading-none">{course.offerPrice}</p>
                  </div>
                </div>
              </div>

              {/* Highlights */}
              <div className="px-6 py-5 space-y-2.5 border-b border-white/8">
                {[course.duration, course.timingTrack, 'Experience Labs', 'Credentials Validation'].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-[0.82rem] text-white/65">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyber-red/90">
                      <CheckIcon className="h-3 w-3 text-white" />
                    </span>
                    {item}
                  </div>
                ))}
              </div>

              {/* Enroll CTA */}
              <div className="px-6 py-6">
                <Link
                  to="/enroll"
                  className="flex w-full items-center justify-center rounded-2xl bg-cyber-red py-4 text-sm font-black uppercase tracking-[0.2em] text-white shadow-[0_18px_48px_rgba(212,18,18,0.32)] transition-all duration-300 hover:bg-cyber-redDark hover:shadow-[0_24px_60px_rgba(212,18,18,0.4)] active:scale-[0.98]"
                >
                  Enroll Now →
                </Link>
                <p className="mt-3 text-center text-[0.65rem] font-bold uppercase tracking-[0.16em] text-white/30">
                  Limited seats available
                </p>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </div>
  );
}
