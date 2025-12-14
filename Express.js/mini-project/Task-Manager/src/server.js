// src/server.js
import express from 'express';
import cookieParser from 'cookie-parser';
import session from 'express-session';

import authRoute from './routes/auth.routes.js';
import taskRoute from './routes/task.routes.js';

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    secure: false,
    maxAge: 1000 * 60 * 60 * 24,
  },
}));

app.get('/', (req, res) => {
  res.send('Welcome to the Task Manager API');
});

app.use('/auth', authRoute);
app.use('/task', taskRoute);



app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


hello 