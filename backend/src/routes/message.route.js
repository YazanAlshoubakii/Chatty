import express from 'express';
import { protectRoute } from '../middleware/auth.middleware.js';
import {
  getUsersForSidebar,
  getMessages,
  sendMessage,
} from '../controllers/message.controller.js';
import multer from 'multer';

const router = express.Router();

router.use(express.json({ limit: '100mb' }));

router.use(express.urlencoded({ limit: '100mb', extended: true }));

const upload = multer({
  limits: { fileSize: 100 * 1024 * 1024 }, // 100 MB file size limit
});

router.get('/users', protectRoute, getUsersForSidebar);
router.get('/:id', protectRoute, getMessages);

router.post('/send/:id', protectRoute, upload.single('file'), sendMessage);
export default router;
