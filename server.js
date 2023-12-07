const express = require('express');
const cors = require('cors');
require('dotenv').config();
const weatherData = require('./data/weather.json');

const app = express();
app.use(cors());
const port = process.env.port || 3000;
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.get('/weather', (req, res) => {
  let lat = req.query.lat;
  let lon = req.query.lon;
  let searchQuery = req.query.searchQuery;

  if (
    lat == null || lon == null|| searchQuery == null ||
    lat == undefined || lon == undefined || searchQuery == undefined
  ){
    return res.status(400).json({error: "Please complete all the required information"})
  }

  

  res.send('This worked');
});

app.get("*", (req, res) => {
  res.status(404).send("Page Not Avaiable");
});

app.use((error, req, res, next) => {
  res.status(500).send(error.message);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

