import express from 'express';
import { generateToken } from '../utils/token-utils.js';
const router = express.Router();

// generate-token
router.get('/generate-token', (req, res) => {
    const token = generateToken();

    res.status(200).send({
        messzge: "Token generated successfully",
        token: token
    })
});

// home route
router.get('/', (req, res) => {
    res.status(200).send({
        message: "Welcome to the home page"
    });
});



export default router;
