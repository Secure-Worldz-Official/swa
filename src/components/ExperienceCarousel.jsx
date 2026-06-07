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
                <div className="bg-gradient-to-br from-[#121212] to-[#080808] rounded-2xl border border-white/10 p-6 font-mono text-[11px] text-green-400 shadow-2xl relative w-full max-w-md mx-auto text-left">
                    <div className="flex items-center gap-1.5 border-b border-white/5 pb-3 mb-3">
                        <div className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                        <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                        <div className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
                        <span className="text-[9px] text-white/40 ml-1.5">bash - root@cyberjai</span>
                    </div>
                    <div className="space-y-2 select-none">
                        <p className="text-white/40">$ nmap -sS -O 192.168.1.105</p>
                        <p className="text-green-400">● Port 80/tcp OPEN (HTTP Server)</p>
                        <p className="text-green-400">● Port 22/tcp OPEN (SSH SecureShell)</p>
                        <p className="text-cyber-red animate-pulse font-bold">● Vuln Detect: CVE-2026-X (RCE Exploit)</p>
                        <p className="text-white/30">$ python exploit.py --target 192.168.1.105</p>
                        <p className="text-cyan-400 font-bold">● Payload injected. Opening reverse shell...</p>
                    </div>
                </div>
            )
        },
        {
            id: 2,
            category: "CAREER EXPERIENCE",
            icon: GrowthIcon,
            text: "We are not preparing you to just pass another exam; we are building your launchpad into a high-paying tech career. The global demand for cyber skills is exploding, and we give you the exact insider blueprints, portfolio-worthy real-world labs, and community backing to stand out. From getting your resume noticed to cracking tough technical interviews confidently, we've got your back at every single step.",
            visual: (
                <div className="bg-gradient-to-br from-[#121212] to-[#080808] rounded-2xl border border-white/10 p-6 text-white shadow-2xl relative w-full max-w-md mx-auto text-left">
                    <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4">
                        <span className="text-[10px] font-black uppercase tracking-widest text-white/40">Market Traction</span>
                        <span className="text-[9px] font-black uppercase tracking-widest text-green-400 bg-green-500/10 px-2.5 py-0.5 rounded-full border border-green-500/20">Active</span>
                    </div>
                    <div className="space-y-4">
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
                </div>
            )
        },
        {
            id: 3,
            category: "MENTOR EXPERT",
            icon: ShieldLockIcon,
            text: "You aren't learning from an academic lecturer who only reads off slides. You are training directly under a battle-tested elite cybersecurity consultant. Someone who deals with real-world cyber threats, live red-teaming simulations, and enterprise-grade AI defense systems daily. You get raw industry experience, direct 1-on-1 mentorship, and the exact roadmap used by top-tier global pros.",
            visual: (
                <div className="relative mx-auto w-full max-w-[290px] rounded-3xl bg-black/40 backdrop-blur-md border border-white/10 p-4 shadow-[0_25px_60px_rgba(0,0,0,0.35)] group transition-all duration-500 hover:border-cyber-red/30 overflow-visible">
                    {/* Futuristic Ambient Neon Glow Behind Card */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyber-red to-red-600 rounded-3xl blur-xl opacity-10 group-hover:opacity-25 transition-opacity duration-700 -z-10" />

                    {/* Asymmetric Cyber Frame for Photo */}
                    <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-[#0c0c0c] border border-white/5 shadow-inner">
                        <img
                            src={mentorImage}
                            alt="Cyber Jai Lead Instructor"
                            className="w-full h-full object-contain filter brightness-[1.02] contrast-[1.05] transition-transform duration-700 group-hover:scale-[1.02] select-none pointer-events-none"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                    </div>

                    {/* Elite Tech details below image */}
                    <div className="mt-4 text-center">
                        <span className="inline-block bg-cyber-red/10 border border-cyber-red/35 text-cyber-red text-[0.68rem] font-black uppercase tracking-widest px-3 py-1 rounded-md mb-2 shadow-[0_0_15px_rgba(212,18,18,0.1)]">
                            ELITE CONSULTANT
                        </span>
                        <h4 className="text-white font-display font-black text-xl uppercase tracking-tight leading-none mb-1">
                            CYBER JAI
                        </h4>
                        <p className="text-[0.65rem] font-bold text-white/45 tracking-widest uppercase">
                            Secure Worldz Official
                        </p>
                    </div>
                </div>
            )
        }
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
            x: dir > 0 ? 150 : -150,
            opacity: 0,
            scale: 0.95
        }),
        center: {
            x: 0,
            opacity: 1,
            scale: 1
        },
        exit: (dir) => ({
            x: dir > 0 ? -150 : 150,
            opacity: 0,
            scale: 0.95
        })
    };

    return (
        <div className="max-w-4xl mx-auto px-4 mt-12">
            <div className="bg-white border border-gray-100 rounded-[40px] shadow-[0_30px_70px_rgba(0,0,0,0.04)] p-8 md:p-16 relative min-h-[580px] flex flex-col justify-between overflow-hidden text-center">
                {/* Visual background element */}
                <div className="absolute -bottom-16 -right-16 p-8 opacity-[0.015] pointer-events-none">
                    <ShieldLockIcon className="h-72 w-72 text-black" />
                </div>

                <div className="relative z-10 flex-1 flex flex-col justify-center items-center">
                    <AnimatePresence initial={false} custom={direction} mode="wait">
                        <motion.div
                            key={activeIndex}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                            className="flex flex-col items-center max-w-2xl mx-auto space-y-8"
                        >
                            {/* Slide Title and Category Info */}
                            <div className="flex flex-col items-center space-y-4">
                                <div className="h-12 w-12 rounded-2xl bg-cyber-red/10 flex items-center justify-center text-cyber-red">
                                    {React.createElement(slides[activeIndex].icon, { className: "h-6 w-6" })}
                                </div>
                                <h3 className="text-3xl sm:text-4xl font-display font-black uppercase tracking-tight text-black leading-none">
                                    {slides[activeIndex].category}
                                </h3>
                            </div>

                            {/* Main Slide Text Description */}
                            <p className="text-[1.02rem] text-gray-500 leading-relaxed font-medium max-w-xl">
                                {slides[activeIndex].text}
                            </p>

                            {/* Centered Visual Element */}
                            <div className="w-full pt-4 flex justify-center">
                                {slides[activeIndex].visual}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Navigation and Bottom Indicators */}
                <div className="relative z-10 mt-12 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-6">
                    {/* Arrow Navigation */}
                    <div className="flex gap-3">
                        <button
                            onClick={handlePrev}
                            className="h-11 w-11 rounded-full border border-gray-150 flex items-center justify-center text-gray-400 hover:text-black hover:border-black transition-colors active:scale-95 cursor-pointer"
                        >
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            onClick={handleNext}
                            className="h-11 w-11 rounded-full border border-gray-150 flex items-center justify-center text-gray-400 hover:text-black hover:border-black transition-colors active:scale-95 cursor-pointer"
                        >
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    {/* Progress Dots */}
                    <div className="flex items-center gap-3">
                        {slides.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => handleDotClick(idx)}
                                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                                    idx === activeIndex 
                                        ? 'w-10 bg-cyber-red' 
                                        : 'w-2.5 bg-gray-200 hover:bg-gray-400'
                                }`}
                            />
                        ))}
                    </div>

                    {/* Active Timer Line */}
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
