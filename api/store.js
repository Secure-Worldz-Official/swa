import { createClient } from '@supabase/supabase-js';
import {
  SUPABASE_URL,
  SUPABASE_KEY,
  SUPABASE_SERVICE_ROLE_KEY,
  SUPABASE_WRITE_KEY,
} from './config.js';

let supabase;
const configuredKey = SUPABASE_WRITE_KEY || SUPABASE_KEY;

if (SUPABASE_URL && configuredKey) {
  supabase = createClient(SUPABASE_URL, configuredKey);
  if (process.env.VERCEL && !SUPABASE_SERVICE_ROLE_KEY) {
    console.warn('Supabase service role key is not configured. Writes will depend on anon-key database policies.');
  }
} else {
  console.warn('⚠️ Supabase URL or Key missing.');
  supabase = {
    from: () => ({
      select: () => Promise.resolve({ data: [], error: new Error('Supabase not configured') }),
      insert: () => Promise.resolve({ data: [], error: new Error('Supabase not configured') }),
      update: () => Promise.resolve({ data: [], error: new Error('Supabase not configured') })
    })
  };
}

export { supabase };

/**
 * Supabase Schema Expectations:
 * Tables:
 * 1. users: user_id (text, pk), name (text), email (text), phone (text), created_at (timestamp)
 * 2. orders: order_id (text, pk), user_id (text, fk), filename (text), status (text), created_at (timestamp), approved_at (timestamp)
 */

export async function readUsers() {
  const { data, error } = await supabase.from('users').select('*');
  if (error) throw error;
  return data || [];
}

export async function readOrders() {
  const { data, error } = await supabase.from('orders').select('*');
  if (error) throw error;
  return data || [];
}

export async function registerUser(userData) {
  const { error } = await supabase.from('users').insert([userData]);
  if (error) throw error;
  return userData;
}

export async function createOrder(orderData) {
  const { error } = await supabase.from('orders').insert([orderData]);
  if (error) throw error;
  return orderData;
}

export async function approveOrder(orderId) {
  const { error } = await supabase
    .from('orders')
    .update({ status: 'approved', approved_at: new Date() })
    .eq('order_id', orderId);
  if (error) throw error;
  return true;
}

export async function getAdminStats() {
  const { count: userCount, error: ue } = await supabase.from('users').select('*', { count: 'exact', head: true });
  const { count: orderCount, error: oe } = await supabase.from('orders').select('*', { count: 'exact', head: true });
  const { count: pendingCount, error: pe } = await supabase.from('orders').select('*', { count: 'exact', head: true }).eq('status', 'pending');

  return {
    totalUsers: userCount || 0,
    totalOrders: orderCount || 0,
    pendingOrders: pendingCount || 0
  };
}

/**
 * Upload a receipt file to Supabase Storage 'receipts' bucket.
 * @param {Buffer} buffer - The file buffer from multer memoryStorage
 * @param {string} filename - A unique filename for storage
 * @param {string} mimetype - The MIME type of the file (e.g. 'image/png')
 * @returns {Promise<{path: string, publicUrl: string}>}
 */
export async function uploadReceipt(buffer, filename, mimetype) {
  const { data, error } = await supabase.storage
    .from('receipts')
    .upload(filename, buffer, {
      contentType: mimetype,
      upsert: false,
    });

  if (error) throw error;

  const { data: urlData } = supabase.storage
    .from('receipts')
    .getPublicUrl(data.path);

  return { path: data.path, publicUrl: urlData.publicUrl };
}

// Fallback for store compatibility if needed
export const ensureStorage = () => { }; 
