import React from 'react';

const common = {
  fill: 'none',
  stroke: 'currentColor',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  strokeWidth: 1.8,
};

export function ShieldLockIcon({ className = 'h-12 w-12', ...props }) {
  return (
    <svg viewBox="0 0 64 72" className={className} aria-hidden="true" {...props}>
      <path
        {...common}
        d="M32 4 8 14v18c0 16 9.3 28.7 24 36 14.7-7.3 24-20 24-36V14L32 4Z"
      />
      <path {...common} d="M24 33.5a8 8 0 0 1 16 0v6.5H24z" />
      <rect {...common} x="20.5" y="34" width="23" height="18" rx="4.5" />
      <path {...common} d="M32 39.5v4.5" />
      <circle cx="32" cy="44.7" r="1.2" fill="currentColor" />
    </svg>
  );
}

export function UserOutlineIcon({ className = 'h-12 w-12', ...props }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" {...props}>
      <circle {...common} cx="32" cy="22" r="11" />
      <path {...common} d="M14 53c3.8-10.2 10.9-15 18-15s14.2 4.8 18 15" />
      <path {...common} d="M24 29h16" />
    </svg>
  );
}

export function GroupIcon({ className = 'h-10 w-10', ...props }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" {...props}>
      <circle {...common} cx="23" cy="22" r="7.5" />
      <circle {...common} cx="41" cy="22" r="7.5" />
      <path {...common} d="M11 50c2.9-8.4 8.6-12.7 12-12.7 2 0 4 0.9 5.7 2.4" />
      <path {...common} d="M53 50c-2.9-8.4-8.6-12.7-12-12.7-2 0-4 0.9-5.7 2.4" />
      <path {...common} d="M17 49c3.8-10 9.8-15.1 15-15.1s11.2 5.1 15 15.1" />
    </svg>
  );
}

export function GrowthIcon({ className = 'h-10 w-10', ...props }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" {...props}>
      <path {...common} d="M10 50h44" />
      <path {...common} d="M16 44V30" />
      <path {...common} d="M27 44V20" />
      <path {...common} d="M38 44V12" />
      <path {...common} d="m48 14 6-2-2 6" />
      <path {...common} d="m54 12-18 18-8-8-16 16" />
    </svg>
  );
}

export function LaptopCodeIcon({ className = 'h-10 w-10', ...props }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" {...props}>
      <rect {...common} x="14" y="16" width="36" height="24" rx="3.5" />
      <path {...common} d="M10 48h44" />
      <path {...common} d="m24 24-6 4 6 4" />
      <path {...common} d="m40 24 6 4-6 4" />
      <path {...common} d="m31 22-2 12" />
    </svg>
  );
}

export function CommunityIcon({ className = 'h-10 w-10', ...props }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" {...props}>
      <circle {...common} cx="21" cy="25" r="6.5" />
      <circle {...common} cx="43" cy="25" r="6.5" />
      <path {...common} d="M8 48c2.7-8.8 8.7-13 13-13s10.3 4.2 13 13" />
      <path {...common} d="M30 48c2.7-8.8 8.7-13 13-13s10.3 4.2 13 13" />
      <path {...common} d="M16 21c2.3-3.1 5.8-5 9.8-5" />
      <path {...common} d="M48 21c-2.3-3.1-5.8-5-9.8-5" />
    </svg>
  );
}

export function HackerIcon({ className = 'h-10 w-10', ...props }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" {...props}>
      <path {...common} d="M14 48c1.5-9.5 7.6-16 18-16s16.5 6.5 18 16" />
      <path {...common} d="M23 24c1.6-6.4 5.1-10 9-10s7.4 3.6 9 10" />
      <path {...common} d="M18 34c4.3-3.8 8.7-5.7 14-5.7S42.7 30.2 47 34" />
      <circle {...common} cx="32" cy="29" r="2.5" />
      <path {...common} d="M32 38v10" />
      <path {...common} d="M24 42h16" />
      <path {...common} d="m42 16 8 4-8 4" />
      <path {...common} d="m22 16-8 4 8 4" />
    </svg>
  );
}

export function CubeIcon({ className = 'h-10 w-10', ...props }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" {...props}>
      <path {...common} d="M32 10 12 20v24l20 10 20-10V20L32 10Z" />
      <path {...common} d="M32 10v20L12 20" />
      <path {...common} d="M32 30 52 20" />
      <path {...common} d="M24 24 16 20" />
      <path {...common} d="M40 24 48 20" />
      <path {...common} d="M24 40 16 36" />
      <path {...common} d="M40 40 48 36" />
    </svg>
  );
}

