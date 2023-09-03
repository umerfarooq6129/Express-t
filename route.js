const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.get('/about', (req, res) => {
  res.send('about page!');
});
app.get('/contact', (req, res) => {
  res.send('contact page');
});
app.get('*', (req, res) => {
  res.status(404).send("page not found");
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
