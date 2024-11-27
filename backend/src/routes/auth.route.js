import express from 'express';
import {
  loginController,
  logoutController,
  signupController,
  updateProfile,
} from '../controllers/auth.controllers.js';
import { protectRoute } from '../middleware/auth.middleware.js';

const router = express.Router();

router.post('/signup', signupController);

router.post('/login', loginController);

router.post('/logout', logoutController);

router.put('/update-profile', protectRoute, updateProfile);

export default router;