export function BrainIcon({ className = 'h-8 w-8', ...props }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" {...props}>
      <path {...common} d="M24 18c-4 0-7 3-7 7 0 2.1.8 4.1 2.2 5.5A7 7 0 0 0 25 42h12a9 9 0 0 0 9-9c0-1.8-.5-3.5-1.4-4.9A7 7 0 0 0 36 18a8 8 0 0 0-4 1 8 8 0 0 0-8-1Z" />
      <path {...common} d="M24 18v26M32 16v30M40 18v26" />
      <path {...common} d="M20 26h24M18 34h28" />
    </svg>
  );
}

export function GlobeIcon({ className = 'h-8 w-8', ...props }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" {...props}>
      <circle {...common} cx="32" cy="32" r="20" />
      <path {...common} d="M12 32h40" />
      <path {...common} d="M32 12c6.3 6 10 13.5 10 20s-3.7 14-10 20c-6.3-6-10-13.5-10-20s3.7-14 10-20Z" />
      <path {...common} d="M17.5 20c4.7 3.2 9.2 4.8 14.5 4.8S42.8 23.2 47.5 20" />
      <path {...common} d="M17.5 44c4.7-3.2 9.2-4.8 14.5-4.8s10.8 1.6 15.5 4.8" />
    </svg>
  );
}

export function CertificateIcon({ className = 'h-8 w-8', ...props }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" {...props}>
      <rect {...common} x="14" y="12" width="36" height="28" rx="4" />
      <path {...common} d="M24 22h16M24 30h10" />
      <circle {...common} cx="46" cy="42" r="8" />
      <path {...common} d="m42 42 2.2 2.2 4.2-5.4" />
      <path {...common} d="M40 47 36 56l6-2 4 4 3-7" />
    </svg>
  );
}

export function HeadsetIcon({ className = 'h-8 w-8', ...props }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" {...props}>
      <path {...common} d="M18 32a14 14 0 0 1 28 0v8" />
      <path {...common} d="M16 34a8 8 0 0 1 8 8v6H16a4 4 0 0 1-4-4v-6a4 4 0 0 1 4-4Z" />
      <path {...common} d="M48 34a8 8 0 0 1 8 8v6a4 4 0 0 1-4 4H44v-6a8 8 0 0 1 4-8Z" />
      <path {...common} d="M28 46a4 4 0 0 1 8 0v2h-8z" />
    </svg>
  );
}

export function ClockIcon({ className = 'h-5 w-5', ...props }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...props}>
      <circle {...common} cx="12" cy="12" r="8.5" />
      <path {...common} d="M12 7.5v5l3 2" />
    </svg>
  );
}

export function CalendarIcon({ className = 'h-5 w-5', ...props }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...props}>
      <rect {...common} x="4" y="5.5" width="16" height="14" rx="2.5" />
      <path {...common} d="M4 9.5h16" />
      <path {...common} d="M8 3.5v4M16 3.5v4" />
      <path {...common} d="M8 13h3M13 13h3M8 16h3" />
    </svg>
  );
}

export function LockSealIcon({ className = 'h-12 w-12', ...props }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" {...props}>
      <circle {...common} cx="32" cy="32" r="26" />
      <path {...common} d="M24 29a8 8 0 0 1 16 0v5H24z" />
      <rect {...common} x="22" y="29" width="20" height="16" rx="3.5" />
      <path {...common} d="M32 34v4" />
    </svg>
  );
}

export function CheckIcon({ className = 'h-6 w-6', ...props }) {
  return (
    <svg viewBox="0 0 24 24" className={className} strokeWidth="3" {...common} {...props}>
      <path d="M5 13l4 4L19 7" />
    </svg>
  );
}

export function XIcon({ className = 'h-6 w-6', ...props }) {
  return (
    <svg viewBox="0 0 24 24" className={className} strokeWidth="3" {...common} {...props}>
      <path d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

export function LogoutIcon({ className = 'h-6 w-6', ...props }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...common} {...props}>
      <path d="M17 16l4-4-4-4M21 12H9M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" />
    </svg>
  );
}

export function CloudUploadIcon({ className = 'h-6 w-6', ...props }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...common} {...props}>
      <path d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
    </svg>
  );
}

export function CameraIcon({ className = 'h-6 w-6', ...props }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...common} {...props}>
      <path d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
      <circle cx="12" cy="13" r="3" {...common} />
    </svg>
  );
}
