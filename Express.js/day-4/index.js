import express from "express";
import session from "express-session";
import cookieParser from "cookie-parser";
const app = express();
const PORT = 3000;


app.use(session(
    {
        secret: 'mySecretKey',
        resave: false,
        saveUninitialized: false,
        cookie: { 
            maxAge: 1000 * 60 * 60 * 24  // 1 day
        } 
    }
));
app.use(cookieParser("JM"));

app.get("/", (req, res) => {
    console.log(req.session);
    console.log(req.session.id);

  res.send("Hello, World!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
