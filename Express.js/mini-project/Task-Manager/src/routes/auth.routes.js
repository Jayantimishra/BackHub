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

router.get('/user', (req, res) => {
  // Get logged-in user details
  if (req.session.user) {

    return res.json({ username: req.session.user.username });
  }

    return res.status(401).json({ error: "User not logged in" });
});
    return res.status(500).json({ error: "Logout failed" });
    res.status(200).send("User logged out");
   




export default router;