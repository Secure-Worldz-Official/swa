import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const serverDir = path.dirname(fileURLToPath(import.meta.url));

export const dataDir = path.join(serverDir, 'data');
export const uploadDir = path.join(serverDir, 'uploads');
export const dbPath = path.join(dataDir, 'db.json');

function normalizeDb(db) {
  const source = db && typeof db === 'object' && !Array.isArray(db) ? db : {};
  const payments = Array.isArray(source.payments)
    ? source.payments
    : Array.isArray(source.orders)
      ? source.orders
      : [];

  return {
    users: Array.isArray(source.users) ? source.users : [],
    payments,
    orders: payments,
    notifications: Array.isArray(source.notifications) ? source.notifications : [],
    auditLog: Array.isArray(source.auditLog) ? source.auditLog : [],
  };
}

export function ensureStorage() {
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }

  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }

  if (!fs.existsSync(dbPath)) {
    fs.writeFileSync(dbPath, JSON.stringify(normalizeDb(), null, 2), 'utf8');
  }
}

export function readDb() {
  ensureStorage();
  const raw = fs.readFileSync(dbPath, 'utf8');
  return normalizeDb(JSON.parse(raw));
}

export function writeDb(db) {
  ensureStorage();
  fs.writeFileSync(dbPath, JSON.stringify(normalizeDb(db), null, 2), 'utf8');
}

export function updateDb(mutator) {
  const db = readDb();
  const result = mutator(db);
  writeDb(db);
  return result;
}
