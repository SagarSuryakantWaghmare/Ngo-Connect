// routes/volunteerRoutes.js
import express from 'express';
import { registerVolunteer, loginVolunteer } from '../controllers/volunteerController.js';

const router = express.Router();


router.post('/register', registerVolunteer);


router.post('/login', loginVolunteer);

export default router;
