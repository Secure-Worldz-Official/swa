import path from 'node:path';
import { fileURLToPath } from 'node:url';
import express from 'express';
import helmet from 'helmet';
import compression from 'compression';
import cors from 'cors';
import multer from 'multer';
import { APP_NAME, MAX_UPLOAD_BYTES } from './config.js';
import {
    readUsers,
    readOrders,
    registerUser,
    createOrder,
    approveOrder,
    getAdminStats,
    ensureStorage
} from './store.js';
import {
    adminAuth,
    signAdminToken,
    signReceiptToken,
    signUserToken,
    userAuth,
    validateAdminCredentials,
} from './security.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(helmet({
    contentSecurityPolicy: false,
}));
app.use(compression());
app.use(cors());
app.use(express.json());

// Routes
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', app: APP_NAME });
});

// Admin Auth
app.post('/api/auth/admin/login', (req, res) => {
    const { email, password } = req.body;
    if (validateAdminCredentials(email, password)) {
        const token = signAdminToken();
        return res.json({ token });
    }
    res.status(401).json({ message: 'Invalid credentials' });
});

// User Auth/Registration
app.post('/api/auth/register', async (req, res) => {
    const { name, email, phone } = req.body;
    if (!name || !email) {
        return res.status(400).json({ message: 'Name and email are required' });
    }

    const user_id = Math.random().toString(36).substring(2, 9);
    try {
        await registerUser({ user_id, name, email, phone, created_at: new Date() });
        const token = signUserToken({ userId: user_id });
        res.json({ token, userId: user_id });
    } catch (err) {
        console.error('Registration Error:', err);
        res.status(500).json({ message: 'Registration failed', error: err.message });
    }
});

// Protected Admin Stats
app.get('/api/admin/stats', adminAuth, async (req, res) => {
    try {
        const stats = await getAdminStats();
        res.json(stats);
    } catch (err) {
        res.status(500).json({ message: 'Could not fetch stats' });
    }
});

// List students for admin
app.get('/api/admin/users', adminAuth, async (req, res) => {
    try {
        const users = await readUsers();
        const orders = await readOrders();
        const students = users.map(u => {
            const order = orders.find(o => o.user_id === u.user_id);
            return { ...u, order };
        });
        res.json(students);
    } catch (err) {
        res.status(500).json({ message: 'Could not fetch users' });
    }
});

// Store approve
app.post('/api/admin/approve', adminAuth, async (req, res) => {
    const { orderId } = req.body;
    try {
        await approveOrder(orderId);
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ message: 'Approval failed' });
    }
});

// Upload handling
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, 'uploads'));
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    }
});

const upload = multer({
    storage,
    limits: { fileSize: MAX_UPLOAD_BYTES }
});

app.post('/api/upload', userAuth, upload.single('receipt'), async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: 'No file uploaded' });
    }

    const order_id = Math.random().toString(36).substring(2, 12).toUpperCase();
    const receiptToken = signReceiptToken({
        orderId: order_id,
        userId: req.user.userId,
        scope: 'verification'
    });

    try {
        await createOrder({
            order_id,
            user_id: req.user.userId,
            filename: req.file.filename,
            status: 'pending',
            created_at: new Date()
        });
        res.json({ orderId: order_id, receiptToken });
    } catch (err) {
        console.error('Upload Error:', err);
        res.status(500).json({ message: 'Order creation failed' });
    }
});

// Only serve static files if NOT on Vercel
if (!process.env.VERCEL) {
    const distPath = path.join(__dirname, '../dist');
    app.use(express.static(distPath));

    app.get(/^(?!\/api).*/, (req, res) => {
        res.sendFile(path.join(distPath, 'index.html'));
    });
}

if (process.env.NODE_ENV !== 'production' || !process.env.VERCEL) {
    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`);
    });
}

export default app;
