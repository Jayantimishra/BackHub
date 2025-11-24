import express from 'express';
const router = express.Router();

// generate-token
router.get('/generate-token', (req, res) => {
    const token = "token";

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
