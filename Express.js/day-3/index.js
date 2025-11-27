import express from 'express';
import cookieParser from 'cookie-parser';


const app = express();
app.use(cookieParser());


app.get('/', (req, res) => {
  // Set a cookie named "name" with the value "JM"
  res.cookie("name", "JM")
  res.send('Hello, World!');
});

app.get('/show-cookie', (req, res) => {
  console.log('Cookies: ', req.cookies);
  res.send({
    id: 1,
    name: 'JM',
    price: 3000
  });
})

app.listen(3050, () => {
  console.log(`Server is running on http://localhost:3050`);
});
