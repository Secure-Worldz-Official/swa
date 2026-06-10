import { Link, Navigate, useParams } from 'react-router-dom';
import { CheckIcon, ClockIcon } from '../components/Icons';
import SiteNavbar from '../components/SiteNavbar';
import { courseMap } from '../data/courses';

function MetricRow({ title, value }) {
  return (
    <div className="rounded-2xl border border-white/8 bg-black/18 px-4 py-4">
      <p className="text-[0.66rem] font-black uppercase tracking-[0.18em] text-white/42">
        {title}
      </p>
      <p className="mt-2 text-sm font-semibold leading-6 text-white/80">
        {value}
      </p>
    </div>
  );
}

function ChecklistItem({ text }) {
  return (
    <div className="flex gap-4 rounded-[24px] border border-white/10 bg-white/[0.045] p-5 backdrop-blur transition-colors hover:border-cyber-red/35 hover:bg-white/[0.06]">
      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyber-red text-white">
        <CheckIcon className="h-4 w-4" />
      </span>
      <p className="text-sm leading-7 text-white/72 sm:text-[0.98rem]">{text}</p>
    </div>
  );
}

export default function CourseDetailPage() {
  const { courseId } = useParams();
  const course = courseMap[courseId];

  if (!course) {
    return <Navigate to="/courses" replace />;
  }

  const timelineItems = [
    course.duration,
    course.timingTrack,
    ...(course.timelinePoints ?? []),
    course.certificate,
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0B0F19] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(212,18,18,0.18),transparent_28%),radial-gradient(circle_at_88%_12%,rgba(212,18,18,0.11),transparent_30%),linear-gradient(180deg,#111827_0%,#0B0F19_52%,#0B0F19_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:68px_68px] opacity-30" />

      <main className="relative mx-auto max-w-7xl px-4 pb-20 pt-5 sm:px-6 lg:px-8 lg:pt-7">
        <SiteNavbar />

        <section className="grid gap-10 py-14 lg:grid-cols-[1.08fr_0.92fr] lg:items-start lg:gap-14 lg:py-20">
          <div className="space-y-8">
            <Link
              to="/courses"
              className="inline-flex items-center gap-2 text-[0.78rem] font-black uppercase tracking-[0.16em] text-white/60 transition-colors hover:text-white"
            >
              <span className="text-lg leading-none" aria-hidden="true">
                &larr;
              </span>
              Back to Courses
            </Link>

            <div className="space-y-5">
              <p className="text-[0.75rem] font-black uppercase tracking-[0.22em] text-cyber-red">
                {course.eyebrow}
              </p>
              <h1 className="max-w-4xl font-display text-[clamp(2.8rem,6.5vw,6rem)] font-black uppercase leading-[0.98] tracking-[-0.04em] text-white">
                {course.title}
              </h1>
              <p className="max-w-3xl text-[1.05rem] leading-9 text-white/70 sm:text-[1.12rem]">
                {course.hook}
              </p>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-white/[0.045] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.22)] backdrop-blur-xl">
              <p className="text-[0.7rem] font-black uppercase tracking-[0.2em] text-cyber-red">
                Course Overview
              </p>
              <p className="mt-4 text-[1rem] leading-8 text-white/70 sm:text-[1.06rem]">
                {course.summary}
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-cyber-red/35 bg-cyber-red/10 text-cyber-red">
                  <ClockIcon className="h-4 w-4" />
                </span>
                <p className="text-[0.72rem] font-black uppercase tracking-[0.18em] text-white/50">
                  Course Timeline and Value Propositions
                </p>
              </div>

              <div className="grid gap-4">
                {timelineItems.map((item) => (
                  <ChecklistItem key={item} text={item} />
                ))}
              </div>
            </div>
          </div>

          <aside className="lg:sticky lg:top-28">
            <div className="rounded-[34px] border border-white/10 bg-white/[0.06] p-6 shadow-[0_30px_90px_rgba(0,0,0,0.38)] backdrop-blur-2xl">
              <p className="text-[0.7rem] font-black uppercase tracking-[0.2em] text-cyber-red">
                Pricing and Action
              </p>

              <div className="mt-5 rounded-[28px] border border-white/10 bg-black/24 p-5">
                <div className="flex flex-wrap items-end gap-x-4 gap-y-2">
                  <div>
                    <p className="text-[0.66rem] font-black uppercase tracking-[0.18em] text-white/40">
                      Original Price
                    </p>
                    <p className="text-2xl font-black text-white/50 line-through">
                      {course.originalPrice}
                    </p>
                  </div>
                  <div>
                    <p className="text-[0.66rem] font-black uppercase tracking-[0.18em] text-white/40">
                      Active Offer
                    </p>
                    <p className="text-4xl font-black text-white">
                      {course.offerPrice}
                    </p>
                  </div>
                </div>
                <p className="mt-3 text-[0.7rem] font-black uppercase tracking-[0.18em] text-cyber-red">
                  {course.offerTag}
                </p>
              </div>

              <div className="mt-6 grid gap-4">
                <MetricRow title="Duration Metric" value={course.duration} />
                <MetricRow title="Timing Track" value={course.timingTrack} />
                <MetricRow
                  title="Credentials"
                  value={course.certificate}
                />
              </div>

              <Link
                to="/enroll"
                className="mt-7 inline-flex w-full items-center justify-center rounded-[26px] bg-cyber-red px-6 py-5 text-sm font-black uppercase tracking-[0.18em] text-white shadow-[0_20px_48px_rgba(212,18,18,0.3)] transition-all duration-300 hover:bg-cyber-redDark hover:shadow-[0_28px_60px_rgba(212,18,18,0.35)]"
              >
                ENROLL NOW
              </Link>

              <div className="mt-6 rounded-[28px] border border-white/10 bg-white/[0.045] p-4">
                <p className="text-[0.7rem] font-black uppercase tracking-[0.2em] text-cyber-red">
                  Your Mentor
                </p>
                <div className="mt-4 flex items-center gap-4">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-cyber-red/35 bg-[radial-gradient(circle_at_30%_30%,rgba(212,18,18,0.34),rgba(255,255,255,0.06)_55%,rgba(0,0,0,0.2)_100%)] shadow-[0_0_0_6px_rgba(212,18,18,0.08)]">
                    <span className="text-lg font-black tracking-[0.12em] text-white">
                      CJ
                    </span>
                  </div>
                  <div className="min-w-0">
                    <p className="text-base font-black uppercase tracking-[0.1em] text-white">
                      Cyber Jai
                    </p>
                    <p className="mt-1 text-sm text-white/60">
                      Cybersecurity Engineer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </section>
      </main>
    </div>
  );
}
