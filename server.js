const express = require('express');
const cors = require('cors');
require('dotenv').config();
const weatherData = require('./data/weather.json');

// create a Forecast class
class Forecast{
  constructor(lat,lon,searchQuery){
    this.lat = lat;
    this.lon = lon;
    this.searchQuery = searchQuery;
  }

  // create a method to get the data
  getWeather(){
    const searchQueryToLower = this.searchQuery.toLowerCase();
    const city = this.dataObject.find(city =>{
      return (
        city.city_name.toLowerCase() === searchQueryToLower
      );
    });

    const data = {
      city_name: city.city_name,
      lat: city.lat,
      lon: city.lon,
      country_code: city.country_code,
      timezone: city.timezone,
      forecast_dates: city.data.map((d) => {
          let weather_obj = {
              date: d.valid_date,
              max_temp: d.max_temp,
              min_temp: d.min_temp,
              temp_now: d.temp,
              description: d.weather.description
          };
          return weather_obj;
      })
  }
  return data
  }
}

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

