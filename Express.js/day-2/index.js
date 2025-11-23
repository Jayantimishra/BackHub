import express from 'express';
import userRouter from './routers/user.routes.js';

const app = express();

const PORT = 3080;

app.use(userRouter);

app.get("/", (req, res)=>{
    res.send("Welcome to our Server")
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});