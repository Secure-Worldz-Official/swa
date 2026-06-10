import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import mentorImage from '../assets/mentor_photo.jpg';
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
        <div className="flex h-full w-full max-w-sm flex-col justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-[#121212] to-[#080808] p-5 text-left font-mono text-[11px] text-green-400 shadow-2xl">
          <div className="mb-3 flex items-center gap-1.5 border-b border-white/5 pb-3">
            <div className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
            <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
            <div className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
            <span className="ml-1.5 text-[9px] text-white/40">bash root at cyberjai</span>
          </div>
          <div className="select-none space-y-1.5">
            <p className="text-white/40">$ nmap scan 192.168.1.105</p>
            <p className="text-green-400">Port 80 tcp open HTTP Server</p>
            <p className="text-green-400">Port 22 tcp open SSH SecureShell</p>
            <p className="font-bold text-cyber-red animate-pulse">Vulnerability detected for lab exploit</p>
            <p className="text-white/30">$ python exploit.py target 192.168.1.105</p>
            <p className="font-bold text-cyan-400">Payload injected. Opening reverse shell...</p>
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
        <div className="flex h-full w-full max-w-sm flex-col justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-[#121212] to-[#080808] p-5 text-left text-white shadow-2xl">
          <div className="mb-4 flex items-center justify-between border-b border-white/5 pb-3">
            <span className="text-[10px] font-black uppercase tracking-widest text-white/40">Market Traction</span>
            <span className="rounded-full border border-green-500/20 bg-green-500/10 px-2.5 py-0.5 text-[9px] font-black uppercase tracking-widest text-green-400">Active</span>
          </div>
          <div className="space-y-4">
            <div>
              <div className="mb-1.5 flex justify-between text-[11px] font-bold text-white/80">
                <span>Cyber Security Unfulfilled Roles</span>
                <span className="font-black text-cyber-red">3.5 Million+</span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
                <motion.div initial={{ width: 0 }} animate={{ width: '85%' }} transition={{ duration: 1.2, ease: 'easeOut' }} className="h-full rounded-full bg-cyber-red" />
              </div>
            </div>
            <div>
              <div className="mb-1.5 flex justify-between text-[11px] font-bold text-white/80">
                <span>Average Graduate Salary Growth</span>
                <span className="font-black text-green-400">+140%</span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
                <motion.div initial={{ width: 0 }} animate={{ width: '95%' }} transition={{ duration: 1.2, ease: 'easeOut' }} className="h-full rounded-full bg-green-500" />
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
        <div className="group relative mx-auto flex h-full w-full max-w-[220px] flex-col justify-center overflow-visible rounded-2xl border border-white/10 bg-black/40 p-3 shadow-[0_25px_60px_rgba(0,0,0,0.35)] backdrop-blur-md transition-all duration-500 hover:border-cyber-red/30">
          <div className="absolute -inset-1 -z-10 rounded-2xl bg-gradient-to-r from-cyber-red to-red-600 opacity-10 blur-xl transition-opacity duration-700 group-hover:opacity-25" />

          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl border border-white/5 bg-[#0c0c0c] shadow-inner">
            <img
              src={mentorImage}
              alt="Cyber Jai Lead Instructor"
              className="h-full w-full object-contain brightness-[1.02] contrast-[1.05] transition-transform duration-700 group-hover:scale-[1.02]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>

          <div className="mt-3 text-center">
            <span className="mb-1.5 inline-block rounded-md border border-cyber-red/35 bg-cyber-red/10 px-2 py-0.5 text-[0.6rem] font-black uppercase tracking-widest text-cyber-red shadow-[0_0_15px_rgba(212,18,18,0.1)]">
              ELITE CONSULTANT
            </span>
            <h4 className="mb-0.5 font-display text-base font-black uppercase leading-none tracking-tight text-white">
              CYBER JAI
            </h4>
            <p className="text-[0.58rem] font-bold uppercase tracking-widest text-white/45">
              Secure Worldz Official
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
      x: dir > 0 ? 120 : -120,
      opacity: 0,
      scale: 0.97,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir) => ({
      x: dir > 0 ? -120 : 120,
      opacity: 0,
      scale: 0.97,
    }),
  };

  return (
    <div className="mx-auto mt-12 max-w-4xl px-4">
      <div className="relative overflow-hidden rounded-[40px] border border-gray-100 bg-white p-8 text-center shadow-[0_30px_70px_rgba(0,0,0,0.04)] md:p-14" style={{ height: '680px' }}>
        <div className="pointer-events-none absolute -bottom-16 -right-16 p-8 opacity-[0.015]">
          <ShieldLockIcon className="h-72 w-72 text-black" />
        </div>

        <div className="relative z-10 flex h-full flex-col">
          <div className="relative flex-1 overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: [0.25, 1, 0.5, 1] }}
                className="absolute inset-0 flex flex-col items-center justify-center px-2"
              >
                <div className="mb-5 flex flex-col items-center space-y-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyber-red/10 text-cyber-red">
                    {React.createElement(slides[activeIndex].icon, { className: 'h-5 w-5' })}
                  </div>
                  <h3 className="font-display text-2xl font-black uppercase leading-none tracking-tight text-black sm:text-3xl">
                    {slides[activeIndex].category}
                  </h3>
                </div>

                <p className="mb-5 max-w-lg text-[0.95rem] font-medium leading-relaxed text-gray-500">
                  {slides[activeIndex].text}
                </p>

                <div className="flex w-full justify-center" style={{ height: '220px' }}>
                  {slides[activeIndex].visual}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex shrink-0 flex-col items-center justify-between gap-5 border-t border-gray-100 pt-6 sm:flex-row">
            <div className="flex gap-3">
              <button
                type="button"
                onClick={handlePrev}
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-gray-150 text-gray-400 transition-colors hover:border-black hover:text-black active:scale-95"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-gray-150 text-gray-400 transition-colors hover:border-black hover:text-black active:scale-95"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            <div className="flex items-center gap-3">
              {slides.map((slide, idx) => (
                <button
                  type="button"
                  key={slide.id}
                  onClick={() => handleDotClick(idx)}
                  className={`h-2.5 cursor-pointer rounded-full transition-all duration-300 ${
                    idx === activeIndex ? 'w-10 bg-cyber-red' : 'w-2.5 bg-gray-200 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <div className="hidden h-1 w-36 overflow-hidden rounded-full bg-gray-100 sm:block">
              <motion.div
                key={activeIndex}
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 7.5, ease: 'linear' }}
                className="h-full bg-cyber-red"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
