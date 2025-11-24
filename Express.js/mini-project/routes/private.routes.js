import express from 'express';
const router = express.Router();
import authMiddleware from '../middleware/auth.middleware.js';



// dashboard 
router.get('/dashboard', authMiddleware, (req, res) => {
    res.status(200).send({
        message: `Welcome to the dashboard page, ${req.user.name}`
    });
});


export default router;
