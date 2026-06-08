import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { QRCodeSVG } from 'qrcode.react';
import {
    ShieldLockIcon,
    LockSealIcon,
    ClockIcon,
    CheckIcon,
    CloudUploadIcon,
    CameraIcon
} from './Icons';

export default function RegistrationForm() {
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

    const upiId = 'cyberjai@upi'; // Default from config
    const amount = '2000'; // Summer offer
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
            // 1. Register User
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

            if (!regRes.ok) throw new Error(regData.message);

            // 2. Upload Receipt
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
            if (!uploadRes.ok) throw new Error(uploadResult.message || 'Upload failed');

            setSuccess(true);
            setStep(3);
        } catch (err) {
            setError(err.message || 'Something went wrong');
        } finally {
            setLoading(false);
        }
    };

    if (success) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-3xl p-8 sm:p-12 text-center border border-gray-100 shadow-[0_15px_50px_rgba(0,0,0,0.05)]"
            >
                <div className="h-24 w-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_15px_35px_rgba(34,197,94,0.25)]">
                    <CheckIcon className="h-14 w-14 text-white" />
                </div>
                <h2 className="text-4xl font-display font-black uppercase mb-4 tracking-tighter">Application Submitted!</h2>
                <p className="text-gray-600 leading-relaxed max-w-md mx-auto mb-10">
                    Your payment is being verified. You will receive an email confirmation within 2-4 hours with your login credentials.
                </p>
                <button
                    onClick={() => window.location.reload()}
                    className="bg-black text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors"
                >
                    Back to home
                </button>
            </motion.div>
        );
    }

    return (
        <div id="registration" className="max-w-4xl mx-auto px-4 py-20">
            <div className="bg-white rounded-[32px] border border-gray-100 shadow-[0_25px_60px_rgba(0,0,0,0.06)] overflow-hidden grid md:grid-cols-[1fr_0.8fr]">

                {/* Left Side: Form */}
                <div className="p-8 sm:p-12">
                    <div className="mb-10">
                        <h2 className="text-4xl font-display font-black uppercase tracking-tight mb-2">
                            Step {step} of 2
                        </h2>
                        <div className="h-2 w-32 bg-[#eee] rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-cyber-red"
                                initial={{ width: '50%' }}
                                animate={{ width: step === 1 ? '50%' : '100%' }}
                            />
                        </div>
                    </div>

                    <AnimatePresence mode="wait">
                        {step === 1 ? (
                            <motion.form
                                key="step1"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                onSubmit={handleNext}
                                className="space-y-6"
                            >
                                <div>
                                    <label className="block text-[0.7rem] font-black uppercase tracking-widest text-gray-400 mb-2 ml-1">Full Name</label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full bg-[#f8f8f8] border border-transparent rounded-2xl px-6 py-4 text-black focus:outline-none focus:bg-white focus:border-cyber-red transition-all"
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
                                        className="w-full bg-[#f8f8f8] border border-transparent rounded-2xl px-6 py-4 text-black focus:outline-none focus:bg-white focus:border-cyber-red transition-all"
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
                                        className="w-full bg-[#f8f8f8] border border-transparent rounded-2xl px-6 py-4 text-black focus:outline-none focus:bg-white focus:border-cyber-red transition-all"
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
                                    className="w-full bg-black text-white font-black py-5 rounded-2xl uppercase tracking-widest shadow-xl hover:bg-gray-900 transition-all active:scale-[0.98]"
                                >
                                    Continue to Payment
                                </button>
                            </motion.form>
                        ) : (
                            <motion.form
                                key="step2"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                onSubmit={handleSubmit}
                                className="space-y-6"
                            >
                                <div className="bg-gray-50 border border-gray-100 rounded-3xl p-6 text-center">
                                    <p className="text-[0.65rem] font-black text-cyber-red uppercase tracking-widest mb-4">Scan QR to pay ₹{amount}</p>
                                    <div className="bg-white p-4 inline-block rounded-2xl shadow-sm mb-4">
                                        <QRCodeSVG value={upiLink} size={160} />
                                    </div>
                                    <p className="text-[0.8rem] font-bold text-gray-600">{upiId}</p>
                                </div>

                                <div className="relative">
                                    <label className="block text-[0.7rem] font-black uppercase tracking-widest text-gray-400 mb-2 ml-1">Upload Receipt (Screenshot)</label>
                                    <label className="flex flex-col items-center justify-center w-full h-32 bg-gray-50 border-2 border-dashed border-gray-250 rounded-2xl cursor-pointer hover:bg-white hover:border-cyber-red transition-all">
                                        {formData.receipt ? (
                                            <div className="flex items-center gap-3 text-green-600 font-bold">
                                                <CheckIcon className="h-6 w-6" />
                                                <span>{formData.receipt.name}</span>
                                            </div>
                                        ) : (
                                            <div className="flex flex-col items-center gap-2">
                                                <CloudUploadIcon className="h-8 w-8 text-gray-400" />
                                                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Click to upload</span>
                                            </div>
                                        )}
                                        <input type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
                                    </label>
                                </div>

                                {error && <p className="text-cyber-red font-bold text-sm tracking-wide">{error}</p>}

                                <div className="grid grid-cols-2 gap-4">
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setError('');
                                            setStep(1);
                                        }}
                                        className="bg-[#eee] text-gray-600 font-bold py-5 rounded-2xl uppercase tracking-widest hover:bg-[#e5e5e5] transition-all"
                                    >
                                        Back
                                    </button>
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="bg-cyber-red text-white font-black py-5 rounded-2xl uppercase tracking-widest shadow-xl hover:bg-cyber-redDark transition-all disabled:opacity-50"
                                    >
                                        {loading ? 'SUBMITTING...' : 'FINISH ENROLL'}
                                    </button>
                                </div>
                            </motion.form>
                        )}
                    </AnimatePresence>
                </div>

                {/* Right Side: Info/Premium side */}
                <div className="hidden md:block bg-[#111] p-12 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-20">
                        <ShieldLockIcon className="h-40 w-40 text-cyber-red" />
                    </div>
                    <div className="relative z-10">
                        <h3 className="text-3xl font-display font-black uppercase mb-6 leading-tight">Secure Your Cyber Future</h3>
                        <ul className="space-y-6">
                            {[
                                { icon: LockSealIcon, text: 'Instant Access to Labs' },
                                { icon: ClockIcon, text: 'Lifetime Course Support' },
                                { icon: CheckIcon, text: 'Certified Completion' }
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-center gap-4">
                                    <div className="h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                                        <item.icon className="h-5 w-5 text-cyber-red" />
                                    </div>
                                    <span className="text-sm font-bold uppercase tracking-wider text-white/80">{item.text}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-20 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                            <p className="text-3xl font-display font-black text-cyber-red">&#8377;{amount}</p>
                            <p className="text-[0.6rem] font-black uppercase tracking-widest text-white/40 mt-1">Limited summer offer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
