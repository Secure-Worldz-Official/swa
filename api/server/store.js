import { createClient } from '@supabase/supabase-js';
import { SUPABASE_URL, SUPABASE_KEY } from './config.js';

if (!SUPABASE_URL || !SUPABASE_KEY) {
  console.warn('⚠️ Supabase URL or Key missing. Database features will fail.');
}

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

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
  const { data, error } = await supabase.from('users').insert([userData]).select();
  if (error) throw error;
  return data[0];
}

export async function createOrder(orderData) {
  const { data, error } = await supabase.from('orders').insert([orderData]).select();
  if (error) throw error;
  return data[0];
}

export async function approveOrder(orderId) {
  const { data, error } = await supabase
    .from('orders')
    .update({ status: 'approved', approved_at: new Date() })
    .eq('order_id', orderId)
    .select();
  if (error) throw error;
  return data[0];
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

// Fallback for store compatibility if needed
export const ensureStorage = () => { }; 
