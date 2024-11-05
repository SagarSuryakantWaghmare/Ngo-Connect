import express from 'express';
import { signupValidation, loginValidation } from '../middlewares/authvalidation.js';
import { login } from '../controllers/authcontroller.js'; 
import {signup} from '../controllers/authcontroller.js'; 

const router = express.Router();

// Define your routes
router.post('/login', loginValidation, login); 
router.post('/signup', signupValidation, signup); 

export default router;