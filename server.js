const express = require('express');
const app = express();
const port = 3000;
const weatherData = require('./data/weather.json');

app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.get('/weather', (req, res) => {
  res.send('Hello, Express!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

