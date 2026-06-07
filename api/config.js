if (!process.env.VERCEL) {
    try {
        await import('dotenv/config');
    } catch (e) {
        // Dotenv not available or already loaded
    }
}

export const APP_NAME = 'Cyber Jai';
export const COURSE_NAME = 'Cybersecurity with AI';

export const SUPABASE_URL = process.env.SUPABASE_URL || '';
export const SUPABASE_KEY = process.env.SUPABASE_KEY || '';
export const UPI_ID = process.env.UPI_ID || 'cyberjai@upi';
export const UPI_NAME = process.env.UPI_NAME || 'Cyber Jai Academy';
export const COURSE_FEE = 5000;
export const OFFER_AMOUNT = 2000;
export const MAX_UPLOAD_BYTES = 5 * 1024 * 1024;

export const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@cyberjai.local';
export const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'Admin@jangu.baba';
export const JWT_SECRET = process.env.JWT_SECRET || 'cyber-jai-dev-secret-change-me';

export const PAYMENT_PURPOSE = 'Summer Offer';
