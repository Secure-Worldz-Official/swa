import { Link } from 'react-router-dom';
import { courses } from '../data/courses';
import SiteNavbar from '../components/SiteNavbar';
import Footer from '../components/Footer';

export default function CoursesCatalogPage() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', background: '#ffffff', color: '#000000' }}>

      {/* ── Navbar — same fluid-container as the home page ── */}
      <div className="fluid-container" style={{ paddingTop: '1.25rem' }}>
        <SiteNavbar />
      </div>

      {/* ── Page content — same fluid-container ── */}
      <main className="fluid-container" style={{ paddingBottom: '5rem' }}>

        {/* ── Hero heading band ── */}
        <section style={{ paddingTop: 'clamp(3rem,6vw,5rem)' }}>
          {/* Eyebrow */}
          <p style={{
            fontSize: '0.75rem',
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: '0.22em',
            color: '#000000',
            fontFamily: 'var(--font-heading)',
          }}>
            Course Catalog
          </p>

          {/* Big heading — left-aligned, full available width */}
          <h1 style={{
            marginTop: '1rem',
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2.8rem, 7vw, 6rem)',
            fontWeight: 800,
            textTransform: 'uppercase',
            lineHeight: 1.0,
            color: '#000000',
            letterSpacing: '-0.04em',
            maxWidth: '18ch',
          }}>
            Three tracks. One clean path.
          </h1>

          {/* Description — same left edge as heading */}
          <p style={{
            marginTop: '1.5rem',
            maxWidth: '52rem',
            fontSize: '1.05rem',
            lineHeight: 1.75,
            color: '#555555',
          }}>
            Browse the available tracks, compare the previews, and open the detail page for pricing,
            scheduling, and certificate information.
          </p>

          {/* Short retro divider */}
          <div style={{ height: '4px', background: '#000000', margin: '2.5rem 0 3rem', width: '5rem' }} />

          {/* ── 3-column card grid ── */}
          <div style={{ display: 'grid', gap: '1.5rem' }} className="lg:grid-cols-3 lg:items-stretch">
            {courses.map((course) => (
              <article
                key={course.id}
                style={{
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden',
                  border: '4px solid #000000',
                  background: '#ffffff',
                  padding: '1.75rem',
                  boxShadow: '8px 8px 0px 0px rgba(0,0,0,1)',
                  transition: 'box-shadow 0.12s ease, transform 0.12s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = '12px 12px 0px 0px rgba(0,0,0,1)'; e.currentTarget.style.transform = 'translate(-2px,-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = '8px 8px 0px 0px rgba(0,0,0,1)'; e.currentTarget.style.transform = 'none'; }}
              >
                {/* Corner accent */}
                <div style={{ position: 'absolute', right: 0, top: 0, height: '4rem', width: '4rem', background: '#000000', opacity: 0.05 }} />

                {/* Card content grows to fill available space */}
                <div style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
                  <p style={{ fontSize: '0.66rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.18em', color: '#000000', fontFamily: 'var(--font-heading)' }}>
                    {course.eyebrow}
                  </p>
                  <h2 style={{ marginTop: '1.25rem', fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 800, textTransform: 'uppercase', lineHeight: 1.2, color: '#000000' }}>
                    {course.title}
                  </h2>
                  <p style={{ marginTop: '1rem', fontSize: '0.88rem', lineHeight: 1.75, color: '#555555' }}>
                    {course.preview}
                  </p>

                  {/* Stats box */}
                  <div style={{ marginTop: '1.5rem', border: '4px solid #000000', background: '#f8f8f8', padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    <div>
                      <p style={{ fontSize: '0.66rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.18em', color: '#888888', fontFamily: 'var(--font-heading)' }}>
                        Duration
                      </p>
                      <p style={{ marginTop: '0.25rem', fontSize: '0.88rem', fontWeight: 600, color: '#000000' }}>
                        {course.duration}
                      </p>
                    </div>
                    <div>
                      <p style={{ fontSize: '0.66rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.18em', color: '#888888', fontFamily: 'var(--font-heading)' }}>
                        Offer
                      </p>
                      <p style={{ marginTop: '0.25rem', fontSize: '0.88rem', fontWeight: 600, color: '#000000' }}>
                        {course.offerTag} {course.offerPrice}
                      </p>
                    </div>
                  </div>

                  {/* mt-auto pushes button to the bottom of every card equally */}
                  <div style={{ marginTop: 'auto', paddingTop: '1.5rem' }}>
                    <Link
                      to={`/courses/${course.id}`}
                      style={{
                        display: 'inline-flex',
                        width: '100%',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: '#000000',
                        color: '#ffffff',
                        border: '4px solid #000000',
                        boxShadow: '6px 6px 0px 0px rgba(0,0,0,1)',
                        padding: '0.875rem 1.25rem',
                        fontSize: '0.82rem',
                        fontWeight: 800,
                        textTransform: 'uppercase',
                        letterSpacing: '0.12em',
                        textDecoration: 'none',
                        fontFamily: 'var(--font-heading)',
                        transition: 'box-shadow 0.12s ease, transform 0.12s ease',
                      }}
                      onMouseEnter={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translate(6px,6px)'; }}
                      onMouseLeave={e => { e.currentTarget.style.boxShadow = '6px 6px 0px 0px rgba(0,0,0,1)'; e.currentTarget.style.transform = 'none'; }}
                    >
                      View Course Details
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <Footer />
    </div>
  );
}
