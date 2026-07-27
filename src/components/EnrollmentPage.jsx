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

    const amount = '2000'; // Special cohorts fee

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

    /* ── Retro input style ── */
    const inputStyle = {
        width: '100%',
        background: '#ffffff',
        border: '4px solid #000000',
        boxShadow: '4px 4px 0px 0px rgba(0,0,0,1)',
        borderRadius: '0px',
        padding: '0.75rem 1rem',
        fontSize: '0.92rem',
        color: '#000000',
        outline: 'none',
        fontFamily: 'var(--font-main)',
        transition: 'box-shadow 0.12s ease, transform 0.12s ease',
    };

    const labelStyle = {
        display: 'block',
        fontSize: '0.7rem',
        fontWeight: 800,
        textTransform: 'uppercase',
        letterSpacing: '0.18em',
        color: '#555555',
        marginBottom: '0.5rem',
        fontFamily: 'var(--font-heading)',
    };

    return (
        <div style={{ minHeight: '100vh', background: '#ffffff', color: '#000000', fontFamily: 'var(--font-main)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            {/* Header / Brand Nav */}
            <header style={{ width: '100%', maxWidth: '80rem', margin: '0 auto', padding: '1.5rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '4px solid #000000' }}>
                <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
                    <ShieldLockIcon style={{ height: '2.25rem', width: '2.25rem', color: '#000000' }} />
                    <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.125rem', textTransform: 'uppercase', letterSpacing: '-0.03em', color: '#000000' }}>
                        CYBER JAI
                    </span>
                </Link>
                <Link
                    to="/"
                    style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#888888', textDecoration: 'none', fontFamily: 'var(--font-heading)', transition: 'color 0.15s' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#000'}
                    onMouseLeave={e => e.currentTarget.style.color = '#888'}
                >
                    <svg style={{ height: '1rem', width: '1rem' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="square" strokeLinejoin="miter" d="M15 19l-7-7 7-7" />
                    </svg>
                    Back to Course
                </Link>
            </header>

            {/* Split screen content layout */}
            <main style={{ flex: 1, maxWidth: '72rem', width: '100%', margin: '0 auto', padding: '2rem 1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{
                    background: '#ffffff',
                    border: '4px solid #000000',
                    boxShadow: '12px 12px 0px 0px rgba(0,0,0,1)',
                    overflow: 'hidden',
                    width: '100%',
                    display: 'grid',
                    minHeight: '580px',
                }} className="md:grid-cols-[1.1fr_0.9fr]">

                    {/* Left Column — Form */}
                    <div style={{ padding: '2rem', borderRight: '4px solid #000000', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: '#ffffff' }} className="sm:p-12">
                        <AnimatePresence mode="wait">
                            {success ? (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    style={{ textAlign: 'center', padding: '2rem 0', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%' }}
                                >
                                    <div style={{ height: '5rem', width: '5rem', background: '#000000', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', border: '4px solid #000', boxShadow: '6px 6px 0px 0px rgba(0,0,0,1)' }}>
                                        <CheckIcon style={{ height: '2.5rem', width: '2.5rem', color: '#ffffff' }} />
                                    </div>
                                    <h2 style={{ fontSize: '1.875rem', fontFamily: 'var(--font-heading)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '-0.03em', marginBottom: '0.75rem', color: '#000000' }}>Application Submitted!</h2>
                                    <p style={{ color: '#555555', lineHeight: 1.75, fontSize: '0.875rem', maxWidth: '24rem', margin: '0 auto 2rem' }}>
                                        Your payment confirmation is being verified. You will receive login details and course dashboard credentials via email within 2-4 hours.
                                    </p>
                                    <Link
                                        to="/"
                                        style={{
                                            display: 'inline-flex',
                                            background: '#000000',
                                            color: '#ffffff',
                                            border: '4px solid #000000',
                                            boxShadow: '6px 6px 0px 0px rgba(0,0,0,1)',
                                            padding: '0.75rem 2rem',
                                            fontSize: '0.75rem',
                                            fontWeight: 800,
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.15em',
                                            textDecoration: 'none',
                                            fontFamily: 'var(--font-heading)',
                                            transition: 'box-shadow 0.12s, transform 0.12s',
                                        }}
                                        onMouseEnter={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translate(6px,6px)'; }}
                                        onMouseLeave={e => { e.currentTarget.style.boxShadow = '6px 6px 0px 0px rgba(0,0,0,1)'; e.currentTarget.style.transform = 'none'; }}
                                    >
                                        Return Home
                                    </Link>
                                </motion.div>
                            ) : (
                                <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                    {/* Step Header */}
                                    <div style={{ marginBottom: '2rem' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                                            <h2 style={{ fontSize: '1.875rem', fontFamily: 'var(--font-heading)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '-0.03em', color: '#000000' }}>
                                                Step {step} of 2
                                            </h2>
                                            <span style={{
                                                fontSize: '0.65rem',
                                                fontWeight: 800,
                                                textTransform: 'uppercase',
                                                letterSpacing: '0.15em',
                                                color: '#000000',
                                                border: '4px solid #000000',
                                                padding: '0.2rem 0.75rem',
                                                fontFamily: 'var(--font-heading)',
                                                background: '#ffffff',
                                                boxShadow: '3px 3px 0px 0px rgba(0,0,0,1)',
                                            }}>
                                                {step === 1 ? 'Personal Info' : 'Payment Details'}
                                            </span>
                                        </div>
                                        {/* Progress bar — retro style */}
                                        <div style={{ height: '6px', width: '100%', background: '#e0e0e0', border: '2px solid #000000', overflow: 'hidden' }}>
                                            <motion.div
                                                style={{ height: '100%', background: '#000000' }}
                                                initial={{ width: '50%' }}
                                                animate={{ width: step === 1 ? '50%' : '100%' }}
                                                transition={{ duration: 0.4, ease: 'easeOut' }}
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
                                            style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', flex: 1, justifyContent: 'center' }}
                                        >
                                            <div>
                                                <label style={labelStyle}>Full Name</label>
                                                <input
                                                    type="text"
                                                    required
                                                    style={inputStyle}
                                                    placeholder="Enter your name"
                                                    value={formData.name}
                                                    onFocus={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translate(4px,4px)'; }}
                                                    onBlur={e => { e.currentTarget.style.boxShadow = '4px 4px 0px 0px rgba(0,0,0,1)'; e.currentTarget.style.transform = 'none'; }}
                                                    onChange={(e) => {
                                                        setError('');
                                                        setFormData({ ...formData, name: e.target.value });
                                                    }}
                                                />
                                            </div>
                                            <div>
                                                <label style={labelStyle}>Email Address</label>
                                                <input
                                                    type="email"
                                                    required
                                                    style={inputStyle}
                                                    placeholder="name@example.com"
                                                    value={formData.email}
                                                    onFocus={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translate(4px,4px)'; }}
                                                    onBlur={e => { e.currentTarget.style.boxShadow = '4px 4px 0px 0px rgba(0,0,0,1)'; e.currentTarget.style.transform = 'none'; }}
                                                    onChange={(e) => {
                                                        setError('');
                                                        setFormData({ ...formData, email: e.target.value });
                                                    }}
                                                />
                                            </div>
                                            <div>
                                                <label style={labelStyle}>Phone Number</label>
                                                <input
                                                    type="tel"
                                                    required
                                                    style={inputStyle}
                                                    placeholder="+91 00000 00000"
                                                    value={formData.phone}
                                                    onFocus={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translate(4px,4px)'; }}
                                                    onBlur={e => { e.currentTarget.style.boxShadow = '4px 4px 0px 0px rgba(0,0,0,1)'; e.currentTarget.style.transform = 'none'; }}
                                                    onChange={(e) => {
                                                        setError('');
                                                        setFormData({ ...formData, phone: e.target.value });
                                                    }}
                                                />
                                            </div>
                                            {error && <p style={{ color: '#000000', fontWeight: 700, fontSize: '0.875rem', letterSpacing: '0.05em', background: '#f0f0f0', border: '4px solid #000', padding: '0.5rem 0.75rem' }}>{error}</p>}
                                            <button
                                                type="submit"
                                                style={{
                                                    width: '100%',
                                                    background: '#000000',
                                                    color: '#ffffff',
                                                    border: '4px solid #000000',
                                                    boxShadow: '6px 6px 0px 0px rgba(0,0,0,1)',
                                                    padding: '1rem',
                                                    fontSize: '0.82rem',
                                                    fontWeight: 800,
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '0.15em',
                                                    fontFamily: 'var(--font-heading)',
                                                    cursor: 'pointer',
                                                    marginTop: '0.5rem',
                                                    transition: 'box-shadow 0.12s, transform 0.12s',
                                                }}
                                                onMouseEnter={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translate(6px,6px)'; }}
                                                onMouseLeave={e => { e.currentTarget.style.boxShadow = '6px 6px 0px 0px rgba(0,0,0,1)'; e.currentTarget.style.transform = 'none'; }}
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
                                            style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', flex: 1, justifyContent: 'center' }}
                                        >
                                            <div style={{ border: '4px solid #000000', background: '#f8f8f8', padding: '1.5rem', textAlign: 'center', boxShadow: '6px 6px 0px 0px rgba(0,0,0,1)' }}>
                                                <p style={{ fontSize: '0.65rem', fontWeight: 800, color: '#000000', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.75rem', fontFamily: 'var(--font-heading)' }}>Scan QR to pay ₹{amount}</p>
                                                <div style={{ background: '#ffffff', padding: '0.75rem', display: 'inline-block', border: '4px solid #000', boxShadow: '4px 4px 0px 0px rgba(0,0,0,1)', marginBottom: '0.75rem' }}>
                                                    <img src={customQrCodeImage} alt="Scan QR to pay" style={{ width: '150px', height: '150px', objectFit: 'contain', display: 'block' }} />
                                                </div>
                                                <p style={{ fontSize: '0.85rem', fontWeight: 800, color: '#000000', letterSpacing: '0.08em', fontFamily: 'var(--font-heading)' }}>MS SECURE WORLDZ</p>
                                            </div>

                                            <div>
                                                <label style={labelStyle}>Upload Receipt (Screenshot)</label>
                                                <label style={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    width: '100%',
                                                    height: '7rem',
                                                    background: '#f8f8f8',
                                                    border: '4px dashed #000000',
                                                    cursor: 'pointer',
                                                    transition: 'background 0.15s',
                                                }}
                                                    onMouseEnter={e => e.currentTarget.style.background = '#eeeeee'}
                                                    onMouseLeave={e => e.currentTarget.style.background = '#f8f8f8'}
                                                >
                                                    {formData.receipt ? (
                                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#000000', fontWeight: 700, fontSize: '0.875rem' }}>
                                                            <CheckIcon style={{ height: '1.25rem', width: '1.25rem' }} />
                                                            <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '200px', whiteSpace: 'nowrap' }}>{formData.receipt.name}</span>
                                                        </div>
                                                    ) : (
                                                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.375rem' }}>
                                                            <CloudUploadIcon style={{ height: '1.75rem', width: '1.75rem', color: '#888888' }} />
                                                            <span style={{ fontSize: '0.65rem', fontWeight: 800, color: '#888888', textTransform: 'uppercase', letterSpacing: '0.15em', fontFamily: 'var(--font-heading)' }}>Click to upload screenshot</span>
                                                        </div>
                                                    )}
                                                    <input type="file" accept="image/*" style={{ display: 'none' }} onChange={handleFileChange} />
                                                </label>
                                            </div>

                                            {error && <p style={{ color: '#000000', fontWeight: 700, fontSize: '0.875rem', letterSpacing: '0.05em', background: '#f0f0f0', border: '4px solid #000', padding: '0.5rem 0.75rem' }}>{error}</p>}

                                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '0.5rem' }}>
                                                <button
                                                    type="button"
                                                    onClick={() => { setError(''); setStep(1); }}
                                                    style={{
                                                        background: '#ffffff',
                                                        color: '#000000',
                                                        border: '4px solid #000000',
                                                        boxShadow: '4px 4px 0px 0px rgba(0,0,0,1)',
                                                        padding: '0.875rem',
                                                        fontSize: '0.75rem',
                                                        fontWeight: 800,
                                                        textTransform: 'uppercase',
                                                        letterSpacing: '0.12em',
                                                        fontFamily: 'var(--font-heading)',
                                                        cursor: 'pointer',
                                                        transition: 'box-shadow 0.12s, transform 0.12s',
                                                    }}
                                                    onMouseEnter={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translate(4px,4px)'; e.currentTarget.style.background = '#000'; e.currentTarget.style.color = '#fff'; }}
                                                    onMouseLeave={e => { e.currentTarget.style.boxShadow = '4px 4px 0px 0px rgba(0,0,0,1)'; e.currentTarget.style.transform = 'none'; e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#000'; }}
                                                >
                                                    Back
                                                </button>
                                                <button
                                                    type="submit"
                                                    disabled={loading}
                                                    style={{
                                                        background: '#000000',
                                                        color: '#ffffff',
                                                        border: '4px solid #000000',
                                                        boxShadow: '4px 4px 0px 0px rgba(0,0,0,1)',
                                                        padding: '0.875rem',
                                                        fontSize: '0.75rem',
                                                        fontWeight: 800,
                                                        textTransform: 'uppercase',
                                                        letterSpacing: '0.12em',
                                                        fontFamily: 'var(--font-heading)',
                                                        cursor: loading ? 'not-allowed' : 'pointer',
                                                        opacity: loading ? 0.5 : 1,
                                                        transition: 'box-shadow 0.12s, transform 0.12s',
                                                    }}
                                                    onMouseEnter={e => { if (!loading) { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translate(4px,4px)'; } }}
                                                    onMouseLeave={e => { e.currentTarget.style.boxShadow = '4px 4px 0px 0px rgba(0,0,0,1)'; e.currentTarget.style.transform = 'none'; }}
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

                    {/* Right Column — Dark Summary Sidebar */}
                    <div style={{ background: '#000000', padding: '2rem', color: '#ffffff', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }} className="sm:p-12">
                        <div style={{ position: 'absolute', top: 0, right: 0, padding: '2rem', opacity: 0.04, pointerEvents: 'none' }}>
                            <ShieldLockIcon style={{ height: '14rem', width: '14rem', color: '#ffffff' }} />
                        </div>

                        <div style={{ position: 'relative', zIndex: 10, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                            <div>
                                <span style={{
                                    fontSize: '0.6rem',
                                    fontWeight: 800,
                                    color: '#ffffff',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.15em',
                                    border: '4px solid rgba(255,255,255,0.4)',
                                    padding: '0.2rem 0.75rem',
                                    fontFamily: 'var(--font-heading)',
                                }}>
                                    ACADEMY CHECKOUT
                                </span>
                                <h3 style={{ fontSize: '1.875rem', fontFamily: 'var(--font-heading)', fontWeight: 800, textTransform: 'uppercase', marginTop: '1.5rem', marginBottom: '2rem', lineHeight: 1.1, letterSpacing: '-0.03em', color: '#ffffff' }}>
                                    Secure Your Cyber Future
                                </h3>

                                <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                    {[
                                        { icon: LockSealIcon, text: 'Instant Access to Hands-On Labs' },
                                        { icon: ClockIcon, text: 'Lifetime Cohort Support & Updates' },
                                        { icon: CheckIcon, text: 'Verifiable Certificate of Completion' }
                                    ].map((item, idx) => (
                                        <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                            <div style={{ height: '2.25rem', width: '2.25rem', border: '4px solid rgba(255,255,255,0.3)', background: 'rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                                <item.icon style={{ height: '1.25rem', width: '1.25rem', color: '#ffffff' }} />
                                            </div>
                                            <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.8)', fontFamily: 'var(--font-heading)' }}>{item.text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div style={{ marginTop: '3rem', padding: '1.5rem', border: '4px solid rgba(255,255,255,0.3)', background: 'rgba(255,255,255,0.06)', position: 'relative', overflow: 'hidden' }}>
                                <div style={{ position: 'absolute', top: 0, right: 0, width: '4rem', height: '4rem', background: 'rgba(255,255,255,0.05)', pointerEvents: 'none' }} />
                                <p style={{ fontSize: '0.6rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.4)', marginBottom: '0.25rem', fontFamily: 'var(--font-heading)' }}>COHORT SUMMERS SPECIAL</p>
                                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                                    <p style={{ fontSize: '2.5rem', fontFamily: 'var(--font-heading)', fontWeight: 800, color: '#ffffff' }}>&#8377;{amount}</p>
                                    <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', textDecoration: 'line-through', fontWeight: 700 }}>&#8377;5,000</span>
                                </div>
                                <p style={{ fontSize: '0.55rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.6)', marginTop: '0.5rem', fontFamily: 'var(--font-heading)' }}>● Save 60% with limited offer coupon</p>
                            </div>
                        </div>
                    </div>

                </div>
            </main>

            {/* Footer lockup */}
            <footer style={{ width: '100%', textAlign: 'center', padding: '1.5rem', borderTop: '4px solid #000000', color: '#888888', fontSize: '0.68rem', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600, fontFamily: 'var(--font-heading)' }}>
                © {new Date().getFullYear()} Cyber Jai Academy. All Rights Reserved. SSL Secured Checkout.
            </footer>
        </div>
    );
}
