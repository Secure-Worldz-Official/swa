import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// ✅ Custom QR Code Image — swap the file at this path to update the payment QR
import customQrCodeImage from '../assets/phonepe_qr.jpg';
import { Link } from 'react-router-dom';
import {
    ShieldLockIcon,
    LockSealIcon,
    ClockIcon,
    CheckIcon,
    CloudUploadIcon
} from './Icons';

export default function EnrollmentPage() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        receipt: null
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const upiId = 'cyberjai@upi'; // Supabase/Backend configured UPI ID
    const amount = '2000'; // Special cohorts fee
    const upiLink = `upi://pay?pa=${upiId}&pn=Cyber%20Jai%20Academy&am=${amount}&cu=INR&tn=Summer%20Offer%20Enrollment`;

    const handleNext = (e) => {
        e.preventDefault();
        if (step === 1 && (!formData.name || !formData.email || !formData.phone)) {
            setError('Please fill in all details');
            return;
        }
        setError('');
        setStep(2);
    };

    const handleFileChange = (e) => {
        setError('');
        setFormData({ ...formData, receipt: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.receipt) {
            setError('Please upload your payment receipt');
            return;
        }

        setLoading(true);
        setError('');

        try {
            // 1. Register user details
            const regRes = await fetch('/api/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone
                })
            });

            const contentType = regRes.headers.get("content-type");
            if (!contentType || !contentType.includes("application/json")) {
                throw new Error("Server returned non-JSON response. Check if API is running.");
            }

            const regData = await regRes.json();
            if (!regRes.ok) {
                throw new Error(
                    regData.error
                        ? `${regData.message || 'Registration failed'}: ${regData.error}`
                        : (regData.message || 'Registration failed')
                );
            }

            // 2. Upload screenshot
            const fileData = new FormData();
            fileData.append('receipt', formData.receipt);

            const uploadRes = await fetch('/api/upload', {
                method: 'POST',
                headers: { Authorization: `Bearer ${regData.token}` },
                body: fileData
            });

            const uContentType = uploadRes.headers.get("content-type");
            if (!uContentType || !uContentType.includes("application/json")) {
                throw new Error("Server returned non-JSON response during upload.");
            }

            const uploadResult = await uploadRes.json();
            if (!uploadRes.ok) {
                throw new Error(
                    uploadResult.error
                        ? `${uploadResult.message || 'Upload failed'}: ${uploadResult.error}`
                        : (uploadResult.message || 'Upload failed')
                );
            }

            setSuccess(true);
            setStep(3);
        } catch (err) {
            setError(err.message || 'Something went wrong');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-[#1f2937] font-sans flex flex-col justify-between">
            {/* Header / Brand Nav */}
            <header className="w-full max-w-7xl mx-auto px-6 py-6 flex items-center justify-between z-10">
                <Link to="/" className="flex items-center gap-3 group">
                    <ShieldLockIcon className="h-9 w-9 text-cyber-red group-hover:rotate-6 transition-transform duration-300" />
                    <span className="font-display font-black text-lg uppercase tracking-tight text-[#111]">
                        CYBER J<span className="cyber-ai-glow">AI</span>
                    </span>
                </Link>
                <Link 
                    to="/" 
                    className="text-xs font-black uppercase tracking-widest text-gray-400 hover:text-black transition-colors flex items-center gap-1.5"
                >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                    Back to Course
                </Link>
            </header>

            {/* Split screen content layout */}
            <main className="flex-1 max-w-6xl w-full mx-auto px-4 md:px-6 py-8 md:py-12 flex items-center justify-center">
                <div className="bg-white rounded-[32px] border border-gray-100 shadow-[0_25px_60px_rgba(0,0,0,0.04)] overflow-hidden w-full grid md:grid-cols-[1.1fr_0.9fr] min-h-[580px]">
                    
                    {/* Left Column (Light Background Checkout Form) */}
                    <div className="p-8 sm:p-12 flex flex-col justify-between bg-white">
                        <AnimatePresence mode="wait">
                            {success ? (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="text-center py-8 flex flex-col justify-center items-center h-full"
                                >
                                    <div className="h-20 w-20 bg-green-500 rounded-full flex items-center justify-center mb-6 shadow-[0_15px_35px_rgba(34,197,94,0.25)] border border-green-400/20">
                                        <CheckIcon className="h-10 w-10 text-white" />
                                    </div>
                                    <h2 className="text-3xl font-display font-black uppercase tracking-tight mb-3 text-black">Application Submitted!</h2>
                                    <p className="text-gray-500 leading-relaxed text-sm max-w-sm mx-auto mb-8">
                                        Your payment confirmation is being verified. You will receive login details and course dashboard credentials via email within 2-4 hours.
                                    </p>
                                    <Link
                                        to="/"
                                        className="inline-flex bg-black text-white px-8 py-4 rounded-full text-xs font-black uppercase tracking-widest hover:bg-gray-900 transition-colors shadow-lg active:scale-95"
                                    >
                                        Return Home
                                    </Link>
                                </motion.div>
                            ) : (
                                <div className="h-full flex flex-col justify-between">
                                    {/* Step Header */}
                                    <div className="mb-8">
                                        <div className="flex justify-between items-center mb-3">
                                            <h2 className="text-3xl font-display font-black uppercase tracking-tight text-black">
                                                Step {step} of 2
                                            </h2>
                                            <span className="text-[0.7rem] font-black uppercase tracking-widest text-cyber-red bg-cyber-red/5 px-3 py-1 rounded-full border border-cyber-red/10">
                                                {step === 1 ? 'Personal Info' : 'Payment Details'}
                                            </span>
                                        </div>
                                        <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                                            <motion.div
                                                className="h-full bg-cyber-red"
                                                initial={{ width: '50%' }}
                                                animate={{ width: step === 1 ? '50%' : '100%' }}
                                                transition={{ duration: 0.4, ease: "easeOut" }}
                                            />
                                        </div>
                                    </div>

                                    {/* Step Forms */}
                                    {step === 1 ? (
                                        <motion.form
                                            key="step1"
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: 10 }}
                                            onSubmit={handleNext}
                                            className="space-y-5 flex-1 flex flex-col justify-center"
                                        >
                                            <div>
                                                <label className="block text-[0.7rem] font-black uppercase tracking-widest text-gray-400 mb-2 ml-1">Full Name</label>
                                                <input
                                                    type="text"
                                                    required
                                                    className="w-full bg-gray-50 border border-transparent rounded-2xl px-6 py-4 text-black focus:outline-none focus:bg-white focus:border-cyber-red transition-all duration-200"
                                                    placeholder="Enter your name"
                                                    value={formData.name}
                                                onChange={(e) => {
                                                    setError('');
                                                    setFormData({ ...formData, name: e.target.value });
                                                }}
                                            />
                                        </div>
                                            <div>
                                                <label className="block text-[0.7rem] font-black uppercase tracking-widest text-gray-400 mb-2 ml-1">Email Address</label>
                                                <input
                                                    type="email"
                                                    required
                                                    className="w-full bg-gray-50 border border-transparent rounded-2xl px-6 py-4 text-black focus:outline-none focus:bg-white focus:border-cyber-red transition-all duration-200"
                                                    placeholder="name@example.com"
                                                    value={formData.email}
                                                onChange={(e) => {
                                                    setError('');
                                                    setFormData({ ...formData, email: e.target.value });
                                                }}
                                            />
                                        </div>
                                            <div>
                                                <label className="block text-[0.7rem] font-black uppercase tracking-widest text-gray-400 mb-2 ml-1">Phone Number</label>
                                                <input
                                                    type="tel"
                                                    required
                                                    className="w-full bg-gray-50 border border-transparent rounded-2xl px-6 py-4 text-black focus:outline-none focus:bg-white focus:border-cyber-red transition-all duration-200"
                                                    placeholder="+91 00000 00000"
                                                    value={formData.phone}
                                                onChange={(e) => {
                                                    setError('');
                                                    setFormData({ ...formData, phone: e.target.value });
                                                }}
                                            />
                                        </div>
                                            {error && <p className="text-cyber-red font-bold text-sm tracking-wide">{error}</p>}
                                            <button
                                                type="submit"
                                                className="w-full bg-black text-white font-black py-4.5 rounded-2xl uppercase tracking-widest shadow-lg hover:bg-gray-900 transition-all active:scale-[0.98] mt-2"
                                            >
                                                Continue to Payment
                                            </button>
                                        </motion.form>
                                    ) : (
                                        <motion.form
                                            key="step2"
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            onSubmit={handleSubmit}
                                            className="space-y-5 flex-1 flex flex-col justify-center"
                                        >
                                            <div className="bg-gray-50 border border-gray-100 rounded-3xl p-6 text-center shadow-inner">
                                                <p className="text-[0.65rem] font-black text-cyber-red uppercase tracking-widest mb-3">Scan QR to pay ₹{amount}</p>
                                                <div className="bg-white p-4 inline-block rounded-2xl shadow-sm mb-3">
                                                    <img src={customQrCodeImage} alt="Scan QR to pay" className="w-[150px] h-[150px] object-contain mx-auto" />
                                                </div>
                                                <p className="text-[0.85rem] font-black text-gray-600 tracking-wide">MS SECURE WORLDZ</p>
                                            </div>

                                            <div>
                                                <label className="block text-[0.7rem] font-black uppercase tracking-widest text-gray-400 mb-2 ml-1">Upload Receipt (Screenshot)</label>
                                                <label className="flex flex-col items-center justify-center w-full h-28 bg-gray-50 border-2 border-dashed border-gray-200 rounded-2xl cursor-pointer hover:bg-white hover:border-cyber-red transition-all duration-200">
                                                    {formData.receipt ? (
                                                        <div className="flex items-center gap-2 text-green-600 font-bold text-sm">
                                                            <CheckIcon className="h-5 w-5" />
                                                            <span className="truncate max-w-[200px]">{formData.receipt.name}</span>
                                                        </div>
                                                    ) : (
                                                        <div className="flex flex-col items-center gap-1.5">
                                                            <CloudUploadIcon className="h-7 w-7 text-gray-400" />
                                                            <span className="text-[0.65rem] font-black text-gray-400 uppercase tracking-widest">Click to upload screenshot</span>
                                                        </div>
                                                    )}
                                                    <input type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
                                                </label>
                                            </div>

                                            {error && <p className="text-cyber-red font-bold text-sm tracking-wide">{error}</p>}

                                            <div className="grid grid-cols-2 gap-4 mt-2">
                                                <button
                                                    type="button"
                                                    onClick={() => {
                                                        setError('');
                                                        setStep(1);
                                                    }}
                                                    className="bg-gray-100 text-gray-600 font-bold py-4 rounded-2xl uppercase tracking-widest hover:bg-gray-200 transition-colors active:scale-[0.98]"
                                                >
                                                    Back
                                                </button>
                                                <button
                                                    type="submit"
                                                    disabled={loading}
                                                    className="bg-cyber-red text-white font-black py-4 rounded-2xl uppercase tracking-widest shadow-lg hover:bg-cyber-redDark transition-all active:scale-[0.98] disabled:opacity-50"
                                                >
                                                    {loading ? 'Submitting...' : 'Finish Enroll'}
                                                </button>
                                            </div>
                                        </motion.form>
                                    )}
                                </div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Right Column (Dark Background Summary Sidebar) */}
                    <div className="bg-gradient-to-br from-[#1c1c1c] to-[#0a0a0a] p-8 sm:p-12 text-white relative overflow-hidden flex flex-col justify-between">
                        <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
                            <ShieldLockIcon className="h-56 w-56 text-white" />
                        </div>
                        
                        <div className="relative z-10 flex-1 flex flex-col justify-between">
                            <div>
                                <span className="text-[0.6rem] font-black text-cyber-red uppercase tracking-widest border border-cyber-red/30 px-3 py-1 rounded-full bg-cyber-red/5">
                                    ACADEMY CHECKOUT
                                </span>
                                <h3 className="text-3xl font-display font-black uppercase mt-6 mb-8 leading-tight tracking-tight text-white">
                                    Secure Your Cyber Future
                                </h3>
                                
                                <ul className="space-y-6">
                                    {[
                                        { icon: LockSealIcon, text: 'Instant Access to Hands-On Labs' },
                                        { icon: ClockIcon, text: 'Lifetime Cohort Support & Updates' },
                                        { icon: CheckIcon, text: 'Verifiable Certificate of Completion' }
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-4">
                                            <div className="h-9 w-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                                                <item.icon className="h-5 w-5 text-cyber-red" />
                                            </div>
                                            <span className="text-xs font-bold uppercase tracking-wider text-white/80">{item.text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mt-12 p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-inner relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-16 h-16 bg-cyber-red/5 rounded-bl-full pointer-events-none" />
                                <p className="text-[0.6rem] font-black uppercase tracking-widest text-white/40 mb-1">COHORT SUMMERS SPECIAL</p>
                                <div className="flex items-baseline gap-2">
                                    <p className="text-4xl font-display font-black text-cyber-red">&#8377;{amount}</p>
                                    <span className="text-xs text-white/45 line-through font-bold">&#8377;5,000</span>
                                </div>
                                <p className="text-[0.55rem] font-black uppercase tracking-widest text-green-400 mt-2">● Save 60% with limited offer coupon</p>
                            </div>
                        </div>
                    </div>

                </div>
            </main>

            {/* Footer lockup */}
            <footer className="w-full text-center py-6 border-t border-gray-100 text-gray-400 text-[0.68rem] tracking-wider uppercase font-medium">
                © {new Date().getFullYear()} Cyber Jai Academy. All Rights Reserved. SSL Secured Checkout.
            </footer>
        </div>
    );
}
