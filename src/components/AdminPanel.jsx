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

    if (!token) {
        return (
            <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-md w-full bg-[#111] border border-white/10 p-8 rounded-[32px] shadow-2xl"
                >
                    <div className="flex justify-center mb-8">
                        <div className="h-16 w-16 bg-cyber-red rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(212,18,18,0.3)]">
                            <ShieldLockIcon className="h-10 w-10 text-white" />
                        </div>
                    </div>
                    <h2 className="text-3xl font-display font-black text-white text-center mb-2 uppercase tracking-tight">Admin Login</h2>
                    <p className="text-white/50 text-center mb-8 text-sm uppercase tracking-widest">Secure World Access</p>

                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <label className="block text-xs font-bold text-white/40 uppercase tracking-widest mb-1.5 ml-1">Email Address</label>
                            <input
                                type="email"
                                required
                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 text-white placeholder:text-white/20 focus:outline-none focus:border-cyber-red transition-colors"
                                placeholder="admin@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-white/40 uppercase tracking-widest mb-1.5 ml-1">Password</label>
                            <input
                                type="password"
                                required
                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 text-white placeholder:text-white/20 focus:outline-none focus:border-cyber-red transition-colors"
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        {error && <p className="text-cyber-red text-sm font-bold text-center">{error}</p>}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-cyber-red text-white font-bold py-4 rounded-2xl shadow-[0_10px_25px_rgba(212,18,18,0.3)] hover:bg-cyber-redDark transition-all active:scale-[0.98] disabled:opacity-50"
                        >
                            {loading ? 'AUTHENTICATING...' : 'SECURE LOGIN'}
                        </button>
                    </form>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white">
            <nav className="fixed top-0 left-0 right-0 h-20 bg-[#121212]/90 backdrop-blur-md border-b border-white/10 flex items-center justify-between px-8 z-50">
                <div className="flex items-center gap-3">
                    <ShieldLockIcon className="h-8 w-8 text-cyber-red" />
                    <span className="font-display font-black text-xl uppercase tracking-tight text-white">Cyber J<span className="cyber-ai-glow">AI</span> <span className="text-cyber-red">Admin</span></span>
                </div>
                <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white/60 hover:text-cyber-red transition-colors"
                >
                    <LogoutIcon className="h-5 w-5" />
                    Logout
                </button>
            </nav>

            <main className="pt-28 px-4 sm:px-8 max-w-7xl mx-auto pb-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <StatCard label="Total Students" value={stats?.totalUsers || 0} icon={UserOutlineIcon} />
                    <StatCard label="Pending Approval" value={stats?.pendingOrders || 0} icon={ClockIcon} tone="red" />
                    <StatCard label="Total Orders" value={stats?.totalOrders || 0} icon={ShieldLockIcon} />
                </div>

                <section className="bg-[#141414] rounded-[32px] border border-white/10 shadow-lg overflow-hidden">
                    <div className="p-8 border-b border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div>
                            <h3 className="text-2xl font-display font-black uppercase tracking-tight text-white">Recent Enrollments</h3>
                            <p className="text-sm text-white/40 uppercase font-bold tracking-widest">Verify and approve student access</p>
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-white/5 border-b border-white/10">
                                    <th className="px-8 py-4 text-xs font-black uppercase tracking-widest text-white/40">Student</th>
                                    <th className="px-8 py-4 text-xs font-black uppercase tracking-widest text-white/40">Order ID</th>
                                    <th className="px-8 py-4 text-xs font-black uppercase tracking-widest text-white/40">Status</th>
                                    <th className="px-8 py-4 text-xs font-black uppercase tracking-widest text-white/40">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {users.length === 0 ? (
                                    <tr>
                                        <td colSpan="4" className="px-8 py-20 text-center text-white/30 italic">No students yet</td>
                                    </tr>
                                ) : (
                                    users.map(user => {
                                        const isExpanded = expandedUserId === user.user_id;
                                        return (
                                            <React.Fragment key={user.user_id}>
                                                <tr
                                                    onClick={() => toggleRow(user.user_id)}
                                                    className={`hover:bg-white/5 transition-colors cursor-pointer ${isExpanded ? 'bg-white/5' : ''}`}
                                                >
                                                    <td className="px-8 py-6">
                                                        <div className="flex items-center gap-3">
                                                            <div className="font-bold text-white">{user.name}</div>
                                                            <button
                                                                onClick={(e) => {
                                                                    e.stopPropagation();
                                                                    toggleRow(user.user_id);
                                                                }}
                                                                className="text-[10px] text-cyber-red/80 hover:text-cyber-red font-bold uppercase tracking-widest flex items-center gap-1.5 bg-cyber-red/10 hover:bg-cyber-red/20 px-3 py-1.5 rounded-xl border border-cyber-red/20 transition-all active:scale-[0.97]"
                                                            >
                                                                View Details
                                                                <motion.svg
                                                                    animate={{ rotate: isExpanded ? 180 : 0 }}
                                                                    className="h-3.5 w-3.5"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    viewBox="0 0 24 24"
                                                                >
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                                                                </motion.svg>
                                                            </button>
                                                        </div>
                                                    </td>
                                                    <td className="px-8 py-6 font-mono text-xs text-white/60">
                                                        {user.order?.order_id || 'N/A'}
                                                    </td>
                                                    <td className="px-8 py-6">
                                                        {user.order?.status === 'approved' ? (
                                                            <span className="px-3 py-1 bg-green-500/15 text-green-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-green-500/20">Approved</span>
                                                        ) : (
                                                            <span className="px-3 py-1 bg-yellow-500/15 text-yellow-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-yellow-500/20">Pending</span>
                                                        )}
                                                    </td>
                                                    <td className="px-8 py-6">
                                                        {user.order?.status !== 'approved' && user.order?.order_id && (
                                                            <div className="flex gap-2">
                                                                <button
                                                                    onClick={(e) => {
                                                                        e.stopPropagation();
                                                                        approveUser(user.user_id, user.order.order_id);
                                                                    }}
                                                                    className="px-4 py-2 bg-cyber-red text-white rounded-lg text-xs font-black uppercase tracking-widest hover:bg-cyber-redDark shadow-[0_4px_12px_rgba(212,18,18,0.3)] transition-all active:scale-[0.97]"
                                                                >
                                                                    Approve
                                                                </button>
                                                            </div>
                                                        )}
                                                    </td>
                                                </tr>
                                                <AnimatePresence initial={false}>
                                                    {isExpanded && (
                                                        <tr className="bg-white/[0.01] border-b border-white/5">
                                                            <td colSpan="4" className="px-8 py-0">
                                                                <motion.div
                                                                    initial={{ height: 0, opacity: 0 }}
                                                                    animate={{ height: 'auto', opacity: 1 }}
                                                                    exit={{ height: 0, opacity: 0 }}
                                                                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                                                                    className="overflow-hidden"
                                                                >
                                                                    <div className="pb-8 pt-4">
                                                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-white/5 mt-4 pt-6">
                                                                            {/* Left side: Details */}
                                                                            <div className="space-y-6">
                                                                                <div>
                                                                                    <h4 className="text-xs font-black uppercase tracking-widest text-white/40 mb-2">Applicant Details</h4>
                                                                                    <div className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-4">
                                                                                        <div>
                                                                                            <span className="text-[10px] font-black uppercase tracking-widest text-white/30 block">Full Name</span>
                                                                                            <span className="text-sm font-bold text-white">{user.name}</span>
                                                                                        </div>
                                                                                        <div>
                                                                                            <span className="text-[10px] font-black uppercase tracking-widest text-white/30 block">Email Address</span>
                                                                                            <a href={`mailto:${user.email}`} className="text-sm font-bold text-cyber-red hover:underline" onClick={(e) => e.stopPropagation()}>{user.email}</a>
                                                                                        </div>
                                                                                        <div>
                                                                                            <span className="text-[10px] font-black uppercase tracking-widest text-white/30 block">Phone Number</span>
                                                                                            <a href={`tel:${user.phone}`} className="text-sm font-bold text-white/80 hover:text-white transition-colors" onClick={(e) => e.stopPropagation()}>{user.phone || 'N/A'}</a>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>

                                                                                <div>
                                                                                    <h4 className="text-xs font-black uppercase tracking-widest text-white/40 mb-2">Order Information</h4>
                                                                                    <div className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-4">
                                                                                        <div className="flex justify-between items-center">
                                                                                            <div>
                                                                                                <span className="text-[10px] font-black uppercase tracking-widest text-white/30 block">Order ID</span>
                                                                                                <span className="text-xs font-mono text-white/80">{user.order?.order_id || 'N/A'}</span>
                                                                                            </div>
                                                                                            <div>
                                                                                                <span className="text-[10px] font-black uppercase tracking-widest text-white/30 block">Status</span>
                                                                                                {user.order?.status === 'approved' ? (
                                                                                                    <span className="px-2.5 py-0.5 bg-green-500/15 text-green-400 rounded-full text-[9px] font-black uppercase tracking-widest border border-green-500/20">Approved</span>
                                                                                                ) : (
                                                                                                    <span className="px-2.5 py-0.5 bg-yellow-500/15 text-yellow-400 rounded-full text-[9px] font-black uppercase tracking-widest border border-yellow-500/20">Pending</span>
                                                                                                )}
                                                                                            </div>
                                                                                        </div>
                                                                                        {user.order?.status !== 'approved' && user.order?.order_id && (
                                                                                            <button
                                                                                                onClick={(e) => {
                                                                                                    e.stopPropagation();
                                                                                                    approveUser(user.user_id, user.order.order_id);
                                                                                                }}
                                                                                                className="w-full py-3 bg-cyber-red text-white rounded-xl text-xs font-black uppercase tracking-widest hover:bg-cyber-redDark shadow-[0_4px_12px_rgba(212,18,18,0.3)] transition-all active:scale-[0.97]"
                                                                                            >
                                                                                                Approve enrollment
                                                                                            </button>
                                                                                        )}
                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                            {/* Right side: Proof Image */}
                                                                            <div className="flex flex-col justify-start">
                                                                                <h4 className="text-xs font-black uppercase tracking-widest text-white/40 mb-2">Payment Receipt / Proof of Upload</h4>
                                                                                {user.order?.filename ? (
                                                                                    <div className="relative group bg-white/5 border border-white/10 rounded-2xl overflow-hidden flex items-center justify-center p-2 min-h-[220px]">
                                                                                        <img
                                                                                            src={getImageUrl(user.order.filename)}
                                                                                            alt="Payment Receipt"
                                                                                            className="max-h-[320px] w-auto object-contain rounded-lg shadow-lg hover:scale-[1.02] transition-transform duration-300 cursor-zoom-in"
                                                                                            onClick={(e) => {
                                                                                                e.stopPropagation();
                                                                                                window.open(getImageUrl(user.order.filename), '_blank');
                                                                                            }}
                                                                                        />
                                                                                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                                                                                            <span className="text-[10px] font-black uppercase tracking-widest text-white bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">Click to expand</span>
                                                                                        </div>
                                                                                    </div>
                                                                                ) : (
                                                                                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center min-h-[220px] text-white/30 italic">
                                                                                        No proof uploaded
                                                                                    </div>
                                                                                )}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </motion.div>
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
    const styles = {
        neutral: 'bg-[#141414] border-white/10 text-white',
        red: 'bg-[#141414] border-cyber-red/40 text-cyber-red'
    };

    return (
        <div className={`p-6 rounded-[32px] border shadow-lg ${styles[tone]}`}>
            <div className="flex items-center justify-between mb-4">
                <div className={`h-12 w-12 rounded-2xl flex items-center justify-center ${tone === 'red' ? 'bg-cyber-red/15' : 'bg-white/5'}`}>
                    <Icon className="h-6 w-6" />
                </div>
            </div>
            <p className="text-xs font-black uppercase tracking-widest text-white/40">{label}</p>
            <h4 className="text-4xl font-display font-black mt-1">{value}</h4>
        </div>
    );
}
