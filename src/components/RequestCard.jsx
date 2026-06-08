import React, { useState } from "react";
import spideyAvatar from "./spiderman_avatar_1780939994433.png";

export default function RequestCard({ user }) {
  const [expanded, setExpanded] = useState(false);
  const [showReceipt, setShowReceipt] = useState(false);

  const toggleExpand = () => setExpanded(!expanded);
  const openReceipt = (e) => {
    e.stopPropagation();
    setShowReceipt(true);
  };
  const closeReceipt = (e) => {
    e.stopPropagation();
    setShowReceipt(false);
  };

  return (
    <div className="relative">
      {/* Main Card */}
      <div
        className="soft-card bg-[#0B0F19]/60 backdrop-blur-md border border-white/10 rounded-[32px] p-6 cursor-pointer hover:shadow-xl transition-all duration-300"
        onClick={toggleExpand}
      >
        {/* Header Row */}
        <div className="flex items-center justify-between">
          {/* Avatar with neon pulse */}
          <div className="relative">
            <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-transparent neon-pulse">
              <img src={spideyAvatar} alt="Spidey avatar" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Name + Status */}
          <div className="flex-1 ml-4">
            <h3 className="text-xl font-display font-black text-white">{user.name}</h3>
            <span className="inline-block mt-1 px-3 py-0.5 bg-green-500/15 text-green-400 rounded-full text-xs font-black uppercase tracking-widest">
              {user.enrollmentStatus ?? "Pending"}
            </span>
          </div>
        </div>

        {/* Expandable Details */}
        <div
          className={`mt-4 overflow-hidden transition-all duration-300 ease-in-out ${
            expanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="grid grid-cols-1 gap-2 text-sm text-white/80">
            <div className="flex items-center">
              <span className="font-medium w-24">Email:</span>
              <span className="flex-1 break-all">{user.email}</span>
              <button
                className="ml-2 px-2 py-0.5 bg-white/10 rounded text-xs hover:bg-white/20"
                onClick={(e) => {
                  e.stopPropagation();
                  navigator.clipboard.writeText(user.email);
                }}
              >
                Copy
              </button>
            </div>
            <div className="flex items-center">
              <span className="font-medium w-24">Phone:</span>
              <span className="flex-1 break-all">{user.phone}</span>
            </div>
            <div className="flex items-center">
              <span className="font-medium w-24">Submitted:</span>
              <span className="flex-1">{new Date(user.submissionTime).toLocaleString()}</span>
            </div>
            {user.receiptUrl && (
              <button
                className="mt-3 w-full bg-cyber-red text-white font-bold py-2 rounded-lg hover:bg-cyber-redDark transition-colors"
                onClick={openReceipt}
              >
                VIEW RECEIPT SCREENSHOT
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Lightbox Modal for Receipt */}
      {showReceipt && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={closeReceipt}
        >
          <div className="relative max-w-3xl max-h-[90vh]">
            <img src={user.receiptUrl} alt="Receipt" className="object-contain w-full h-full rounded-xl" />
            <button
              className="absolute top-2 right-2 text-white text-2xl hover:text-gray-300"
              onClick={closeReceipt}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
