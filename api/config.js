import path from 'node:path';
import { fileURLToPath } from 'node:url';
import dotenv from 'dotenv';

try {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    dotenv.config({ path: path.resolve(__dirname, '../.env') });
} catch (e) {
    // Dotenv not available or already loaded
}

export const APP_NAME = 'Cyber Jai';
export const COURSE_NAME = 'Cybersecurity with AI';

export const SUPABASE_URL = process.env.SUPABASE_URL || '';
export const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY || process.env.SUPABASE_KEY || '';
export const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || '';
export const SUPABASE_KEY = SUPABASE_ANON_KEY;
export const SUPABASE_WRITE_KEY = SUPABASE_SERVICE_ROLE_KEY || SUPABASE_ANON_KEY;

export const COURSE_FEE = 5000;
export const OFFER_AMOUNT = 2000;
export const MAX_UPLOAD_BYTES = 5 * 1024 * 1024;

export const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@cyberjai.local';
export const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'Admin@jangu.baba';
export const JWT_SECRET = process.env.JWT_SECRET || 'cyber-jai-dev-secret-change-me';

export const PAYMENT_PURPOSE = 'Summer Offer';
