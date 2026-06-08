import React from 'react';
import { Link } from 'react-router-dom';
import brandLogo from '../assets/brand_logo.jpg';

export default function Footer() {
  return (
    <footer className="bg-white text-gray-600 border-t border-gray-100 pt-16 pb-8 mt-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12">
          
          {/* Column 1: Brand Profile */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img
                src={brandLogo}
                alt="Secure Worldz Logo"
                className="h-10 w-10 shrink-0 object-contain rounded-lg border border-gray-100 shadow-sm"
              />
              <h2 className="font-display text-lg font-black uppercase tracking-[0.08em] text-black">
                SECURE WORLDZ
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-gray-500 max-w-xs">
              Smart solutions for a smarter digital world.
            </p>
            {/* Sleek Row for SVG Social Media Icon Placeholders */}
            <div className="flex gap-4">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/thecyberjai?igsh=MXVwN3h0cjZ0Zjh2dg=="
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500 hover:text-cyber-red hover:bg-cyber-red/5 hover:border-cyber-red/20 transition-all duration-300 active:scale-95"
                aria-label="Instagram"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500 hover:text-cyber-red hover:bg-cyber-red/5 hover:border-cyber-red/20 transition-all duration-300 active:scale-95"
                aria-label="WhatsApp"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com/@thecyberjai?si=pJ2sEXElismjSABn"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500 hover:text-cyber-red hover:bg-cyber-red/5 hover:border-cyber-red/20 transition-all duration-300 active:scale-95"
                aria-label="YouTube"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-5">
            <h3 className="font-display text-xs font-black uppercase tracking-[0.2em] text-black">
              Quick Links
            </h3>
            <ul className="space-y-3.5 text-[0.88rem]">
              <li>
                <Link to="/" className="text-gray-600 hover:text-cyber-red hover:underline decoration-cyber-red/40 underline-offset-4 transition-all duration-200">
                  Home
                </Link>
              </li>
              <li>
                <a href="#features" className="text-gray-600 hover:text-cyber-red hover:underline decoration-cyber-red/40 underline-offset-4 transition-all duration-200">
                  Services Overview
                </a>
              </li>
              <li>
                <Link to="/enroll" className="text-gray-600 hover:text-cyber-red hover:underline decoration-cyber-red/40 underline-offset-4 transition-all duration-200">
                  Proworldz Academy
                </Link>
              </li>
              <li>
                <a href="#pricing" className="text-gray-600 hover:text-cyber-red hover:underline decoration-cyber-red/40 underline-offset-4 transition-all duration-200">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="space-y-5">
            <h3 className="font-display text-xs font-black uppercase tracking-[0.2em] text-black">
              Services
            </h3>
            <ul className="space-y-3.5 text-[0.88rem]">
              <li>
                <a href="#features" className="text-gray-600 hover:text-cyber-red hover:underline decoration-cyber-red/40 underline-offset-4 transition-all duration-200">
                  Cyber Security Services
                </a>
              </li>
              <li>
                <a href="#features" className="text-gray-600 hover:text-cyber-red hover:underline decoration-cyber-red/40 underline-offset-4 transition-all duration-200">
                  Website Development
                </a>
              </li>
              <li>
                <a href="#features" className="text-gray-600 hover:text-cyber-red hover:underline decoration-cyber-red/40 underline-offset-4 transition-all duration-200">
                  AI Development
                </a>
              </li>
              <li>
                <a href="#features" className="text-gray-600 hover:text-cyber-red hover:underline decoration-cyber-red/40 underline-offset-4 transition-all duration-200">
                  Training &amp; Certification
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div className="space-y-5">
            <h3 className="font-display text-xs font-black uppercase tracking-[0.2em] text-black">
              Legal
            </h3>
            <ul className="space-y-3.5 text-[0.88rem]">
              <li>
                <a href="#privacy" className="text-gray-600 hover:text-cyber-red hover:underline decoration-cyber-red/40 underline-offset-4 transition-all duration-200">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="text-gray-600 hover:text-cyber-red hover:underline decoration-cyber-red/40 underline-offset-4 transition-all duration-200">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#cookies" className="text-gray-600 hover:text-cyber-red hover:underline decoration-cyber-red/40 underline-offset-4 transition-all duration-200">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#acceptable-use" className="text-gray-600 hover:text-cyber-red hover:underline decoration-cyber-red/40 underline-offset-4 transition-all duration-200">
                  Acceptable Use Policy
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright Row */}
        <div className="pt-8 mt-4 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© 2026 Secure Worldz. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#privacy" className="hover:text-cyber-red hover:underline decoration-cyber-red/40 transition-all duration-200">
              Privacy Policy
            </a>
            <span className="text-gray-200">|</span>
            <a href="#terms" className="hover:text-cyber-red hover:underline decoration-cyber-red/40 transition-all duration-200">
              Terms of Service
            </a>
            <span className="text-gray-200">|</span>
            <a href="#cookies" className="hover:text-cyber-red hover:underline decoration-cyber-red/40 transition-all duration-200">
              Cookie Policy
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
