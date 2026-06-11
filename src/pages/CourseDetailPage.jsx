import { Link, Navigate, useParams } from 'react-router-dom';
import { CheckIcon, ClockIcon } from '../components/Icons';
import SiteNavbar from '../components/SiteNavbar';
import { courseMap } from '../data/courses';
import mentorPhoto from '../assets/mentor_photo.jpg';

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

function FeatureChip({ text }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.045] px-4 py-2 text-[0.72rem] font-black uppercase tracking-[0.14em] text-white/75">
      <span className="flex h-4 w-4 items-center justify-center rounded-full bg-cyber-red text-white">
        <CheckIcon className="h-2.5 w-2.5" />
      </span>
      <span className="whitespace-nowrap">{text}</span>
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
    <div className="relative w-full min-h-screen overflow-x-hidden bg-[#0B0F19] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(212,18,18,0.18),transparent_28%),radial-gradient(circle_at_88%_12%,rgba(212,18,18,0.11),transparent_30%),linear-gradient(180deg,#111827_0%,#0B0F19_52%,#0B0F19_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:68px_68px] opacity-30" />

      <main className="relative mx-auto w-full max-w-7xl px-4 pb-20 pt-5 sm:px-6 lg:px-8 lg:pt-7">
        <SiteNavbar />

        <section className="grid grid-cols-1 gap-10 py-14 lg:grid-cols-[1.08fr_0.92fr] lg:items-start lg:gap-14 lg:py-20">
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
              <h1 className="max-w-4xl font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black uppercase leading-[0.98] tracking-[-0.04em] text-white">
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

          <aside className="w-full lg:sticky lg:top-28">
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

              <div className="mt-6 flex flex-wrap gap-3">
                <FeatureChip text={course.duration} />
                <FeatureChip text={course.timingTrack} />
                <FeatureChip text="Experience Labs" />
                <FeatureChip text="Credentials Validation" />
              </div>

              <Link
                to="/enroll"
                className="mt-7 inline-flex w-full items-center justify-center rounded-[26px] bg-cyber-red px-6 py-5 text-sm font-black uppercase tracking-[0.18em] text-white shadow-[0_20px_48px_rgba(212,18,18,0.3)] transition-all duration-300 hover:bg-cyber-redDark hover:shadow-[0_28px_60px_rgba(212,18,18,0.35)]"
              >
                ENROLL NOW
              </Link>

              <div className="mt-6 flex flex-col items-center text-center pt-6 border-t border-red-900/30">
                {/* Section label + badge */}
                <div className="flex items-center justify-center gap-3 mb-5">
                  <p className="text-[0.7rem] font-black uppercase tracking-[0.2em] text-cyber-red">
                    Mentor Spotlight
                  </p>
                  <span className="rounded-full border border-cyber-red/25 bg-cyber-red/10 px-3 py-1 text-[0.62rem] font-black uppercase tracking-[0.18em] text-cyber-red">
                    Live Mentor
                  </span>
                </div>

                {/* Circular profile photo */}
                <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-red-600 shadow-[0_0_15px_rgba(255,0,0,0.3)] shrink-0">
                  <img
                    src={mentorPhoto}
                    alt="Jaiganesh Lakshmanan"
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                {/* Name */}
                <h3 className="text-lg font-bold tracking-wide mt-3 text-white">
                  Jaiganesh Lakshmanan
                </h3>

                {/* Role */}
                <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">
                  Cybersecurity Engineer &amp; AI Mentor
                </p>
              </div>
            </div>
          </aside>
        </section>
      </main>
    </div>
  );
}
