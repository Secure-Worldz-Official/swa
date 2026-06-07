import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import mentorImage from '../assets/mentor_photo.jpg';
import { LaptopCodeIcon, GrowthIcon, ShieldLockIcon } from './Icons';

export default function ExperienceCarousel() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [direction, setDirection] = useState(0); // -1 for left, 1 for right

    const slides = [
        {
            id: 1,
            category: "LEARN EXPERIENCE",
            icon: LaptopCodeIcon,
            text: "Let’s be honest—traditional coding theory classes are boring. Here, we don’t just throw thick PDF textbooks at you. Our classes feel like solving a puzzle with a friend. We learn in an incredibly easy, structured, and fun way where you understand the 'why' behind every single cyber attack. Zero stress, pure practical hacking, and interactive sessions that actually make you want to learn more every day.",
            visual: (
                <div className="bg-gradient-to-br from-[#1e1e1e] to-[#0a0a0a] rounded-3xl border border-white/10 p-6 font-mono text-[11px] text-green-400 shadow-xl relative h-56 flex flex-col justify-between overflow-hidden">
                    <div className="flex items-center gap-1.5 border-b border-white/5 pb-3 mb-3">
                        <div className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                        <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                        <div className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
                        <span className="text-[9px] text-white/40 ml-1.5">bash - root@cyberjai</span>
                    </div>
                    <div className="space-y-2 flex-1 select-none text-left">
                        <p className="text-white/40">$ nmap -sS -O 192.168.1.105</p>
                        <p className="text-green-400">● Port 80/tcp OPEN (HTTP Server)</p>
                        <p className="text-green-400">● Port 22/tcp OPEN (SSH SecureShell)</p>
                        <p className="text-cyber-red animate-pulse font-bold">● Vuln Detect: CVE-2026-X (RCE Exploit)</p>
                        <p className="text-white/30">$ python exploit.py --target 192.168.1.105</p>
                        <p className="text-cyan-400 font-bold">● Payload injected. Opening reverse shell...</p>
                    </div>
                    <div className="text-right text-white/20 text-[9px] font-black uppercase tracking-wider">Session Active</div>
                </div>
            )
        },
        {
            id: 2,
            category: "CAREER EXPERIENCE",
            icon: GrowthIcon,
            text: "We are not preparing you to just pass another exam; we are building your launchpad into a high-paying tech career. The global demand for cyber skills is exploding, and we give you the exact insider blueprints, portfolio-worthy real-world labs, and community backing to stand out. From getting your resume noticed to cracking tough technical interviews confidently, we've got your back at every single step.",
            visual: (
                <div className="bg-gradient-to-br from-[#1e1e1e] to-[#0a0a0a] rounded-3xl border border-white/10 p-6 text-white shadow-xl relative h-56 flex flex-col justify-between overflow-hidden">
                    <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4">
                        <span className="text-[10px] font-black uppercase tracking-widest text-white/40">Market Traction</span>
                        <span className="text-[9px] font-black uppercase tracking-widest text-green-400 bg-green-500/10 px-2.5 py-0.5 rounded-full border border-green-500/20">Active</span>
                    </div>
                    <div className="space-y-4 flex-1 flex flex-col justify-center">
                        <div>
                            <div className="flex justify-between text-[11px] font-bold text-white/80 mb-1.5">
                                <span>Cyber Security Unfulfilled Roles</span>
                                <span className="text-cyber-red font-black">3.5 Million+</span>
                            </div>
                            <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                                <motion.div initial={{ width: 0 }} animate={{ width: "85%" }} transition={{ duration: 1.2, ease: "easeOut" }} className="h-full bg-cyber-red rounded-full" />
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between text-[11px] font-bold text-white/80 mb-1.5">
                                <span>Average Graduate Salary Growth</span>
                                <span className="text-green-400 font-black">+140%</span>
                            </div>
                            <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                                <motion.div initial={{ width: 0 }} animate={{ width: "95%" }} transition={{ duration: 1.2, ease: "easeOut" }} className="h-full bg-green-500 rounded-full" />
                            </div>
                        </div>
                    </div>
                    <div className="text-left text-[9px] font-black text-white/30 uppercase tracking-widest">CYBER JAI INSIDER BLUEPRINT</div>
                </div>
            )
        },
        {
            id: 3,
            category: "MENTOR EXPERT",
            icon: ShieldLockIcon,
            text: "You aren't learning from an academic lecturer who only reads off slides. You are training directly under a battle-tested elite cybersecurity consultant. Someone who deals with real-world cyber threats, live red-teaming simulations, and enterprise-grade AI defense systems daily. You get raw industry experience, direct 1-on-1 mentorship, and the exact roadmap used by top-tier global pros.",
            visual: (
                <div className="relative h-56 w-full max-w-[280px] mx-auto rounded-3xl overflow-hidden border border-cyber-red/20 shadow-[0_10px_35px_rgba(212,18,18,0.15)] group bg-[#111]">
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90 z-10" />
                    <img
                        src={mentorImage}
                        alt="Cyber Jai Lead Instructor"
                        className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-125 brightness-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 select-none pointer-events-none"
                    />
                    <div className="absolute inset-0 border-[2px] border-cyber-red/0 group-hover:border-cyber-red/35 rounded-3xl transition-colors duration-500 z-20 pointer-events-none" />
                    <div className="absolute bottom-5 left-5 right-5 text-left z-20">
                        <p className="text-[0.6rem] font-black text-cyber-red uppercase tracking-widest mb-0.5">ELITE CONSULTANT</p>
                        <h4 className="text-white font-display font-black text-base uppercase tracking-tight">CYBER JAI</h4>
                    </div>
                </div>
            )
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setDirection(1);
            setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 7500); // Transitions automatically every 7.5s

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

    // Framer motion animation variants
    const slideVariants = {
        enter: (dir) => ({
            x: dir > 0 ? 100 : -100,
            opacity: 0
        }),
        center: {
            x: 0,
            opacity: 1
        },
        exit: (dir) => ({
            x: dir > 0 ? -100 : 100,
            opacity: 0
        })
    };

    return (
        <div className="max-w-5xl mx-auto px-4 mt-12">
            <div className="bg-white border border-gray-100 rounded-[36px] shadow-[0_20px_50px_rgba(0,0,0,0.03)] p-8 md:p-14 relative min-h-[500px] flex flex-col justify-between overflow-hidden">
                {/* Visual tech background */}
                <div className="absolute -bottom-12 -left-12 p-8 opacity-[0.02] pointer-events-none">
                    <ShieldLockIcon className="h-64 w-64 text-black" />
                </div>

                <div className="relative z-10 flex-1 flex flex-col justify-center">
                    <AnimatePresence initial={false} custom={direction} mode="wait">
                        <motion.div
                            key={activeIndex}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.45, ease: [0.25, 1, 0.5, 1] }}
                            className="grid md:grid-cols-[1.2fr_0.8fr] gap-8 md:gap-14 items-center"
                        >
                            {/* Slide Left Side: Info */}
                            <div className="text-left space-y-6">
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-xl bg-cyber-red/10 flex items-center justify-center text-cyber-red">
                                        {React.createElement(slides[activeIndex].icon, { className: "h-5 w-5" })}
                                    </div>
                                    <span className="text-[0.7rem] font-black text-cyber-red uppercase tracking-[0.2em] bg-cyber-red/5 px-3 py-1 rounded-full border border-cyber-red/10">
                                        {slides[activeIndex].category}
                                    </span>
                                </div>
                                <h3 className="text-3xl font-display font-black uppercase text-black tracking-tight leading-tight">
                                    Why This Matters
                                </h3>
                                <p className="text-[0.95rem] text-gray-500 leading-relaxed font-medium">
                                    {slides[activeIndex].text}
                                </p>
                            </div>

                            {/* Slide Right Side: Visual Accent */}
                            <div className="flex justify-center items-center">
                                <div className="w-full max-w-sm">
                                    {slides[activeIndex].visual}
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Navigation Controls & Dot Indicators */}
                <div className="relative z-10 mt-10 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                    {/* Navigation Buttons */}
                    <div className="flex gap-2">
                        <button
                            onClick={handlePrev}
                            className="h-10 w-10 rounded-full border border-gray-150 flex items-center justify-center text-gray-400 hover:text-black hover:border-black transition-colors active:scale-95 cursor-pointer"
                        >
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            onClick={handleNext}
                            className="h-10 w-10 rounded-full border border-gray-150 flex items-center justify-center text-gray-400 hover:text-black hover:border-black transition-colors active:scale-95 cursor-pointer"
                        >
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    {/* Progress Slider Dots */}
                    <div className="flex items-center gap-3">
                        {slides.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => handleDotClick(idx)}
                                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                                    idx === activeIndex 
                                        ? 'w-8 bg-cyber-red' 
                                        : 'w-2.5 bg-gray-200 hover:bg-gray-400'
                                }`}
                            />
                        ))}
                    </div>

                    {/* Auto progression tracker line */}
                    <div className="hidden sm:block w-36 h-1 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div
                            key={activeIndex}
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 7.5, ease: "linear" }}
                            className="h-full bg-cyber-red"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
