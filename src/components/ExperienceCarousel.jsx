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
        <div className="flex aspect-[4/3] w-full max-w-sm flex-col justify-between rounded-2xl border border-white/10 bg-[#0e0e13] p-5 text-left font-mono text-[11px] text-green-400 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-cyber-red/50 to-transparent" />

          <div className="mb-4 flex items-center justify-between border-b border-white/5 pb-3">
            <div className="flex gap-1.5">
              <div className="h-2 w-2 rounded-full bg-red-500/80" />
              <div className="h-2 w-2 rounded-full bg-yellow-500/80" />
              <div className="h-2 w-2 rounded-full bg-green-500/80" />
            </div>
            <span className="text-[9px] font-bold tracking-widest text-white/30 uppercase">Interactive Lab Terminal</span>
          </div>

          <div className="select-none space-y-2 font-mono leading-relaxed">
            <p className="text-white/40"><span className="text-cyber-red font-bold">cyberjai@root:~#</span> nmap -sV -F 192.168.1.105</p>
            <p className="text-green-400">⚡ Port 80/tcp open  http  Apache 2.4.41</p>
            <p className="text-green-400">⚡ Port 22/tcp open  ssh   OpenSSH 8.2p1</p>
            <p className="font-bold text-cyber-red animate-pulse">⚠️ CRITICAL: Exploit vector found (CVE-2021-3156)</p>
            <p className="text-white/30"><span className="text-cyan-400 font-bold">cyberjai@root:~#</span> python exploit.py --target 192.168.1.105</p>
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
        <div className="flex aspect-[4/3] w-full max-w-sm flex-col justify-between rounded-2xl border border-white/10 bg-[#0e0e13] p-5 text-left text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-green-500/40 to-transparent" />

          <div className="mb-4 flex items-center justify-between border-b border-white/5 pb-3">
            <span className="text-[10px] font-black uppercase tracking-widest text-white/40">Market Statistics</span>
            <span className="rounded-full border border-green-500/20 bg-green-500/10 px-2.5 py-0.5 text-[9px] font-black uppercase tracking-widest text-green-400">Global Demand</span>
          </div>

          <div className="flex-1 flex flex-col justify-center space-y-4">
            <div>
              <div className="mb-1.5 flex justify-between text-[11px] font-bold text-white/80 uppercase tracking-wider">
                <span>Unfilled Cyber Roles</span>
                <span className="font-black text-cyber-red">3.5 Million+</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-white/5">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '85%' }}
                  transition={{ duration: 1.2, ease: 'easeOut', delay: 0.1 }}
                  className="h-full rounded-full bg-gradient-to-r from-cyber-red to-[#ff4d4d]"
                />
              </div>
            </div>

            <div>
              <div className="mb-1.5 flex justify-between text-[11px] font-bold text-white/80 uppercase tracking-wider">
                <span>Graduate Salary Growth</span>
                <span className="font-black text-green-400">+140% Avg</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-white/5">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '95%' }}
                  transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
                  className="h-full rounded-full bg-gradient-to-r from-green-500 to-emerald-400"
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
        <div className="group relative mx-auto w-full max-w-[250px] overflow-hidden rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.45)] transition-transform duration-500 hover:scale-[1.02]" style={{ aspectRatio: '3/4' }}>
          {/* Full-bleed background image */}
          <img
            src={cyberJaiImage}
            alt="Cyber Jai Lead Instructor"
            className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.05]"
          />
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.92)_0%,rgba(0,0,0,0.3)_40%,transparent_100%)]" />
          {/* Red glow ring */}
          <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-cyber-red/20" />
          {/* Top badge */}

          {/* Bottom name block */}
          <div className="absolute bottom-0 left-0 right-0 p-5 text-left">
            <div className="mb-2.5 h-[2px] w-6 bg-cyber-red" />
            <h4 className="font-display text-lg font-black uppercase leading-none tracking-tight text-white drop-shadow-md">
              CYBER JAI
            </h4>
            <p className="mt-1.5 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-white/50">
              Secure Worldz Official
            </p>
            <p className="mt-0.5 text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-cyber-red">
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
    <div className="mx-auto mt-12 max-w-5xl px-4 sm:px-6">
      <div className="relative overflow-hidden rounded-[32px] border border-gray-100 bg-gradient-to-b from-white to-gray-50/50 p-6 sm:p-10 md:p-12 lg:p-14 shadow-[0_30px_70px_rgba(0,0,0,0.035)]">
        {/* Subtle grid pattern background */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(17,17,17,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(17,17,17,0.012)_1px,transparent_1px)] bg-[size:32px_32px] opacity-40" />

        <div className="pointer-events-none absolute -bottom-16 -right-16 p-8 opacity-[0.012]">
          <ShieldLockIcon className="h-72 w-72 text-black" />
        </div>

        <div className="relative z-10 flex flex-col justify-between">
          {/* Main content slider area */}
          <div className="relative overflow-hidden min-h-[460px] sm:min-h-[400px] md:min-h-[350px] lg:min-h-[300px] flex items-center">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center text-left w-full"
              >
                {/* Left Side: Content */}
                <div className="md:col-span-7 flex flex-col justify-center space-y-4 md:space-y-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyber-red/10 text-cyber-red shadow-[0_4px_12px_rgba(212,18,18,0.1)]">
                      {React.createElement(slides[activeIndex].icon, { className: 'h-5 w-5' })}
                    </div>
                    <span className="text-[clamp(0.7rem,1.1vw,0.8rem)] font-bold uppercase tracking-[0.2em] text-cyber-red">
                      {slides[activeIndex].category}
                    </span>
                  </div>

                  <h3 className="font-display text-[clamp(1.5rem,2.5vw,2rem)] font-black uppercase leading-none tracking-tight text-black">
                    {slides[activeIndex].category}
                  </h3>

                  <p className="text-[clamp(0.88rem,1.15vw,1rem)] font-medium leading-relaxed text-gray-500 max-w-xl">
                    {slides[activeIndex].text}
                  </p>
                </div>

                {/* Right Side: Visual Element */}
                <div className="md:col-span-5 flex items-center justify-center w-full">
                  <div className="relative w-full flex justify-center items-center">
                    {slides[activeIndex].visual}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Footer Controls */}
          <div className="mt-8 flex flex-col items-center justify-between gap-5 border-t border-gray-100 pt-6 sm:flex-row">
            <div className="flex gap-3">
              <button
                type="button"
                onClick={handlePrev}
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-gray-200 text-gray-400 transition-all hover:border-cyber-red hover:bg-cyber-red/5 hover:text-cyber-red active:scale-95"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-gray-200 text-gray-400 transition-all hover:border-cyber-red hover:bg-cyber-red/5 hover:text-cyber-red active:scale-95"
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
                  className={`h-2.5 cursor-pointer rounded-full transition-all duration-300 ${idx === activeIndex ? 'w-10 bg-cyber-red' : 'w-2.5 bg-gray-200 hover:bg-gray-400'
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
