export const Login = (req, res) => {
  // Debug log
  console.log("BODY RECEIVED →", req.body);

  // req.body undefined ho sakta hai, isliye safe destructuring:
  const { username } = req.body ?? {};

  if (!username) {
    return res.status(400).json({
      error: "Username is required",
      receivedBody: req.body,      // debugging ke liye wapas bhej rahe
    });
  }

  req.session.user = { username };

  res.cookie("username", username, {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24,
  });

  return res.json({ message: "User logged in", username });
};

export const Logout = (req, res) => {
  res.clearCookie("username");
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ error: "Logout failed" });
    }
    return res.send("User logged out");
  });
};
