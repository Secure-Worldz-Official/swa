import { Link } from 'react-router-dom';
import { courses } from '../data/courses';
import SiteNavbar from '../components/SiteNavbar';

export default function CoursesCatalogPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0B0F19] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(212,18,18,0.18),transparent_28%),radial-gradient(circle_at_88%_12%,rgba(212,18,18,0.11),transparent_30%),linear-gradient(180deg,#121826_0%,#0B0F19_52%,#0B0F19_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:68px_68px] opacity-30" />

      <main className="relative mx-auto max-w-7xl px-4 pb-20 pt-5 sm:px-6 lg:px-8 lg:pt-7">
        <SiteNavbar />

        <section className="py-14 sm:py-16 lg:py-20">
          <div className="max-w-4xl">
            <p className="text-[0.75rem] font-black uppercase tracking-[0.22em] text-cyber-red">
              Course Catalog
            </p>
            <h1 className="mt-4 font-display text-[clamp(2.6rem,6vw,5.6rem)] font-black uppercase leading-[1.02] text-white">
              Three tracks. One clean path.
            </h1>
            <p className="mt-6 max-w-3xl text-[1.05rem] leading-9 text-white/68">
              Browse the available tracks, compare the previews, and open the detail page for pricing, scheduling, and certificate information.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {courses.map((course) => (
              <article
                key={course.id}
                className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.045] p-7 shadow-[0_24px_70px_rgba(0,0,0,0.24)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyber-red/35 hover:bg-white/[0.06]"
              >
                <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-cyber-red/5 transition-transform duration-500 group-hover:scale-110" />
                <p className="text-[0.66rem] font-black uppercase tracking-[0.18em] text-cyber-red">
                  {course.eyebrow}
                </p>
                <h2 className="mt-5 font-display text-2xl font-black uppercase leading-tight text-white">
                  {course.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-white/64">
                  {course.preview}
                </p>
                <div className="mt-6 space-y-3 rounded-[24px] border border-white/8 bg-black/20 p-5">
                  <div>
                    <p className="text-[0.66rem] font-black uppercase tracking-[0.18em] text-white/38">
                      Duration
                    </p>
                    <p className="mt-1 text-sm font-semibold text-white/80">
                      {course.duration}
                    </p>
                  </div>
                  <div>
                    <p className="text-[0.66rem] font-black uppercase tracking-[0.18em] text-white/38">
                      Offer
                    </p>
                    <p className="mt-1 text-sm font-semibold text-white/80">
                      {course.offerTag} {course.offerPrice}
                    </p>
                  </div>
                </div>
                <Link
                  to={`/courses/${course.id}`}
                  className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-cyber-red px-5 py-4 text-sm font-black uppercase tracking-widest text-white shadow-[0_18px_42px_rgba(212,18,18,0.28)] transition-all duration-300 hover:bg-cyber-redDark"
                >
                  View Course Details
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
