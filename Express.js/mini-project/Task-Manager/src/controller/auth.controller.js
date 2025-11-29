export const Login = (req, res) => {
  // Handle user login
  const { username } = req.body;

  if (!username) {
    return res.status(400).json({ error: "Username is required" });
  }
  req.session.user = { username };

  res.cookie("username", username, {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24
  });
  res.json({ message: "User logged in", username });
};



export const Logout = (req, res) => {
  // Handle user logout
  res.clearCookie("username");
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ error: "Logout failed" });
    } 
      return res.send("User logged out");
    
  });
};
