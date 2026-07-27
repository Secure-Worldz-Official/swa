import { Link, Navigate, useParams } from 'react-router-dom';
import { CheckIcon, ClockIcon, ShieldLockIcon } from '../components/Icons';
import SiteNavbar from '../components/SiteNavbar';
import Footer from '../components/Footer';
import { courseMap } from '../data/courses';
import cyberJaiImage from '../assets/image2.png';

/* ── Timeline checklist item ──────────────────────────────────────────────── */
function TimelineItem({ text }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      padding: '1rem 1.25rem',
      borderBottom: '1px solid #e8e8e8',
    }} className="last:border-0">
      <span style={{
        display: 'flex',
        height: '1.5rem',
        width: '1.5rem',
        flexShrink: 0,
        alignItems: 'center',
        justifyContent: 'center',
        background: '#000000',
        borderRadius: '50%',
      }}>
        <CheckIcon style={{ height: '0.75rem', width: '0.75rem', color: '#ffffff' }} />
      </span>
      <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: '#444444' }}>{text}</p>
    </div>
  );
}

/* ── Stat pill ─────────────────────────────────────────────────────────────── */
function StatPill({ label, value }) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      border: '4px solid #000000',
      background: '#ffffff',
      padding: '1.1rem 0.75rem',
      textAlign: 'center',
      boxShadow: '4px 4px 0px 0px rgba(0,0,0,1)',
    }}>
      <p style={{ fontSize: '0.6rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.2em', color: '#000000', marginBottom: '0.4rem', fontFamily: 'var(--font-heading)' }}>{label}</p>
      <p style={{ fontSize: '0.88rem', fontWeight: 800, color: '#000000', lineHeight: 1.25, fontFamily: 'var(--font-heading)', textAlign: 'center' }}>{value}</p>
    </div>
  );
}

