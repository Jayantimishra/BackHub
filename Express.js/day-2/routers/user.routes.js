import { Router } from "express";
const userRouter = Router();

userRouter.get("/users", (req, res) => {
    res.send("Welcome to our Users Page");
});

userRouter.get("/users/:id", (req, res) => {
    const userId = req.params.id;
    res.send(`User ID: ${userId}`);
});

userRouter.get("/users/:id/profile", (req, res) => {
    const userId = req.params.id;
    res.send(`Profile of User ID: ${userId}`);
});
export default userRouter;