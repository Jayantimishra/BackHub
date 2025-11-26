import express from 'express';

const app = express();


app.get('/', (req, res) => {
  // Set a cookie named "name" with the value "JM"
  res.cookie("name", "JM")
  res.send('Hello, World!');
});

app.listen(3050, () => {
  console.log(`Server is running on http://localhost:3050`);
});
