import express from 'express';
const router = express.Router();


// dashboard 
router.get('/dashboard', (req, res) => {
    res.status(200).send({
        message: "Welcome to the dashboard"
    });
});


export default router;
