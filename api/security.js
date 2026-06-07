import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { ADMIN_EMAIL, ADMIN_PASSWORD, JWT_SECRET } from './config.js';

const adminPasswordHash = process.env.ADMIN_PASSWORD_HASH || bcrypt.hashSync(ADMIN_PASSWORD, 10);

export function signAdminToken() {
  return jwt.sign(
    {
      role: 'admin',
      email: ADMIN_EMAIL,
    },
    JWT_SECRET,
    { expiresIn: '8h' },
  );
}

export function verifyAdminToken(token) {
  return jwt.verify(token, JWT_SECRET);
}

export function signUserToken({ userId }) {
  return jwt.sign(
    {
      role: 'user',
      userId,
    },
    JWT_SECRET,
    { expiresIn: '14d' },
  );
}

export function verifyUserToken(token) {
  return jwt.verify(token, JWT_SECRET);
}

export function signReceiptToken({ orderId, userId, scope }) {
  return jwt.sign(
    {
      orderId,
      userId,
      scope,
    },
    JWT_SECRET,
    { expiresIn: '2h' },
  );
}

export function verifyReceiptToken(token) {
  return jwt.verify(token, JWT_SECRET);
}

export function adminAuth(req, res, next) {
  const header = req.headers.authorization || '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : null;

  if (!token) {
    return res.status(401).json({ message: 'Admin access token required.' });
  }

  try {
    const payload = verifyAdminToken(token);
    if (payload.role !== 'admin') {
      return res.status(403).json({ message: 'Invalid admin token.' });
    }

    req.admin = payload;
    return next();
  } catch {
    return res.status(401).json({ message: 'Admin session expired. Please login again.' });
  }
}

export function userAuth(req, res, next) {
  const header = req.headers.authorization || '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : null;

  if (!token) {
    return res.status(401).json({ message: 'User access token required.' });
  }

  try {
    const payload = verifyUserToken(token);
    if (payload.role !== 'user') {
      return res.status(403).json({ message: 'Invalid user token.' });
    }

    req.user = payload;
    return next();
  } catch {
    return res.status(401).json({ message: 'User session expired. Please refresh the page.' });
  }
}

export function validateAdminCredentials(email, password) {
  const safeEmail = (email || '').trim().toLowerCase();
  const validEmail = safeEmail === ADMIN_EMAIL.toLowerCase();
  const validPassword = bcrypt.compareSync(password || '', adminPasswordHash);

  return validEmail && validPassword;
}