/* ── Section label ─────────────────────────────────────────────────────────── */
function SectionLabel({ icon: Icon, children }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
      <span style={{ height: '1.25rem', width: '4px', background: '#000000', display: 'inline-block', flexShrink: 0 }} />
      <h2 style={{ fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.25em', color: '#888888', fontFamily: 'var(--font-heading)' }}>
        {children}
      </h2>
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
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh', overflowX: 'hidden', background: '#ffffff', color: '#000000' }}>

      {/* ── Navbar ── */}
      <div className="fluid-container" style={{ paddingTop: '1.25rem' }}>
        <SiteNavbar />
      </div>

      {/* ── Page content ── */}
      <div className="fluid-container" style={{ paddingBottom: '7rem' }}>

        {/* ── Back crumb ── */}
        <div style={{ margin: '2rem 0' }}>
          <Link
            to="/courses"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.18em', color: '#888888', textDecoration: 'none', transition: 'color 0.15s', fontFamily: 'var(--font-heading)' }}
            onMouseEnter={e => e.currentTarget.style.color = '#000'}
            onMouseLeave={e => e.currentTarget.style.color = '#888'}
          >
            <span>←</span>
            Back to Courses
          </Link>
        </div>

        {/* ── HERO BAND ── */}
        <div style={{ paddingBottom: '2.5rem', borderBottom: '4px solid #000000', marginBottom: '3rem' }}>
          <p style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.3em', color: '#000000', fontFamily: 'var(--font-heading)' }}>
            {course.eyebrow}
          </p>
          <h1 style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 800,
            textTransform: 'uppercase',
            lineHeight: 0.95,
            letterSpacing: '-0.03em',
            color: '#000000',
            marginTop: '0.75rem',
            fontSize: 'clamp(2.8rem, 7vw, 6rem)',
          }}>
            {course.title}
          </h1>
          <p style={{ maxWidth: '52rem', marginTop: '1.25rem', fontSize: '1.05rem', lineHeight: 1.75, color: '#555555' }}>
            {course.hook}
          </p>
        </div>

        {/* ── MAIN 2-COL GRID ── */}
        <div className="course-detail-grid">

          {/* ── LEFT COLUMN ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>

            {/* Course Overview */}
            <section>
              <SectionLabel>Course Overview</SectionLabel>
              <p style={{ fontSize: '1rem', lineHeight: 1.85, color: '#444444' }}>
                {course.summary}
              </p>
            </section>

            {/* Stats pills — 4-col row */}
            <section className="course-stats-grid">
              <StatPill label="Duration" value={course.duration} />
              <StatPill label="Schedule" value={course.timingTrack} />
              <StatPill label="Format" value="Live + Recorded" />
              <StatPill label="Certificate" value="On Completion" />
            </section>

            {/* Timeline & What You Get */}
            <section>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <span style={{
                  display: 'flex', height: '1.75rem', width: '1.75rem', flexShrink: 0,
                  alignItems: 'center', justifyContent: 'center',
                  border: '4px solid #000000', background: '#ffffff', color: '#000000',
                }}>
                  <ClockIcon style={{ height: '0.9rem', width: '0.9rem' }} />
                </span>
                <h2 style={{ fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.25em', color: '#888888', fontFamily: 'var(--font-heading)' }}>
                  Timeline &amp; What You Get
                </h2>
              </div>
              {/* Checklist box — retro bordered */}
              <div style={{ border: '4px solid #000000', background: '#ffffff', boxShadow: '6px 6px 0px 0px rgba(0,0,0,1)' }}>
                {timelineItems.map((item) => (
                  <TimelineItem key={item} text={item} />
                ))}
              </div>
            </section>

            {/* Active Offer bar */}
            <section style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              border: '4px solid #000000',
              background: '#f8f8f8',
              padding: '1.25rem 1.5rem',
              boxShadow: '6px 6px 0px 0px rgba(0,0,0,1)',
            }}>
              <div style={{ display: 'flex', height: '2.5rem', width: '2.5rem', flexShrink: 0, alignItems: 'center', justifyContent: 'center', border: '4px solid #000', background: '#000', color: '#fff' }}>
                <ShieldLockIcon style={{ height: '1.25rem', width: '1.25rem' }} />
              </div>
              <div>
                <p style={{ fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.2em', color: '#000000', marginBottom: '0.2rem', fontFamily: 'var(--font-heading)' }}>
                  Active Offer
                </p>
                <p style={{ fontSize: '0.9rem', fontWeight: 700, color: '#333333' }}>
                  {course.offerTag} — Enroll now at{' '}
                  <span style={{ color: '#000000', fontWeight: 800 }}>{course.offerPrice}</span>{' '}
                  <span style={{ color: '#999999', textDecoration: 'line-through', fontWeight: 400 }}>{course.originalPrice}</span>
                </p>
              </div>
            </section>

          </div>

          {/* ── RIGHT COLUMN: sticky sidebar ── */}
          <aside className="course-detail-sidebar">

            {/* Mentor photo card */}
            <div style={{
              position: 'relative',
              width: '100%',
              overflow: 'hidden',
              border: '4px solid #000000',
              boxShadow: '12px 12px 0px 0px rgba(0,0,0,1)',
              aspectRatio: '4/5',
            }}>
              <img
                src={cyberJaiImage}
                alt="Jaiganesh Lakshmanan — Cyber Jai"
                style={{ position: 'absolute', inset: 0, height: '100%', width: '100%', objectFit: 'cover', objectPosition: 'top', transition: 'transform 0.7s' }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
              />
              {/* Dark gradient overlay */}
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.4) 45%, transparent 100%)' }} />

              {/* LIVE MENTOR badge top-right */}
              <div style={{ position: 'absolute', right: '1rem', top: '1rem' }}>
                <span style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  border: '4px solid #ffffff', background: 'rgba(0,0,0,0.75)',
                  padding: '0.25rem 0.75rem', fontSize: '0.6rem', fontWeight: 800,
                  textTransform: 'uppercase', letterSpacing: '0.15em', color: '#ffffff',
                  fontFamily: 'var(--font-heading)',
                }}>
                  <span style={{ height: '6px', width: '6px', flexShrink: 0, background: '#ffffff', display: 'inline-block', borderRadius: '50%' }} />
                  Live Mentor
                </span>
              </div>

              {/* Name & role overlay at bottom */}
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1.5rem' }}>
                <h3 style={{
                  fontFamily: 'var(--font-heading)', fontSize: '1.75rem', fontWeight: 800,
                  textTransform: 'uppercase', lineHeight: 1, letterSpacing: '-0.02em', color: '#ffffff',
                }}>
                  JAIGANESH
                  <span style={{ display: 'block' }}>LAKSHMANAN</span>
                </h3>
                <p style={{ marginTop: '0.5rem', fontSize: '0.68rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.65)', fontFamily: 'var(--font-heading)' }}>
                  Cybersecurity Engineer &amp; AI Mentor
                </p>
                <p style={{ marginTop: '0.75rem', fontSize: '0.8rem', lineHeight: 1.65, color: 'rgba(255,255,255,0.6)' }}>
                  Founder &amp; CEO of SecureWorldz. Certified Cybersecurity
                  Specialist and AI pioneer behind{' '}
                  <span style={{ fontWeight: 700, color: 'rgba(255,255,255,0.9)' }}>Vibe Coding</span>
                  {' '}and the{' '}
                  <span style={{ fontWeight: 700, color: 'rgba(255,255,255,0.9)' }}>Drago</span>
                  {' '}industry workshop.
                </p>
              </div>
            </div>

            {/* Pricing action card */}
            <div style={{ overflow: 'hidden', border: '4px solid #000000', background: '#ffffff', boxShadow: '8px 8px 0px 0px rgba(0,0,0,1)' }}>

              {/* Price block */}
              <div style={{ padding: '1.5rem', borderBottom: '4px solid #000000' }}>
                <p style={{ fontSize: '0.62rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.22em', color: '#000000', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>
                  Pricing
                </p>
                <div style={{ display: 'flex', alignItems: 'flex-end', gap: '1.25rem' }}>
                  <div>
                    <p style={{ fontSize: '0.6rem', color: '#888888', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 700, marginBottom: '0.2rem', fontFamily: 'var(--font-heading)' }}>Was</p>
                    <p style={{ fontSize: '1.3rem', fontWeight: 800, color: '#aaaaaa', textDecoration: 'line-through', fontFamily: 'var(--font-heading)' }}>{course.originalPrice}</p>
                  </div>
                  <div>
                    <p style={{ fontSize: '0.6rem', color: '#000000', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 700, marginBottom: '0.2rem', fontFamily: 'var(--font-heading)' }}>{course.offerTag}</p>
                    <p style={{ fontSize: '2.75rem', fontWeight: 800, color: '#000000', lineHeight: 1, fontFamily: 'var(--font-heading)' }}>{course.offerPrice}</p>
                  </div>
                </div>
              </div>

              {/* Highlights checklist */}
              <div style={{ padding: '1.25rem 1.5rem', borderBottom: '4px solid #000000', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[course.duration, course.timingTrack, 'Experience Labs', 'Credentials Validation'].map((item) => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.85rem', color: '#444444' }}>
                    <span style={{ display: 'flex', height: '1.25rem', width: '1.25rem', flexShrink: 0, alignItems: 'center', justifyContent: 'center', background: '#000000', borderRadius: '50%' }}>
                      <CheckIcon style={{ height: '0.7rem', width: '0.7rem', color: '#ffffff' }} />
                    </span>
                    {item}
                  </div>
                ))}
              </div>

              {/* Enroll CTA */}
              <div style={{ padding: '1.5rem' }}>
                <Link
                  to="/enroll"
                  style={{
                    display: 'flex',
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: '#000000',
                    color: '#ffffff',
                    border: '4px solid #000000',
                    boxShadow: '6px 6px 0px 0px rgba(0,0,0,1)',
                    padding: '1rem',
                    fontSize: '0.88rem',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    letterSpacing: '0.2em',
                    textDecoration: 'none',
                    fontFamily: 'var(--font-heading)',
                    transition: 'box-shadow 0.12s ease, transform 0.12s ease',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translate(6px,6px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.boxShadow = '6px 6px 0px 0px rgba(0,0,0,1)'; e.currentTarget.style.transform = 'none'; }}
                >
                  Enroll Now →
                </Link>
                <p style={{ marginTop: '0.75rem', textAlign: 'center', fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.16em', color: '#888888', fontFamily: 'var(--font-heading)' }}>
                  Limited seats available
                </p>
              </div>

            </div>
          </aside>
        </div>
      </div>

      {/* ── Footer ── */}
      <Footer />
    </div>
  );
}
