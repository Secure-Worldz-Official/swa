import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import mentorImage from '../assets/mentor_photo.jpg';
import cyberJaiImage from '../assets/image2.png';
import { GrowthIcon, LaptopCodeIcon, ShieldLockIcon } from './Icons';

export default function ExperienceCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slides = [
    {
      id: 1,
      category: 'LEARN EXPERIENCE',
      icon: LaptopCodeIcon,
      text: "Let's be honest, traditional coding theory classes are boring. Here, we do not just throw thick PDF textbooks at you. Our classes feel like solving a puzzle with a friend. We learn in an incredibly easy, structured, and fun way where you understand the why behind every single cyber attack. Zero stress, pure practical hacking, and interactive sessions that actually make you want to learn more every day.",
      visual: (
        <div style={{
          display: 'flex',
          aspectRatio: '4/3',
          width: '100%',
          maxWidth: '24rem',
          flexDirection: 'column',
          justifyContent: 'space-between',
          border: '4px solid #000000',
          background: '#000000',
          padding: '1.25rem',
          textAlign: 'left',
          fontFamily: 'monospace',
          fontSize: '11px',
          color: '#00ff00',
          boxShadow: '8px 8px 0px 0px rgba(0,0,0,1)',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{ height: '2px', background: '#ffffff', position: 'absolute', top: 0, left: 0, right: 0 }} />

          <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '2px solid rgba(255,255,255,0.15)', paddingBottom: '0.75rem' }}>
            <div style={{ display: 'flex', gap: '6px' }}>
              <div style={{ height: '8px', width: '8px', background: '#ffffff', border: '2px solid rgba(255,255,255,0.4)' }} />
              <div style={{ height: '8px', width: '8px', background: '#888888', border: '2px solid rgba(255,255,255,0.2)' }} />
              <div style={{ height: '8px', width: '8px', background: '#555555', border: '2px solid rgba(255,255,255,0.1)' }} />
            </div>
            <span style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.15em', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase' }}>Interactive Lab Terminal</span>
          </div>

          <div style={{ userSelect: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', lineHeight: 1.6 }}>
            <p style={{ color: 'rgba(255,255,255,0.4)' }}><span style={{ color: '#ffffff', fontWeight: 700 }}>cyberjai@root:~#</span> nmap -sV -F 192.168.1.105</p>
            <p style={{ color: '#00ff00' }}>⚡ Port 80/tcp open  http  Apache 2.4.41</p>
            <p style={{ color: '#00ff00' }}>⚡ Port 22/tcp open  ssh   OpenSSH 8.2p1</p>
            <p style={{ color: '#ffffff', fontWeight: 700 }}>⚠️ CRITICAL: Exploit vector found (CVE-2021-3156)</p>
            <p style={{ color: 'rgba(255,255,255,0.3)' }}><span style={{ color: '#00ffff', fontWeight: 700 }}>cyberjai@root:~#</span> python exploit.py --target 192.168.1.105</p>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      category: 'CAREER EXPERIENCE',
      icon: GrowthIcon,
      text: 'We are not preparing you to just pass another exam. We are building your launchpad into a high paying tech career. The global demand for cyber skills is exploding, and we give you the exact insider blueprints, portfolio worthy real world labs, and community backing to stand out. From getting your resume noticed to cracking tough technical interviews confidently, we have got your back at every single step.',
      visual: (
        <div style={{
          display: 'flex',
          aspectRatio: '4/3',
          width: '100%',
          maxWidth: '24rem',
          flexDirection: 'column',
          justifyContent: 'space-between',
          border: '4px solid #000000',
          background: '#000000',
          padding: '1.25rem',
          textAlign: 'left',
          color: '#ffffff',
          boxShadow: '8px 8px 0px 0px rgba(0,0,0,1)',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{ height: '2px', background: '#00ff00', position: 'absolute', top: 0, left: 0, right: 0 }} />

          <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '2px solid rgba(255,255,255,0.1)', paddingBottom: '0.75rem' }}>
            <span style={{ fontSize: '10px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.5)' }}>Market Statistics</span>
            <span style={{ border: '2px solid rgba(255,255,255,0.3)', padding: '2px 8px', fontSize: '9px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#ffffff' }}>Global Demand</span>
          </div>

          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '1rem' }}>
            <div>
              <div style={{ marginBottom: '6px', display: 'flex', justifyContent: 'space-between', fontSize: '11px', fontWeight: 700, color: 'rgba(255,255,255,0.8)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                <span>Unfilled Cyber Roles</span>
                <span style={{ fontWeight: 800, color: '#ffffff' }}>3.5 Million+</span>
              </div>
              <div style={{ height: '8px', overflow: 'hidden', background: 'rgba(255,255,255,0.1)', border: '2px solid rgba(255,255,255,0.2)' }}>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '85%' }}
                  transition={{ duration: 1.2, ease: 'easeOut', delay: 0.1 }}
                  style={{ height: '100%', background: '#ffffff' }}
                />
              </div>
            </div>

            <div>
              <div style={{ marginBottom: '6px', display: 'flex', justifyContent: 'space-between', fontSize: '11px', fontWeight: 700, color: 'rgba(255,255,255,0.8)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                <span>Graduate Salary Growth</span>
                <span style={{ fontWeight: 800, color: '#00ff00' }}>+140% Avg</span>
              </div>
              <div style={{ height: '8px', overflow: 'hidden', background: 'rgba(255,255,255,0.1)', border: '2px solid rgba(255,255,255,0.2)' }}>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '95%' }}
                  transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
                  style={{ height: '100%', background: '#00ff00' }}
                />
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      category: 'MENTOR EXPERT',
      icon: ShieldLockIcon,
      text: 'You are not learning from an academic lecturer who only reads off slides. You are training directly under a battle tested elite cybersecurity consultant. Someone who deals with real world cyber threats, live red teaming simulations, and enterprise grade AI defense systems daily. You get raw industry experience, direct one on one mentorship, and the exact roadmap used by top tier global pros.',
      visual: (
        <div style={{ position: 'relative', margin: '0 auto', width: '100%', maxWidth: '250px', overflow: 'hidden', border: '4px solid #000000', boxShadow: '8px 8px 0px 0px rgba(0,0,0,1)', aspectRatio: '3/4', transition: 'transform 0.5s' }}
          className="group"
        >
          {/* Full-bleed background image */}
          <img
            src={cyberJaiImage}
            alt="Cyber Jai Lead Instructor"
            style={{ position: 'absolute', inset: 0, height: '100%', width: '100%', objectFit: 'cover', objectPosition: 'top', transition: 'transform 0.7s' }}
          />
          {/* Dark gradient overlay */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.3) 40%, transparent 100%)' }} />
          {/* White border overlay */}
          <div style={{ position: 'absolute', inset: 0, boxShadow: 'inset 0 0 0 3px rgba(255,255,255,0.15)' }} />

          {/* Bottom name block */}
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1.25rem', textAlign: 'left' }}>
            <div style={{ marginBottom: '0.625rem', height: '2px', width: '1.5rem', background: '#ffffff' }} />
            <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.125rem', fontWeight: 800, textTransform: 'uppercase', lineHeight: 1, letterSpacing: '-0.02em', color: '#ffffff' }}>
              CYBER JAI
            </h4>
            <p style={{ marginTop: '0.375rem', fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.5)' }}>
              Secure Worldz Official
            </p>
            <p style={{ marginTop: '0.125rem', fontSize: '0.6rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.16em', color: 'rgba(255,255,255,0.7)' }}>
              Cybersecurity &amp; AI Mentor
            </p>
          </div>
        </div>
      ),
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 7500);

    return () => clearInterval(timer);
  }, [slides.length]);

  const handleDotClick = (index) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir) => ({
      x: dir > 0 ? -80 : 80,
      opacity: 0,
      scale: 0.98,
    }),
  };

  return (
    <div style={{ margin: '3rem auto 0', maxWidth: '64rem', padding: '0 1rem' }} className="sm:px-6">
      <div style={{
        position: 'relative',
        overflow: 'hidden',
        border: '4px solid #000000',
        background: '#ffffff',
        padding: '1.5rem',
        boxShadow: '12px 12px 0px 0px rgba(0,0,0,1)',
      }} className="sm:p-10 md:p-12 lg:p-14">
        {/* Subtle grid pattern */}
        <div style={{
          pointerEvents: 'none',
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(rgba(0,0,0,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.025) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          opacity: 0.5,
        }} />

        <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          {/* Main content slider area */}
          <div style={{ position: 'relative', overflow: 'hidden', minHeight: '460px', display: 'flex', alignItems: 'center' }} className="sm:min-h-[400px] md:min-h-[350px] lg:min-h-[300px]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                style={{ width: '100%' }}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center text-left"
              >
                {/* Left Side: Content */}
                <div className="md:col-span-7" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '1.25rem' }}>
                  {/* Category label row */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ display: 'flex', height: '2.5rem', width: '2.5rem', flexShrink: 0, alignItems: 'center', justifyContent: 'center', border: '4px solid #000000', background: '#000000', color: '#ffffff' }}>
                      {React.createElement(slides[activeIndex].icon, { style: { height: '1.25rem', width: '1.25rem' } })}
                    </div>
                    <span style={{ fontSize: 'clamp(0.7rem,1.1vw,0.8rem)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.2em', color: '#000000', fontFamily: 'var(--font-heading)' }}>
                      {slides[activeIndex].category}
                    </span>
                  </div>

                  {/* Body text — directly below category, no duplicate h3 */}
                  <p style={{ fontSize: 'clamp(0.9rem,1.2vw,1.05rem)', fontWeight: 500, lineHeight: 1.75, color: '#555555', maxWidth: '36rem' }}>
                    {slides[activeIndex].text}
                  </p>
                </div>

                {/* Right Side: Visual Element */}
                <div className="md:col-span-5" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                  <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    {slides[activeIndex].visual}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Footer Controls */}
          <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', gap: '1.25rem', borderTop: '4px solid #000000', paddingTop: '1.5rem' }} className="sm:flex-row">
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <button
                type="button"
                onClick={handlePrev}
                style={{ display: 'flex', height: '2.5rem', width: '2.5rem', cursor: 'pointer', alignItems: 'center', justifyContent: 'center', border: '4px solid #000000', color: '#ffffff', background: '#16a34a', boxShadow: '4px 4px 0px 0px rgba(0,0,0,1)', transition: 'box-shadow 0.12s, transform 0.12s, background 0.12s' }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translate(4px,4px)'; e.currentTarget.style.background = '#15803d'; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = '4px 4px 0px 0px rgba(0,0,0,1)'; e.currentTarget.style.transform = 'none'; e.currentTarget.style.background = '#16a34a'; e.currentTarget.style.color = '#fff'; }}
              >
                <svg style={{ height: '1.25rem', width: '1.25rem' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="square" strokeLinejoin="miter" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                type="button"
                onClick={handleNext}
                style={{ display: 'flex', height: '2.5rem', width: '2.5rem', cursor: 'pointer', alignItems: 'center', justifyContent: 'center', border: '4px solid #000000', color: '#ffffff', background: '#16a34a', boxShadow: '4px 4px 0px 0px rgba(0,0,0,1)', transition: 'box-shadow 0.12s, transform 0.12s, background 0.12s' }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translate(4px,4px)'; e.currentTarget.style.background = '#15803d'; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = '4px 4px 0px 0px rgba(0,0,0,1)'; e.currentTarget.style.transform = 'none'; e.currentTarget.style.background = '#16a34a'; e.currentTarget.style.color = '#fff'; }}
              >
                <svg style={{ height: '1.25rem', width: '1.25rem' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="square" strokeLinejoin="miter" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              {slides.map((slide, idx) => (
                <button
                  type="button"
                  key={slide.id}
                  onClick={() => handleDotClick(idx)}
                  style={{
                    height: '10px',
                    cursor: 'pointer',
                    border: '2px solid #000000',
                    background: idx === activeIndex ? '#16a34a' : '#ffffff',
                    width: idx === activeIndex ? '2.5rem' : '10px',
                    transition: 'all 0.3s ease',
                  }}
                />
              ))}
            </div>

            <div style={{ display: 'none', height: '4px', width: '9rem', overflow: 'hidden', background: '#e0e0e0', border: '2px solid #000' }} className="sm:block">
              <motion.div
                key={activeIndex}
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 7.5, ease: 'linear' }}
                style={{ height: '100%', background: '#000000' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
