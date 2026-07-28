import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// ✅ Custom QR Code Image — swap the file at this path to update the payment QR
import customQrCodeImage from '../assets/phonepe_qr.jpg';
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

    const amount = '2000'; // Summer offer

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

            if (!regRes.ok) {
                throw new Error(
                    regData.error
                        ? `${regData.message || 'Registration failed'}: ${regData.error}`
                        : (regData.message || 'Registration failed')
                );
            }

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

    if (success) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                    background: '#ffffff',
                    border: '4px solid #000000',
                    boxShadow: '12px 12px 0px 0px rgba(0,0,0,1)',
                    padding: '2rem',
                    textAlign: 'center',
                    maxWidth: '36rem',
                    margin: '5rem auto',
                }}
            >
                <div style={{ height: '5rem', width: '5rem', background: '#000000', border: '4px solid #000', boxShadow: '6px 6px 0px 0px rgba(0,0,0,1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                    <CheckIcon style={{ height: '2.5rem', width: '2.5rem', color: '#ffffff' }} />
                </div>
                <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-heading)', fontWeight: 800, textTransform: 'uppercase', marginBottom: '1rem', letterSpacing: '-0.03em', color: '#000000' }}>Application Submitted!</h2>
                <p style={{ color: '#555555', lineHeight: 1.75, maxWidth: '24rem', margin: '0 auto 2rem', fontSize: '0.9rem' }}>
                    Your payment is being verified. You will receive an email confirmation within 2 to 4 hours with your login credentials.
                </p>
                <button
                    onClick={() => window.location.reload()}
                    style={{
                        background: '#16a34a',
                        color: '#ffffff',
                        border: '4px solid #000000',
                        boxShadow: '6px 6px 0px 0px rgba(0,0,0,1)',
                        padding: '0.75rem 2rem',
                        fontSize: '0.75rem',
                        fontWeight: 800,
                        textTransform: 'uppercase',
                        letterSpacing: '0.15em',
                        fontFamily: 'var(--font-heading)',
                        cursor: 'pointer',
                        transition: 'box-shadow 0.12s, transform 0.12s, background 0.12s',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translate(6px,6px)'; e.currentTarget.style.background = '#15803d'; }}
                    onMouseLeave={e => { e.currentTarget.style.boxShadow = '6px 6px 0px 0px rgba(0,0,0,1)'; e.currentTarget.style.transform = 'none'; e.currentTarget.style.background = '#16a34a'; }}
                >
                    Back to home
                </button>
            </motion.div>
        );
    }

    return (
        <div id="registration" style={{ maxWidth: '56rem', margin: '0 auto', padding: '5rem 1rem' }}>
            <div style={{
                background: '#ffffff',
                border: '4px solid #000000',
                boxShadow: '12px 12px 0px 0px rgba(0,0,0,1)',
                overflow: 'hidden',
                display: 'grid',
            }} className="md:grid-cols-[1fr_0.8fr]">

                {/* Left Side: Form */}
                <div style={{ padding: '2rem' }} className="sm:p-12">
                    <div style={{ marginBottom: '2.5rem' }}>
                        <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-heading)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '-0.03em', marginBottom: '0.5rem', color: '#000000' }}>
                            Step {step} of 2
                        </h2>
                        <div style={{ height: '6px', width: '8rem', background: '#e0e0e0', border: '2px solid #000000', overflow: 'hidden' }}>
                            <motion.div
                                style={{ height: '100%', background: '#000000' }}
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
                                style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
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
                                        background: '#16a34a',
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
                                        transition: 'box-shadow 0.12s, transform 0.12s, background 0.12s',
                                    }}
                                    onMouseEnter={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translate(6px,6px)'; e.currentTarget.style.background = '#15803d'; }}
                                    onMouseLeave={e => { e.currentTarget.style.boxShadow = '6px 6px 0px 0px rgba(0,0,0,1)'; e.currentTarget.style.transform = 'none'; e.currentTarget.style.background = '#16a34a'; }}
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
                                style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
                            >
                                <div style={{ border: '4px solid #000000', background: '#f8f8f8', padding: '1.5rem', textAlign: 'center', boxShadow: '6px 6px 0px 0px rgba(0,0,0,1)' }}>
                                    <p style={{ fontSize: '0.65rem', fontWeight: 800, color: '#000000', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.75rem', fontFamily: 'var(--font-heading)' }}>Scan QR to pay ₹{amount}</p>
                                    <div style={{ background: '#ffffff', padding: '0.75rem', display: 'inline-block', border: '4px solid #000', boxShadow: '4px 4px 0px 0px rgba(0,0,0,1)', marginBottom: '0.75rem' }}>
                                        <img src={customQrCodeImage} alt="Scan QR to pay" style={{ width: '160px', height: '160px', objectFit: 'contain', display: 'block', margin: '0 auto' }} />
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
                                        height: '8rem',
                                        background: '#f8f8f8',
                                        border: '4px dashed #000000',
                                        cursor: 'pointer',
                                        transition: 'background 0.15s',
                                    }}
                                        onMouseEnter={e => e.currentTarget.style.background = '#eeeeee'}
                                        onMouseLeave={e => e.currentTarget.style.background = '#f8f8f8'}
                                    >
                                        {formData.receipt ? (
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#000000', fontWeight: 700 }}>
                                                <CheckIcon style={{ height: '1.5rem', width: '1.5rem' }} />
                                                <span>{formData.receipt.name}</span>
                                            </div>
                                        ) : (
                                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                                                <CloudUploadIcon style={{ height: '2rem', width: '2rem', color: '#888888' }} />
                                                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#888888', textTransform: 'uppercase', letterSpacing: '0.15em', fontFamily: 'var(--font-heading)' }}>Click to upload</span>
                                            </div>
                                        )}
                                        <input type="file" accept="image/*" style={{ display: 'none' }} onChange={handleFileChange} />
                                    </label>
                                </div>

                                {error && <p style={{ color: '#000000', fontWeight: 700, fontSize: '0.875rem', letterSpacing: '0.05em', background: '#f0f0f0', border: '4px solid #000', padding: '0.5rem 0.75rem' }}>{error}</p>}

                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                    <button
                                        type="button"
                                        onClick={() => { setError(''); setStep(1); }}
                                        style={{
                                            background: '#ffffff',
                                            color: '#16a34a',
                                            border: '4px solid #16a34a',
                                            boxShadow: '4px 4px 0px 0px rgba(0,0,0,1)',
                                            padding: '1rem',
                                            fontSize: '0.75rem',
                                            fontWeight: 800,
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.12em',
                                            fontFamily: 'var(--font-heading)',
                                            cursor: 'pointer',
                                            transition: 'box-shadow 0.12s, transform 0.12s, background 0.12s, color 0.12s',
                                        }}
                                        onMouseEnter={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translate(4px,4px)'; e.currentTarget.style.background = '#16a34a'; e.currentTarget.style.color = '#fff'; }}
                                        onMouseLeave={e => { e.currentTarget.style.boxShadow = '4px 4px 0px 0px rgba(0,0,0,1)'; e.currentTarget.style.transform = 'none'; e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#16a34a'; }}
                                    >
                                        Back
                                    </button>
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        style={{
                                            background: '#16a34a',
                                            color: '#ffffff',
                                            border: '4px solid #000000',
                                            boxShadow: '4px 4px 0px 0px rgba(0,0,0,1)',
                                            padding: '1rem',
                                            fontSize: '0.75rem',
                                            fontWeight: 800,
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.12em',
                                            fontFamily: 'var(--font-heading)',
                                            cursor: loading ? 'not-allowed' : 'pointer',
                                            opacity: loading ? 0.5 : 1,
                                            transition: 'box-shadow 0.12s, transform 0.12s, background 0.12s',
                                        }}
                                        onMouseEnter={e => { if (!loading) { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translate(4px,4px)'; e.currentTarget.style.background = '#15803d'; } }}
                                        onMouseLeave={e => { e.currentTarget.style.boxShadow = '4px 4px 0px 0px rgba(0,0,0,1)'; e.currentTarget.style.transform = 'none'; e.currentTarget.style.background = '#16a34a'; }}
                                    >
                                        {loading ? 'SUBMITTING...' : 'FINISH ENROLL'}
                                    </button>
                                </div>
                            </motion.form>
                        )}
                    </AnimatePresence>
                </div>

                {/* Right Side: Info/Premium side */}
                <div style={{ background: '#000000', padding: '3rem', color: '#ffffff', position: 'relative', overflow: 'hidden', borderLeft: '4px solid #000000' }} className="hidden md:block">
                    <div style={{ position: 'absolute', top: 0, right: 0, padding: '2rem', opacity: 0.1, pointerEvents: 'none' }}>
                        <ShieldLockIcon style={{ height: '10rem', width: '10rem', color: '#ffffff' }} />
                    </div>
                    <div style={{ position: 'relative', zIndex: 10 }}>
                        <h3 style={{ fontSize: '1.875rem', fontFamily: 'var(--font-heading)', fontWeight: 800, textTransform: 'uppercase', marginBottom: '1.5rem', lineHeight: 1.1, color: '#ffffff' }}>Secure Your Cyber Future</h3>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            {[
                                { icon: LockSealIcon, text: 'Instant Access to Labs' },
                                { icon: ClockIcon, text: 'Lifetime Course Support' },
                                { icon: CheckIcon, text: 'Certified Completion' }
                            ].map((item, idx) => (
                                <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <div style={{ height: '2.5rem', width: '2.5rem', border: '4px solid rgba(255,255,255,0.3)', background: 'rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                        <item.icon style={{ height: '1.25rem', width: '1.25rem', color: '#ffffff' }} />
                                    </div>
                                    <span style={{ fontSize: '0.875rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.8)', fontFamily: 'var(--font-heading)' }}>{item.text}</span>
                                </li>
                            ))}
                        </ul>

                        <div style={{ marginTop: '5rem', padding: '1.5rem', border: '4px solid rgba(255,255,255,0.3)', background: 'rgba(255,255,255,0.06)' }}>
                            <p style={{ fontSize: '1.875rem', fontFamily: 'var(--font-heading)', fontWeight: 800, color: '#ffffff' }}>&#8377;{amount}</p>
                            <p style={{ fontSize: '0.6rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.4)', marginTop: '0.25rem', fontFamily: 'var(--font-heading)' }}>Limited summer offer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
