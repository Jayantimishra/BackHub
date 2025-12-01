import { Router } from "express";
import { Login, Logout } from "../controller/auth.controller.js";

const router = Router();

router.post('/login', Login );

router.get('/logout', Logout );

router.get('/check', (req, res) => {
  // Check if user is logged in
  if (req.session.user) {
    return res.json({ loggedIn: true, username: req.session.user.username });
    }
    return res.json({ loggedIn: false });
});


export default router;