import express from 'express';
import {
  checkAuth,
  loginController,
  logoutController,
  signupController,
  updateProfile,
} from '../controllers/auth.controllers.js';
import { protectRoute } from '../middleware/auth.middleware.js';
import multer from 'multer';

const router = express.Router();

// Middleware to extend JSON and URL-encoded payload size
router.use(express.json({ limit: '100mb' })); // Extending JSON payload size
router.use(express.urlencoded({ limit: '100mb', extended: true })); // Extending URL-encoded payload size

// Multer configuration for file uploads
const upload = multer({
  limits: { fileSize: 100 * 1024 * 1024 }, // 100 MB file size limit
});

// Routes
router.post('/signup', signupController);

router.post('/login', loginController);

router.post('/logout', logoutController);

router.put(
  '/update-profile',
  protectRoute,
  upload.single('file'), // Handling file uploads with multer
  updateProfile
);

router.get('/check', protectRoute, checkAuth);

export default router;
