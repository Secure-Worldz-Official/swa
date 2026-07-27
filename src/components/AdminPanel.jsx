import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ShieldLockIcon,
    LockSealIcon,
    UserOutlineIcon,
    ClockIcon,
    CheckIcon,
    XIcon,
    LogoutIcon
} from './Icons';

export default function AdminPanel() {
    const [token, setToken] = useState(localStorage.getItem('adminToken'));
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [stats, setStats] = useState(null);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [expandedUserId, setExpandedUserId] = useState(null);

    const toggleRow = (userId) => {
        setExpandedUserId(prev => prev === userId ? null : userId);
    };

    const getImageUrl = (filename) => {
        if (!filename) return '';
        if (filename.startsWith('data:') || filename.startsWith('http')) {
            return filename;
        }
        return `https://qqahllaidvbsccvenydb.supabase.co/storage/v1/object/public/receipts/${filename}`;
    };

    const fetchData = async (authToken) => {
        try {
            const sRes = await fetch('/api/admin/stats', {
                headers: { Authorization: `Bearer ${authToken}` }
            });
            if (sRes.ok) {
                setStats(await sRes.json());
            }

            const uRes = await fetch('/api/admin/users', {
                headers: { Authorization: `Bearer ${authToken}` }
            });
            if (uRes.ok) {
                setUsers(await uRes.json());
            } else if (uRes.status === 401 || uRes.status === 403) {
                localStorage.removeItem('adminToken');
                setToken(null);
            }
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        if (token) {
            fetchData(token);
        }
    }, [token]);

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        try {
            const res = await fetch('/api/auth/admin/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });
            const data = await res.json();
            if (res.ok) {
                localStorage.setItem('adminToken', data.token);
                setToken(data.token);
            } else {
                setError(data.message || 'Login failed');
            }
        } catch (err) {
            setError(`Connection error: ${err.message}`);
        } finally {
            setLoading(false);
        }
    };

    const approveUser = async (userId, orderId) => {
        try {
            const res = await fetch('/api/admin/approve', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({ userId, orderId })
            });
            if (res.ok) {
                fetchData(token);
            }
        } catch (err) {
            console.error(err);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('adminToken');
        setToken(null);
    };

    const inputStyle = {
        width: '100%',
        background: '#ffffff',
        border: '4px solid #000000',
        boxShadow: '4px 4px 0px 0px rgba(0,0,0,1)',
        padding: '0.75rem 1rem',
        fontSize: '0.9rem',
        color: '#000000',
        outline: 'none',
        fontFamily: 'var(--font-main)',
    };

    if (!token) {
        return (
            <div style={{ minHeight: '100vh', background: '#ffffff', color: '#000000', display: 'flex', itemsCenter: 'center', justifyContent: 'center', padding: '1rem' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{
                        maxWidth: '28rem',
                        width: '100%',
                        background: '#ffffff',
                        border: '4px solid #000000',
                        boxShadow: '12px 12px 0px 0px rgba(0,0,0,1)',
                        padding: '2rem',
                    }}
                >
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
                        <div style={{ height: '4rem', width: '4rem', background: '#000000', border: '4px solid #000000', boxShadow: '4px 4px 0px 0px rgba(0,0,0,1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <ShieldLockIcon style={{ height: '2.5rem', width: '2.5rem', color: '#ffffff' }} />
                        </div>
                    </div>
                    <h2 style={{ fontSize: '1.875rem', fontFamily: 'var(--font-heading)', fontWeight: 800, textTransform: 'uppercase', textAlign: 'center', marginBottom: '0.5rem', color: '#000000' }}>Admin Login</h2>
                    <p style={{ color: '#555555', textAlign: 'center', marginBottom: '2rem', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', fontFamily: 'var(--font-heading)' }}>Secure World Access</p>

                    <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                        <div>
                            <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#555555', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>Email Address</label>
                            <input
                                type="email"
                                required
                                style={inputStyle}
                                placeholder="admin@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#555555', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>Password</label>
                            <input
                                type="password"
                                required
                                style={inputStyle}
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        {error && <p style={{ color: '#000000', background: '#f0f0f0', border: '4px solid #000', padding: '0.5rem', fontWeight: 700, fontSize: '0.875rem', textAlign: 'center' }}>{error}</p>}
                        <button
                            type="submit"
                            disabled={loading}
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
                                cursor: loading ? 'not-allowed' : 'pointer',
                                opacity: loading ? 0.5 : 1,
                                transition: 'box-shadow 0.12s, transform 0.12s',
                            }}
                            onMouseEnter={e => { if (!loading) { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translate(6px,6px)'; } }}
                            onMouseLeave={e => { e.currentTarget.style.boxShadow = '6px 6px 0px 0px rgba(0,0,0,1)'; e.currentTarget.style.transform = 'none'; }}
                        >
                            {loading ? 'AUTHENTICATING...' : 'SECURE LOGIN'}
                        </button>
                    </form>
                </motion.div>
            </div>
        );
    }

    return (
        <div style={{ minHeight: '100vh', background: '#ffffff', color: '#000000', fontFamily: 'var(--font-main)' }}>
            <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, height: '5rem', background: '#ffffff', borderBottom: '4px solid #000000', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 2rem', zIndex: 50 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <ShieldLockIcon style={{ height: '2rem', width: '2rem', color: '#000000' }} />
                    <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.25rem', textTransform: 'uppercase', letterSpacing: '-0.02em', color: '#000000' }}>Cyber Jai Admin</span>
                </div>
                <button
                    onClick={handleLogout}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        background: '#000000',
                        color: '#ffffff',
                        border: '4px solid #000000',
                        boxShadow: '4px 4px 0px 0px rgba(0,0,0,1)',
                        padding: '0.5rem 1rem',
                        fontSize: '0.75rem',
                        fontWeight: 800,
                        textTransform: 'uppercase',
                        letterSpacing: '0.12em',
                        fontFamily: 'var(--font-heading)',
                        cursor: 'pointer',
                    }}
                >
                    <LogoutIcon style={{ height: '1.25rem', width: '1.25rem' }} />
                    Logout
                </button>
            </nav>

            <main style={{ paddingTop: '7rem', paddingBottom: '5rem', maxWidth: '80rem', margin: '0 auto', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '1.5rem', marginBottom: '3rem' }} className="md:grid-cols-3">
                    <StatCard label="Total Students" value={stats?.totalUsers || 0} icon={UserOutlineIcon} />
                    <StatCard label="Pending Approval" value={stats?.pendingOrders || 0} icon={ClockIcon} tone="red" />
                    <StatCard label="Total Orders" value={stats?.totalOrders || 0} icon={ShieldLockIcon} />
                </div>

                <section style={{ background: '#ffffff', border: '4px solid #000000', boxShadow: '12px 12px 0px 0px rgba(0,0,0,1)', overflow: 'hidden' }}>
                    <div style={{ padding: '1.5rem 2rem', borderBottom: '4px solid #000000', display: 'flex', flexDirection: 'column', gap: '0.5rem' }} className="sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-heading)', fontWeight: 800, textTransform: 'uppercase', color: '#000000' }}>Recent Enrollments</h3>
                            <p style={{ fontSize: '0.75rem', color: '#555555', textTransform: 'uppercase', fontWeight: 800, letterSpacing: '0.15em', fontFamily: 'var(--font-heading)' }}>Verify and approve student access</p>
                        </div>
                    </div>

                    <div style={{ overflowX: 'auto' }}>
                        <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
                            <thead>
                                <tr style={{ background: '#000000', color: '#ffffff', borderBottom: '4px solid #000000' }}>
                                    <th style={{ padding: '1rem 2rem', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', fontFamily: 'var(--font-heading)' }}>Student</th>
                                    <th style={{ padding: '1rem 2rem', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', fontFamily: 'var(--font-heading)' }}>Order ID</th>
                                    <th style={{ padding: '1rem 2rem', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', fontFamily: 'var(--font-heading)' }}>Status</th>
                                    <th style={{ padding: '1rem 2rem', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', fontFamily: 'var(--font-heading)' }}>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.length === 0 ? (
                                    <tr>
                                        <td colSpan="4" style={{ padding: '5rem 2rem', textAlign: 'center', color: '#888888', fontStyle: 'italic' }}>No students yet</td>
                                    </tr>
                                ) : (
                                    users.map(user => {
                                        const isExpanded = expandedUserId === user.user_id;
                                        return (
                                            <React.Fragment key={user.user_id}>
                                                <tr
                                                    onClick={() => toggleRow(user.user_id)}
                                                    style={{ borderBottom: '2px solid #000000', background: isExpanded ? '#f0f0f0' : '#ffffff', cursor: 'pointer' }}
                                                >
                                                    <td style={{ padding: '1.25rem 2rem' }}>
                                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                                            <div style={{ fontWeight: 800, color: '#000000' }}>{user.name}</div>
                                                            <button
                                                                onClick={(e) => {
                                                                    e.stopPropagation();
                                                                    toggleRow(user.user_id);
                                                                }}
                                                                style={{
                                                                    fontSize: '0.65rem',
                                                                    fontWeight: 800,
                                                                    textTransform: 'uppercase',
                                                                    letterSpacing: '0.1em',
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    gap: '0.375rem',
                                                                    background: '#000000',
                                                                    color: '#ffffff',
                                                                    border: '2px solid #000',
                                                                    padding: '0.25rem 0.625rem',
                                                                    cursor: 'pointer',
                                                                    fontFamily: 'var(--font-heading)',
                                                                }}
                                                            >
                                                                View Details
                                                            </button>
                                                        </div>
                                                    </td>
                                                    <td style={{ padding: '1.25rem 2rem', fontFamily: 'monospace', fontSize: '0.75rem', color: '#555555' }}>
                                                        {user.order?.order_id || 'N/A'}
                                                    </td>
                                                    <td style={{ padding: '1.25rem 2rem' }}>
                                                        {user.order?.status === 'approved' ? (
                                                            <span style={{ padding: '0.25rem 0.75rem', background: '#000000', color: '#ffffff', border: '2px solid #000', fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', fontFamily: 'var(--font-heading)' }}>Approved</span>
                                                        ) : (
                                                            <span style={{ padding: '0.25rem 0.75rem', background: '#ffffff', color: '#000000', border: '2px solid #000', fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', fontFamily: 'var(--font-heading)' }}>Pending</span>
                                                        )}
                                                    </td>
                                                    <td style={{ padding: '1.25rem 2rem' }}>
                                                        {user.order?.status !== 'approved' && user.order?.order_id && (
                                                            <button
                                                                onClick={(e) => {
                                                                    e.stopPropagation();
                                                                    approveUser(user.user_id, user.order.order_id);
                                                                }}
                                                                style={{
                                                                    padding: '0.5rem 1rem',
                                                                    background: '#000000',
                                                                    color: '#ffffff',
                                                                    border: '2px solid #000000',
                                                                    boxShadow: '4px 4px 0px 0px rgba(0,0,0,1)',
                                                                    fontSize: '0.7rem',
                                                                    fontWeight: 800,
                                                                    textTransform: 'uppercase',
                                                                    letterSpacing: '0.12em',
                                                                    fontFamily: 'var(--font-heading)',
                                                                    cursor: 'pointer',
                                                                }}
                                                            >
                                                                Approve
                                                            </button>
                                                        )}
                                                    </td>
                                                </tr>
                                                <AnimatePresence initial={false}>
                                                    {isExpanded && (
                                                        <tr style={{ borderBottom: '4px solid #000000', background: '#f8f8f8' }}>
                                                            <td colSpan="4" style={{ padding: '1.5rem 2rem' }}>
                                                                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }} className="md:grid-cols-2">
                                                                    {/* Left side: Details */}
                                                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                                                        <div>
                                                                            <h4 style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#555555', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>Applicant Details</h4>
                                                                            <div style={{ border: '4px solid #000000', background: '#ffffff', padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', boxShadow: '4px 4px 0px 0px rgba(0,0,0,1)' }}>
                                                                                <div>
                                                                                    <span style={{ fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#888888', display: 'block', fontFamily: 'var(--font-heading)' }}>Full Name</span>
                                                                                    <span style={{ fontSize: '0.88rem', fontWeight: 800, color: '#000000' }}>{user.name}</span>
                                                                                </div>
                                                                                <div>
                                                                                    <span style={{ fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#888888', display: 'block', fontFamily: 'var(--font-heading)' }}>Email Address</span>
                                                                                    <a href={`mailto:${user.email}`} style={{ fontSize: '0.88rem', fontWeight: 800, color: '#000000', textDecoration: 'underline' }} onClick={(e) => e.stopPropagation()}>{user.email}</a>
                                                                                </div>
                                                                                <div>
                                                                                    <span style={{ fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#888888', display: 'block', fontFamily: 'var(--font-heading)' }}>Phone Number</span>
                                                                                    <a href={`tel:${user.phone}`} style={{ fontSize: '0.88rem', fontWeight: 800, color: '#000000', textDecoration: 'none' }} onClick={(e) => e.stopPropagation()}>{user.phone || 'N/A'}</a>
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        <div>
                                                                            <h4 style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#555555', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>Order Information</h4>
                                                                            <div style={{ border: '4px solid #000000', background: '#ffffff', padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', boxShadow: '4px 4px 0px 0px rgba(0,0,0,1)' }}>
                                                                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                                                    <div>
                                                                                        <span style={{ fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#888888', display: 'block', fontFamily: 'var(--font-heading)' }}>Order ID</span>
                                                                                        <span style={{ fontSize: '0.75rem', fontFamily: 'monospace', color: '#000000' }}>{user.order?.order_id || 'N/A'}</span>
                                                                                    </div>
                                                                                    <div>
                                                                                        <span style={{ fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#888888', display: 'block', fontFamily: 'var(--font-heading)' }}>Status</span>
                                                                                        {user.order?.status === 'approved' ? (
                                                                                            <span style={{ padding: '0.2rem 0.5rem', background: '#000000', color: '#ffffff', border: '2px solid #000', fontSize: '0.6rem', fontWeight: 800, textTransform: 'uppercase', fontFamily: 'var(--font-heading)' }}>Approved</span>
                                                                                        ) : (
                                                                                            <span style={{ padding: '0.2rem 0.5rem', background: '#ffffff', color: '#000000', border: '2px solid #000', fontSize: '0.6rem', fontWeight: 800, textTransform: 'uppercase', fontFamily: 'var(--font-heading)' }}>Pending</span>
                                                                                        )}
                                                                                    </div>
                                                                                </div>
                                                                                {user.order?.status !== 'approved' && user.order?.order_id && (
                                                                                    <button
                                                                                        onClick={(e) => {
                                                                                            e.stopPropagation();
                                                                                            approveUser(user.user_id, user.order.order_id);
                                                                                        }}
                                                                                        style={{
                                                                                            width: '100%',
                                                                                            padding: '0.75rem',
                                                                                            background: '#000000',
                                                                                            color: '#ffffff',
                                                                                            border: '4px solid #000000',
                                                                                            boxShadow: '4px 4px 0px 0px rgba(0,0,0,1)',
                                                                                            fontSize: '0.75rem',
                                                                                            fontWeight: 800,
                                                                                            textTransform: 'uppercase',
                                                                                            letterSpacing: '0.12em',
                                                                                            fontFamily: 'var(--font-heading)',
                                                                                            cursor: 'pointer',
                                                                                        }}
                                                                                    >
                                                                                        Approve enrollment
                                                                                    </button>
                                                                                )}
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    {/* Right side: Proof Image */}
                                                                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                                                                        <h4 style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#555555', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>Payment Receipt / Proof of Upload</h4>
                                                                        {user.order?.filename ? (
                                                                            <div style={{ border: '4px solid #000000', background: '#ffffff', padding: '0.75rem', boxShadow: '4px 4px 0px 0px rgba(0,0,0,1)', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '220px' }}>
                                                                                <img
                                                                                    src={getImageUrl(user.order.filename)}
                                                                                    alt="Payment Receipt"
                                                                                    style={{ maxHeight: '320px', width: 'auto', objectFit: 'contain', border: '2px solid #000', cursor: 'zoom-in' }}
                                                                                    onClick={(e) => {
                                                                                        e.stopPropagation();
                                                                                        window.open(getImageUrl(user.order.filename), '_blank');
                                                                                    }}
                                                                                />
                                                                            </div>
                                                                        ) : (
                                                                            <div style={{ border: '4px dashed #000000', background: '#ffffff', padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '220px', color: '#888888', fontStyle: 'italic' }}>
                                                                                No proof uploaded
                                                                            </div>
                                                                        )}
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    )}
                                                </AnimatePresence>
                                            </React.Fragment>
                                        );
                                    })
                                )}
                            </tbody>
                        </table>
                    </div>
                </section>
            </main>
        </div>
    );
}

function StatCard({ label, value, icon: Icon, tone = 'neutral' }) {
    return (
        <div style={{
            padding: '1.5rem',
            border: '4px solid #000000',
            background: tone === 'red' ? '#000000' : '#ffffff',
            color: tone === 'red' ? '#ffffff' : '#000000',
            boxShadow: '8px 8px 0px 0px rgba(0,0,0,1)',
        }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <div style={{ height: '3rem', width: '3rem', border: '3px solid', borderColor: tone === 'red' ? '#ffffff' : '#000000', background: tone === 'red' ? '#ffffff' : '#000000', color: tone === 'red' ? '#000000' : '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon style={{ height: '1.5rem', width: '1.5rem' }} />
                </div>
            </div>
            <p style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', opacity: 0.8, fontFamily: 'var(--font-heading)' }}>{label}</p>
            <h4 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-heading)', fontWeight: 800, marginTop: '0.25rem' }}>{value}</h4>
        </div>
    );
}
