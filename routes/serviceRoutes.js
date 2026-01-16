import express from 'express';
import {
  getServices,
  getService,
  getServiceBySlug,
  createService,
  updateService,
  deleteService
} from '../controllers/serviceController.js';
import { protect, authorize } from '../middleware/auth.js';

const router = express.Router();

// Public routes
router.get('/', getServices);
router.get('/:id', getService);
router.get('/slug/:slug', getServiceBySlug);

// Protected routes (admin only)
router.post('/', protect, authorize('admin'), createService);
router.put('/:id', protect, authorize('admin'), updateService);
router.delete('/:id', protect, authorize('admin'), deleteService);

export default router;
