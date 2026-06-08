import React, { useState } from "react";
import spideyAvatar from "./spiderman_avatar_1780939994433.png";

export default function RequestCard({ user, onApprove }) {
  const [expanded, setExpanded] = useState(false);
  const [showReceipt, setShowReceipt] = useState(false);
  const [imgLoading, setImgLoading] = useState(true);
  const [imgError, setImgError] = useState(false);

  const toggleExpand = () => setExpanded(!expanded);

  const openReceipt = (e) => {
    e.stopPropagation();
    setImgLoading(true);
    setImgError(false);
    setShowReceipt(true);
  };

  const closeReceipt = (e) => {
    e.stopPropagation();
    setShowReceipt(false);
  };

  // Dynamic Base URL Integration for safe backend routing (supports Vite proxy / production host)
  const adminToken = localStorage.getItem('adminToken');
  const backendUrl = window.location.origin;
  const filename = user.order?.filename;

  // Resolve receipt URL path dynamically:
  // - If it starts with 'data:', it is in-memory base64, load directly.
  // - Otherwise, route via Express /api/receipt/:path using secure token query param.
  const imageUrl = filename
    ? (filename.startsWith('data:')
        ? filename
        : `${backendUrl}/api/receipt/${filename}?token=${adminToken}`)
    : null;

  return (
    <div className="relative">
      {/* Main Card (Glassmorphic) */}
      <div
        className="soft-card bg-[#0B0F19]/60 backdrop-blur-md border border-white/10 rounded-[32px] p-6 cursor-pointer hover:shadow-xl transition-all duration-300"
        onClick={toggleExpand}
      >
        {/* Header Row */}
        <div className="flex items-center justify-between">
          {/* Avatar with Neon Pulsing Border */}
          <div className="relative">
            <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-transparent neon-pulse">
              <img src={spideyAvatar} alt="Spidey avatar" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Name + Status Badge */}
          <div className="flex-1 ml-4">
            <h3 className="text-xl font-display font-black text-white">{user.name}</h3>
            {user.order?.status === 'approved' ? (
              <span className="inline-block mt-1 px-3 py-0.5 bg-green-500/15 text-green-400 border border-green-500/20 rounded-full text-xs font-black uppercase tracking-widest">
                Approved
              </span>
            ) : (
              <span className="inline-block mt-1 px-3 py-0.5 bg-yellow-500/15 text-yellow-400 border border-yellow-500/20 rounded-full text-xs font-black uppercase tracking-widest">
                Pending
              </span>
            )}
          </div>
        </div>

        {/* Expandable Details Container */}
        <div
          className={`mt-4 overflow-hidden transition-all duration-300 ease-in-out ${
            expanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="grid grid-cols-1 gap-2 text-sm text-white/80">
            <div className="flex items-center">
              <span className="font-medium w-24 text-white/40">Email:</span>
              <span className="flex-1 break-all">{user.email}</span>
              <button
                className="ml-2 px-2 py-0.5 bg-white/10 rounded text-xs hover:bg-white/20 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  navigator.clipboard.writeText(user.email);
                }}
              >
                Copy
              </button>
            </div>
            <div className="flex items-center">
              <span className="font-medium w-24 text-white/40">Phone:</span>
              <span className="flex-1 break-all">{user.phone}</span>
            </div>
            <div className="flex items-center">
              <span className="font-medium w-24 text-white/40">Submitted:</span>
              <span className="flex-1">
                {new Date(user.order?.created_at || user.created_at || Date.now()).toLocaleString()}
              </span>
            </div>

            {/* Receipt Verification Button */}
            {filename && (
              <button
                className="mt-3 w-full bg-cyber-red text-white font-bold py-2 rounded-lg hover:bg-cyber-redDark transition-colors"
                onClick={openReceipt}
              >
                VIEW RECEIPT SCREENSHOT
              </button>
            )}

            {/* Approve Enrollment Action */}
            {user.order?.status !== 'approved' && user.order?.order_id && (
              <button
                className="mt-3 w-full bg-emerald-600 text-white font-bold py-2.5 rounded-lg hover:bg-emerald-700 transition-colors uppercase tracking-wider text-xs shadow-[0_4px_12px_rgba(16,185,129,0.2)]"
                onClick={(e) => {
                  e.stopPropagation();
                  onApprove && onApprove();
                }}
              >
                Approve Enrollment
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Lightbox Modal Overlay for Receipt */}
      {showReceipt && (
        <div
          className="fixed inset-0 bg-black/85 backdrop-blur-sm flex items-center justify-center z-50 p-4 transition-all duration-300"
          onClick={closeReceipt}
        >
          <div
            className="relative max-w-3xl w-full bg-[#0E131F]/90 border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col p-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Cross Button */}
            <button
              className="absolute top-4 right-4 text-white/40 hover:text-white text-2xl transition-colors leading-none z-20"
              onClick={closeReceipt}
            >
              ×
            </button>

            {/* Loading Spinner */}
            {imgLoading && !imgError && (
              <div className="flex flex-col items-center justify-center min-h-[300px] w-full">
                <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-cyber-red mb-2"></div>
                <p className="text-white/40 text-[10px] tracking-widest uppercase font-bold">Decrypting Receipt...</p>
              </div>
            )}

            {/* Error Fallback vector template if asset throws 404/Network failure */}
            {imgError ? (
              <div className="flex flex-col items-center justify-center py-12 text-center max-w-md mx-auto">
                <div className="h-16 w-16 bg-cyber-red/10 border border-cyber-red/30 rounded-full flex items-center justify-center mb-4 text-cyber-red animate-pulse">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h4 className="text-white font-display font-black uppercase tracking-tight text-lg mb-1">Receipt 404 Error</h4>
                <p className="text-cyber-red text-xs uppercase tracking-widest font-bold mb-4">Secure Link Broken</p>
                <p className="text-white/50 text-sm mb-6 max-w-xs leading-relaxed">
                  The requested proof of payment image does not exist or has expired in the remote verification storage bucket.
                </p>
                <button
                  className="px-6 py-2.5 bg-white/10 hover:bg-white/15 text-white text-xs font-bold rounded-lg uppercase tracking-wider transition-colors border border-white/5"
                  onClick={closeReceipt}
                >
                  Close Panel
                </button>
              </div>
            ) : (
              imageUrl && (
                <div className="relative flex items-center justify-center min-h-[300px]">
                  <img
                    src={imageUrl}
                    alt="Proof of Payment"
                    className={`object-contain max-h-[70vh] max-w-full rounded-lg border border-white/5 shadow-inner transition-opacity duration-300 ${
                      imgLoading ? "opacity-0" : "opacity-100"
                    }`}
                    onLoad={() => setImgLoading(false)}
                    onError={() => {
                      setImgLoading(false);
                      setImgError(true);
                    }}
                  />
                </div>
              )
            )}

            {/* Bottom Info & Action Panel */}
            {!imgError && (
              <div className="mt-4 w-full flex items-center justify-between border-t border-white/10 pt-4">
                <div className="text-left overflow-hidden mr-4">
                  <span className="text-[10px] text-white/40 uppercase tracking-widest font-bold block">Verification Source</span>
                  <p className="text-xs text-white/70 font-mono truncate max-w-xs">{filename}</p>
                </div>
                <button
                  className="px-5 py-2 bg-cyber-red text-white text-xs font-bold rounded-lg uppercase tracking-wider hover:bg-cyber-redDark transition-all active:scale-[0.98]"
                  onClick={closeReceipt}
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
